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
 * @param {string | URL} pathOrUrl - Path or URL to navigate to
 */
async function goTo(page, pathOrUrl) {
  const { href, pathname } = !(pathOrUrl instanceof URL)
    ? getURL(pathOrUrl) // Build URL from base
    : pathOrUrl

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
 * @param {string} example - Example name
 */
export async function goToExample(browser, example) {
  return goTo(await browser.newPage(), `./examples/${example}`)
}

/**
 * Navigate to component preview page
 *
 * @param {Browser} browser - Puppeteer browser object
 * @param {string} [component] - Component name
 * @param {object} [options] - Navigation options
 * @param {string} options.example - Example name
 */
export async function goToComponent(browser, component, options) {
  const componentPath = getComponentPath(component, options)
  return goTo(await browser.newPage(), `.${componentPath}`)
}

/**
 * Get component preview review app URL
 *
 * @param {string} [component] - Component name
 * @param {object} [options] - Navigation options
 * @param {string} options.example - Example name
 */
export function getComponentURL(component, options) {
  const componentPath = getComponentPath(component, options)
  return getURL(`.${componentPath}`)
}

/**
 * Get component preview path
 *
 * @param {string} [component] - Component name
 * @param {object} [options] - Navigation options
 * @param {string} options.example - Example name
 */
export function getComponentPath(component, options) {
  let componentPath = `/components/${component}`

  // Add example name to URL
  componentPath += options?.example
    ? `/${slug(options.example, { lower: true })}`
    : '/default'

  return componentPath
}

/**
 * Get review app URL
 *
 * @param {string} path - Path to navigate to
 */
export function getURL(path) {
  return new URL(path, `${BASE_URL}/`)
}

/**
 * @import { Page, Browser } from 'puppeteer'
 */
