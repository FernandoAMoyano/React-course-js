import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: [ "dist/**/*", "node_modules/**/*" ],
  },

  {
    files: [ "**/*.{js,jsx}" ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },

    plugins: {
      React,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      // Configuraciones base
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ========== ESPACIADO CRÍTICO ==========
      "array-bracket-spacing": [ "error", "always" ],
      "space-in-parens": [ "error", "always" ],
      "object-curly-spacing": [ "error", "always" ],
      "computed-property-spacing": [ "error", "always" ],
      "indent": [ "error", 2 ],
      "space-infix-ops": "error",
      "arrow-spacing": [ "error", { "before": true, "after": true } ],
      "keyword-spacing": [ "error", { "before": true, "after": true } ],
      "comma-spacing": [ "error", { "before": false, "after": true } ],
      "semi-spacing": [ "error", { "before": false, "after": true } ],
      "block-spacing": [ "error", "always" ],
      "space-before-function-paren": [ "error", "always" ],
      "space-before-blocks": [ "error", "always" ],

      // ========== PUNTUACIÓN Y SINTAXIS ==========
      "semi": [ "error", "always" ],
      "quotes": [ "error", "double" ],
      "comma-dangle": [ "error", "always-multiline" ],
      "comma-style": [ "error", "last" ],
      "eol-last": [ "error", "always" ],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": [ "error", { "max": 2, "maxEOF": 1 } ],

      // ========== LLAVES Y CORCHETES ==========
      "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ],
      "curly": [ "error", "all" ],

      // ========== REGLAS DE CÓDIGO ESTÁNDAR ==========
         "no-unused-vars": [ "error", {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
      } ],
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",

      // ========== REACT ==========
      "react-refresh/only-export-components": [
        "warn",
        { "allowConstantExport": true },
      ],
    },
  },
];
