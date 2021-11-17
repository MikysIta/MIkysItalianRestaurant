import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import StoreContextProvider from "../context/storeContext";
import React from "react";
function MyApp({ Component, pageProps }) {
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
