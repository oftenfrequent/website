const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  //   output: {
  //     path: __dirname + '/dist',
  //     publicPath: '/',
  //     filename: 'bundle.js',
  //     // filename:      production ? '[name]-[hash].js' : 'bundle.js',
  //     // chunkFilename: '[name]-[chunkhash].js'
  //   },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
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
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
  },
};
