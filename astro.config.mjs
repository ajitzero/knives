// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://knives.ajitpanigrahi.com',
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light-high-contrast',
				dark: 'github-dark-high-contrast',
			},
		},
	},
	integrations: [mdx(), sitemap()],
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
});
