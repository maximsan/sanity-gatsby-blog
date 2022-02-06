// Load variables from `.env` as soon as possible
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // jsxRuntime: "automatic",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-top-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mui-emotion",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
};
