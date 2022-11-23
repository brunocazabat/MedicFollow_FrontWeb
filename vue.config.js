const Dotenv = require("dotenv-webpack");
const path = require("path");
require = require("esm")(module);
const { routes } = require("./.fakeroutes");

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, ".env"),
        safe: true,
        systemvars: true,
        silent: true,
        defaults: false,
      }),
    ],
  },
  devServer: {
    //https: true,
    host: "localhost",
  },
  pluginOptions: {
    sitemap: {
      baseURL: "https://medicfollow.fr",
      routes,
    },
  },
  outputDir: path.resolve("/usr/share/nginx/www"),
};
