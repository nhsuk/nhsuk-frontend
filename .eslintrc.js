module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  ignorePatterns: [
    '**/coverage/**',
    '**/dist/**',

    // Enable dotfile linting
    '!.*',
    'node_modules',
    'node_modules/.*'
  ],
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
  },
  overrides: [
    {
      files: ['packages/**/*.{cjs,js,mjs}', '**/*.test.{cjs,js,mjs}'],
      env: {
        browser: true
      },
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['**/engine_scripts/**/*.{cjs,js,mjs}', '**/*.test.{cjs,js,mjs}'],
      env: {
        browser: true,
        jest: true
      }
    }
  ],
  root: true
}
