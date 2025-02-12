module.exports = {
  extends: ['airbnb-base', 'prettier'],
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
