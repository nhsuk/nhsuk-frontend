module.exports = {
  extends: 'stylelint-config-gds/scss',
  ignoreFiles: [
    '**/dist/**',
    '**/vendor/**',

    // Ignore CSS-in-JS (including dotfiles)
    '**/?(.)*.{cjs,js,mjs}',

    // Prevent CHANGELOG history changes
    'CHANGELOG.md'
  ],
  overrides: [
    {
      customSyntax: 'postcss-markdown',
      files: ['**/*.md']
    },
    {
      customSyntax: 'postcss-markdown',
      files: ['**/coding-standards.md', '**/linting.md'],
      rules: {
        // Allow markdown `*.md` CSS bad examples
        'block-no-empty': null,
        'color-hex-length': null,
        'declaration-block-single-line-max-declarations': null,
        'length-zero-no-unit': null,
        'rule-empty-line-before': null,
        'selector-max-id': null,
        'shorthand-property-no-redundant-values': null,

        // Allow markdown `*.md` Sass bad examples
        'scss/at-if-no-null': null,
        'scss/at-import-no-partial-leading-underscore': null,
        'scss/at-import-partial-extension': null,
        'scss/at-mixin-pattern': null,
        'scss/at-rule-conditional-no-parentheses': null,
        'scss/load-no-partial-leading-underscore': null,
        'scss/load-partial-extension': null,
        'scss/operator-no-unspaced': null
      }
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
  plugins: ['stylelint-order']
}
