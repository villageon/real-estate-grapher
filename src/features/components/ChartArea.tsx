import styled from '@emotion/styled'
import { Bar } from 'react-chartjs-2'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const createChartData = (estateData?: EstateData) => ({
  labels: [estateData?.prefName, '全国平均'],
  datasets: [
    {
      data: [estateData?.estatePrice, estateData?.estatePriceAve],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // TODO: グラデーションにする
        'rgba(54, 162, 235, 0.2)' // TODO: グラデーションにする
      ],
      borderWidth: 0,
      barThickness: 200
    }
  ]
})

const chartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        title(tooltipItems: any) {
          return tooltipItems[0].label
        },
        label(tooltipItem: any) {
          const value = tooltipItem.formattedValue
          return `${value} 円/㎡`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      grid: {
        display: false
      },
      border: {
        color: 'white'
      }
    },
    y: {
      ticks: {
        callback(value: any) {
          return `${new Intl.NumberFormat().format(value)}  `
        },
        color: 'white',
        font: {
          size: 12
        }
      },
      grid: {
        display: true,
        drawOnChartArea: false,
        drawTicks: true,
        color: 'white'
      },
      border: {
        color: 'white'
      }
    }
  }
}

type ChartAreaProps = {
  estateData?: EstateData
  isLoading: boolean
}

export const ChartArea = ({ estateData, isLoading }: ChartAreaProps) => {
  const data = createChartData(estateData)

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
        <BaseText className="-small -white">（円/㎡）</BaseText>
        <Bar data={data} options={chartOptions} />
      </ChartContent>

      {isLoading && <StyledCircularProgress size={100} color="info" />}
    </ChartContainer>
  )
}
