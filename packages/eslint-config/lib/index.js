module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    './jsdoc',
    './modules',
    './vanilla',
    './switch-case',
    './regex',
    './react',
    './lodash',
    './dom',
  ].map(require.resolve),
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
