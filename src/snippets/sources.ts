const htmlSources = import.meta.glob('../content/snippets/**/snippet.html', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

const cssSources = import.meta.glob('../content/snippets/**/snippet.css', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

const jsSources = import.meta.glob('../content/snippets/**/snippet.js', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

export function getSnippetSources(id: string) {
	const htmlPath = `../content/snippets/${id}/snippet.html`;
	const cssPath = `../content/snippets/${id}/snippet.css`;
	const jsPath = `../content/snippets/${id}/snippet.js`;
	const html = htmlSources[htmlPath];
	const css = cssSources[cssPath];
	const js = jsSources[jsPath];

	if (html === undefined || css === undefined) {
		throw new Error(`Snippet "${id}" must include snippet.html and snippet.css source files.`);
	}

	return { html, css, js };
}
