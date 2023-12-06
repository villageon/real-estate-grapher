import type { TooltipItem, Scale } from 'chart.js'
import { fontColor, bgColor, fontWeight } from '@/utils/clients/themeClient'

export const chartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        title(tooltipItems: TooltipItem<'bar'>[]) {
          return tooltipItems[0].label
        },
        label(tooltipItem: TooltipItem<'bar'>) {
          const value = tooltipItem.formattedValue
          return `${value} 円/㎡`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: fontColor.white,
        font: {
          size: 16,
          weight: fontWeight.bold
        }
      },
      grid: {
        display: false
      },
      border: {
        color: bgColor.white
      }
    },
    y: {
      afterFit(scaleInstance: Scale) {
        scaleInstance.width = 100 // eslint-disable-line no-param-reassign
      },
      ticks: {
        callback(value: number | string) {
          return `${new Intl.NumberFormat().format(Number(value))}  `
        },
        color: fontColor.white,
        font: {
          size: 12
        }
      },
      grid: {
        display: true,
        drawOnChartArea: false,
        drawTicks: true,
        color: bgColor.white
      },
      border: {
        color: bgColor.white
      }
    }
  }
}
