import { defineConfig } from "tsup";

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ["src/index.tsx"],
  format: ["iife"],
  minify: true,
  tsconfig: "tsconfig.build.json",
});
