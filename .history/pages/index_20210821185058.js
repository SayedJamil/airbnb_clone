import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 fle">
      <Head>
        <title>Lets see</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Airbnb clone</h1>
    </div>
  )
}
