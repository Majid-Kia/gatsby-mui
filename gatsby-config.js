const path = require("path");

module.exports = {
  pathPrefix: "/gatsby-mui",
  plugins: [
    'gatsby-plugin-root-import',
    "gatsby-plugin-material-top-layout",
    "gatsby-plugin-mui-emotion",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp"],
          quality: 100,
          breakpoints: [600, 1200],
          backgroundColor: `transparent`,
          placeholder: "none",
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
      __key: "images",
    },
  ],
  siteMetadata: {
    title: "My page",
  },
};
