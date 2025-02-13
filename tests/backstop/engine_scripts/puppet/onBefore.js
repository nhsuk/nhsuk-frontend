const loadCookies = require('./loadCookies')

module.exports = async (page, scenario) => {
  await loadCookies(page, scenario)
}
