import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100;1,200;1,500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="favicon.png" />
          {/**Facebook */}
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mikys Italian Restaurant" />
          <meta
            property="og:description"
            content="Mikys Italian Restaurant, embrace the authentic Italian Cousine, with a large selection of pizzas,pasta and exquisite nibbles, surprise your friends and family with a lunch or dinner that they will never forget "
          />
          <meta property="og:image" content="/HeroImg.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
