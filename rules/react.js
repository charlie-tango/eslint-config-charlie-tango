import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    name: "ct-react-rules",
    rules: {
      // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
      "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
      "react/jsx-key": "warn",
      "react/jsx-no-comment-textnodes": "warn",
      "react/jsx-no-duplicate-props": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": [
        "warn",
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react/no-danger-with-children": "warn",
      // Disabled because of undesirable warnings
      // See https://github.com/facebook/create-react-app/issues/5204 for
      // blockers until its re-enabled
      // 'react/no-deprecated': 'warn',
      "react/no-direct-mutation-state": "warn",
      "react/no-is-mounted": "warn",
      "react/no-typos": "error",
      "react/require-render-return": "error",
      "react/style-prop-object": "warn",
      // Typescript will warn us of invalid types. This one doesn't correctly infer props when coming from generics, like forwardRef.
      "react/prop-types": "off",
      "react/display-name": "off",

      // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          aspects: ["invalidHref"],
        },
      ],
      "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-role": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",

      // Not working with custom components by default
      "jsx-a11y/click-events-have-key-events": "off",
      // Not working with custom components by default
      "jsx-a11y/label-has-associated-control": "off",

      "jsx-a11y/heading-has-content": "warn",
      "jsx-a11y/iframe-has-title": "warn",
      "jsx-a11y/img-redundant-alt": "warn",
      "jsx-a11y/no-access-key": "warn",
      "jsx-a11y/no-distracting-elements": "warn",
      "jsx-a11y/no-redundant-roles": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "jsx-a11y/scope": "warn",
      "jsx-a11y/no-static-element-interactions": "off",
      // Only allow curly braces for prop values when they are needed - E.g. `<div className={'p-4'} />` should be `<div className="p-4" />`
      // "react/jsx-curly-brace-presence": [
      //   "warn",
      //   { props: "never", children: "never", propElementValues: "always" },
      // ],
    },
  },
];
