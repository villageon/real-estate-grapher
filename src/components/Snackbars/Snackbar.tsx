import { Alert as MuiAlert, Snackbar as MuiSnackbar } from '@mui/material'
import { fontColor, fontSize, fontWeight } from '@/utils/clients/themeClient'
import { useSnackbarState } from '@/utils/stores/snackbar'

export const Snackbar = () => {
  const { snackbarState, closeSnackbar } = useSnackbarState()

  return (
    <MuiSnackbar
      open={snackbarState.isOpen}
      autoHideDuration={5000}
      onClose={closeSnackbar}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      sx={{
        width: '90%',
        opacity: 0.8,
        margin: '0 auto'
      }}
    >
      <MuiAlert
        severity={snackbarState.severity}
        icon={false}
        variant="filled"
        sx={{
          width: '90%',
          padding: '16px',
          opacity: 0.8,
          color: `${fontColor.white}`,
          fontSize: `${fontSize.large}`,
          fontWeight: `${fontWeight.bold}`,
          borderRadius: '8px'
        }}
      >
        {snackbarState.text}
      </MuiAlert>
    </MuiSnackbar>
  )
}
