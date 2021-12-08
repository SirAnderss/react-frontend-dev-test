import Categories from 'components/Categories/Categories';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Products from 'components/Products/Products';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const categories = await fetch(
    'https://imaginamos-frontend-test.vercel.app/api/categories'
  );

  const { data: categoryList }: TAPICategoryListResponse =
    await categories.json();

  return {
    props: {
      categoryList,
    },
  };
};

const Home = ({ categoryList }: { categoryList: TCategory[] }) => {
  return (
    <>
      <Head>
        <title>Frontend dev test</title>
        <meta name='description' content='A little dev test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Hero />
        <Categories categories={categoryList} />
        <Products />
        <div className='h-60'></div>
      </main>
    </>
  );
};

export default Home;
