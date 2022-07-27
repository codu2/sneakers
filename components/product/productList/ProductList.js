import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import classes from "./ProductList.module.css";

const ProductList = ({ products }) => {
  const router = useRouter();
  const brandName = router.query.brandName;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.link}>{brandName?.toUpperCase()}</div>
        <ul className={classes["product-list"]}>
          {products?.map((product) => (
            <li key={product._id}>
              <Image
                src={product.thumbnail}
                alt={product.make}
                className={classes.img}
                width={150}
                height={100}
                layout="fixed"
                priority
              />
              <div className={classes.content}>
                <div className={classes.shoeName}>{product.shoeName}</div>
                <div className={classes.button}>
                  <Link href={`/${brandName}/${product.styleID}`}>
                    가격 알아보기
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
