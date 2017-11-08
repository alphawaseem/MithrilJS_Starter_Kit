const path = require('path');

const htmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: true
});

const config = {
  entry: './public/src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: path.resolve(__dirname, 'node_modules') },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: path.resolve(__dirname, 'node_modules') },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.ts$/, use: [
          {
            loader: 'babel-loader'
          }, {
            loader: 'ts-loader'
          }
        ], exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [htmlWebpackPluginConfig, extractSass]

}

module.exports = config;