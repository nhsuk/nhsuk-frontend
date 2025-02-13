const loadCookies = require('./loadCookies')

module.exports = function (casper, scenario) {
  loadCookies(casper, scenario)
  casper.userAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
  )
}
