const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Ligo Protocol",
  shortName: "Ligo Protocol",
  description: "A protocol for car sharing agreements",
  author: "codynhat",
  siteUrl: "https://demo-obsidian.owenyoung.com",
};

module.exports = {
  siteMetadata,
  pathPrefix,
  plugins: [
    {
      resolve: `gatsby-theme-kb`,
      options: {
        contentPath: path.resolve(__dirname, "content"),
        rootNote: "Booking",
        wikiLinkLabelTemplate: "[[{{ title }}]]",
        getPluginMdx(defaultPluginMdx) {
          // customise pre-configured `gatsby-plugin-mdx`, for example:
          // defaultPluginMdx.options.gatsbyRemarkPlugins.push({
          //   resolve: 'gatsby-remark-prismjs',
          // })
          return defaultPluginMdx;
        },
      },
    },
  ],
};
