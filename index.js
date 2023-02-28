/**
 * @type {import('eslint').Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  extends: [
    require.resolve("./rules/base"),
    require.resolve("./rules/react"),
    require.resolve("./rules/typescript"),
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["import", "jsx-a11y", "react", "@typescript-eslint", "tailwindcss"],
  overrides: [
    {
      files: ["src/**/__tests__/**/*", "src/**/*.{spec,test}.*"],
      extends: ["plugin:testing-library/react"],
      rules: {
        // Disable https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
        // It is a good rule, but currently there's not really a viable alternative if you need to look at the DOM (with something like `.closest())
        "testing-library/no-node-access": "off",
      },
    },
  ],
  rules: {
    // https://github.com/francoismassart/eslint-plugin-tailwindcss
    'tailwindcss/classnames-order': 'off', // We use prettier to sort classes
  },
};
