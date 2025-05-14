// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const darkCodeTheme = prismThemes.dracula;

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Shard Docs",
  tagline: "by LuminaLabs Games",
  favicon: "img/FavIcon.png",

  // Set the production url of your site here
  url: "https://shard.luminalabs.games/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LuminaLabs-Games", // Usually your GitHub org/user name.
  projectName: "ShardDocumentation", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/LuminaLabs-Games/ShardDocumentation",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/LuminaLabs-Games/ShardDocumentation",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/shard-social-card.png",
      navbar: {
        title: "Shard",
        logo: {
          alt: "LuminaLabs Logo",
          src: "img/shard-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/LuminaLabs-Games/Shard",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://luminalabs.games/",
            label: "LuminaLabs",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
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
                label: "Getting Started",
                to: "/docs/getting-started/",
              },
              {
                label: "Structure Overview",
                to: "/docs/structure-overview/",
              }
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Roblox Group",
                href: "https://www.roblox.com/communities/34588487/LuminaLabs-Games#!/about",
              },
              {
                label: "Discord",
                href: "https://discord.gg/nEbTF8ynH6",
              },
              {
                label: "X",
                href: "https://x.com/LuminaLabsRBLX",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/LuminaLabs-Games/Shard",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LuminaLabs Games, LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua"],
      },
    }),
};

export default config;
