const clickAndHoverHelper = require('./clickAndHoverHelper')

module.exports = function (casper, scenario) {
  console.log(`SCENARIO > ${scenario.label}`)
  clickAndHoverHelper(casper, scenario)

  // add more helpers here...
}
