import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./ProductDetail.module.css";
import { resetSelected } from "../../../store/actions/productAction";

const ProductDetail = ({ selected, series }) => {
  const router = useRouter();
  const productId = router.query.productId;
  const dispatch = useDispatch();
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

  useEffect(() => {
    return dispatch(resetSelected());
    // eslint-disable-next-line
  }, []);

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
          <div
            className={classes.link}
          >{`${selected.brand} > ${selected.make}`}</div>
          <div className={classes.product}>
            <div className={classes["product-img"]}>
              <Image
                src={selected.thumbnail}
                alt={selected.make}
                width={400}
                height={300}
                layout="fill"
              />
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
                    <Image
                      src="/images/stockx.png"
                      alt="stockX"
                      width={50}
                      height={25}
                      layout="fill"
                    ></Image>
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
                      src="/images/flightClub.png"
                      alt="flightClub"
                      width={50}
                      height={25}
                      layout="fill"
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
                    <div className={classes["series-img"]}>
                      <Image
                        src={product.thumbnail}
                        alt={product.make}
                        width={150}
                        height={100}
                        layout="fill"
                      />
                    </div>
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
