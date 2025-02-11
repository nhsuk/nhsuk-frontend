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
  'color-no-hex': true,
  'declaration-property-value-disallowed-list': {
    transition: ['all'],
    '/^border/': ['none']
  },
  'scss/at-mixin-pattern': '^[-_a-z]+$',
  'scss/percent-placeholder-pattern': '^[-_a-z]+$'
}
