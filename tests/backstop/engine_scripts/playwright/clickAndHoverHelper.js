/**
 * @param {Page} page
 * @param {Scenario} scenario
 */
module.exports = async function (page, scenario) {
  const { postInteractionWait = 0, scrollToSelector } = scenario

  const clickSelectors =
    scenario.clickSelectors ||
    (scenario.clickSelector ? [scenario.clickSelector] : [])

  const hoverSelectors =
    scenario.hoverSelectors ||
    (scenario.hoverSelector ? [scenario.hoverSelector] : [])

  const keyPressSelectors =
    scenario.keyPressSelectors ||
    (scenario.keyPressSelector ? [scenario.keyPressSelector] : [])

  for (const { selector, keyPress } of keyPressSelectors) {
    await page
      .locator(selector)
      .filter({ visible: true })
      .first()
      .pressSequentially(keyPress)
  }

  for (const selector of hoverSelectors) {
    await page.locator(selector).filter({ visible: true }).first().hover()
  }

  for (const selector of clickSelectors) {
    await page.locator(selector).filter({ visible: true }).first().click()
  }

  if (postInteractionWait > 0) {
    await page.waitForTimeout(postInteractionWait)
  }

  if (scrollToSelector) {
    await page
      .locator(scrollToSelector)
      .filter({ visible: true })
      .first()
      .scrollIntoViewIfNeeded()
  }
}

/**
 * @import { Scenario } from 'backstopjs'
 * @import { Page } from 'playwright-core'
 */
