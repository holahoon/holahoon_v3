import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Roboto Mono Variable', defaultTheme.fontFamily.mono],
				sans: ['Open Sans Variable', defaultTheme.fontFamily.sans]
			},
			screens: { full: '1024px' }
		}
	},
	plugins: []
}
