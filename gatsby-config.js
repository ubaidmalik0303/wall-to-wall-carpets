module.exports = {
  siteMetadata: {
    title: `Wall To Wall Carpets `,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Wall To Wall Carpets Dubai`,
    //     short_name: `Carpets Dubai`,
    //     icon: "src/images/icon.png",
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `white`,
    //     display: `standalone`,
    //   },
    // },
  ],
};
