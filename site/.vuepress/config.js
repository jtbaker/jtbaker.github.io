module.exports = {
  title: "Jason Baker",
  theme: "@vuepress/theme-blog",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.ico" }]
  ],
  outDir: "../dist/",
  themeConfig: {
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/posts/",
        itemPermalink: "/posts/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 5
        }
      }
    ],
    nav: [{
      link: "/posts/",
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