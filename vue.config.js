const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  devServer: {
    https: true,
  },
  outputDir: path.resolve("/usr/share/nginx/www"),
};
