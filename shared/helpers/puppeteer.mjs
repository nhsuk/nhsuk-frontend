import { AxePuppeteer } from '@axe-core/puppeteer'
import slug from 'slug'

const {
  PORT = '3000',
  BASE_HOST = `localhost:${PORT}`, // Default via `npm start`
  BASE_URL = `http://${BASE_HOST}/nhsuk-frontend`
} = process.env

/**
 * Axe Puppeteer reporter
 *
 * @param {Page} page - Puppeteer page object
 * @param {RuleObject} [overrides] - Axe rule overrides
 */
export async function axe(page, overrides = {}) {
  const reporter = new AxePuppeteer(page)
    .setLegacyMode(true) // Share single page via iframe
    .include('body')

  /**
   * Shared options for NHS.UK frontend
   *
   * @satisfies {RunOptions}
   */
  const options = {
    runOnly: {
      type: 'tag',
      values: [
        'best-practice',

        // WCAG 2.x
        'wcag2a',
        'wcag2aa',
        'wcag2aaa',

        // WCAG 2.1
        'wcag21a',
        'wcag21aa',

        // WCAG 2.2
        'wcag22aa'
      ]
    },
    rules: {
      /**
       * Ignore 'Element has insufficient color contrast' for WCAG Level AAA
       *
       * Affects buttons, links and hint text etc
       */
      'color-contrast-enhanced': { enabled: false },

      /**
       * Ignore 'Some page content is not contained by landmarks'
       * {@link https://github.com/alphagov/govuk-frontend/issues/1604}
       */
      'region': { enabled: false },
      ...overrides
    }
  }

  // Ignore colour contrast for 'inactive' components
  if (page.url().includes('-disabled')) {
    options.rules['color-contrast'] = { enabled: false }
  }

  // Create report
  const report = await reporter.options(options).analyze()

  /**
   * Add review app preview URL below link to violation
   *
   * @example
   * ```console
   * You can find more information on this issue here:
   * https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr?application=axe-puppeteer
   * http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/
   * ```
   */
  report.violations.forEach((violation) => {
    violation.helpUrl += `\n${new URL(page.url())}`
  })

  return report
}

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

  // Throw on JavaScript page errors
  page.on('pageerror', (error) => {
    throw error
  })

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
  return goTo(await browser.newPage(), `./examples/${example}/`)
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
    ? `/${slug(options.example, { lower: true })}/`
    : '/default/'

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
 * @import { RuleObject, RunOptions } from 'axe-core'
 * @import { Page, Browser } from 'puppeteer'
 */
