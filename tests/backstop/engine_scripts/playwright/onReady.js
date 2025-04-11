const clickAndHoverHelper = require('./clickAndHoverHelper')

/**
 * @param {Page} page
 * @param {Scenario} scenario
 */
module.exports = async function (page, scenario) {
  console.log(`SCENARIO > ${scenario.label}`)
  await clickAndHoverHelper(page, scenario)

  // add more ready handlers here...
}

/**
 * @import { Scenario } from 'backstopjs'
 * @import { Page } from 'playwright-core'
 */
