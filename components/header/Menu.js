import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Menu.module.css";

const Menu = () => {
  const router = useRouter();

  const brandName = router.query.brandName;

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <ul className={classes["menu-list"]}>
          <li className={brandName === "jordan" ? classes.active : null}>
            <Link href="/jordan">JORDAN</Link>
          </li>
          <li className={brandName === "nike" ? classes.active : null}>
            <Link href="/nike">NIKE</Link>
          </li>
          <li className={brandName === "adidas" ? classes.active : null}>
            <Link href="/adidas">ADIDAS</Link>
          </li>
          <li className={brandName === "newbalance" ? classes.active : null}>
            <Link href="/newbalance">NEWBALANCE</Link>
          </li>
          <li className={brandName === "reebok" ? classes.active : null}>
            <Link href="/reebok">REEBOK</Link>
          </li>
          <li className={brandName === "converse" ? classes.active : null}>
            <Link href="/converse">CONVERSE</Link>
          </li>
          <li className={brandName === "vans" ? classes.active : null}>
            <Link href="/vans">VANS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
