import { browser } from '$app/environment'
import { writable } from 'svelte/store'

type Theme = 'light' | 'dark' | 'system'

const COLOR_SCHEME = 'color-scheme'
const USER_THEME = 'user-theme'

const userTheme = browser ? ((localStorage.getItem(USER_THEME) ?? 'system') as Theme) : 'system'
export const theme = writable<Theme>(userTheme)

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
