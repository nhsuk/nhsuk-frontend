import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Notification banner', () => {
  /** @type {RuleObject} */
  let axeRules

  beforeAll(() => {
    axeRules = {
      /**
       * Ignore 'Element has a tabindex greater than 0' for custom
       * tabindex tests
       */
      tabindex: { enabled: false }
    }
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'notification-banner', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
