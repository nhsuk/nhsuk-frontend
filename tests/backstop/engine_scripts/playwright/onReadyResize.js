const onReady = require('./onReady')

/**
 * @param {Page} page
 * @param {Scenario} scenario
 */
module.exports = async function (page, scenario) {
  await onReady(page, scenario)

  await page.dispatchEvent('body', 'resize')
  await page.waitForTimeout(200)
}

/**
 * @import { Scenario } from 'backstopjs'
 * @import { Page } from 'playwright-core'
 */
