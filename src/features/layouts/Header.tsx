import styled from '@emotion/styled'
import LogoLandit from '@/utils/assets/logo_landit.svg'
import { bgColor } from '@/utils/clients/themeClient'

const HeaderContainer = styled('div')`
  align-items: center;
  background-color: ${bgColor.white};
  display: flex;
  height: 74px;
  padding: 0px 24px 0px 24.51px;
  width: 100%;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoLandit />
    </HeaderContainer>
  )
}
