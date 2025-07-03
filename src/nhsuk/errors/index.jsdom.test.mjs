import { SkipLink } from '../index.mjs'

import { ElementError, NHSUKFrontendError } from './index.mjs'

describe('Errors', () => {
  describe('NHSUKFrontendError', () => {
    it('allows subclasses to set a custom name', () => {
      class CustomError extends NHSUKFrontendError {
        name = 'CustomName'
      }

      expect(new CustomError().name).toBe('CustomName')
    })
  })

  describe('ElementError', () => {
    it('is an instance of NHSUKFrontendError', () => {
      const error = new ElementError({
        component: SkipLink,
        identifier: 'variableName'
      })

      expect(error).toBeInstanceOf(NHSUKFrontendError)
    })

    it('has its own name set', () => {
      const error = new ElementError({
        component: SkipLink,
        identifier: 'variableName'
      })

      expect(error).toHaveProperty('name', 'ElementError')
    })

    it('formats the message when the element is not found', () => {
      const error = new ElementError({
        component: SkipLink,
        identifier: 'variableName'
      })

      expect(error).toHaveProperty(
        'message',
        'SkipLink: variableName not found'
      )
    })

    it('formats the message when the element is not the right type', () => {
      const $element = document.createElement('div')

      const error = new ElementError({
        element: $element,
        component: SkipLink,
        identifier: 'variableName',
        expectedType: 'HTMLAnchorElement'
      })

      expect(error).toHaveProperty(
        'message',
        'SkipLink: variableName is not of type HTMLAnchorElement'
      )
    })
  })
})
