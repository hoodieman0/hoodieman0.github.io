import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({ themes: ['nord'], langs: ['csharp'] });

const mdsvexConfig = {
    extensions: ['.md', '.svx'],
	highlight: {
		highlighter: (code, lang) => {
        	  const html = highlighter.codeToHtml(code, { lang: lang ?? 'text', theme: 'nord' });
  				// escape curly braces so Svelte doesn't treat them as template expressions
  			return html.replace(/\{/g, '&lbrace;').replace(/\}/g, '&rbrace;');
      	}
	}
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
