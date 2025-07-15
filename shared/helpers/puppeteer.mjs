import slug from 'slug'

const {
  PORT = '3000',
  BASE_HOST = `localhost:${PORT}`, // Default via `npm start`
  BASE_URL = `http://${BASE_HOST}/nhsuk-frontend`
} = process.env

/**
 * Navigate to path
 *
 * @param {Page} page - Puppeteer page object
 * @param {string} path - Path or URL to navigate to
 */
async function goTo(page, path) {
  const { href, pathname } = new URL(path, `${BASE_URL}/`)

  const response = await page.goto(href)
  const code = response.status()

  // Throw on HTTP errors (e.g. component URL typo)
  if (code >= 400) {
    throw new Error(`HTTP ${code} for '${pathname}'`)
  }

  await page.evaluateHandle('document.fonts.ready')
  await page.bringToFront()

  return page
}

/**
 * Navigate to example
 *
 * @param {Browser} browser - Puppeteer browser object
 * @param {string} exampleName - Example name
 */
export async function goToExample(browser, exampleName) {
  return goTo(await browser.newPage(), `./examples/${exampleName}`)
}

/**
 * Navigate to component preview page
 *
 * @param {Browser} browser - Puppeteer browser object
 * @param {string} [componentName] - Component name
 * @param {object} [options] - Navigation options
 * @param {string} options.exampleName - Example name
 */
export async function goToComponent(browser, componentName, options) {
  let componentPath = `/components/${componentName}`

  // Add example name to URL
  componentPath += options?.exampleName
    ? `/${slug(options.exampleName, { lower: true })}`
    : '/default'

  return goTo(await browser.newPage(), `./${componentPath}`)
}

/**
 * @import { Page, Browser } from 'puppeteer'
 */
