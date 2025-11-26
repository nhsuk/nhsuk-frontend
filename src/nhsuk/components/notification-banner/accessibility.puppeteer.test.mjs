import {
  axe,
  getPage,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

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

  beforeAll(async () => {
    page = await getPage(browser)
  })

  describe.each(Object.keys(examples))('%s', (example) => {
    it('passes accessibility tests', async () => {
      await goToComponent(page, 'notification-banner', { example })
      return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
    })
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 * @import { Page } from 'puppeteer'
 */
