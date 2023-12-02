import type { Meta, StoryObj } from '@storybook/react'
import { Main } from './Main'

const meta: Meta = {
  title: 'Features/Layout',
  component: Main
}

export default meta

type Story = StoryObj<typeof Main>

export const main: Story = {
  args: {}
}
