// const baseRules = require("./rules/base.js");
// const importRules = require("./rules/import.js");
// const jsxRules = require("./rules/jsx-a11y.js");
// const reactRules = require("./rules/react.js");
// const tsRules = require("./rules/typescript.js");

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
  ],
  plugins: ["import", "jsx-a11y", "react", "@typescript-eslint"],
  overrides: [
    {
      files: ["src/**/__tests__/**/*", "src/**/*.{spec,test}.*"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
