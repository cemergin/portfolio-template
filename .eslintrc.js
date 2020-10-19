module.exports = {
  parser: "babel-eslint",
  rules: {
    strict: 0,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: [
    "gatsby-plugin-eslint",
    "jsx-a11y",
    "react",
    "import",
    "react-hooks",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
