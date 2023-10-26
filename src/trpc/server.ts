import {
	createTRPCProxyClient,
	loggerLink,
	unstable_httpBatchStreamLink
} from '@trpc/client'
import { headers as NextHeaders } from 'next/headers'

import { type AppRouter } from '@/server/api/root'
import { getUrl, transformer } from './shared'

export const api = createTRPCProxyClient<AppRouter>({
	transformer,
	links: [
		loggerLink({
			enabled: option =>
				process.env.NODE_ENV === 'development' ||
				(option.direction === 'down' && option.result instanceof Error)
		}),
		unstable_httpBatchStreamLink({
			url: getUrl(),
			headers() {
				const heads = new Map(NextHeaders())
				heads.set('x-trpc-source', 'rsc')
				return Object.fromEntries(heads)
			}
		})
	]
})
