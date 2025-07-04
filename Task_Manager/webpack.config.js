const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    watchFiles: ["./src/html.html"],
    hot: false,
    liveReload: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /styles\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|svg|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};