import { NHSUKFrontendError } from './index.mjs'

describe('Errors', () => {
  describe('NHSUKFrontendError', () => {
    it('allows subclasses to set a custom name', () => {
      class CustomError extends NHSUKFrontendError {
        name = 'CustomName'
      }

      expect(new CustomError().name).toBe('CustomName')
    })
  })
})
