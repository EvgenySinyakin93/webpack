const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  rules: [
    {
      test: /\.(scss|css)$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
      filename: "index.html",
    }),
  ],
};
