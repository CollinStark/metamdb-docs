/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MetAMDB",
  tagline: "Metabolic Atom Mapping Database",
  url: "https://CollinStark.github.io/",
  baseUrl: "/casm/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CollinStark", // Usually your GitHub org/user name.
  projectName: "casm", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "MetAMDB",
      logo: {
        alt: "MetAMDB Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/CollinStark/casm",
          label: "GitHub",
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
              label: "Intro",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/CollinStark/casm",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MetAMDB`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
