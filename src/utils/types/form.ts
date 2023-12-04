export type OptionProps = {
  value: number
  label: string
}

type Prefecture = {
  prefCode: number
  prefName: string
}

export type PrefecturesResponse = {
  message: null | string
  result: Prefecture[]
}

export type EstatePriceRequest = {
  year: number
  prefCode: number | string
  cityCode: number | string
  displayType: number
}

export type EstatePriceResponse = {
  message: null | string
  result: {
    prefCode: string
    prefName: string
    cityCode: string
    cityName: string
    displayType: string
    years: Array<{
      year: number
      value: number
    }>
  }
}

export type EstateData = {
  year: string
  prefName: string
  displayTypeName: string
  estatePrice: number
  estatePriceAve: number
}
