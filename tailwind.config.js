import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						code: false,
						'code::before': false,
						'code::after': false,
						h2: {
							'margin-top': '1.5em',
							'margin-bottom': '0.5em'
						},
						h3: {
							'margin-bottom': '0.5em'
						},
						ul: {
							'padding-left': '1rem'
						},
						li: {
							margin: '0.4em 0',
							'line-height': 1.4,
							color: 'hsl(var(--foreground))'
						},
						p: {
							color: 'hsl(var(--foreground))'
						},
						hr: {
							'margin-bottom': '1em'
						}
					}
				}
			},
			fontFamily: {
				mono: ['Roboto Mono Variable', defaultTheme.fontFamily.mono],
				sans: ['inter', defaultTheme.fontFamily.sans]
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
	plugins: [require('@tailwindcss/typography')]
}
