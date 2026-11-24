import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/playwright.mjs'

import * as fixtures from './fixtures.mjs'

describe("Do and Don't list", () => {
  const examples = Object.entries(fixtures.examples)

  let /** @type {RuleObject} */ axeRules = {}

  it('listing page passes accessibility tests', async () => {
    await goToComponent(page, 'do-dont-list')
    await expect(axe(page, axeRules)).resolves.toHaveLength(0)
  })

  describe.each(examples)('%s', (name, example) => {
    const list = getOptions(name, example)

    it.each(list)('$title passes accessibility tests', async (options) => {
      await goToComponent(page, 'do-dont-list', options)
      await expect(axe(page, axeRules, options)).resolves.toHaveLength(0)
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
