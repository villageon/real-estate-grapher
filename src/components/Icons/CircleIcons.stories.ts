import type { Meta, StoryObj } from '@storybook/react'
import { CircleIcon } from './CircleIcons'

const meta: Meta = {
  title: 'Components/Icons',
  component: CircleIcon
}

export default meta

type Story = StoryObj<typeof CircleIcon>

export const circleIcon: Story = {
  args: {}
}
