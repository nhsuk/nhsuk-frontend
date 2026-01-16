import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Skip link', () => {
  it('Listing page passes accessibility tests', async () => {
    await goToComponent(page, 'skip-link')
    return expect(axe(page)).resolves.toHaveNoViolations()
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'skip-link', options)
        return expect(axe(page)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})
