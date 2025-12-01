const { getComponentURL } = require('@nhsuk/frontend-helpers/puppeteer.mjs')
const { components, screenshots } = require('@nhsuk/frontend-lib')
const { executablePath } = require('puppeteer')

const { HEADLESS } = process.env

/**
 * Component example scenarios
 *
 * @type {Scenario[]}
 */
const scenarios = components.getNames().flatMap((component) => {
  const { name, fixtures } = components.getFixtures(component)

  return fixtures.flatMap((fixture) => {
    if (!fixture.screenshot) {
      return []
    }

    // Prefix with description, e.g. 'small with hint'
    const example = `${fixture.description ?? ''} ${fixture.name}`.trim()
    const label = `${name} ${example.replace(/\s?default$/, '')}`.trim()

    // Set scenario label with review app URL
    const { href: url } = getComponentURL(component, fixture)

    /**
     * Default scenario
     *
     * @type {Scenario[]}
     */
    if (fixture.screenshot === true) {
      return [{ label, url }]
    }

    // Build custom scenarios
    return [fixture.screenshot].flat().flatMap((screenshot, index) => {
      const viewports = screenshots.getViewports(screenshot.viewports)

      if (!screenshot.states || !screenshot.selector) {
        return [{ label, url, viewports }]
      }

      // Start with the default scenario for the first screenshot only,
      // to prevent it being duplicated for the next screenshot config
      const listStates = !index ? [{ label, url, viewports }] : []

      // Add custom scenario for each state (e.g. 'hover', 'focus')
      return listStates.concat(
        screenshot.states.map((state) => ({
          label: screenshot.name
            ? `${label} (${state} ${screenshot.name})` // e.g. 'Header (hover logo)'
            : `${label} (${state})`, // e.g. 'Back link as a button (hover)'

          url,
          viewports,

          // Add 'hoverSelector', 'focusSelector' etc
          [`${state}Selector`]: screenshot.selector
        }))
      )
    })
  })
})

/**
 * @type {PlaywrightEngineConfig}
 */
module.exports = {
  asyncCaptureLimit: HEADLESS === 'false' ? 1 : 6,
  engine: 'playwright',
  engineOptions: {
    args: [
      '--disable-skia-graphite',
      '--disable-skia-runtime-opts',
      '--font-render-hinting=medium',
      '--force-device-scale-factor=1'
    ],
    browser: 'chromium',
    executablePath: executablePath(),
    gotoParameters: { waitUntil: 'load' },

    // Allow headless mode switching using `HEADLESS=false`
    headless: HEADLESS !== 'false'
  },
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'playwright/onBefore.js',
  onReadyScript: 'playwright/onReady.js',
  paths: {
    bitmaps_reference: 'tests/backstop/bitmaps_reference',
    bitmaps_test: 'tests/backstop/bitmaps_test',
    ci_report: 'tests/backstop/ci_report',
    engine_scripts: 'tests/backstop/engine_scripts',
    html_report: 'tests/backstop/html_report'
  },
  readySelector: 'body.nhsuk-frontend-supported',
  report: ['browser'],
  resembleOutputOptions: {
    ignoreAntialiasing: true
  },
  scenarios,
  viewports: screenshots.getViewports(['mobile', 'desktop'])
}

/**
 * @import { PlaywrightEngineConfig, Scenario } from 'backstopjs'
 */
