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


    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Comfortaa`,
        ],
      },
    },



  ],
}
