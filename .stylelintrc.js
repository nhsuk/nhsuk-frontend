module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: require('./tests/linters/stylelint-rules')
}
