const globalSettings = require("./src/settings/globalSettings");

module.exports = {
  siteMetadata: {
    siteUrl: globalSettings.meta.url,
    author: globalSettings.meta.author,
    title: globalSettings.meta.siteName,
    description: globalSettings.meta.description,
  },

  // Allows the use JSX without React imports
  jsxRuntime: "automatic",

  plugins: [
    // Gatsby Manifest (generating favicon and more advanced meta tags in head)
    // -> https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: `/`,
        icon: "src/Assets/images/favicon.png",
      },
    },

    // Anchor links: https://www.gatsbyjs.com/plugins/gatsby-plugin-anchor-links/
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 800,
      },
    },

    // File system: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

    // Postcss: https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/
    "gatsby-plugin-postcss",

    // Gatsby plugin image (and other needed plugins)
    // -> General: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    // -> Static image: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // React helmet: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    "gatsby-plugin-react-helmet",

    // Sitemap: https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
    "gatsby-plugin-sitemap",

    // Remove generator meta tag (security reasons): https://www.gatsbyjs.com/plugins/gatsby-plugin-remove-generator/
    "gatsby-plugin-remove-generator",

    // Absolute path imports: https://www.gatsbyjs.com/plugins/gatsby-plugin-root-import/
    "gatsby-plugin-root-import",

    // Added support for Markdown files: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",

    // I18n
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "cs",
        useLangKeyLayout: false,
      },
    },
  ],
};
