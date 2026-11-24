import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/playwright.mjs'

import * as fixtures from './fixtures.mjs'

describe('File upload', () => {
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
       * Ignore 'Elements must have their visible text as part of their
       * accessible name' due to preceding `aria-live` status message
       */
      'label-content-name-mismatch': { enabled: false }
    }
  })

  it('listing page passes accessibility tests', async () => {
    await goToComponent(page, 'file-upload')
    await expect(axe(page, axeRules)).resolves.toHaveLength(0)
  })

  describe.each(examples)('%s', (name, example) => {
    const list = getOptions(name, example)

    it.each(list)('$title passes accessibility tests', async (options) => {
      await goToComponent(page, 'file-upload', options)
      await expect(axe(page, axeRules, options)).resolves.toHaveLength(0)
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
