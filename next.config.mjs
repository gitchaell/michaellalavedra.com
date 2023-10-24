/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs')
import withPWA from 'next-pwa/'

/** @type {import("next").NextConfig} */
const config = {
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US'
	}
}

export default withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development'
})(config)
