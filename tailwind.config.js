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
			screens: { full: '1024px' },
			colors: {
				background: 'hsl(var(--background))',
				border: 'hsl(var(--border))',
				foreground: 'hsl(var(--foreground))',
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				ring: 'hsl(var(--ring))',
				link: 'hsl(var(--link))'
			},
			boxShadow: {
				nav: '0px 1px 6px 0px hsl(var(--accent))'
			}
		}
	},
	darkMode: 'class',
	plugins: []
}
