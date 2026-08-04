import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Tables', () => {
  it('listing page passes accessibility tests', async () => {
    await goToComponent(page, 'tables')
    return expect(
      axe(page, {
        // Ignore duplicate landmarks on component listing page
        'landmark-unique': { enabled: false }
      })
    ).resolves.toHaveNoViolations()
  }, 30000)

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'tables', options)
        return expect(axe(page)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})
