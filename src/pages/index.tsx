import styled from '@emotion/styled'
import Head from 'next/head'
import { Footer, Header, Main } from '@/features/layouts'

const MainContainer = styled('main')`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
        {/* NOTE: ファビコンの提示があれば修正する */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Header />
        <Main />
        <Footer />
      </MainContainer>
    </>
  )
}

export default Home
