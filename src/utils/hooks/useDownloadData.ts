import { useCallback } from 'react'
import { useSnackbarState } from '@/utils/stores/snackbar'
import { EstateData } from '@/utils/types/form'

export const useDownloadData = () => {
  const { openSnackbar } = useSnackbarState()
  const downloadData = useCallback(
    (estateData?: EstateData, displayTypeName?: string) => {
      if (!estateData) {
        openSnackbar({
          text: 'ダウンロードに失敗しました',
          severity: 'error'
        })
        return
      }

      const fileName = `${estateData.year}年_${estateData.prefName}_${displayTypeName}.json`

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
