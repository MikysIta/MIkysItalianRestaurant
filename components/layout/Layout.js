import Nav from "../navabr/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
