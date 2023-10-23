import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const developerRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ name: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.name}`
			}
		}),

	// create: publicProcedure
	// 	.input(z.object({ name: z.string().min(1) }))
	// 	.mutation(async ({ ctx, input }) => {
	// 		// simulate a slow db call
	// 		await new Promise(resolve => setTimeout(resolve, 1000))

	// 		return ctx.db.post.create({
	// 			data: {
	// 				name: input.name
	// 			}
	// 		})
	// 	}),

	findDeveloper: publicProcedure
		.input(z.object({ name: z.string() }))
		.query(({ ctx, input }) => {
			return ctx.db.developer.findFirstOrThrow({
				where: {
					name: input.name
				}
			})
		})
})
