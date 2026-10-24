import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const snippets = await getCollection('snippets');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: snippets.map((snippet) => ({
			...snippet.data,
			link: `/snippets/${snippet.id}/`,
		})),
	});
}
