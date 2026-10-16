import {
  axe,
  getOptions,
  goToComponent
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('File upload', () => {
  /** @type {RuleObject} */
  let axeRules

  beforeAll(() => {
    axeRules = {
      /**
       * Ignore 'Elements must have their visible text as part of their
       * accessible name' due to preceding `aria-live` status message
       */
      'label-content-name-mismatch': { enabled: false }
    }
  })

  it('listing page passes accessibility tests', async () => {
    await goToComponent(page, 'file-upload')
    return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
  }, 20000)

  describe.each(Object.entries(examples))('%s', (name, example) => {
    it.each(getOptions(name, example))(
      '$title passes accessibility tests',
      async (options) => {
        await goToComponent(page, 'file-upload', options)
        return expect(axe(page, axeRules)).resolves.toHaveNoViolations()
      }
    )
  })
})

/**
 * @import { RuleObject } from 'axe-core'
 */
