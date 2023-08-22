const HtmlWebpackPlugin = require("html-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new CleanWebpackPlugin(), // Clean the output directory before each build
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "JATE",
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: "JATE",
        description: "A text editor for online and offline use.",
        background_color: "#7eb4e2",
        theme_color: "#7eb4e2",
        start_url: "/",
        publicPath: "./",
        fingerprints: false,
        inject: true,
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins:[
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
