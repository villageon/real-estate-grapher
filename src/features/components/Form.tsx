import styled from '@emotion/styled'
import { bgColor } from '@/utils/clients/themeClient'
import { BaseText } from '@/utils/themes'
import { Button } from '@/components/Buttons'
import { Divider } from '@/components/Dividers'
import { InputRadio, InputSelect } from '@/components/Forms'
import {
  DISPLAY_TYPE_OPTIONS,
  PREFECTURES_OPTIONS,
  YEAR_OPTIONS
} from '@/utils/constants'
import IconMap from '@/utils/assets/icon_map.svg'
import IconCalendar from '@/utils/assets/icon_calendar.svg'
import IconShapes from '@/utils/assets/icon_shapes.svg'

const FormContainer = styled('div')`
  background-color: ${bgColor.whiteGray};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 24px;
  width: 360px;
`

const FormWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Form = () => {
  const onClickDownload = () => {
    console.log('ダウンロードしました')
  }
  return (
    <FormContainer>
      <FormWrapper>
        <BaseText className="-large">表示内容を選択</BaseText>
        <Divider />
        <InputSelect
          label="年度"
          icon={<IconMap />}
          options={YEAR_OPTIONS}
          defaultValue="2021年"
          value="2021"
        />
        <Divider />
        <InputSelect
          label="場所"
          icon={<IconCalendar />}
          options={PREFECTURES_OPTIONS}
          defaultValue="東京都"
          value="13"
        />
        <Divider />
        <InputRadio
          label="種類"
          icon={<IconShapes />}
          options={DISPLAY_TYPE_OPTIONS}
          value="1"
        />
      </FormWrapper>
      <Button onClick={onClickDownload}>データをダウンロード</Button>
    </FormContainer>
  )
}
