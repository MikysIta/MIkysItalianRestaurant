import layoutStyle from "../../styles/layout.module.css";
import Nav from "../navabr/Navbar";
import Footer from "../footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" ? <Nav /> : null}
      <div className={layoutStyle.containerLayout}>{children}</div>
      {router.pathname !== "/" ? <Footer /> : null}
    </>
  );
};

export default Layout;
