import styled from '@emotion/styled'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { bgColor } from '@/utils/clients/themeClient'
import { BaseText } from '@/utils/themes'
import { Button } from '@/components/Buttons'
import { Divider } from '@/components/Dividers'
import { InputRadio, InputSelect } from '@/components/Forms'
import { DISPLAY_TYPE_OPTIONS, YEAR_OPTIONS } from '@/utils/constants'
import IconMap from '@/utils/assets/icon_map.svg'
import IconCalendar from '@/utils/assets/icon_calendar.svg'
import IconShapes from '@/utils/assets/icon_shapes.svg'
import {
  EstateData,
  EstatePriceRequest,
  EstatePriceResponse,
  OptionProps
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
  prefOptions: OptionProps[]
  estateData?: EstateData
  setEstateData: Dispatch<SetStateAction<EstateData | undefined>>
}

export const Form = ({ prefOptions, estateData, setEstateData }: FormProps) => {
  const [prefCode, setPrefCode] = useState<number>(OptionsDefault.PREF_CODE)
  const [year, setYear] = useState<number>(OptionsDefault.YEAR)
  const [displayType, setDisplayType] = useState<number>(
    OptionsDefault.DISPLAY_TYPE
  )
  const { downloadData } = useDownloadData()

  const displayTypeName = useMemo(() => {
    return DISPLAY_TYPE_OPTIONS.find((option) => option.value === displayType)
      ?.label
  }, [displayType])

  const handleSubmit = useCallback(
    async ({
      selectedYear = year,
      selectedPrefCode = prefCode,
      selectedDisplayType = displayType
    }) => {
      const params: EstatePriceRequest = {
        year: selectedYear,
        prefCode: selectedPrefCode,
        cityCode: '-',
        displayType: selectedDisplayType
      }
      const res = await axios.get<EstatePriceResponse>(
        ApiEndpoint.ESTATE_PRICE,
        { params }
      )

      if (!displayTypeName) return
      setEstateData({
        year: res.data.result.years[0].year,
        prefName: res.data.result.prefName,
        displayTypeName,
        estatePrice: res.data.result.years[0].value
      })
    },
    [year, prefCode, displayType, setEstateData, displayTypeName]
  )

  const handleChange = useCallback(
    (setter: Dispatch<SetStateAction<number>>) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = Number(event.target.value)
        setter(selectedValue)
        handleSubmit({ [event.target.name]: selectedValue })
      },
    [handleSubmit]
  )

  const onClickDownload = () => {
    downloadData(estateData, displayTypeName)
  }

  useEffect(() => {
    handleSubmit({})
  }, [handleSubmit])

  return (
    <FormContainer>
      <FormWrapper>
        <BaseText className="-large">表示内容を選択</BaseText>
        <Divider />
        <InputSelect
          label="年度"
          icon={<IconMap />}
          options={YEAR_OPTIONS}
          onChange={handleChange(setYear)}
          value={year}
        />
        <Divider />
        <InputSelect
          label="場所"
          icon={<IconCalendar />}
          options={prefOptions}
          onChange={handleChange(setPrefCode)}
          value={prefCode}
        />
        <Divider />
        <InputRadio
          label="種類"
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
