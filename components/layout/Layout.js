import Header from "../header/Header";

const Layout = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
