import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './macro-options.mjs'

describe('Radios', () => {
  /** @type {RuleObject} */
  let axeRules

  /** @type {Page} */
  let page

  beforeAll(() => {
    axeRules = {
      /**
       * Ignore 'ARIA attribute is not allowed: aria-expanded="false"'
       *
       * {@link https://github.com/alphagov/govuk-frontend/issues/979}
       */
      'aria-allowed-attr': { enabled: false }
    }
  })

  describe('Component examples', () => {
    it('passes accessibility tests', async () => {
      for (const example in examples) {
        page = await goToComponent(browser, 'radios', { example })
        await expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      }
    }, 120000)
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 * @import { Page } from 'puppeteer'
 */
