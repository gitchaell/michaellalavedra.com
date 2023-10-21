/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	arrowParens: 'avoid',
	bracketSameLine: true,
	bracketSpacing: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'none',
	singleAttributePerLine: false,
	htmlWhitespaceSensitivity: 'css',
	proseWrap: 'preserve',
	printWidth: 80,
	useTabs: true,
	tabWidth: 2
}

export default config
