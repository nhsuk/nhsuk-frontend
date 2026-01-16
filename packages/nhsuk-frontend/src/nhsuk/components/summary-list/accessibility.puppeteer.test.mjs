import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Summary list', () => {
  it('Listing page passes accessibility tests', async () => {
    await goToComponent(page, 'summary-list')
    return expect(axe(page)).resolves.toHaveNoViolations()
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'summary-list', options)
        return expect(axe(page)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})
