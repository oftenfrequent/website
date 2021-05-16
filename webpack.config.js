const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const REACT_APP = /^REACT_APP_/i;
const raw = Object.keys(process.env)
  .filter((key) => REACT_APP.test(key))
  .reduce((env, key) => {
    env[key] = process.env[key];
    return env;
  }, {});

module.exports = {
  mode: "development",
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.DefinePlugin({
      REACT_APP: JSON.stringify(raw),
    }),
  ],
  target: "web",
  // resolve: {
  //     fallback: {
  //         "fs": false,
  //         "util": require.resolve("util/"),
  //         "path": require.resolve("path-browserify"),
  //     },
  // },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 8000,
    publicPath: "http://localhost:8080/",
  },
};
