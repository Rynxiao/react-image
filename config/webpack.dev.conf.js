const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const srcPath = path.resolve(__dirname, '../src');
const base = require('./webpack.base.conf');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.join(srcPath, 'app.tsx'),
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
      hash: true,
    }),
  ],
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
});
