import type { LayoutLoad } from './$types'

export const load: LayoutLoad = (event) => {
	const {
		url: { pathname }
	} = event

	return {
		pathname
	}
}
