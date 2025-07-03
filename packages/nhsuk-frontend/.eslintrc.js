/**
 * @type {ESLint.ConfigData}
 */
module.exports = {
  overrides: [
    {
      files: ['src/**/*.{cjs,js,mjs}'],
      excludedFiles: ['src/**/*.test.{cjs,js,mjs}', 'src/**/macro-options.mjs'],
      extends: [
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:es-x/restrict-to-es2015',
        'prettier'
      ],
      env: {
        browser: true
      },
      parserOptions: {
        // Note: Allow ES2015 for import/export syntax
        ecmaVersion: '2015'
      },
      plugins: ['@typescript-eslint', 'es-x'],
      rules: {
        // Allow void return shorthand in arrow functions
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          {
            ignoreArrowShorthand: true
          }
        ],

        // Check type support for template string implicit `.toString()`
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowBoolean: true,
            allowNumber: true
          }
        ],

        // Babel transpiles ES2020 class fields
        'es-x/no-class-fields': 'off',

        // Babel transpiles ES2022 class instance fields
        'es-x/no-class-instance-fields': 'off',

        // Babel transpiles ES2022 class static fields
        'es-x/no-class-static-fields': 'off',

        // ES modules include ES2016 '[].includes()' coverage
        // https://browsersl.ist/#q=supports+es6-module+and+not+supports+array-includes
        'es-x/no-array-prototype-includes': 'off',

        // Babel transpiles ES2020 `??` nullish coalescing
        'es-x/no-nullish-coalescing-operators': 'off',

        // ES modules include ES2017 'Object.entries()' coverage
        // https://browsersl.ist/#q=supports+es6-module+and+not+supports+object-entries
        'es-x/no-object-entries': 'off',

        // Babel transpiles ES2020 optional chaining
        'es-x/no-optional-chaining': 'off'
      }
    }
  ]
}

/**
 * @import { ESLint } from 'eslint'
 */
