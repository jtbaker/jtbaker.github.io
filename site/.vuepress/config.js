module.exports = {
  title: "Jason Baker",
  theme: "@vuepress/blog",
  outDir: "../dist/",
  themeConfig: {
    nav: [{
        link: "/",
        text: "Blog",
      },
      {
        link: "/tag/",
        text: "Tags",
      },
      {
        link: "/about/",
        text: "About Me",
        // home: true
      },
    ],
    footer: {
      contact: [{
          type: "github",
          link: "https://github.com/jtbaker",
        },
        {
          type: "twitter",
          link: "https://twitter.com/jasonbaker",
        },
        {
          type: "linkedin",
          link: "https://linkedin.com/in/jasontbaker",
        },
      ],
    },
  },
};