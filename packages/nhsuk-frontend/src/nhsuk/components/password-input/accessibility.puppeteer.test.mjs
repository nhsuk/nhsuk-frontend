import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Password input', () => {
  it('Listing page passes accessibility tests', async () => {
    await goToComponent(page, 'password-input')
    return expect(axe(page)).resolves.toHaveNoViolations()
  })

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'password-input', options)
        return expect(axe(page)).resolves.toHaveNoViolations()
      },
      20000
    )
  })
})
