import { styled } from '@mui/material/styles'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { fontSize, fontWeight, lineHeight } from '@/utils/clients/themeClient'

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledMuiButton = styled(MuiButton)`
  border-radius: 2px;
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.normal};
  line-height: ${lineHeight.large};
  padding: 13px 16px;
`

export const Button = ({
  className,
  children,
  type = 'button',
  color = 'primary',
  size = 'medium',
  variant = 'contained',
  onClick,
  fullWidth = true
}: ButtonProps) => {
  return (
    <StyledMuiButton
      variant={variant}
      color={color}
      size={size}
      type={type}
      className={className}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {children}
    </StyledMuiButton>
  )
}
