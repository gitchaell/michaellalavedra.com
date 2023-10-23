import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'UI/Button',
	component: Button,
	render: args => {
		return <Button {...args}>Label</Button>
	},
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		variant: {
			control: 'radio',
			options: [
				'default',
				'destructive',
				'outline',
				'secondary',
				'ghost',
				'link'
			],
			defaultValue: 'default'
		},
		size: {
			control: 'radio',
			options: ['default', 'sm', 'lg', 'icon'],
			defaultValue: 'default'
		}
	},
	args: {
		variant: 'default',
		size: 'default'
	}
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		variant: 'default',
		size: 'default'
	}
}

export const Destructive: Story = {
	args: {
		variant: 'destructive',
		size: 'default'
	}
}

export const Outline: Story = {
	args: {
		variant: 'outline',
		size: 'default'
	}
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		size: 'default'
	}
}

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: 'default'
	}
}

export const Link: Story = {
	args: {
		variant: 'link',
		size: 'default'
	}
}
