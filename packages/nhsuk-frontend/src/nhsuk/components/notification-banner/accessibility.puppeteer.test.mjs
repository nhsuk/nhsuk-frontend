import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './macro-options.mjs'

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

  describe('Component examples', () => {
    it('passes accessibility tests', async () => {
      for (const example in examples) {
        page = await goToComponent(browser, 'notification-banner', { example })
        await expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      }
    }, 120000)
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 * @import { Page } from 'puppeteer'
 */
