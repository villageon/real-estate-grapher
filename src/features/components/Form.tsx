import styled from '@emotion/styled'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'
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
import {
  EstateData,
  EstatePriceRequest,
  EstatePriceResponse
} from '@/utils/types/form'
import { axios } from '@/utils/clients/axiosClient'
import { ApiEndpoint, OptionsDefault } from '@/utils/enums'
import { useDownloadData } from '@/utils/hooks'

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

type FormProps = {
  estateData?: EstateData
  setEstateData: Dispatch<SetStateAction<EstateData | undefined>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const Form = ({
  estateData,
  setEstateData,
  setIsLoading
}: FormProps) => {
  const [prefCode, setPrefCode] = useState<number>(OptionsDefault.PREF_CODE)
  const [year, setYear] = useState<number>(OptionsDefault.YEAR)
  const [displayType, setDisplayType] = useState<number>(
    OptionsDefault.DISPLAY_TYPE
  )
  const { downloadData } = useDownloadData()

  const searchEstate = useCallback(
    async ({
      selectedYear = year,
      selectedPrefCode = prefCode,
      selectedDisplayType = displayType
    }) => {
      setIsLoading(true)

      const paramsTargetPref: EstatePriceRequest = {
        year: selectedYear,
        prefCode: selectedPrefCode,
        cityCode: '-',
        displayType: selectedDisplayType
      }

      const paramsAllPref: EstatePriceRequest = {
        year: selectedYear,
        prefCode: '-',
        cityCode: '-',
        displayType: selectedDisplayType
      }
      const resPref = await axios.get<EstatePriceResponse>(
        ApiEndpoint.ESTATE_PRICE,
        { params: paramsTargetPref }
      )
      const resPrefAve = await axios.get<EstatePriceResponse>(
        ApiEndpoint.ESTATE_PRICE,
        { params: paramsAllPref }
      )

      const displayTypeName = DISPLAY_TYPE_OPTIONS.find(
        (option) => option.value === selectedDisplayType
      )?.label

      if (!displayTypeName) return

      const resPrefData = resPref.data.result
      const resPrefAverageData = resPrefAve.data.result
      setEstateData({
        year: `${resPrefData.years[0].year}年`,
        prefName: resPrefData.prefName,
        displayTypeName,
        estatePrice: resPrefData.years[0].value,
        estatePriceAve: resPrefAverageData.years[0].value
      })
      setIsLoading(false)
    },
    [year, prefCode, displayType, setEstateData, setIsLoading]
  )

  const handleChange = useCallback(
    (setter: Dispatch<SetStateAction<number>>) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = Number(event.target.value)
        setter(selectedValue)
        searchEstate({ [event.target.name]: selectedValue })
      },
    [searchEstate]
  )

  const onClickDownload = () => {
    const displayTypeName = DISPLAY_TYPE_OPTIONS.find(
      (option) => option.value === displayType
    )?.label

    downloadData(estateData, displayTypeName)
  }

  useEffect(() => {
    searchEstate({})
  }, [searchEstate])

  return (
    <FormContainer>
      <FormWrapper>
        <BaseText className="-large">表示内容を選択</BaseText>
        <Divider />
        <InputSelect
          label="年度"
          name="selectedYear"
          icon={<IconMap />}
          options={YEAR_OPTIONS}
          onChange={handleChange(setYear)}
          value={year}
        />
        <Divider />
        <InputSelect
          label="場所"
          name="selectedPrefCode"
          icon={<IconCalendar />}
          options={PREFECTURES_OPTIONS}
          onChange={handleChange(setPrefCode)}
          value={prefCode}
        />
        <Divider />
        <InputRadio
          label="種類"
          name="selectedDisplayType"
          icon={<IconShapes />}
          options={DISPLAY_TYPE_OPTIONS}
          onChange={handleChange(setDisplayType)}
          value={displayType}
        />
      </FormWrapper>
      <Button onClick={onClickDownload}>データをダウンロード</Button>
    </FormContainer>
  )
}
