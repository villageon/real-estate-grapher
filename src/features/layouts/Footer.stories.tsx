import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { bgColor } from '@/utils/clients/themeClient'

const meta: Meta = {
  title: 'Features/Layouts',
  component: Footer,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: bgColor.white,
          height: '100vh'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Footer>

export const footer: Story = {
  args: {}
}
