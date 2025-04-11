module.exports = async (page, scenario) => {
  await require('./onReady')(page, scenario);

  await page.evaluate(() => window.dispatchEvent(new Event('resize')));
  await page.waitForTimeout(200);
};
