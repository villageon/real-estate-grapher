import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'

const meta: Meta = {
  title: 'Features/Components',
  component: Form,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '80vh'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Form>

export const form: Story = {
  args: {}
}
