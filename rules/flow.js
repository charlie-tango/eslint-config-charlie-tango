module.exports = {
  plugins: ['flowtype'],
  extends: ['plugin:flowtype/recommended'],

  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn',
  }
}