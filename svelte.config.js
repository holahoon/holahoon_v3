import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import remarkGfm from 'remark-gfm'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkGfm]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		alias: {
			$contents: 'src/contents'
		}
	},
	extensions: ['.svelte', '.md']
}

export default config
