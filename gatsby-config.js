module.exports = {
  siteMetadata: {
    title: "Sofia Corina - Agro",
    siteUrl : "https://www.sofiacorina.com"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VN7VQPC8Y5",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
