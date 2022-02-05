import type { NextPage } from 'next';
import Head from 'next/head'
import CCMCloud from 'src/screens/CCMCloud';

const CCMCloudPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Better Journeys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CCMCloud />
    </>
  )
}

export default CCMCloudPage;