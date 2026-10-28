import { z } from 'astro/zod';

export const snippetTagLabels = {
	popover: 'Popover',
	group: 'Group',
	list: 'List',
	tabs: 'Tabs',
} as const satisfies Record<string, string>;

export type SnippetTag = keyof typeof snippetTagLabels;

const snippetTagIds = Object.keys(snippetTagLabels) as [SnippetTag, ...SnippetTag[]];

export const snippetTagSchema = z.enum(snippetTagIds);
