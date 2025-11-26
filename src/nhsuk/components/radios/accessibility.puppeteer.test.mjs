import {
  axe,
  getPage,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

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

  beforeAll(async () => {
    page = await getPage(browser)
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'radios', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      }
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 * @import { Page } from 'puppeteer'
 */
