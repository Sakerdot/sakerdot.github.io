import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
		// See https://kit.svelte.dev/docs#configuration for configuration values.
		// These 3 fields will remove all client side JavaScript from the generated
		// static files. If some of this functionality is required, remove these lines.
		hydrate: false,
		router: false,
		serviceWorker: {
			register: false,
		},

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
