module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  customSyntax: 'postcss-scss',
  rules: require('./stylelint-rules.cjs')
}
