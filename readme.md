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
