import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import StoreContextProvider from "../context/storeContext";
import React from "react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <StoreContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreContextProvider>
    </>
  );
}

export default MyApp;
