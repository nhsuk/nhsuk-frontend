const onReady = require('./onReady')

module.exports = async function (page, scenario) {
  await onReady(page, scenario)

  await page.evaluate(() => window.dispatchEvent(new Event('resize')))
  await page.waitForTimeout(200)
}
