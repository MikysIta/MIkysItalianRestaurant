import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Mikys Italian Restaurant",
  keywords:
    "Mikys Italian Restaurant,Pizza,Italian Restaurant,authentic Italian restaurant, italian food, pasta, dining italian,creative cousine,child friendly restaurant, Broadway Street ",
  description:
    "Mikys Italian Restaurant, embrace the authentic Italian Cousine, with a large selection of pizzas,pasta and exquisite nibbles, surprise your friends and family with a lunch or dinner that they will never forget ",
};

export default Meta;
