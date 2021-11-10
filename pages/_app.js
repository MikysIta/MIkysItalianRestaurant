import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import StoreContextProvider from "../context/storeContext";

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
