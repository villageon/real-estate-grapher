import styled from '@emotion/styled'
import { bgColor } from '@/utils/clients/themeClient'
import { BaseText } from '@/utils/themes'
import IconFolder from '@/utils/assets/icon_folder.svg'

const FooterContainer = styled('div')`
  align-items: flex-start;
  background-color: ${bgColor.black};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
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

const FooterLeft = styled('div')`
  display: flex;
  gap: 24px;
`

interface FooterLinkProps {
  text: string
}

const FooterLink = ({ text }: FooterLinkProps) => (
  <IconTextPair>
    <BaseText className="-white -small">{text}</BaseText>
    <IconFolder />
  </IconTextPair>
)

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLink text="利用規約" />
        <FooterLink text="プライバシーポリシー" />
      </FooterLeft>
      <BaseText className="-white -small -end">© 2023 Landit Inc.</BaseText>
    </FooterContainer>
  )
}
