# @charlietango/eslint-config

Provide a baseline configuration and set of ESlint rules for projects written with TypeScript and React.

## Usage

Create a new `eslint.config.js` file, and extend the `@charlietango/eslint-config` inside it.

```js
import ctConfig from "@charlietango/eslint-config";

export default [...ctConfig];
```

You can modify the rules as needed, or add additional rules to the configuration.

## Rules

Provides configuration for the following:

- JavaScript
- TypeScript
- React

All the rules are located under `@charlietango/eslint-config/rules`, and can be imported and used individually.

## Recommend plugins

In addition to this base configuration, we recommend using the following plugins in the application

### [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss/)

```ts
import ctConfig from "@charlietango/eslint-config";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  ...ctConfig,
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "cn"],
        classnamesOrder: "off", // Handled by Prettier
      },
    },
  },
];
```
