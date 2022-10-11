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
          routeBasePath: "/docs/",
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
      image: "img/banner.jpg",
      navbar: {
        logo: {
          alt: "Ligo Logo",
          src: "img/logo.jpg",
        },
        items: [
          {
            href: "https://github.com/Ligo-Protocol",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://twitter.com/ligoplatform",
            className: "header-twitter-link",
            position: "right",
          },
          {
            href: "https://gitcoin.co/grants/7667/ligo-an-open-sharing-economy-platform",
            className: "header-gitcoin-link",
            position: "right",
          },
          {
            href: "https://discord.gg/wWRbKKZh35",
            className: "header-discord-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "docs/",
              },
              {
                label: "Discovery",
                to: "docs/Discovery",
              },
              {
                label: "Transacting",
                to: "docs/Transacting",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Join the Waitlist",
                href: "https://docs.google.com/forms/d/e/1FAIpQLSe82qaf-NKFq6xkYEbHGnFqS8npNGuSzO3xbT_fejklEkFeAA/viewform?usp=sf_link",
              },
              {
                label: "Support Us On Gitcoin",
                href: "https://gitcoin.co/grants/7667/ligo-an-open-sharing-economy-platform",
              },
              {
                label: "Github",
                href: "https://github.com/Ligo-Protocol",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/ligoplatform",
              },
              {
                label: "Discord",
                href: "https://discord.gg/wWRbKKZh35",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
