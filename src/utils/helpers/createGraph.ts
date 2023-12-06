import type { ChartArea } from 'chart.js'

export const createGraphGradient = (
  ctx: CanvasRenderingContext2D,
  chartArea: ChartArea,
  colorStops: Array<{ stop: number; color: string }>
) => {
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  )

  colorStops.forEach(({ stop, color }) => {
    gradient.addColorStop(stop, color)
  })

  return gradient
}
