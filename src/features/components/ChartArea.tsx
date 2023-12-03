import styled from '@emotion/styled'
import IconMapWhite from '@/utils/assets/icon_map_white.svg'
import IconCalendarWhite from '@/utils/assets/icon_calendar_white.svg'
import IconShapesWhite from '@/utils/assets/icon_shapes_white.svg'
import { EstateData } from '@/utils/types/form'
import { BaseText } from '@/utils/themes'

type ChartAreaProps = {
  estateData?: EstateData
}

const ChartContainer = styled('div')`
  flex-grow: 1;
`
const ChartTitle = styled('div')`
  align-items: center;
  display: flex;
  gap: 48px;
  justify-content: center;
`
const IconText = styled('div')`
  align-items: center;
  display: flex;
  gap: 12px;
`

export const ChartArea = ({ estateData }: ChartAreaProps) => {
  console.log(estateData, 'estateData')
  return (
    <ChartContainer>
      <ChartTitle>
        <IconText>
          <IconMapWhite />
          <BaseText className="-white -xxl">{estateData?.prefName}</BaseText>
        </IconText>
        <IconText>
          <IconCalendarWhite />
          <BaseText className="-white -xxl">{estateData?.year}</BaseText>
        </IconText>
        <IconText>
          <IconShapesWhite />
          <BaseText className="-white -xxl">
            {estateData?.displayTypeName}
          </BaseText>
        </IconText>
      </ChartTitle>
    </ChartContainer>
  )
}
