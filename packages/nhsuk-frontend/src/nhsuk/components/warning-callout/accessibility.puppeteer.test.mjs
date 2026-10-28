import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import * as fixtures from './fixtures.mjs'

describe('Warning callout', () => {
  const examples = Object.entries(fixtures.examples)

  let /** @type {RuleObject} */ axeRules = {}

  it('listing page passes accessibility tests', async () => {
    await goToComponent(page, 'warning-callout')
    return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
  })

  describe.each(examples)('%s', (name, example) => {
    const list = getOptions(name, example)

    it.each(list)('$title passes accessibility tests', async (options) => {
      await goToComponent(page, 'warning-callout', options)
      return expect(axe(page, axeRules, options)).resolves.toHaveNoViolations()
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
