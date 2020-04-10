module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    cssnano: {},
    autoprefixer: { overrideBrowserslist: ['last 2 versions', 'iOS >= 8'] },
  },
};
