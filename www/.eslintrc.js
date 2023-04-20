// @ts-check

const { extendEslint } = require("@grikomsn/style-guide");

module.exports = extendEslint(["browser-node", "typescript"], {
  ignorePatterns: ["dist", "dist-ssr"],
  root: true,
});
