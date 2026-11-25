/**
 * Prettier config
 *
 * {@link https://prettier.io/docs/en/options.html}
 *
 * @type {Config}
 */
module.exports = {
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.md',
      options: {
        embeddedLanguageFormatting: 'off',
        singleQuote: false
      }
    },
    {
      files: '*.scss',
      options: {
        printWidth: 120,
        singleQuote: false
      }
    },
    {
      files: 'fixtures.mjs',
      options: {
        singleQuote: false
      }
    }
  ]
}

/**
 * @import { Config } from 'prettier'
 */
