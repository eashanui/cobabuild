import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "react-hooks": reactHooks,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "warn",
      "no-unused-vars": "off",
    },
    languageOptions: {
      globals: {
        React: "readable",
        window: "readable",
        document: "readable",
        console: "readable",
        process: "readable",
        setTimeout: "readable",
        clearTimeout: "readable",
        fetch: "readable",
      },
    },
  },
  {
    ignores: [".next/**", "out/**", "node_modules/**"],
  },
];
