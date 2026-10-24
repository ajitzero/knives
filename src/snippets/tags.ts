import { z } from 'astro/zod';

export const snippetTagLabels = {
	dropdown: 'Dropdown',
	group: 'Group',
	button: 'Button',
} as const satisfies Record<string, string>;

export type SnippetTag = keyof typeof snippetTagLabels;

const snippetTagIds = Object.keys(snippetTagLabels) as [SnippetTag, ...SnippetTag[]];

export const snippetTagSchema = z.enum(snippetTagIds);
