module.exports {
  parser: 'babel-eslint',

  extends: [
    './rules/base',
    './rules/prettier',
    './rules/jest',
    './rules/flow',
    './rules/react',
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