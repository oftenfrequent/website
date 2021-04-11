const path = require('path');

module.exports = {
  mode: 'development',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ]
      },
    ]
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // target: 'node',
  // resolve: {
  //     fallback: {
  //         "fs": false,
  //         "util": require.resolve("util/"),
  //         "path": require.resolve("path-browserify"),
  //     },
  // },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 8000,
    publicPath: 'http://localhost:8080/',
  },
};
