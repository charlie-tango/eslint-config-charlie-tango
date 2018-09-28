/**
 * Inspired by create-react-app:
 * https://github.com/facebookincubator/create-react-app/blob/master/packages/eslint-config-react-app
 */

module.exports = {
  root: true,
  parser: 'babel-eslint',

  extends: [
    './rules/import',
    './rules/flow',
    './rules/prettier',
    './rules/jest',
    './rules/react',
    './rules/jsx-a11y',
    './rules/base',
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
      generators: true,
    },
  },
}
