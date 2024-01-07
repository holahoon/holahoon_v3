import { render, screen } from '@testing-library/svelte'
import ThemeToggle from '$components/theme-toggle.svelte'

describe('Toggle-theme component', () => {
	render(ThemeToggle)
	const toggleTheme = screen.getByRole('button', { name: /Toggle theme/i })

	it('should render', () => {
		expect(toggleTheme).toBeInTheDocument()
	})

	it.todo('should render <Sun /> if theme is light')
	it.todo('should render <Moon /> if theme is dark')
	it.todo('should render <Laptop /> if theme is system')
})
