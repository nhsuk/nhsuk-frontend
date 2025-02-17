const loadCookies = require('./loadCookies')

module.exports = function (chromy, scenario) {
  loadCookies(chromy, scenario)

  // IGNORE ANY CERT WARNINGS
  chromy.ignoreCertificateErrors()
}
