import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

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

  describe.each(Object.keys(examples))('%s', (example) => {
    beforeAll(async () => {
      page = await goToComponent(browser, 'radios', { example })
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
