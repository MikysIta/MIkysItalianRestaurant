import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import StoreContextProvider from "../context/storeContext";
import React from "react";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Layout>
        <StoreContextProvider>
          <Component {...pageProps} />
        </StoreContextProvider>
      </Layout>
    </>
  );
}

export default MyApp;
