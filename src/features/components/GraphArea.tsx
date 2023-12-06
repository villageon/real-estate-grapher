import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { Chart } from 'react-chartjs-2'
import type { ChartData } from 'chart.js'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { CircularProgress } from '@mui/material'
import IconMapWhite from '@/utils/assets/icon_map_white.svg'
import IconCalendarWhite from '@/utils/assets/icon_calendar_white.svg'
import IconShapesWhite from '@/utils/assets/icon_shapes_white.svg'
import { EstateData } from '@/utils/types/form'
import { BaseText } from '@/utils/themes'
import { chartOptions } from '@/utils/settings'
import { createGraphGradient } from '@/utils/helpers'

const ChartContainer = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 80px;
  justify-content: center;
  position: relative;
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

const ChartContent = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 440px !important;
  width: 660px !important;
  width: auto;
`

const StyledCircularProgress = styled(CircularProgress)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`
const StyledBaseText = styled(BaseText)`
  margin-left: 52px;
`

type GraphAreaProps = {
  estateData?: EstateData
  isLoading: boolean
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const GraphArea = ({ estateData, isLoading }: GraphAreaProps) => {
  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: []
  })

  useEffect(() => {
    const chart = chartRef.current

    if (!chart || !estateData) {
      return
    }

    const gradient1 = createGraphGradient(chart.ctx, chart.chartArea, [
      { stop: 0.34, color: '#009984' },
      { stop: 0.65, color: '#97BF4A' }
    ])
    const gradient2 = createGraphGradient(chart.ctx, chart.chartArea, [
      { stop: 0.34, color: '#706D65' },
      { stop: 0.65, color: '#57544C' }
    ])

    const data = {
      labels: [estateData.prefName, '全国平均'],
      datasets: [
        {
          data: [estateData.estatePrice, estateData.estatePriceAve],
          backgroundColor: [gradient1, gradient2],
          borderWidth: 0,
          barThickness: 200
        }
      ]
    }

    setChartData(data)
  }, [estateData])

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

      <ChartContent>
        <StyledBaseText className="-small -white">（円/㎡）</StyledBaseText>
        <Chart
          ref={chartRef}
          type="bar"
          data={chartData}
          options={chartOptions}
        />
      </ChartContent>

      {isLoading && <StyledCircularProgress size={100} color="info" />}
    </ChartContainer>
  )
}
