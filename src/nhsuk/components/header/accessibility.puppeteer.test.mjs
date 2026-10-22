import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Header', () => {
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
  }, 20000)

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'header', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
