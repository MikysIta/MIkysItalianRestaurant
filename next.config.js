module.exports = {
  reactStrictMode: true,

  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source: "/order-online",
        destination: "/order.html",
        permanent: true,
      },
      {
        source: "/menu",
        destination: "/",
        permanent: true,
      },
      {
        source: "/reservations",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-restaurant",
        destination: "/",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/",
        permanent: true,
      },
      {
        source: "/210206_mikys-menu-drinks",
        destination:
          "https://assets.ctfassets.net/l0ii4c2w73hx/3gOUoICx7FK9uQ5krPQbzN/9ec25af352739a763b98750c097f2897/Menu-Drinks.pdf",
        permanent: true,
      },
    ];
  },
};
