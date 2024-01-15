import { error } from '@sveltejs/kit'
import type { Resume } from '$lib/types/contents/types'

export async function load() {
	try {
		// dynamic import needs to have template literals 👀
		const name = 'resume'
		const resume = await import(`../../../contents/resume/${name}.md`)

		return {
			content: resume.default,
			meta: resume.metadata
		} as Resume
	} catch (e) {
		throw error(404, `Could not find resume.md`)
	}
}
