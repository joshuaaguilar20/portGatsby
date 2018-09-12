module.exports = {
  siteMetadata: {
    title: "Joshua Aguilar",
    description:
      "The ones who are crazy enough to think they can change the world, are the ones that do",
    siteUrl: "https://joshuaaguilar.me",
    author: "Joshua Aguilar",
    twitter: ""
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joshua Aguilar`,
        short_name: `Joshua Aguilar`,
        start_url: `/`,
        background_color: `#337ab7`,
        theme_color: `#337ab7`,
        display: `fullscreen`,
        icon: `src/static/logo/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-102315844-1",
        head: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
