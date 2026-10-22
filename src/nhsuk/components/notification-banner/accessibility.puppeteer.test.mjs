import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import * as fixtures from './fixtures.mjs'

describe('Notification banner', () => {
  const examples = Object.entries(fixtures.examples)

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
  })

  describe.each(examples)('%s', (name, example) => {
    const list = getOptions(name, example)

    it.each(list)('$title passes accessibility tests', async (options) => {
      await goToComponent(page, 'notification-banner', options)
      return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
