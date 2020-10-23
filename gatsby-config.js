/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Outer Wilds Games`,
    description: `We Go Above And Beyond`
  },


  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oz7n958hgdfa`,
        accessToken: `juzJIbRPUiLesBLGfg5tx69h_mGTczaShlPt15IbfYk`
      },
    },

    `gatsby-plugin-sass`,

    `gatsby-plugin-react-helmet`,


    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Comfortaa`,
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-181049213-1",
      }
    },



  ],
}
