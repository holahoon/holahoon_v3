import { browser } from '$app/environment'
import { writable } from 'svelte/store'

type Theme = 'light' | 'dark' | 'system'

const COLOR_SCHEME = 'color-scheme'
const USER_THEME = 'user-theme'

export const theme = writable<Theme>(getLocalStorage())

function getLocalStorage(): Theme {
	if (!browser) return 'system'
	return (localStorage.getItem(USER_THEME) as Theme) ?? 'system'
}

function selectTheme(theme: Theme): Theme {
	switch (theme) {
		case 'system':
			return 'light'
		case 'light':
			return 'dark'
		case 'dark':
			return 'system'
		default:
			return 'system'
	}
}

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = selectTheme(currentTheme)

		document.documentElement.setAttribute(COLOR_SCHEME, newTheme)
		localStorage.setItem(USER_THEME, newTheme)

		return newTheme
	})
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme)
}
