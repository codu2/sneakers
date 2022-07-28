import wrapper from "../../store/configureStore";
import { getProducts } from "../../store/actions/productAction";
import ProductList from "../../components/product/productList/ProductList";

const BrandPage = (props) => {
  return (
    <>
      <ProductList products={props.products} />
    </>
  );
};

export const getStaticPaths = () => {
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
    fallback: false,
    paths: Brand_Array.map((brand) => ({
      params: { brandName: brand },
    })),
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const brandName = context.params.brandName;

    await store.dispatch(getProducts(brandName, 12));
    const products = await store.getState().product[brandName];

    return {
      props: {
        products: products,
      },
      revalidate: 1,
    };
  }
);

export default BrandPage;
