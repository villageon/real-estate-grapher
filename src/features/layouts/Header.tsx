import styled from '@emotion/styled'
import LogoLandit from '@/utils/assets/logo_landit.svg'

const HeaderContainer = styled('div')`
  align-items: center;
  display: flex;
  height: 74px;
  padding: 0px 24px 0px 24.51px;
  position: fixed;
  top: 0;
  width: 100%;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoLandit />
    </HeaderContainer>
  )
}
