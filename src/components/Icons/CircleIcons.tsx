import styled from '@emotion/styled'

type IconSizeKey = 'small' | 'medium' | 'large'

const ICON_SIZE: { [key in IconSizeKey]: string } = {
  small: '24px',
  medium: '32px',
  large: '40px'
} as const

export interface IconProps {
  content?: React.ReactNode
  size: IconSizeKey
  className?: string
}

const CustomSpan = styled('span')<{
  size: IconSizeKey
}>`
  align-items: center;
  color: gray;
  display: flex;
  height: ${({ size }) => ICON_SIZE[size]};
  justify-content: center;
  &.-circle {
    color: inherit;
  }
`

const CustomParagraph = styled('p')<{
  size: IconSizeKey
}>`
  align-items: center;
  background: white;
  border: 1px solid gray;
  border-radius: 20%;
  display: flex;
  font-size: 15px;
  height: ${({ size }) => ICON_SIZE[size]};
  justify-content: center;
  width: ${({ size }) => ICON_SIZE[size]};
  &.-circle {
    border-radius: 50%;
    color: inherit;
  }
`

export const CircleIcon = ({
  content,
  size = 'medium',
  className
}: IconProps) => (
  <CustomParagraph size={size} className={`${className} -circle`}>
    <CustomSpan size={size} className="-circle">
      {content}
    </CustomSpan>
  </CustomParagraph>
)

export const CircleIconBlank = ({
  content,
  size = 'medium',
  className
}: IconProps) => (
  <CustomParagraph size={size} className={`${className} -circle`}>
    <CustomSpan size={size} className="-circle">
      {content}
    </CustomSpan>
  </CustomParagraph>
)
