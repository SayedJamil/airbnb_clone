import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className=" ">
      <Head>
        <title>Lets see</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner
      {/* Footer */}
    </div>
  )
}
