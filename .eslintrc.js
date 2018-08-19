'use strict';

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 8
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      },
    ],
    quotes: [
      2,
      'single'
    ],
    eqeqeq: ['error', 'always'],
    'no-console': 0
  },
};
