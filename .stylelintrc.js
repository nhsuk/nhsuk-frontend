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

        // Allow markdown `*.md` Sass bad examples
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
        'selector-max-id': null,
        'selector-no-qualifying-type': null
      }
    },
    {
      customSyntax: 'postcss-scss',
      files: ['**/*.scss']
    }
  ],
  plugins: ['stylelint-order']
}
