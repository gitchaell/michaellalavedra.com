import { api } from '@/trpc/server'
import { ModeToggle } from '@/components/blocks/ModeToggle'

export default async function Home() {
	const hello = await api.post.hello.query({ text: 'from my portfolio' })

	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
				<h1 className='text-5xl font-extrabold tracking-tight sm:text-[5rem]'>
					{/* <span className='text-[hsl(0,100%,100%)]'>Michaell Alavedra</span> */}
					Michaell Alavedra
				</h1>
				<div className='flex flex-col items-center gap-2'>
					<p className='text-2xl'>
						{hello ? hello.greeting : 'Loading tRPC query...'}
					</p>
				</div>

				<ModeToggle />
			</div>
		</main>
	)
}
