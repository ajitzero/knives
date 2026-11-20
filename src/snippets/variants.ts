import { z } from 'astro/zod';

/**
 * A variant id is a CSS file stem: no path separators, no leading punctuation.
 * The optional `.css` suffix is stripped before this check runs.
 */
const variantIdPattern = /^[A-Za-z0-9][A-Za-z0-9_-]*$/;

const variantIdSchema = z
	.string()
	.trim()
	.transform((value) => (value.endsWith('.css') ? value.slice(0, -'.css'.length) : value))
	.refine((value) => variantIdPattern.test(value), {
		message:
			'Variant id must be a CSS file stem (letters, digits, dashes or underscores, no path separators).',
	});

export const snippetVariantSchema = z.union([
	variantIdSchema,
	z.object({
		id: variantIdSchema,
		label: z.string().trim().min(1).optional(),
		isNew: z.boolean().optional(),
	}),
]);

export type SnippetVariantEntry = z.infer<typeof snippetVariantSchema>;
export type SnippetVariants = SnippetVariantEntry[];

export interface ResolvedSnippetVariant {
	id: string;
	label: string;
	isNew: boolean;
}

export interface SnippetVariantResolution {
	variants: ResolvedSnippetVariant[];
	/** No `variants` frontmatter and a single CSS file: render the original single-demo page. */
	legacy: boolean;
}

export function prettifyVariantLabel(id: string): string {
	if (id === 'snippet') {
		return 'Default';
	}

	return id
		.split(/[-_]+/)
		.filter(Boolean)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function resolveSnippetVariants(
	snippetId: string,
	declared: SnippetVariants | undefined,
	cssStems: readonly string[],
): SnippetVariantResolution {
	const location = `src/content/snippets/${snippetId}`;

	if (declared === undefined) {
		if (cssStems.length === 0) {
			throw new Error(
				`Snippet "${snippetId}" needs at least one CSS file; expected ${location}/snippet.css.`,
			);
		}

		const variants = [...cssStems]
			.sort((a, b) => a.localeCompare(b))
			.map((id) => ({ id, label: prettifyVariantLabel(id), isNew: false }));

		return { variants, legacy: variants.length === 1 };
	}

	if (declared.length === 0) {
		throw new Error(
			`Snippet "${snippetId}" has an empty variants list; list at least one CSS file from ${location}/ in ${location}/README.md.`,
		);
	}

	const available = new Set(cssStems);
	const seen = new Set<string>();

	const variants = declared.map((entry) => {
		const { id, label, isNew } = typeof entry === 'string' ? { id: entry } : entry;

		if (seen.has(id)) {
			throw new Error(
				`Snippet "${snippetId}" lists variant "${id}" twice in ${location}/README.md; each variant id must be unique.`,
			);
		}
		seen.add(id);

		if (!available.has(id)) {
			throw new Error(
				`Snippet "${snippetId}" variant "${id}" has no CSS file; expected ${location}/${id}.css.`,
			);
		}

		return { id, label: label ?? prettifyVariantLabel(id), isNew: isNew ?? false };
	});

	for (const stem of cssStems) {
		if (!seen.has(stem)) {
			throw new Error(
				`Snippet "${snippetId}" has an unlisted CSS file ${location}/${stem}.css; add "${stem}" to variants in ${location}/README.md or remove the file.`,
			);
		}
	}

	return { variants, legacy: false };
}
