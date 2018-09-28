module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },

  rules: {
    'no-restricted-properties': [
      'warn',
      {
        object: 'require',
        property: 'ensure',
        message: 'Please use import() instead. More info: https://webpack.js.org/guides/code-splitting-import/#dynamic-import',
      },
      {
        object: 'System',
        property: 'import',
        message: 'Please use import() instead. More info: https://webpack.js.org/guides/code-splitting-import/#dynamic-import',
      },
    ],
    
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/default': 'warn',
    'import/export': 'warn',
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/no-amd': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        'devDependencies': [
          '**/__tests__/**',
          '**/*.test.js',
          '**/*.story.js'
        ],
        'optionalDependencies': false
      }
    ],
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',
  }
}