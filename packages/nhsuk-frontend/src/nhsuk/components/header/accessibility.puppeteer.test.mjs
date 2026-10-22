import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import * as fixtures from './fixtures.mjs'

describe('Header', () => {
  const examples = Object.entries(fixtures.examples)

  let /** @type {RuleObject} */ axeRules = {}

  beforeEach(() => {
    axeRules = {
      /**
       * Ignore 'Element has insufficient color contrast' for WCAG level AAA
       * Success Criterion 1.4.6 Contrast (Enhanced)
       */
      'color-contrast-enhanced': { enabled: false }
    }
  })

  it('listing page passes accessibility tests', async () => {
    axeRules['landmark-banner-is-top-level'] = { enabled: false }
    axeRules['landmark-no-duplicate-banner'] = { enabled: false }
    axeRules['landmark-unique'] = { enabled: false }

    await goToComponent(page, 'header')
    return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
  })

  describe.each(examples)('%s', (name, example) => {
    const list = getOptions(name, example)

    it.each(list)('$title passes accessibility tests', async (options) => {
      await goToComponent(page, 'header', options)
      return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
