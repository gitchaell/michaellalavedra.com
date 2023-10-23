import { Inter as FontSans } from 'next/font/google'

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	fallback: ['ui-sans-serif', 'system-ui'],
	adjustFontFallback: true,
	preload: true
})
