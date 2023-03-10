module.exports = {
  'order/order': [
    {
      type: 'at-rule',
      name: 'extend'
    },
    {
      type: 'at-rule',
      name: 'mixin'
    }
  ],
  'declaration-block-single-line-max-declarations': 1,
  'selector-list-comma-newline-after': 'always',
  'color-no-hex': true,
  'color-named': 'never',
  'at-rule-disallowed-list': ['debug', 'warn'],
  'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates-with-different-values'] }], // Permits fallbacks
  'block-no-empty': true,
  'selector-max-id': 0,
  'declaration-no-important': true,
  'color-no-invalid-hex': true,
  'no-duplicate-selectors': true,
  'property-no-unknown': true,
  'declaration-property-value-disallowed-list': {
    transition: ['all'],
    '/^border/': ['none']
  },
  'selector-no-qualifying-type': true,
  'string-quotes': 'double',
  'selector-attribute-quotes': 'always',
  'no-eol-whitespace': true,
  'number-no-trailing-zeros': true,
  'scss/at-import-partial-extension': 'never',
  'scss/at-import-no-partial-leading-underscore': true,
  'shorthand-property-no-redundant-values': true,
  'length-zero-no-unit': true,
  'scss/at-mixin-pattern': '^[-_a-z]+$',
  'scss/percent-placeholder-pattern': '^[-_a-z]+$',
  'block-opening-brace-newline-after': 'always-multi-line',
  'block-opening-brace-space-after': 'always-single-line',
  'block-closing-brace-newline-after': 'always-single-line',
  'block-closing-brace-newline-before': 'always-multi-line',
  'block-closing-brace-space-before': 'always-single-line',
  'value-list-comma-space-after': 'always-single-line',
  'selector-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-after': 'always',
  'declaration-colon-space-before': 'never',
  'media-feature-colon-space-before': 'never',
  'declaration-colon-space-after': 'always',
  'media-feature-colon-space-after': 'always',
  'declaration-bang-space-before': 'always',
  'declaration-bang-space-after': 'never',
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'media-feature-parentheses-space-inside': 'never',
  'function-calc-no-unspaced-operator': true,
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',
  'scss/operator-no-unspaced': true,
  'declaration-block-trailing-semicolon': 'always',
  'no-missing-end-of-source-newline': true
}
