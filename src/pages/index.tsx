import Categories from 'components/Categories/Categories';
import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
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
        <link rel='icon' href='https://i.postimg.cc/7hfbpSpd/favicon.png' />
      </Head>

      <main className='w-full mx-auto lg:w-10/12'>
        <Container>
          <Header />
          <Hero />
          <Categories categories={categoryList} />
          <Products />
          <Footer />
        </Container>
      </main>
    </>
  );
};

export default Home;
