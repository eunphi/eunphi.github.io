/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: "eunphi",
    siteDescription: "My digital garden",
    siteUrl: "https://eunphi.github.io",
    keywords: "CTF, eunphi",
    author: {
      name: "eunphi",
    },
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "eunphi",
        short_name: "eunphi",
        description: "Welcome to my world.",
        start_url: "/",
        background_color: "dark",
        theme_color: "#161e2e",
        display: "minimal-ui",
        icon: `static/me.jpg`,
      },
    },

    // ===================================================================================
    // Static
    // ===================================================================================
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

    // ===================================================================================
    // CSS
    // ===================================================================================
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              withWebp: true,
              showCaptions: true,
              quality: 100,
            },
          },
          "gatsby-remark-static-images",
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },

    // ===================================================================================
    // Search
    // ===================================================================================
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
                {
                  allMarkdownRemark {
                    nodes {
                      id
                      frontmatter {
                        title
                        tags
                        slug
                        date(formatString: "DD MMMM YYYY")
                      }
                      rawMarkdownBody
                    }
                  }
                }
              `,
        ref: "id",
        index: ["title", "tags"],
        store: ["id", "slug", "title", "tags", "date"],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            slug: `/${node.frontmatter.slug}`,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            tags: node.frontmatter.tags,
            date: node.frontmatter.date,
          })),
      },
    },
  ],
}
