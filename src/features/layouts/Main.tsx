import styled from '@emotion/styled'
import { bgColor } from '@/utils/clients/themeClient'

const ContentContainer = styled('div')`
  background:
    url('/images/background_image.png'),
    ${bgColor.black} 50% / cover no-repeat;
  background-blend-mode: normal;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`

export const Main = () => {
  return <ContentContainer />
}
