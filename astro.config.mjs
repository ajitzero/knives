// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://knives.ajitpanigrahi.com',
	integrations: [mdx(), sitemap()],
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
});
