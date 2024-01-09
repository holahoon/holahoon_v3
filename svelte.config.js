import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex({ mdsvexOptions })],
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$styles: 'src/styles',
			$config: 'src/config'
		}
	},
	extensions: ['.svelte', 'mdsvex']
}

export default config
