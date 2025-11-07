import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Error message', () => {
  /** @type {Page} */
  let page

  describe.each(Object.keys(examples))('%s', (example) => {
    beforeAll(async () => {
      page = await goToComponent(browser, 'error-message', { example })
    })

    it('passes accessibility tests', () => {
      return expect(axe(page)).resolves.toHaveNoViolations()
    })
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
