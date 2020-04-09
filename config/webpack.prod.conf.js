const merge = require('webpack-merge');

const path = require('path');

const root = path.resolve(__dirname, '..');
const distPath = path.resolve(root, 'dist');
const srcPath = path.resolve(root, 'src');
const base = require('./webpack.base.conf');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(srcPath, 'index.tsx'),
  output: {
    library: 'ReactImage',
    libraryTarget: 'umd',
    path: distPath,
    filename: 'index.js',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
  },
  resolve: {
    alias: {
      react: path.resolve(root, './node_modules/react'),
      'react-dom': path.resolve(root, './node_modules/react-dom'),
      'prop-types': path.resolve(root, './node_modules/prop-types'),
    },
  },
  optimization: {
    minimize: true,
  },
});
