import type { TooltipItem, Scale } from 'chart.js'

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
      afterFit(scaleInstance: Scale) {
        scaleInstance.width = 100 // eslint-disable-line no-param-reassign
      },
      ticks: {
        callback(value: number | string) {
          return `${new Intl.NumberFormat().format(Number(value))}  `
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
