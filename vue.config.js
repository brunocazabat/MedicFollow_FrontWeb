const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  outputDir: path.resolve("/usr/share/nginx/www"),
};
