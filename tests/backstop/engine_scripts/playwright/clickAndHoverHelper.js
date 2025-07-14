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

  const activeSelectors =
    scenario.activeSelectors ||
    (scenario.activeSelector ? [scenario.activeSelector] : [])

  const focusSelectors =
    scenario.focusSelectors ||
    (scenario.focusSelector ? [scenario.focusSelector] : [])

  const keyPressSelectors =
    scenario.keyPressSelectors ||
    (scenario.keyPressSelector ? [scenario.keyPressSelector] : [])

  for (const { selector, keyPress } of keyPressSelectors) {
    const locator = getLocator(page, selector)

    await page.bringToFront()
    await locator.pressSequentially(keyPress)
  }

  for (const selector of hoverSelectors) {
    const locator = getLocator(page, selector)

    await page.bringToFront()
    await locator.hover()
  }

  for (const selector of activeSelectors) {
    const locator = getLocator(page, selector)

    await page.bringToFront()
    await locator.hover()
    await page.mouse.down()
  }

  for (const selector of focusSelectors) {
    const locator = getLocator(page, selector)

    await page.bringToFront()
    await locator.focus()
  }

  for (const selector of clickSelectors) {
    const locator = getLocator(page, selector)

    await page.bringToFront()
    await locator.click()
  }

  if (postInteractionWait > 0) {
    await page.waitForTimeout(postInteractionWait)
  }

  if (scrollToSelector) {
    await getLocator(page, scrollToSelector).scrollIntoViewIfNeeded()
    await page.bringToFront()
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
