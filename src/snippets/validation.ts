export function assertSnippetDescription(entry: { id: string; body?: string }) {
	if (!entry.body?.trim()) {
		throw new Error(`Snippet "${entry.id}" must include a non-empty Markdown description.`);
	}
}
