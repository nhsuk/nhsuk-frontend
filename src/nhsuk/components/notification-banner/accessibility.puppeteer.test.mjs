import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Notification banner', () => {
  let /** @type {RuleObject} */ axeRules = {}

  beforeEach(() => {
    axeRules = {
      /**
       * Ignore 'Element has insufficient color contrast' for WCAG level AAA
       * Success Criterion 1.4.6 Contrast (Enhanced)
       */
      'color-contrast-enhanced': { enabled: false },

      /**
       * Ignore 'Element has a tabindex greater than 0' for custom
       * tabindex tests
       */
      'tabindex': { enabled: false }
    }
  })

  it('listing page passes accessibility tests', async () => {
    axeRules['landmark-unique'] = { enabled: false }

    await goToComponent(page, 'notification-banner')
    return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
  }, 20000)

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'notification-banner', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
