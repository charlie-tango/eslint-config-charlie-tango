import baseRules from "./rules/base.js";
import tsRules from "./rules/typescript.js";
import reactRules from "./rules/react.js";
import globals from "globals";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  ...baseRules,
  ...tsRules,
  ...reactRules,
];
