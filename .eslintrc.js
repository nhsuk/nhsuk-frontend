/**
 * @type {ESLint.ConfigData}
 */
module.exports = {
  extends: ['prettier'],
  parser: '@babel/eslint-parser',
  ignorePatterns: [
    '**/coverage/**',
    '**/dist/**',
    '**/engine_scripts/**/*',

    // Enable dotfile linting
    '!.*',
    'node_modules',
    'node_modules/.*'
  ],
  overrides: [
    {
      files: ['**/*.{cjs,js,mjs}'],
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:jest/style',
        'plugin:n/recommended',
        'plugin:promise/recommended',
        'prettier'
      ],
      parserOptions: {
        ecmaVersion: 'latest'
      },
      plugins: ['import', 'n', 'promise', 'jest'],
      rules: {
        // Check import or require statements are A-Z ordered
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            'newlines-between': 'always'
          }
        ],

        // Automatically use template strings
        'no-useless-concat': 'error',
        'prefer-template': 'error',

        // Flow control – avoid continue and else blocks after return statements
        // in if statements
        'no-continue': 'error',
        'no-else-return': 'error',

        // Avoid hard to read multi assign statements
        'no-multi-assign': 'error'
      }
    },
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
      // ES modules mandatory file extensions
      files: ['**/*.mjs'],
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
      files: ['**/*.test.{cjs,js,mjs}'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: {
        browser: true,
        'jest/globals': true
      },
      globals: {
        page: 'readonly',
        browser: 'readonly',
        jestPuppeteer: 'readonly'
      },
      plugins: ['jest'],
      rules: {
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off'
      }
    }
  ],
  root: true
}

/**
 * @import { ESLint } from 'eslint'
 */
