module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: require('./stylelint-rules')
}
