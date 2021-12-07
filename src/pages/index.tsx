import type { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend dev test</title>
        <meta name='description' content='A little dev test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>Hola mundo</main>
    </div>
  );
};

export default Home;
