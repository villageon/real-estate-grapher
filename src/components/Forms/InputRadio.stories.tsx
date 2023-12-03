import type { Meta, StoryObj } from '@storybook/react'
import { InputRadio } from './InputRadio'
import type { OptionProps } from '@/utils/types/form'
import { bgColor } from '@/utils/clients/themeClient'
import IconShapes from '@/utils/assets/icon_shapes.svg'
import { DISPLAY_TYPE_OPTIONS } from '@/utils/constants'

const meta = {
  title: 'Forms/InputRadio',
  component: InputRadio,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: bgColor.lightGray,
          height: '100vh'
        }}
      >
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof InputRadio>

export default meta

type Story = StoryObj<typeof InputRadio>

const DisplayTypeOptions: OptionProps[] = DISPLAY_TYPE_OPTIONS

export const InputRadioDisplayType: Story = {
  args: {
    label: '種類',
    icon: <IconShapes />,
    options: DisplayTypeOptions,
    value: '1'
  }
}
