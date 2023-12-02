import styled from '@emotion/styled'
import { bgColor } from '@/utils/clients/themeClient'
import { BaseText } from '@/utils/themes'
import IconFolder from '@/utils/assets/icon_folder.svg'

const FooterContainer = styled('div')`
  align-items: flex-start;
  background-color: ${bgColor.black};
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  width: 100%;
`

const IconTextPair = styled('div')`
  align-items: center;
  display: flex;
  gap: 8px;
`

const FooterLeftWrapper = styled('div')`
  display: flex;
  gap: 24px;
`

interface FooterLinkProps {
  text: string
}

const FooterLink = ({ text }: FooterLinkProps) => (
  <IconTextPair>
    <BaseText className="-white -small -line-height-large">{text}</BaseText>
    <IconFolder />
  </IconTextPair>
)

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeftWrapper>
        <FooterLink text="利用規約" />
        <FooterLink text="プライバシーポリシー" />
      </FooterLeftWrapper>
      <BaseText className="-white -small -line-height-large -end">
        © 2023 Landit Inc.
      </BaseText>
    </FooterContainer>
  )
}
