// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const wikiLinkPlugin = require("remark-wiki-link");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ligo Protocol",
  tagline: "A protocol for car sharing agreements",
  url: "https://ligo-book.codyhatfield.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: "img/favicon.ico",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  staticDirectories: ["docs/drawings"],
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
        title: "Ligo Protocol",
        // logo: {
        //   alt: "Ligo Protocol Logo",
        //   src: "img/logo.svg",
        // },
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Cody Hatfield (@codynhat)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
