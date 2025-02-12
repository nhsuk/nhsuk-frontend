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
  'color-no-hex': true,
  'color-named': 'never',
  'at-rule-disallowed-list': ['debug'],
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
  'scss/at-import-partial-extension': 'never',
  'scss/at-import-no-partial-leading-underscore': true,
  'shorthand-property-no-redundant-values': true,
  'length-zero-no-unit': true,
  'scss/at-mixin-pattern': '^[-_a-z]+$',
  'scss/percent-placeholder-pattern': '^[-_a-z]+$',
  'function-calc-no-unspaced-operator': true,
  'scss/operator-no-unspaced': true
}
