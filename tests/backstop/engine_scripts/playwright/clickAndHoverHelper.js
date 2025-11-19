/**
 * @param {Page} page
 * @param {Scenario} scenario
 */
module.exports = async function (page, scenario) {
  const { postInteractionWait = 0, scrollToSelector } = scenario

  const clickSelectors =
    scenario.clickSelectors ??
    (scenario.clickSelector ? [scenario.clickSelector] : [])

  const hoverSelectors =
    scenario.hoverSelectors ??
    (scenario.hoverSelector ? [scenario.hoverSelector] : [])

  const activeSelectors =
    scenario.activeSelectors ??
    (scenario.activeSelector ? [scenario.activeSelector] : [])

  const focusSelectors =
    scenario.focusSelectors ??
    (scenario.focusSelector ? [scenario.focusSelector] : [])

  const keyPressSelectors =
    scenario.keyPressSelectors ??
    (scenario.keyPressSelector ? [scenario.keyPressSelector] : [])

  for (const { selector, keyPress } of keyPressSelectors) {
    await getLocator(page, selector).pressSequentially(keyPress)
  }

  for (const selector of hoverSelectors) {
    await getLocator(page, selector).hover()
  }

  for (const selector of activeSelectors) {
    await getLocator(page, selector).hover()
    await page.mouse.down()
  }

  for (const selector of focusSelectors) {
    await getLocator(page, selector).focus()
  }

  for (const selector of clickSelectors) {
    await getLocator(page, selector).click()
  }

  if (postInteractionWait > 0) {
    await page.waitForTimeout(postInteractionWait)
  }

  if (scrollToSelector) {
    await getLocator(page, scrollToSelector).scrollIntoViewIfNeeded()
  }
}

/**
 * @param {Page} page
 * @param {string} selector
 */
function getLocator(page, selector) {
  return page.locator(selector).filter({ visible: true }).first()
}

/**
 * @import { Scenario } from 'backstopjs'
 * @import { Page } from 'playwright-core'
 */
