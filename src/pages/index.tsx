import styled from '@emotion/styled'
import Head from 'next/head'
import { Header } from '@/features/layouts'
import { bgColor } from '@/utils/clients/themeClient'

const ContentContainer = styled('div')`
  background:
    url('/images/background_image.png'),
    ${bgColor.black} 50% / cover no-repeat;
  background-blend-mode: normal;
  display: flex;
  height: calc(100vh - 74px);
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
      <main>
        <Header />
        <ContentContainer />
      </main>
    </>
  )
}

export default Home
