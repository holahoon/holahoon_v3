import { render, screen } from '@testing-library/svelte'
import ScreenReader from '$lib/components/screen-reader.svelte'

describe('Screen-reader component by test-id', () => {
	render(ScreenReader)
	// for some reason, testing-library can't find it by role.
	// const readOnly = screen.getByRole('span', { name: /Screen reader/i, hidden: true })
	const readOnly = screen.getByTestId(/hidden screen reader/i)

	it('should render', () => {
		expect(readOnly).toBeInTheDocument()
	})
})
