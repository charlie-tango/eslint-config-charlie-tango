import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  {
    name: "ct-typescript-rules",
    rules: {
      // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
      "default-case": "off",

      // Add TypeScript specific rules (and turn off ESLint equivalents)
      "@typescript-eslint/no-array-constructor": "warn",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-use-before-define": [
        "warn",
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          caughtErrors: "none",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-useless-constructor": "warn",
    },
  },
];
