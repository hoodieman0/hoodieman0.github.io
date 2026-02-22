import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const mdsvexConfig = {
    extensions: ['.md', '.svx']
};

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: 
		[ vitePreprocess(), mdsvex(mdsvexConfig) ],
	extensions: ['.svelte', '.md', '.svx'],

	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				throw new Error(message);
			}
		},
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),


		paths: {
			base: ''
		},

		alias: {
			$content: './src/content'
		}
	}
};

export default config;
