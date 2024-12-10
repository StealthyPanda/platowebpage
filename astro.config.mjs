import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Plato.ai',
			social: {
				github: 'https://github.com/StealthyPanda/plato',
				linkedin: 'https://www.linkedin.com/in/shaikmohammedtouseef/',
			},
			sidebar: [
				{
					label: 'Setup',
					autogenerate: { directory: 'setup' },
				},
				{
					label: 'Usage',
					items : [
						{ label: 'The Basics', slug: 'usage/basic' },
						{ label: 'Threads', slug: 'usage/threads' },
						{ label: 'Info Cards', slug: 'usage/additional_info' },
						{ label: 'Sharing', slug: 'usage/sharing' },
					]
				},
			],
		}),
	],
	site: 'https://stealthypanda.github.io',
	base: 'platowebpage',
});
