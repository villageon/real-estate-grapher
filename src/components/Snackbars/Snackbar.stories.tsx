import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/Buttons'
import { useSnackbarState } from '@/utils/stores/snackbar'
import { Snackbar } from './Snackbar'

const SnackbarWithHook = () => {
  const { openSnackbar } = useSnackbarState()

  const onClick = () => {
    openSnackbar({
      text: '変更が完了しました',
      severity: 'success'
    })
  }

  const onClickError = () => {
    openSnackbar({
      text: 'エラーが発生しました',
      severity: 'error'
    })
  }

  return (
    <>
      <Button onClick={onClick}>スナックバー（正常）</Button>
      <Button onClick={onClickError} color="error">
        スナックバー（異常）
      </Button>
      <Snackbar />
    </>
  )
}

export default {
  title: 'Components/Snackbars',
  component: SnackbarWithHook
} as Meta

type Story = StoryObj<typeof SnackbarWithHook>

export const snackbar: Story = {}
