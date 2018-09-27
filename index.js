module.exports = {
  root: true,
  parser: 'babel-eslint',

  extends: [
    './rules/react',
    './rules/base',
    './rules/flow',
    './rules/jest',
    './rules/prettier',
  ].map(require.resolve),

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
    },
  },
}
