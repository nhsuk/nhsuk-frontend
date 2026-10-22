import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Tag', () => {
  let /** @type {RuleObject} */ axeRules = {}

  it('listing page passes accessibility tests', async () => {
    await goToComponent(page, 'tag')
    return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
  }, 20000)

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'tag', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
