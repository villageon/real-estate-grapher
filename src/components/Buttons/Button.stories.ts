import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta = {
  title: 'Components/Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const button: Story = {
  args: {
    children: 'Primary Button',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    type: 'button',
    className: ''
  }
}
