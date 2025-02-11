module.exports = {
  extends: 'stylelint-config-gds/scss',
  ignoreFiles: [
    '**/dist/**',
    '**/vendor/**',

    // Ignore CSS-in-JS (including dotfiles)
    '**/?(.)*.{cjs,js,mjs}'
  ],
  overrides: [
    {
      customSyntax: 'postcss-markdown',
      files: ['**/*.md']
    },
    {
      customSyntax: 'postcss-markdown',
      files: ['**/coding-standards.md', '**/README.md'],
      rules: {
        // Allow markdown `*.md` CSS bad examples
        'block-no-empty': null,
        'color-no-hex': null,
        'selector-max-id': null,
        'selector-no-qualifying-type': null,

        // Allow markdown `*.md` Sass bad examples
        'scss/dollar-variable-pattern': null
      }
    },
    {
      customSyntax: 'postcss-scss',
      files: ['**/*.scss']
    }
  ],
  plugins: ['stylelint-order'],
  rules: require('./tests/linters/stylelint-rules')
}
