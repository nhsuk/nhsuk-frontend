import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Contents list', () => {
  /** @type {Page} */
  let page

  describe('Component examples', () => {
    it('passes accessibility tests', async () => {
      for (const example in examples) {
        page = await goToComponent(browser, 'contents-list', { example })
        await expect(axe(page)).resolves.toHaveNoViolations()
      }
    }, 120000)
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
