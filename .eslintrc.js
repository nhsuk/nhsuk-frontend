/**
 * @type {ESLint.ConfigData}
 */
module.exports = {
  extends: ['prettier'],
  ignorePatterns: [
    '**/coverage/**',
    '**/dist/**',

    // Enable dotfile linting
    '!.*',
    'node_modules',
    'node_modules/.*',

    // Prevent CHANGELOG history changes
    'CHANGELOG.md'
  ],
  overrides: [
    {
      files: [
        '**/*.{cjs,js,mjs}',

        // Check markdown `*.md` contains valid code blocks
        // https://www.npmjs.com/package/eslint-plugin-markdown#user-content-advanced-configuration
        '**/*.md/*.{cjs,js,mjs}'
      ],
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
        'plugin:jsdoc/recommended-typescript-flavor',
        'plugin:n/recommended',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
        'prettier'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest'
      },
      plugins: [
        '@typescript-eslint',
        'import',
        'jsdoc',
        'n',
        'promise',
        'jest',
        'jest-dom'
      ],
      rules: {
        // Check import or require statements are A-Z ordered
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            'newlines-between': 'always'
          }
        ],

        // Check for valid formatting
        'jsdoc/check-line-alignment': [
          'warn',
          'never',
          {
            wrapIndent: '  '
          }
        ],

        // JSDoc blocks can use `@preserve` to prevent removal
        'jsdoc/check-tag-names': [
          'warn',
          {
            definedTags: ['preserve']
          }
        ],

        // JSDoc blocks are optional by default
        'jsdoc/require-jsdoc': 'off',

        // Require hyphens before param description
        // Aligns with TSDoc style: https://tsdoc.org/pages/tags/param/
        'jsdoc/require-hyphen-before-param-description': 'warn',

        // JSDoc @param required in (optional) blocks but
        // @param description is not necessary by default
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-param': 'off',

        // JSDoc @returns is optional
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-returns': 'off',

        // Maintain new line after description
        'jsdoc/tag-lines': [
          'warn',
          'never',
          {
            startLines: 1
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
      },
      settings: {
        jsdoc: {
          // Allows us to use type declarations that exist in our dependencies
          mode: 'typescript'
        }
      }
    },
    {
      // CommonJS modules allow require statements
      files: ['**/*.{cjs,js}'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off'
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
      // Configure ESLint in test files
      files: [
        '**/*.test.{cjs,js,mjs}',
        'jest?(.*).config.*',
        'jest?(.*).setup.*'
      ],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: {
        browser: true,
        'jest/globals': true
      },
      plugins: ['jest'],
      rules: {
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off'
      }
    },
    {
      // Configure ESLint in test files (Jest Puppeteer environment only)
      files: ['**/*.puppeteer.test.{js,mjs}'],
      globals: {
        page: 'readonly',
        browser: 'readonly',
        jestPuppeteer: 'readonly'
      }
    },
    {
      // Configure ESLint in Markdown files
      files: ['**/*.md'],
      extends: ['plugin:markdown/recommended-legacy'],
      plugins: ['markdown'],
      processor: 'markdown/markdown'
    },
    {
      // Configure ESLint in Markdown code blocks
      files: ['**/*.md/*.{cjs,js,mjs}'],
      env: {
        browser: true
      },
      rules: {
        'import/no-unresolved': 'off',
        'n/no-missing-import': 'off',
        'prefer-template': 'off'
      }
    }
  ],
  root: true
}

/**
 * @import { ESLint } from 'eslint'
 */
