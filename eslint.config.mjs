import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...eslintPluginAstro.configs["recommended"],

  {
    ignores: ["package.json", "pnpm-lock.yaml"],
    rules: {
      "arrow-body-style": "error",
      camelcase: "warn",
      "class-methods-use-this": "error",
      "default-case": "error",
      eqeqeq: "error",
      "getter-return": "error",
      "no-constant-condition": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "warn",
      "no-empty": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-irregular-whitespace": "error",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "prefer-const": "error",
      semi: "warn",
    },
  },
]);
