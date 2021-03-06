import type { NextPage } from 'next';
import Head from 'next/head'
import Accounts from 'src/screens/Accounts';

const AccountsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Better Journeys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Accounts />
    </>
  )
}

export default AccountsPage;