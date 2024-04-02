module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    es6: true,
    jest: true
  },
  rules: {
    'no-console': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'resolve|reject|err'
      }
    ],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0
  }
}
