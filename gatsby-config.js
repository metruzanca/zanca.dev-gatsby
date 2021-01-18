module.exports = {
  siteMetadata: {
    title: `Zanca.Dev`,
    author: {
      name: `Samuele Zanca`,
      summary: `I build cool stuff, mostly with Typescript.`,
    },
    description: `Personal Blog & Portfolio by Samuele Zanca`,
    siteUrl: `https://zanca.dev/`,
    social: {
      twitter: `metruzanca`,
      linkedin: `samuelz`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zanca.Dev`,
        short_name: `ZancaDev`,
        start_url: `/`,
        background_color: `#353b55`,
        theme_color: `#f7e13a`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    // 'gatsby-plugin-root-import', // TODO absolute imports for components/pages
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-netlify-cms`,
  ],
}
