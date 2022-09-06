// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const wikiLinkPlugin = require("remark-wiki-link");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ligo",
  tagline: "An open sharing economy platform",
  url: "https://ligo.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  staticDirectories: ["docs/drawings", "static"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          exclude: ["drawings/*"],
          remarkPlugins: [
            [
              wikiLinkPlugin,
              {
                pageResolver: (name) => [name],
                hrefTemplate: (permalink) => `${permalink}`,
              },
            ],
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Ligo Logo",
          src: "img/logo.jpg",
        },
      },
      footer: {
        style: "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
