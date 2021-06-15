/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MetAMDB",
  tagline: "Metabolic Atom Mapping Database",
  url: "https://CollinStark.github.io/",
  baseUrl: "/metamdb-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CollinStark", // Usually your GitHub org/user name.
  projectName: "metamdb-docs", // Usually your repo name.
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
          href: "https://github.com/CollinStark/metamdb",
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
              label: "Welcome",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/CollinStark/metamdb",
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
          routeBasePath: "/",
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
