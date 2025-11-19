const clickAndHoverHelper = require('./clickAndHoverHelper')

/**
 * @param {Page} page
 * @param {Scenario} scenario
 */
module.exports = async function (page, scenario) {
  await page.evaluateHandle('document.fonts.ready')

  // Apply state selectors etc
  await clickAndHoverHelper(page, scenario)
  if (page.isClosed()) {
    return
  }

  await page.dispatchEvent('body', 'resize')
  await page.waitForTimeout(200)
}

/**
 * @import { Scenario } from 'backstopjs'
 * @import { Page } from 'playwright-core'
 */
