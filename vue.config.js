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
  outputDir: path.resolve(__dirname),
  assetsDir: "dist",
};
