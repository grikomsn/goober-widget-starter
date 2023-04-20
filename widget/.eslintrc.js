// @ts-check

const { extendEslint } = require("@grikomsn/style-guide");

module.exports = extendEslint(["browser-node", "react", "tsup", "typescript"], {
  ignorePatterns: ["dist"],
  root: true,
});
