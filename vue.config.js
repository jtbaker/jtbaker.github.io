const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("raw")
  //     .test(/\.txt$/i)
  //     .use("raw-loader")
  //     .loader("raw-loader")
  //     .end();
  // },
  publicPath: "jtbaker.github.io"
};
