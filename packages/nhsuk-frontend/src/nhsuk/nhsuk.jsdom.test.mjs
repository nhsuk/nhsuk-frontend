import { waitFor } from '@testing-library/dom'

import { initAll } from './index.mjs'

jest.mock('./index.mjs')

describe('NHS.UK frontend', () => {
  describe('Automatic initialisation', () => {
    it('should init components on DOMContentLoaded', async () => {
      jest.requireActual('./nhsuk.mjs')

      // Should not initialise on import
      expect(initAll).not.toHaveBeenCalled()

      // Should initialise on DOMContentLoaded
      window.document.dispatchEvent(new Event('DOMContentLoaded'))
      await waitFor(() => expect(initAll).toHaveBeenCalled())
    })
  })
})
