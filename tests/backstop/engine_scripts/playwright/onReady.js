const clickAndHoverHelper = require('./clickAndHoverHelper')

/**
 * @param {Page} page
 * @param {Scenario} scenario
 */
module.exports = async function (page, scenario) {
  await clickAndHoverHelper(page, scenario)
}

/**
 * @import { Scenario } from 'backstopjs'
 * @import { Page } from 'playwright-core'
 */
