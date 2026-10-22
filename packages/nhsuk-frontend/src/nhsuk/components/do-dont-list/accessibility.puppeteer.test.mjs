import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe("Do and Don't list", () => {
  let /** @type {RuleObject} */ axeRules = {}

  it('listing page passes accessibility tests', async () => {
    await goToComponent(page, 'do-dont-list')
    return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'do-dont-list', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      }
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
