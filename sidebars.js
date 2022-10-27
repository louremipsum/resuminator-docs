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
  //tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  docs: [
    "intro",
    {
      type: "category",
      label: "Introduction",
      collapsed: true,
      items: [
        "introduction/version-1",
        "introduction/quick-start",
        // "introduction/create",
      ],
    },
    {
      type: "category",
      label: "User Guide",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Home Page",
          id: "user-guide/home-page",
        },
        {
          type: "doc",
          label: "Design",
          id: "user-guide/design-page",
        },
        {
          type: "doc",
          label: "Download",
          id: "user-guide/download-page",
        },
      ],
    },
    {
      type: "category",
      label: "Developer Guide",
      collapsed: false,
      items: [
        "developer-guide/tech-stack",
        "developer-guide/setting-up",
        {
          type: "doc",
          label: "Contributing",
          id: "developer-guide/contributing",
        },
      ],
    },
    {
      type: "category",
      label: "Legal",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "CLA",
          id: "legal/cla",
        },
        {
          type: "doc",
          label: "GDPR",
          id: "legal/gdpr",
        },
        {
          type: "doc",
          label: "License",
          id: "legal/license",
        },
        {
          type: "doc",
          label: "Privacy Policy",
          id: "legal/privacy-policy",
        },
        {
          type: "doc",
          label: "Cookie Policy",
          id: "legal/cookie-policy",
        },
        {
          type: "doc",
          label: "Code of Conduct",
          id: "legal/code-of-conduct",
        },
      ],
    },
    {
      type: "doc",
      label: "Changelog",
      id: "changelog",
    },
    {
      type: "doc",
      label: "Hacktoberfest",
      id: "hacktoberfest",
    },
    {
      type: "doc",
      label: "Help & Support",
      id: "support",
    },
  ],
};
