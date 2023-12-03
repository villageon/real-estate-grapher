import type { Meta, StoryObj } from '@storybook/react'
import { InputSelect } from './InputSelect'
import type { OptionProps } from '@/utils/types/form'
import { bgColor } from '@/utils/clients/themeClient'
import IconMap from '@/utils/assets/icon_map.svg'
import IconCalendar from '@/utils/assets/icon_calendar.svg'
import { PREFECTURES_OPTIONS, YEAR_OPTIONS } from '@/utils/constants'

const meta = {
  title: 'Forms/InputSelect',
  component: InputSelect,
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
} satisfies Meta<typeof InputSelect>

export default meta

type Story = StoryObj<typeof InputSelect>

const yearOptions: OptionProps[] = YEAR_OPTIONS
const prefectureOptions: OptionProps[] = PREFECTURES_OPTIONS

export const InputSelectYear: Story = {
  args: {
    label: '年度',
    icon: <IconMap />,
    options: yearOptions,
    defaultValue: '2021年',
    value: '2021',
    disabled: false
  }
}

export const InputSelectPrefecture: Story = {
  args: {
    label: '場所',
    icon: <IconCalendar />,
    options: prefectureOptions,
    defaultValue: '北海道',
    value: '1',
    disabled: false
  }
}
