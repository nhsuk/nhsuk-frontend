import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Footer', () => {
  let /** @type {RuleObject} */ axeRules = {}

  it('listing page passes accessibility tests', async () => {
    axeRules['landmark-contentinfo-is-top-level'] = { enabled: false }
    axeRules['landmark-no-duplicate-contentinfo'] = { enabled: false }
    axeRules['landmark-unique'] = { enabled: false }

    await goToComponent(page, 'footer')
    return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'footer', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      }
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
