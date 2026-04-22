import { SkipLink } from '../index.mjs'
import {
  ElementError,
  InitError,
  NHSUKFrontendError,
  SupportError
} from './index.mjs'

describe('Errors', () => {
  describe('NHSUKFrontendError', () => {
    it('allows subclasses to set a custom name', () => {
      class CustomError extends NHSUKFrontendError {
        name = 'CustomName'
      }

      expect(new CustomError()).toHaveProperty('name', 'CustomName')
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
      expect(new SupportError(document.body)).toHaveProperty(
        'name',
        'SupportError'
      )
    })

    it('provides feedback regarding browser support', () => {
      // @ts-expect-error The operand of a 'delete' operator must be optional
      delete window.HTMLScriptElement.prototype.noModule

      expect(new SupportError(document.body)).toHaveProperty(
        'message',
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('provides feedback when <body> class is missing', () => {
      expect(new SupportError(document.body)).toHaveProperty(
        'message',
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
      )
    })

    it('provides feedback when `document.body` is not set', () => {
      // For example, running `initAll()` in `<head>` without `type="module"`
      // will see support checks run when document.body is still `null`
      expect(new SupportError(null)).toHaveProperty(
        'message',
        'NHS.UK frontend initialised without `<script type="module">`'
      )
    })

    it('allows a custom message to be provided', () => {
      const supportMessage = 'Support for "navigator.clipboard" required'

      expect(new SupportError(supportMessage)).toHaveProperty(
        'message',
        supportMessage
      )
    })
  })

  describe('InitError', () => {
    it('is an instance of NHSUKFrontendError', () => {
      expect(new InitError(SkipLink)).toBeInstanceOf(NHSUKFrontendError)
    })

    it('has its own name set', () => {
      expect(new InitError(SkipLink)).toHaveProperty('name', 'InitError')
    })

    it('provides feedback for modules already initialised', () => {
      expect(new InitError(SkipLink)).toHaveProperty(
        'message',
        'nhsuk-skip-link: Root element (`$root`) already initialised'
      )
    })

    it('allows a custom message to be provided', () => {
      expect(new InitError('custom message')).toHaveProperty(
        'message',
        'custom message'
      )
    })
  })

  describe('ElementError', () => {
    it('is an instance of NHSUKFrontendError', () => {
      const error = new ElementError({
        component: SkipLink,
        identifier: 'Element name'
      })

      expect(error).toBeInstanceOf(NHSUKFrontendError)
    })

    it('has its own name set', () => {
      const error = new ElementError({
        component: SkipLink,
        identifier: 'Element name'
      })

      expect(error).toHaveProperty('name', 'ElementError')
    })

    describe('with component', () => {
      it('formats the message when the element is not found', () => {
        const error = new ElementError({
          component: SkipLink,
          identifier: 'Element name'
        })

        expect(error).toHaveProperty(
          'message',
          `${SkipLink.moduleName}: Element name not found`
        )
      })

      it('formats the message when the element is not the right type', () => {
        const $element = document.createElement('div')

        const error = new ElementError({
          element: $element,
          component: SkipLink,
          identifier: 'Element name',
          expectedType: 'HTMLAnchorElement'
        })

        expect(error).toHaveProperty(
          'message',
          `${SkipLink.moduleName}: Element name is not of type HTMLAnchorElement`
        )
      })
    })

    describe('without component', () => {
      it('formats the message when the element is not found', () => {
        const error = new ElementError({
          identifier: 'Element name'
        })

        expect(error).toHaveProperty('message', 'Element name not found')
      })

      it('formats the message when the element is not the right type', () => {
        const $element = document.createElement('div')

        const error = new ElementError({
          element: $element,
          identifier: 'Element name',
          expectedType: 'HTMLAnchorElement'
        })

        expect(error).toHaveProperty(
          'message',
          'Element name is not of type HTMLAnchorElement'
        )
      })
    })
  })
})
