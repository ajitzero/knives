import { resolveSnippetVariants, type SnippetVariants } from './variants';

const htmlSources = import.meta.glob('../content/snippets/**/*.html', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

const cssSources = import.meta.glob('../content/snippets/**/*.css', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

const jsSources = import.meta.glob('../content/snippets/**/snippet.js', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

const mdSources = import.meta.glob('../content/snippets/**/*.md', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

function sourcePath(id: string, file: string) {
	return `../content/snippets/${id}/${file}`;
}

/** Direct child CSS files of a snippet, as stems. Variant CSS never lives in a subdirectory. */
function cssStems(id: string): string[] {
	const prefix = `../content/snippets/${id}/`;

	return Object.keys(cssSources)
		.filter((path) => path.startsWith(prefix))
		.map((path) => path.slice(prefix.length))
		.filter((file) => /^[^/]+\.css$/.test(file))
		.map((file) => file.slice(0, -'.css'.length));
}

function variantMarkdown(id: string, variantId: string) {
	// README.md is the snippet's own documentation, never a variant source.
	if (variantId.toLowerCase() === 'readme') {
		return undefined;
	}

	return mdSources[sourcePath(id, `${variantId}.md`)];
}

export function getSnippetSources(id: string, declaredVariants?: SnippetVariants) {
	const snippetHtml = htmlSources[sourcePath(id, 'snippet.html')];

	const resolution = resolveSnippetVariants(id, declaredVariants, cssStems(id));

	const variants = resolution.variants.map((variant) => {
		const css = cssSources[sourcePath(id, `${variant.id}.css`)];
		const html = htmlSources[sourcePath(id, `${variant.id}.html`)] ?? snippetHtml;

		if (html === undefined) {
			throw new Error(
				`Snippet "${id}" variant "${variant.id}" has no HTML file; expected src/content/snippets/${id}/${variant.id}.html or src/content/snippets/${id}/snippet.html.`,
			);
		}

		if (css === undefined) {
			throw new Error(
				`Snippet "${id}" variant "${variant.id}" has no CSS file; expected src/content/snippets/${id}/${variant.id}.css.`,
			);
		}

		return { ...variant, css, html, md: variantMarkdown(id, variant.id) };
	});

	const [first] = variants;

	if (first === undefined) {
		throw new Error(`Snippet "${id}" must include at least one demo CSS file.`);
	}

	return {
		html: first.html,
		css: first.css,
		js: jsSources[sourcePath(id, 'snippet.js')],
		md: mdSources[sourcePath(id, 'snippet.md')],
		variants,
		legacy: resolution.legacy,
	};
}
