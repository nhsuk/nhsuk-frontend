import {
  axe,
  getPage,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Checkboxes', () => {
  /** @type {Page} */
  let page

  beforeAll(async () => {
    page = await getPage(browser)
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'checkboxes', options)
        return expect(axe(page)).resolves.toHaveNoViolations()
      }
    )
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
