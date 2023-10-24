import '@/styles/globals.css'

import { type Metadata } from 'next'
import { headers } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'
import { TRPCReactProvider } from '@/trpc/react'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'

export const metadata: Metadata = {
	title: 'Michaell Alavedra',
	description: 'Software Development Engineer based in Santa Cruz Bolivia',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
	authors: {
		name: '@gitchaell',
		url: 'https://github.com/gitchaell'
	},
	themeColor: '#000000',
	openGraph: {
		title: 'Michaell Alavedra',
		description: 'Software Development Engineer based in Santa Cruz Bolivia',
		url: 'https://michaellalavedra.com',
		siteName: 'Michaell Alavedra',
		images: [
			{
				url: 'https://michaellalavedra.com/og.png',
				width: 800,
				height: 600,
				alt: 'Cover image from Website of Michaell Alavedra'
			},
			{
				url: 'https://michaellalavedra.com/og-alt.png',
				width: 1800,
				height: 1600,
				alt: 'Alternative cover image from Website of Michaell Alavedra'
			}
		],
		locale: 'en_US',
		type: 'website'
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel='manifest' href='/manifest.json' />
				<link rel='apple-touch-icon' href='/icon512_rounded.png'></link>
				<meta name='theme-color' content='#fff' />
			</head>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}>
				<TRPCReactProvider headers={headers()}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						{children}
						<Analytics />
					</ThemeProvider>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
