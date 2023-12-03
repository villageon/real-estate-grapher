import styled from '@emotion/styled'
import { bgColor } from '@/utils/clients/themeClient'
import { BaseText } from '@/utils/themes'
import IconChart from '@/utils/assets/icon_chart.svg'
import { Divider } from '@/components/Dividers'
import { Form } from '@/features/components/Form'

const ContentContainer = styled('div')`
  background:
    url('/images/background_image.png'),
    ${bgColor.black} 50% / cover no-repeat;
  background-blend-mode: normal;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  padding: 40px;
  width: 100%;
`

const TitleWrapper = styled('div')`
  align-items: end;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`

const IconTextWrapper = styled('div')`
  align-items: center;
  display: flex;
  gap: 8px;
`

const ContentWrapper = styled('div')`
  display: flex;
  flex-grow: 1;
`

const ChartArea = styled('div')`
  flex-grow: 1;
`

export const Main = () => {
  return (
    <ContentContainer>
      <div>
        <TitleWrapper>
          <IconTextWrapper>
            <IconChart />
            <BaseText className="-white -xxxl -line-height-medium">
              取引価格
            </BaseText>
          </IconTextWrapper>
          <BaseText className="-white">※取引面積1㎡あたり</BaseText>
        </TitleWrapper>
        <Divider />
      </div>

      <ContentWrapper>
        <ChartArea>チャート表示エリア</ChartArea>
        <Form />
      </ContentWrapper>
    </ContentContainer>
  )
}
