import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { useCallback } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { isAxiosError } from 'axios'
import { axios } from '@/utils/clients/axiosClient'
import { theme } from '@/utils/clients/muiThemeClient'
import { ErrorResponse } from '@/utils/types/common'
import { Snackbar } from '@/components/Snackbars'
import { useSnackbarState } from '@/utils/stores/snackbar'
import { ERROR_STATUS_CODES } from '@/utils/constants'

const AppComponent = ({ Component, pageProps }: any) => {
  const { openSnackbar } = useSnackbarState()

  const isErrorResponse = useCallback(
    (data: any): data is ErrorResponse =>
      ERROR_STATUS_CODES.includes(data?.statusCode),
    []
  )

  const swrConfigValue = {
    fetcher: async (url: string) => {
      try {
        const { data } = await axios.get(url)

        if (isErrorResponse(data)) {
          const errorResponse: ErrorResponse = {
            statusCode: data.statusCode || null,
            message: data.message || null,
            description: data.description || null
          }

          openSnackbar({
            text: 'エラーが発生しました',
            severity: 'error'
          })
          throw errorResponse
        }

        return data
      } catch (error) {
        if (!isAxiosError(error)) return error
        throw error
      }
    }
  }

  return (
    <SWRConfig value={swrConfigValue}>
      <Component {...pageProps} />
      <Snackbar />
    </SWRConfig>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MUIThemeProvider theme={theme}>
      <RecoilRoot>
        <AppComponent Component={Component} pageProps={pageProps} />
      </RecoilRoot>
    </MUIThemeProvider>
  )
}

export default App
