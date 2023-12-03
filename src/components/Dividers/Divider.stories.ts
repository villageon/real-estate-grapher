import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta = {
  title: 'Components/Divider',
  component: Divider
}

export default meta

type Story = StoryObj<typeof Divider>

export const divider: Story = {
  args: {}
}
