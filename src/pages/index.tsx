import Header from 'components/Header/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend dev test</title>
        <meta name='description' content='A little dev test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-full h-screen'>
        <Header />
      </main>
    </>
  );
};

export default Home;
