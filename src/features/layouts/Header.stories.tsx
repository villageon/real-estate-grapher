import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { bgColor } from '@/utils/clients/themeClient'

const meta: Meta = {
  title: 'Features/Layout',
  component: Header,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: bgColor.black,
          height: '100vh'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Header>

export const header: Story = {
  args: {}
}
