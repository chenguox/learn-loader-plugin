const path = require("path");

module.exports = {
  // 打包会默认是 production, 会默认帮我们做一些处理，设置为 development 可以避免一些影响
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        // 匹配后缀为 js 的文件，使用 cgx-loader 进行处理
        test: /\.js$/i,
        use: {
          loader: "cgx-loader",
          // 没有配置 resolveLoader 需要这样写
          // "./my-loader/cgx-loader.js"
        },
      },
    ],
  },
  // 默认会去 node_module 查找 loader，但是我们自定义的loader在my-loader文件夹，所以需要配置一下
  resolveLoader: {
    modules: ["node_module", "./my-loader"],
  },
};