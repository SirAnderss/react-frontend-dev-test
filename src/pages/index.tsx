import Categories from 'components/Categories/Categories';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetch(
    'https://imaginamos-frontend-test.vercel.app/api/products'
  );

  const categories = await fetch(
    'https://imaginamos-frontend-test.vercel.app/api/categories'
  );

  const { data: productList }: TAPIProdictListResponse = await products.json();
  const { data: categoryList }: TAPICategoryListResponse =
    await categories.json();

  return {
    props: {
      productList,
      categoryList,
    },
  };
};

const Home = ({
  productList,
  categoryList,
}: {
  productList: TProduct[];
  categoryList: TCategory[];
}) => {
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
        <div className='h-60'></div>
      </main>
    </>
  );
};

export default Home;
