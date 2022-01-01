import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// If a client side is needed remove this line
	hydrate: false,

	extensions: ['.svelte', '.md'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
		}),
	],

	kit: {
		adapter: adapter(),

		vite: {
			ssr: {
			  noExternal: [/^@material\//, /^@smui(?:-extra)?\//],
			},
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;