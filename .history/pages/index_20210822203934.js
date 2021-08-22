import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Largecard from '../components/Largecard';
import MediumCard from '../components/MediumCard';
import Smallcard from '../components/Smallcard';

export default function Home({ exploreData, cardData }) {
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
          <h2 className="text-3xl font-bold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull data from server and display on the site */}
            {exploreData?.map(item => (
              <Smallcard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3 ">
            {cardData?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>

        </section>
        <Largecard
          img='https'

        />
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
  const cardData = await fetch('https://links.papareact.com/zp1').
    then(
      (res) => res.json()
    );


  return {
    props: {
      exploreData,
      cardData
    }
  }
}
