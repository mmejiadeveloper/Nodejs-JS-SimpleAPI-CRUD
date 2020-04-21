module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": 1,
    "func-names": 0,
    "eqeqeq": 0,
    "max-lines": ["error", 400],
    "prefer-destructuring": ["error", {"object": false, "array": false}]
  },
};
