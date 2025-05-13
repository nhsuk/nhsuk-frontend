import { waitFor } from '@testing-library/dom'

import { initAll } from './index.js'

jest.mock('./index.js')

describe('NHS.UK frontend', () => {
  describe('Automatic initialisation', () => {
    it('should init components on DOMContentLoaded', async () => {
      await import('./nhsuk.js')

      // Should not initialise on import
      expect(initAll).not.toHaveBeenCalled()

      // Should initialise on DOMContentLoaded
      window.document.dispatchEvent(new Event('DOMContentLoaded'))
      await waitFor(() => expect(initAll).toHaveBeenCalled())
    })
  })
})
