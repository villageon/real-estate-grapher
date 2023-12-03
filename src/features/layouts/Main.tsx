import styled from '@emotion/styled'
import useSWR from 'swr'
import { useMemo, useState } from 'react'
import { bgColor } from '@/utils/clients/themeClient'
import { BaseText } from '@/utils/themes'
import IconChart from '@/utils/assets/icon_chart.svg'
import { Divider } from '@/components/Dividers'
import { ChartArea, Form } from '@/features/components'
import { ApiEndpoint } from '@/utils/enums'
import { EstateData, PrefecturesResponse } from '@/utils/types/form'

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

const Title = styled('div')`
  align-items: end;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`

const IconText = styled('div')`
  align-items: center;
  display: flex;
  gap: 8px;
`

const ContentWrapper = styled('div')`
  display: flex;
  flex-grow: 1;
`

export const Main = () => {
  const [estateData, setEstateData] = useState<EstateData>()

  const { data: prefectures } = useSWR<PrefecturesResponse>(
    ApiEndpoint.PREFECTURES
  )
  const prefOptions = useMemo(() => {
    return prefectures?.result.map((prefecture) => ({
      value: prefecture.prefCode,
      label: prefecture.prefName
    }))
  }, [prefectures])

  return (
    <ContentContainer>
      <div>
        <Title>
          <IconText>
            <IconChart />
            <BaseText className="-white -xxxl -line-height-medium">
              取引価格
            </BaseText>
          </IconText>
          <BaseText className="-white">※取引面積1㎡あたり</BaseText>
        </Title>
        <Divider />
      </div>

      <ContentWrapper>
        <ChartArea estateData={estateData} />
        {prefOptions && (
          <Form
            prefOptions={prefOptions}
            estateData={estateData}
            setEstateData={setEstateData}
          />
        )}
      </ContentWrapper>
    </ContentContainer>
  )
}
