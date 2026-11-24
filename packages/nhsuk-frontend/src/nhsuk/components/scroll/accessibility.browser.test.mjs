import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import * as fixtures from './fixtures.mjs'

test.describe('Scroll', () => {
  const examples = Object.entries(fixtures.examples)

  let /** @type {RuleObject} */ axeRules = {}

  test('listing page', async ({ page }) => {
    axeRules['landmark-unique'] = { enabled: false }

    await goToComponent(page, 'scroll')
    await expect(axe(page, axeRules)).resolves.toHaveLength(0)
  })

  examples.forEach(([name, example]) => {
    test(name, async ({ page }) => {
      const list = getOptions(name, example)

      for (const options of list) {
        await test.step(options.title, async () => {
          await goToComponent(page, 'scroll', options)
          await expect(axe(page, axeRules, options)).resolves.toHaveLength(0)
        })
      }
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
