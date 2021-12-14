// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Simple",
  tagline: "As Simple as that",
  url: "https://editor.simpleneeraj.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Simple", // Usually your GitHub org/user name.
  projectName: "Simple", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
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
        title: "Simple",
        logo: {
          alt: "logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            label: "Blog",
            position: "right",
            to: "/blog",
          },
        ],
      },

      //======================================//
      //Footer
      //======================================//
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                href: "/docs/intro",
              },
            ],
          },
          {
            title: "Media",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com/simpleneeraj",
              },
            ],
          },
          {
            title: "Terms",
            items: [
              {
                label: "Privacy & Policy",
                to: "terms/privacy",
              },
              {
                label: "Terms & Conditions",
                to: "terms/conditions",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simple Neeraj`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
