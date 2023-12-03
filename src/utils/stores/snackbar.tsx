import { useCallback } from 'react'
import { AlertColor } from '@mui/material'
import { atom, useRecoilState } from 'recoil'
import { RecoilAtomKeys } from '@/utils/stores/recoilKeys'

type SnackbarState = {
  isOpen: boolean
  text: string
  severity: AlertColor
}

export type SnackbarParams = Pick<SnackbarState, 'text' | 'severity'>

export const snackbarStateAtom = atom<SnackbarState>({
  key: RecoilAtomKeys.SNACKBAR_STATE,
  default: {
    isOpen: false,
    text: '',
    severity: 'info'
  }
})

export const useSnackbarState = () => {
  const [snackbarState, setSnackbarState] = useRecoilState(snackbarStateAtom)

  const openSnackbar = useCallback(
    ({ text, severity }: SnackbarParams) => {
      const timer = setTimeout(() => {
        setSnackbarState({
          isOpen: true,
          text,
          severity
        })
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    },

    [setSnackbarState]
  )

  const closeSnackbar = useCallback(() => {
    setSnackbarState({
      isOpen: false,
      text: '',
      severity: 'info'
    })
  }, [setSnackbarState])

  return { snackbarState, openSnackbar, closeSnackbar }
}
