import tseslint from "typescript-eslint";
import baseRules from "./rules/typescript.js";
import tsRules from "./rules/typescript.js";
import reactRules from "./rules/react.js";

export default tseslint.config(...baseRules, ...tsRules, ...reactRules);
