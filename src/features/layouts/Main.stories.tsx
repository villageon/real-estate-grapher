import type { Meta, StoryObj } from '@storybook/react'
import { Main } from './Main'

const meta: Meta = {
  title: 'Features/Layouts',
  component: Main
}

export default meta

type Story = StoryObj<typeof Main>

export const main: Story = {
  args: {}
}
