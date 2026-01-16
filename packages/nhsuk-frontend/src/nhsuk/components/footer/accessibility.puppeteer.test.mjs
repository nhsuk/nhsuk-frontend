import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Footer', () => {
  it('Listing page passes accessibility tests', async () => {
    await goToComponent(page, 'footer')
    return expect(
      axe(page, {
        // Ignore duplicate landmarks on component listing page
        'landmark-contentinfo-is-top-level': { enabled: false },
        'landmark-no-duplicate-contentinfo': { enabled: false },
        'landmark-unique': { enabled: false }
      })
    ).resolves.toHaveNoViolations()
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'footer', options)
        return expect(axe(page)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})
