import layoutStyle from "../../styles/layout.module.css";
import Nav from "../navabr/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={layoutStyle.containerLayout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
