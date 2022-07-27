import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import classes from "./MostPopular.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const MostPopular = ({ popular }) => {
  //const popular = useSelector((state) => state.product.popular);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideIndex = (direction) => {
    if (direction === "prev") {
      if (slideIndex === 0) {
        setSlideIndex(popular?.length - 1);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    }
    if (direction === "next") {
      if (slideIndex === popular?.length - 1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["list-container"]}>
          <ul
            className={classes["product-list"]}
            style={{ left: `-${slideIndex * 100}%` }}
          >
            {popular?.map((product) => (
              <li key={product._id} className={classes.product}>
                <div className={classes.desc}>
                  <div className={classes.brand}>{product.brand}</div>
                  <div className={classes.make}>
                    <Link href={`/product?id=${product.styleID}`}>
                      {product.make}
                    </Link>
                  </div>
                  <div className={classes.colorway}>{product.colorway}</div>
                  <div className={classes.price}>
                    <div className={classes.retailPrice}>
                      {`판매가 : ${product.retailPrice}`}
                    </div>
                    {Object.keys(product.lowestResellPrice).map((key) => (
                      <div key={key} className={classes.lowestResellPrice}>
                        {`${key} : ${product.lowestResellPrice[key]}`}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={classes.img}>
                  <Image
                    src={product.thumbnail}
                    alt={product.make}
                    layout="fill"
                    priority
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.buttons}>
          {slideIndex !== 0 && (
            <button
              className={classes["prev-button"]}
              onClick={() => handleSlideIndex("prev")}
            >
              <BsChevronLeft />
            </button>
          )}
          {slideIndex !== popular?.length - 1 && (
            <button
              className={classes["next-button"]}
              onClick={() => handleSlideIndex("next")}
            >
              <BsChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
