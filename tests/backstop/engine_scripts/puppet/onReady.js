const clickAndHoverHelper = require('./clickAndHoverHelper')

module.exports = async (page, scenario) => {
  console.log(`SCENARIO > ${scenario.label}`)
  await clickAndHoverHelper(page, scenario)

  // add more ready handlers here...
}
