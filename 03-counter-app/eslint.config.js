module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-refresh/runtime": true, // Para la recarga en caliente de Vite
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // Deshabilita la regla 'react/react-in-jsx-scope' ya que no es necesaria en React >= 17
    "react/react-in-jsx-scope": "off",
    // Puedes añadir o modificar otras reglas aquí, por ejemplo:
    "react/prop-types": "off", // Deshabilita la comprobación de props-types si no la usas
    "no-unused-vars": "warn", // Muestra advertencias para variables no usadas en lugar de errores
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
