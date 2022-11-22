const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  devServer: {
    //https: true,
    host: "localhost",
  },

  outputDir: path.resolve("/usr/share/nginx/www"),
};
