import { useCallback } from 'react'
import { DISPLAY_TYPE_OPTIONS } from '@/utils/constants'
import { useSnackbarState } from '@/utils/stores/snackbar'
import { EstatePriceResponse } from '@/utils/types/form'

export const useDownloadData = () => {
  const { openSnackbar } = useSnackbarState()
  const downloadData = useCallback(
    (displayType: number, estateData?: EstatePriceResponse['result']) => {
      if (!estateData) {
        openSnackbar({
          text: 'ダウンロードに失敗しました',
          severity: 'error'
        })
        return
      }

      const displayTypeLabel = DISPLAY_TYPE_OPTIONS.find(
        (option) => option.value === displayType
      )?.label
      const fileName = `${estateData.years[0].year}年_${estateData.prefName}_${displayTypeLabel}.json`

      const jsonString = JSON.stringify(estateData)
      const blob = new Blob([jsonString], { type: 'application/json' })

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName

      link.click()
      URL.revokeObjectURL(url)
    },
    [openSnackbar]
  )

  return { downloadData }
}
