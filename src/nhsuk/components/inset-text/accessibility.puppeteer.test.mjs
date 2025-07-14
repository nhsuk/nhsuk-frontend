import { axe, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './macro-options.mjs'

describe('Inset text', () => {
  /** @type {Page} */
  let page

  describe('Component examples', () => {
    it('passes accessibility tests', async () => {
      for (const example in examples) {
        page = await goToComponent(browser, 'inset-text', { example })
        await expect(axe(page)).resolves.toHaveNoViolations()
      }
    }, 120000)
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
