import { Button } from '../components/button/button.mjs'

import {
  ElementError,
  NHSUKFrontendError,
  InitError,
  SupportError
} from './index.mjs'

describe('errors', () => {
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
      expect(new InitError(Button)).toBeInstanceOf(NHSUKFrontendError)
    })

    it('has its own name set', () => {
      expect(new InitError(Button).name).toBe('InitError')
    })

    it('provides feedback for modules already initialised', () => {
      expect(new InitError(Button).message).toBe(
        'nhsuk-button: Root element (`$root`) already initialised'
      )
    })

    it('allows a custom message to be provided', () => {
      expect(new InitError('custom message').message).toBe('custom message')
    })
  })

  describe('ElementError', () => {
    it('is an instance of NHSUKFrontendError', () => {
      expect(
        new ElementError({
          component: Button,
          identifier: 'variableName'
        })
      ).toBeInstanceOf(NHSUKFrontendError)
    })
    it('has its own name set', () => {
      expect(
        new ElementError({
          component: Button,
          identifier: 'variableName'
        }).name
      ).toBe('ElementError')
    })
    it('has name set by Component', () => {
      expect(
        new ElementError({
          component: Button,
          identifier: 'variableName'
        }).name
      ).toBe('ElementError')
    })
    it('accepts a string and does not process it in any way', () => {
      expect(new ElementError('Complex custom error message').message).toBe(
        'Complex custom error message'
      )
    })
    it('formats the message when the element is not found', () => {
      expect(
        new ElementError({
          component: Button,
          identifier: 'variableName'
        }).message
      ).toBe(`${Button.moduleName}: variableName not found`)
    })
    it('formats the message when the element is not the right type', () => {
      const $element = document.createElement('div')

      expect(
        new ElementError({
          component: Button,
          element: $element,
          expectedType: 'HTMLAnchorElement',
          identifier: 'variableName'
        }).message
      ).toBe(
        `${Button.moduleName}: variableName is not of type HTMLAnchorElement`
      )
    })
    it('formats the message when the element is not the right type and Component in config', () => {
      const $element = document.createElement('div')

      expect(
        new ElementError({
          component: Button,
          element: $element,
          expectedType: 'HTMLAnchorElement',
          identifier: 'variableName'
        }).message
      ).toBe(
        `${Button.moduleName}: variableName is not of type HTMLAnchorElement`
      )
    })
  })
})
