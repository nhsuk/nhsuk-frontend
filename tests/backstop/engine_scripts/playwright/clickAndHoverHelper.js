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

  for (const keyPressSelectorItem of keyPressSelectors) {
    await page.waitForSelector(keyPressSelectorItem.selector)
    await page.type(
      keyPressSelectorItem.selector,
      keyPressSelectorItem.keyPress
    )
  }

  for (const hoverSelectorItem of hoverSelectors) {
    await page.waitForSelector(hoverSelectorItem)
    await page.hover(hoverSelectorItem)
  }

  for (const clickSelectorItem of clickSelectors) {
    await page.waitForSelector(clickSelectorItem)
    await page.click(clickSelectorItem)
  }

  if (postInteractionWait) {
    if (parseInt(postInteractionWait) > 0) {
      await page.waitForTimeout(postInteractionWait)
    } else {
      await page.waitForSelector(postInteractionWait)
    }
  }

  if (scrollToSelector) {
    await page.waitForSelector(scrollToSelector)
    await page.evaluate((scrollToSelector) => {
      document.querySelector(scrollToSelector).scrollIntoView()
    }, scrollToSelector)
  }
}

/**
 * @import { Scenario } from 'backstopjs'
 * @import { Page } from 'playwright-core'
 */
