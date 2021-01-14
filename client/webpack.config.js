const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: IS_PRODUCTION ? "production" : "development",
  devtool: IS_PRODUCTION ? "" : "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    host: "localhost",
    public: process.env.CLIENT_PUBLIC_HOST,
    port: 4200,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use:[
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Social Media",
      filename: "index.html",
      template: "src/index.html"
    }),
    new Dotenv({systemvars: true}),
  ]
};
