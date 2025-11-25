import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Error summary', () => {
  /** @type {Page} */
  let page

  describe('Component examples', () => {
    it('passes accessibility tests', async () => {
      for (const example in examples) {
        page = await goToComponent(browser, 'error-summary', { example })
        await expect(axe(page)).resolves.toHaveNoViolations()
      }
    }, 120000)
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
