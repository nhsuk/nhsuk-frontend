import util from 'node:util'

import { AxeBuilder } from '@axe-core/playwright'
import { mergeExample } from '@nhsuk/frontend-lib/components.mjs'
import { components, names } from 'nhsuk-frontend/src/nhsuk/lib/index.mjs'
import slug from 'slug'

const {
  PORT = '3000',
  BASE_HOST = `localhost:${PORT}`, // Default via `npm start`
  BASE_URL = `http://${BASE_HOST}/nhsuk-frontend`
} = process.env

/**
 * Axe Playwright reporter
 *
 * @param {Page} page - Playwright page object
 * @param {RuleObject} [overrides] - Axe rule overrides
 * @param {NavigationOptions} [options] - Navigation options
 */
export async function axe(page, overrides = {}, options) {
  const reporter = new AxeBuilder({ page })
    .setLegacyMode(true) // Share single page via iframe
    .include('body')

  /**
   * Shared options for NHS.UK frontend
   *
   * @satisfies {RunOptions}
   */
  const axeOptions = {
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
       * Ignore 'Some page content is not contained by landmarks'
       * {@link https://github.com/alphagov/govuk-frontend/issues/1604}
       */
      region: { enabled: false },
      ...overrides
    }
  }

  // Ignore colour contrast for 'inactive' components
  if (page.url().includes('-disabled')) {
    axeOptions.rules['color-contrast'] = { enabled: false }
  }

  // Ignore colour contrast (enhanced) for listing pages and blue backgrounds
  if (!options || options.example?.layout === 'background-blue') {
    axeOptions.rules['color-contrast-enhanced'] = { enabled: false }
  }

  // Create report
  const report = await reporter.options(axeOptions).analyze()

  // Log accessibility violations
  if (report.violations.length) {
    console.log('')

    for (const violation of report.violations) {
      for (const node of violation.nodes) {
        let message = ''

        message += `Expected the HTML found at $('${node.target.join(', ')}') to have no violations:\n\n`
        message += `    ${util.styleText('gray', node.html)}\n\n`

        message += `Received ${violation.impact ?? 'minor'} violation:\n\n`
        message += `${util.styleText('red', `${violation.help} (${violation.id})`)}\n\n`
        message += `${util.styleText('yellow', node.failureSummary ?? '')}\n\n`

        message += 'You can find more information on this issue here:\n'
        message += `${util.styleText('blue', violation.helpUrl)}\n`
        message += `${util.styleText('blue', page.url())}\n`

        message += `\n${util.styleText('dim', '────────')}\n`

        console.log(message)
      }
    }

    throw new Error('Axe issues found')
  }

  return report.violations
}

/**
 * Throw on page errors
 *
 * @param {Error} error - Page error
 */
function onPageError(error) {
  throw error
}

/**
 * Navigate to path
 *
 * @param {Page} page - Playwright page object
 * @param {string | URL} pathOrUrl - Path or URL to navigate to
 * @param {NavigationOptions} [options] - Navigation options
 */
async function goTo(page, pathOrUrl, options) {
  const { href, pathname } = !(pathOrUrl instanceof URL)
    ? getURL(pathOrUrl) // Build URL from base
    : pathOrUrl

  // Remove previous error handler
  page.off('pageerror', onPageError)

  // Add error handler unless suppressed
  if (options?.example?.throwOnError !== false) {
    page.on('pageerror', onPageError)
  }

  const response = await page.goto(href)
  const code = response?.status()

  // Throw on HTTP errors (e.g. component URL typo)
  if (!code || code >= 400) {
    throw code
      ? new TypeError(`HTTP code for '${pathname}' is not defined`)
      : new Error(`HTTP ${code} for '${pathname}'`)
  }

  await page.evaluateHandle('document.fonts.ready')

  return page
}

/**
 * Navigate to example
 *
 * @param {Page} page - Playwright page object
 * @param {string} example - Example name
 */
export async function goToExample(page, example) {
  return goTo(page, `./examples/${example}/`)
}

/**
 * Navigate to component preview page
 *
 * @param {Page} page - Playwright page object
 * @param {string} component - Component name
 * @param {NavigationOptions} [options] - Navigation options
 */
export async function goToComponent(page, component, options) {
  const componentPath = getComponentPath(component, options)
  return goTo(page, `.${componentPath}`, options)
}

/**
 * Render component HTML with browser preview
 *
 * Provide optional handlers to tweak the state of the page before or after
 * the component gets initialised:
 *
 * - `beforeInitialisation()`
 * - `afterInitialisation()`
 *
 * @template {object} HandlerContext
 * @param {Page} page - Playwright page object
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [renderOptions] - Nunjucks macro render options
 * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
 */
export async function render(page, component, renderOptions, browserOptions) {
  const html = components.render(component, renderOptions)

  // Navigate to boilerplate page
  await goTo(page, './components/boilerplate/')

  // Inject rendered HTML into the page
  await page.locator('.app-placeholder').evaluate(($placeholder, html) => {
    $placeholder.innerHTML = html
  }, html)

  const selector = `[data-module="nhsuk-${component}"]`
  const exportName = names.componentNameToClassName(component)

  // Run custom function before component init
  if (browserOptions?.beforeInitialisation) {
    await page
      .locator(selector)
      .first()
      .evaluate(
        /** @type {BrowserRenderFunction} */ (
          browserOptions.beforeInitialisation
        ),
        browserOptions.context ?? { selector }
      )
  }

  // Init component using JavaScript class
  if (
    await page.evaluate(() => document.body.classList.contains('js-enabled'))
  ) {
    const error = await page.evaluate(
      async ({ selector, exportName, config }) => {
        const namespace = await import('nhsuk-frontend')

        // Find all component roots
        const $roots = document.querySelectorAll(selector)

        try {
          // Loop and initialise all $roots or use default
          // selector `null` return value when none found
          ;($roots.length ? $roots : [null]).forEach(
            ($root) => new namespace[exportName]($root, config)
          )
        } catch ({ name, message }) {
          return { name, message }
        }
      },
      { selector, exportName, config: browserOptions?.config }
    )

    // Throw Playwright errors back to test runner
    if (error) {
      const message = `Initialising \`new ${exportName}()\` threw:`
      throw new Error(`${message}\n\t${error.name}: ${error.message}`, {
        cause: error
      })
    }
  }

  // Run custom function after component init
  if (browserOptions?.afterInitialisation) {
    try {
      await page
        .locator(selector)
        .first()
        .evaluate(
          /** @type {BrowserRenderFunction} */ (
            browserOptions.afterInitialisation
          ),
          browserOptions.context ?? { selector }
        )
    } catch (error) {
      const message = `After initialisation for \`new ${exportName}()\` threw:`
      throw new Error(`${message}\n\t${error.name}: ${error.message}`, {
        cause: error
      })
    }
  }

  await page.evaluateHandle('document.fonts.ready')

  return page
}

/**
 * Get component preview review app URL
 *
 * @param {string} component - Component name
 * @param {NavigationOptions} [options] - Navigation options
 */
export function getComponentURL(component, options) {
  const componentPath = getComponentPath(component, options)
  return getURL(`.${componentPath}`)
}

/**
 * Get component preview path
 *
 * @param {string} component - Component name
 * @param {NavigationOptions} [options] - Navigation options
 */
export function getComponentPath(component, options) {
  let componentPath = `/components/${component}`

  // Prefix with description, e.g. 'small with hint'
  const exampleName = options?.name
    ? `${options.description ?? ''} ${options.name}`.trim()
    : ''

  // Add example name to URL
  componentPath += exampleName
    ? `/${slug(exampleName, { lower: true })}/` // Single example
    : '/' // All examples (component listing page)

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
 * Get navigation options list from example
 *
 * @param {string} name - Component name
 * @param {MacroExample} example - Nunjucks macro example
 * @returns Navigation options list
 */
export function getOptions(name, example) {
  const { variants = [] } = example

  // Duplicate examples for each variant
  const examples = variants.length
    ? variants.map((variant) => mergeExample(example, variant))
    : [example]

  // Options for multiple variants
  return examples.map(({ description, options }) => ({
    name,
    description,
    title: `'${description ?? 'example'}'`,
    example: options ?? {}
  }))
}

/**
 * Navigation options
 *
 * @typedef {object} NavigationOptions
 * @property {string} name - Example name (e.g. 'with hint')
 * @property {string} [description] - Example description (e.g. 'small')
 * @property {string} [title] - Unique test title
 * @property {NonNullable<MacroExample['options']>} [example] - Nunjucks macro example options
 */

/**
 * Browser render options
 *
 * @template {object} HandlerContext
 * @typedef {object} BrowserRenderOptions - Component render options
 * @property {Config[ConfigKey]} [config] - Component JavaScript config
 * @property {HandlerContext} [context] - Context options for render function
 * @property {BrowserRenderFunction<HandlerContext>} [beforeInitialisation] - Custom function to run before initialisation
 * @property {BrowserRenderFunction<HandlerContext>} [afterInitialisation] - Custom function to run after initialisation
 */

/**
 * Browser render function
 *
 * @template {object} [HandlerContext=unknown]
 * @callback BrowserRenderFunction
 * @param {HTMLElement} $root - Component root element
 * @param {HandlerContext} context - Context options
 * @returns {void}
 */

/**
 * @import { Page } from '@playwright/test'
 * @import { RuleObject, RunOptions } from 'axe-core'
 * @import { Config, ConfigKey } from 'nhsuk-frontend/src/nhsuk/index.mjs'
 * @import { MacroExample, MacroRenderOptions } from 'nhsuk-frontend/lib'
 */
