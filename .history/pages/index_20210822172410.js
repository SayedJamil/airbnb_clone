import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home({ exploreData }) {
  return (
    <div className=" ">
      <Head>
        <title>Clone Airbnb</title>
        <link rel="icon" href="/airbnb.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      {/* main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-bold pb-g">Explore nearby</h2>
        </section>

        {/* Pull data from server and display on the site */}
        {exploreData.map(item => (
  h1
))}
      </main>
      {/* Footer */}
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
    then(
      (res) => res.json()
    );
  return {
    props: {
      exploreData
    }

  }


}
