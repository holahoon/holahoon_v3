import { render } from '@testing-library/svelte'
import ThemeToggle from '$components/theme-toggle.svelte'

describe('Toggle-theme component', () => {
	const { debug } = render(ThemeToggle)

	it('should render', () => {
		debug()
	})

	it.todo('')
})
