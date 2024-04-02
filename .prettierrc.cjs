module.exports = {
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
        singleQuote: false
      }
    }
  ]
}
