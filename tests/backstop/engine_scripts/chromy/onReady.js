const clickAndHoverHelper = require('./clickAndHoverHelper')

module.exports = function (chromy, scenario) {
  console.log(`SCENARIO > ${scenario.label}`)
  clickAndHoverHelper(chromy, scenario)

  // add more ready handlers here...
}
