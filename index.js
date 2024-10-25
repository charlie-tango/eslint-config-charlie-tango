import baseRules from "./rules/base.js";
import tsRules from "./rules/typescript.js";
import reactRules from "./rules/react.js";

export default [...baseRules, ...tsRules, ...reactRules];
