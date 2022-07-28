import wrapper from "../../../store/configureStore";
import ProductDetail from "../../../components/product/productDetail/ProductDetail";
import {
  getProductPrices,
  getSeries,
} from "../../../store/actions/productAction";

const DetailPage = (props) => {
  return (
    <>
      <ProductDetail selected={props.selected} series={props.series} />
    </>
  );
};

export const getStaticPaths = async () => {
  const Brand_Array = [
    "jordan",
    "nike",
    "adidas",
    "newbalance",
    "reebok",
    "converse",
    "vans",
  ];

  return {
    fallback: "blocking",
    paths: Brand_Array.map((brand) => ({
      params: { brandName: brand, productId: "DM7866-162" },
    })),
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const productId = context.params.productId;
    // context.params는 getStaticPaths에서 return하는 paths의 params 객체

    await store.dispatch(getProductPrices(productId.toString()));
    const selected = await store.getState().product.selected;
    await store.dispatch(getSeries(selected.make, 12));
    const series = await store.getState().product.series;

    return {
      props: {
        selected: selected,
        series: series,
      },
      revalidate: 1,
    };
  }
);

export default DetailPage;
