import { browser } from '$app/environment'
import { writable } from 'svelte/store'

type Theme = 'light' | 'dark'

const MATCH = '(prefers-color-scheme: light)'
const USER_THEME = 'theme'

export const theme = writable<Theme>(getLocalStorage())

function getSystemTheme(): Theme {
	if (!browser) return 'light'

	console.log(window.matchMedia(MATCH))
	const isLight = window.matchMedia(MATCH).matches
	const systemTheme = isLight ? 'light' : 'dark'
	return systemTheme
}

function getLocalStorage(): Theme {
	const theme = getSystemTheme()
	if (!browser) return theme

	const localStorageTheme = (localStorage.getItem(USER_THEME) as Theme) ?? theme
	setHtmlProperties(localStorageTheme)

	return localStorageTheme
}

function setHtmlProperties(theme: Theme) {
	document.documentElement.setAttribute('color-scheme', theme)
	document.documentElement.className = theme
}

function selectTheme(theme: Theme): Theme {
	return theme === 'light' ? 'dark' : 'light'
}

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = selectTheme(currentTheme)

		setHtmlProperties(newTheme)

		localStorage.setItem(USER_THEME, newTheme)

		return newTheme
	})
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme)
}
