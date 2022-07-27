import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./ProductDetail.module.css";
import {
  getProductPrices,
  resetSelected,
  getSeries,
} from "../../../store/actions/productAction";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  console.log(productId);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.product.selected);
  const [sizes, setSizes] = useState([
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
  ]);
  const series = useSelector((state) => state.product.series);

  useEffect(() => {
    return dispatch(resetSelected());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selected) {
      dispatch(getSeries(selected.make, 12));
    }
    // eslint-disable-next-line
  }, [selected]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    if (selected) {
      let shoeSizes = [...sizes];
      for (const size in selected.resellPrices?.stockX) {
        shoeSizes.push(size);
        shoeSizes.sort(function (a, b) {
          return a - b;
        });
      }
      for (const size in selected.resellPrices?.flightClub) {
        shoeSizes.push(size);
        shoeSizes.sort(function (a, b) {
          return a - b;
        });
      }
      let filterSizes = [...new Set(shoeSizes)];
      setSizes(filterSizes);
    }
    // eslint-disable-next-line
  }, [selected]);

  return (
    <div className={classes.container}>
      {selected && (
        <div className={classes.wrapper}>
          <div className={classes.link}>{`${selected.brand.toUpperCase()} > ${
            selected.make
          }`}</div>
          <div className={classes.product}>
            <div className={classes["product-img"]}>
              <Image src={selected.thumbnail} alt={selected.make} />
            </div>
            <div className={classes.content}>
              <div className={classes.brand}>{selected.brand}</div>
              <div className={classes.make}>{selected.make}</div>
              <div className={classes.shoeName}>{selected.shoeName}</div>
              <div className={classes.colorway}>{selected.colorway}</div>
              <div className={classes.description}>{selected.description}</div>
            </div>
          </div>
          <div className={classes.resellPrices}>
            <table>
              <thead>
                <tr>
                  <th className={classes.sort}>US Size</th>
                  {sizes.map((size, index) => (
                    <th key={index} className={classes.size}>
                      {size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.sort}>
                    <Image src="./images/stockx.png" alt="stockX"></Image>
                  </td>
                  {sizes.map((size, index) => (
                    <td key={index}>
                      {selected.resellPrices?.stockX &&
                      selected.resellPrices?.stockX[size]
                        ? selected.resellPrices.stockX[size]
                        : "--"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={classes.sort}>
                    <Image
                      src="./images/flightClub.png"
                      alt="flightClub"
                    ></Image>
                  </td>
                  {sizes.map((size, index) => (
                    <td key={index}>
                      {selected.resellPrices?.flightClub &&
                      selected.resellPrices?.flightClub[size]
                        ? selected.resellPrices.flightClub[size]
                        : "--"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.series}>
            <div className={classes["series-title"]}>
              {`${selected?.make} 시리즈`}
            </div>
            <div className={classes["series-list"]}>
              {series?.map((product) => (
                <div className={classes["series-item"]} key={product._id}>
                  <Link href={`${brandName}/${product.styleID}`}>
                    <Image src={product.thumbnail} alt={product.make} />
                    <div className={classes["series-shoeName"]}>
                      {product.shoeName.replace(selected.make, "").trim()}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
