import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import * as fixtures from './fixtures.mjs'

test.describe('Warning callout', () => {
  const examples = Object.entries(fixtures.examples)

  let /** @type {RuleObject} */ axeRules = {}

  test('listing page', async ({ page }) => {
    await goToComponent(page, 'warning-callout')
    await expect(axe(page, axeRules)).resolves.toHaveLength(0)
  })

  examples.forEach(([name, example]) => {
    test(name, async ({ page }) => {
      for (const options of getOptions(name, example)) {
        await test.step(options.title, async () => {
          await goToComponent(page, 'warning-callout', options)
          await expect(axe(page, axeRules, options)).resolves.toHaveLength(0)
        })
      }
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
