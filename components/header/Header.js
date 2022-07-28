import { useState } from "react";
import classes from "../header/Header.module.css";
import {
  BsArchiveFill,
  BsSearch,
  BsSuitHeartFill,
  BsSuitHeart,
  BsArchive,
} from "react-icons/bs";
import Menu from "./Menu";
import { useRouter } from "next/router";

const Header = () => {
  const [suitHeart, setSuitHeart] = useState(false);
  const [archive, setArchive] = useState(false);
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <span>고객센터</span>
        <span>회원가입</span>
        <span>로그인</span>
      </div>
      <div className={classes.header}>
        <div className={classes.logo} onClick={() => router.push("/")}>
          SNEAKERS
        </div>
        <div className={classes.search}>
          <BsSearch />
          <input type="text" placeholder="검색어를 입력하세요" />
        </div>
        <div className={classes.actions}>
          <div
            onMouseOver={() => setSuitHeart(true)}
            onMouseOut={() => setSuitHeart(false)}
          >
            {suitHeart ? <BsSuitHeartFill /> : <BsSuitHeart />}
          </div>
          <div
            onMouseOver={() => setArchive(true)}
            onMouseOut={() => setArchive(false)}
          >
            {archive ? <BsArchiveFill /> : <BsArchive />}
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
