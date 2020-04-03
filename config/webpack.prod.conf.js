const merge = require('webpack-merge');

const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const srcPath = path.resolve(__dirname, '../src');
const base = require('./webpack.base.conf');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(srcPath, 'index.tsx'),
  output: {
    library: 'react-image',
    libraryTarget: 'commonjs2',
    path: distPath,
    filename: 'index.js',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  optimization: {
    minimize: true,
  },
});
