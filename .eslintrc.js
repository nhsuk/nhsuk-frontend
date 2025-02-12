module.exports = {
  extends: ['prettier'],
  parser: '@babel/eslint-parser',
  ignorePatterns: [
    '**/coverage/**',
    '**/dist/**',

    // Enable dotfile linting
    '!.*',
    'node_modules',
    'node_modules/.*'
  ],
  overrides: [
    {
      files: ['packages/**/*.{cjs,js,mjs}', '**/*.test.{cjs,js,mjs}'],
      env: {
        browser: true
      },
      parserOptions: {
        sourceType: 'module'
      },
      rules: {
        'import/extensions': [
          'error',
          'always',
          {
            ignorePackages: true,
            pattern: {
              cjs: 'always',
              js: 'always',
              mjs: 'always'
            }
          }
        ]
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
