module.exports = {
  extends: ["zeal", "zeal/react", "prettier", "prettier/react"],
  plugins: ["prettier"],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "prettier/prettier": "error",
    complexity: ["error", 4]
  },
  parser: "babel-eslint",
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: ["app/javascript", "node_modules"]
          }
        }
      }
    }
  }
};
