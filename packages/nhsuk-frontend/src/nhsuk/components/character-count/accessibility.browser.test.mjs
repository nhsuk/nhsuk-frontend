import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import * as fixtures from './fixtures.mjs'

test.describe('Character count', () => {
  const examples = Object.entries(fixtures.examples)

  let /** @type {RuleObject} */ axeRules = {}

  test.beforeEach(() => {
    axeRules = {
      /**
       * Ignore 'Element has insufficient color contrast' for WCAG level AAA
       * Success Criterion 1.4.6 Contrast (Enhanced)
       */
      'color-contrast-enhanced': { enabled: false }
    }
  })

  test('listing page', async ({ page }) => {
    await goToComponent(page, 'character-count')
    await expect(axe(page, axeRules)).resolves.toHaveLength(0)
  })

  examples.forEach(([name, example]) => {
    test(name, async ({ page }) => {
      const list = getOptions(name, example)

      for (const options of list) {
        await test.step(options.title, async () => {
          await goToComponent(page, 'character-count', options)
          await expect(axe(page, axeRules, options)).resolves.toHaveLength(0)
        })
      }
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
