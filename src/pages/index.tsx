import styled from '@emotion/styled'
import Head from 'next/head'
import { Footer, Header } from '@/features/layouts'
import { bgColor } from '@/utils/clients/themeClient'

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

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

const Home = () => {
  return (
    <>
      <Head>
        <title>Real Estate Grapher</title>
        <meta
          name="description"
          content="不動産取引をグラフ表記するアプリケーション"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: 指定のファビコンに修正する必要あり */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header />
        <ContentContainer />
        <Footer />
      </Main>
    </>
  )
}

export default Home
