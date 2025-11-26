import {
  axe,
  getPage,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Character count', () => {
  /** @type {Page} */
  let page

  beforeAll(async () => {
    page = await getPage(browser)
  })

  describe.each(Object.keys(examples))('%s', (example) => {
    it('passes accessibility tests', async () => {
      await goToComponent(page, 'character-count', { example })
      return expect(axe(page)).resolves.toHaveNoViolations()
    })
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
