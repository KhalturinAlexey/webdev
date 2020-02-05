const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  entry: './src/js/main.js',
  entry: {
    main: './src/js/main.js',
    styles: './src/css/styles.css'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};