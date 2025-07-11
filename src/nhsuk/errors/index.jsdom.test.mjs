import { SkipLink } from '../index.mjs'

import {
  ElementError,
  NHSUKFrontendError,
  InitError,
  SupportError
} from './index.mjs'

describe('Errors', () => {
  describe('NHSUKFrontendError', () => {
    it('allows subclasses to set a custom name', () => {
      class CustomError extends NHSUKFrontendError {
        name = 'CustomName'
      }

      expect(new CustomError().name).toBe('CustomName')
    })
  })

  describe('SupportError', () => {
    beforeEach(() => {
      // JSDOM hasn't yet implemented `noModule`, so we have to mock this
      window.HTMLScriptElement.prototype.noModule = true
    })

    it('is an instance of NHSUKFrontendError', () => {
      expect(new SupportError(document.body)).toBeInstanceOf(NHSUKFrontendError)
    })

    it('has its own name set', () => {
      expect(new SupportError(document.body).name).toBe('SupportError')
    })

    it('provides feedback regarding browser support', () => {
      // @ts-expect-error Allow property 'noModule' to be removed
      delete window.HTMLScriptElement.prototype.noModule
      expect(new SupportError(document.body).message).toBe(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('provides feedback when <body> class is missing', () => {
      expect(new SupportError(document.body).message).toBe(
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
      )
    })

    it('provides feedback when `document.body` is not set', () => {
      // For example, running `initAll()` in `<head>` without `type="module"`
      // will see support checks run when document.body is still `null`
      expect(new SupportError(null).message).toBe(
        'NHS.UK frontend initialised without `<script type="module">`'
      )
    })
  })

  describe('InitError', () => {
    it('is an instance of NHSUKFrontendError', () => {
      expect(new InitError(SkipLink)).toBeInstanceOf(NHSUKFrontendError)
    })

    it('has its own name set', () => {
      expect(new InitError(SkipLink).name).toBe('InitError')
    })

    it('provides feedback for modules already initialised', () => {
      expect(new InitError(SkipLink).message).toBe(
        'nhsuk-skip-link: Root element (`$root`) already initialised'
      )
    })

    it('allows a custom message to be provided', () => {
      expect(new InitError('custom message').message).toBe('custom message')
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
        `${SkipLink.moduleName}: variableName not found`
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
        `${SkipLink.moduleName}: variableName is not of type HTMLAnchorElement`
      )
    })
  })
})
