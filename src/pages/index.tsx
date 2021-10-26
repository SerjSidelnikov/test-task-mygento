import type { NextPage } from 'next';
import Head from 'next/head';

import HomePage from '@/modules/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Анкета соискателя</title>
      </Head>

      <HomePage />
    </>
  );
};

export default Home;
