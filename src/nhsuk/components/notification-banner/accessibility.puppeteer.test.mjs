import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Notification banner', () => {
  /** @type {RuleObject} */
  let axeRules

  /** @type {Page} */
  let page

  beforeAll(() => {
    axeRules = {
      /**
       * Ignore 'Element has a tabindex greater than 0' for custom
       * tabindex tests
       */
      tabindex: { enabled: false }
    }
  })

  describe.each(Object.keys(examples))('%s', (example) => {
    beforeAll(async () => {
      page = await goToComponent(browser, 'notification-banner', { example })
    })

    it('passes accessibility tests', () => {
      return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 * @import { Page } from 'puppeteer'
 */
