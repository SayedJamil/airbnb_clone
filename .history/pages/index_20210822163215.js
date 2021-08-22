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
      <Banner />

      {/* main */}
      <main className="max-w-7xl mx-auto ">
        <section className="pt-6">

        </section>
        <h2 className="text-3xl font-bold pb-g">Explore nearby</h2>
      </main>
      {/* Footer */}
    </div>
  )
}
