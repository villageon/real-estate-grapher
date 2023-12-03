import { styled } from '@mui/material/styles'
import { Divider as MuiDivider } from '@mui/material'
import { bgColor } from '@/utils/clients/themeClient'

const StyledDivider = styled(MuiDivider)`
  background-color: ${bgColor.lightGray};
`

export const Divider = () => {
  return <StyledDivider />
}
