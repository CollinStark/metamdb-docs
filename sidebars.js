/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mySidebar: [
    {
      type: "category",
      label: "Welcome",
      items: [
        {
          type: "doc",
          label: "About Docs",
          id: "intro",
        },
      ],
    },
    {
      type: "category",
      label: "Atom Mapping",
      items: ["atom-mapping/reaction-model", "atom-mapping/atom-mapping-model"],
    },
    {
      type: "category",
      label: "Database Query",
      items: [
        "database-query/search",
        "database-query/reaction",
        "database-query/metabolite",
      ],
    },
    { type: "doc", id: "api", label: "Api" },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
