import wrapper from "../store/configureStore";
import Head from "next/head";
import MostPopular from "../components/product/mostPopular/MostPopular";
import { getMostPopular } from "../store/actions/productAction";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Sneakers</title>
        <meta
          name="description"
          content="Provides information about sneakers of various brands, sites, prices, etc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <MostPopular popular={props.mostPopular} />
      </>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getMostPopular());
  const mostPopular = await store.getState().product.popular;

  return {
    props: {
      mostPopular: mostPopular,
    },
    revalidate: 1,
  };
});

/*
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      mostPopular: []
    }
  }
}
*/

export default HomePage;
