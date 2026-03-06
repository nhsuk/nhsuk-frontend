import { mockResizeObserver } from 'jsdom-testing-mocks'

import { Code, initCode } from './code.mjs'
import { examples } from './fixtures.mjs'

import { components } from '#lib'

const resizeObserverMock = mockResizeObserver()

describe('Code', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $container

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render('code', examples[example])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Code.moduleName}"]`)
    )

    $container = /** @type {HTMLElement} */ (
      $root.querySelector('.nhsuk-code__container')
    )

    jest.spyOn($container, 'clientWidth', 'get').mockReturnValue(1024)
    jest.spyOn($container, 'clientHeight', 'get').mockReturnValue(768)

    jest.spyOn($container, 'scrollWidth', 'get').mockReturnValue(500)
    jest.spyOn($container, 'scrollHeight', 'get').mockReturnValue(500)
  }

  beforeEach(() => {
    initExample('default')
  })

  describe('Initialisation via init function', () => {
    it('should not throw with missing pre element', () => {
      $root.remove()
      expect(() => initCode()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initCode()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initCode({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Code($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Code($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new Code()).toThrow(
        `${Code.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      $root = document.createElement('div')

      expect(() => new Code($root)).toThrow(
        `${Code.moduleName}: Root element (\`$root\`) is not of type HTMLPreElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Code($root)
        new Code($root)
      }).toThrow(
        `${Code.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility (keyboard focus)', () => {
    beforeEach(() => {
      new Code($root)
    })

    it('should not add tabindex by default', async () => {
      expect($container).not.toHaveAttribute('tabindex')
    })

    it('should add tabindex by code overflows container', async () => {
      jest.spyOn($container, 'clientWidth', 'get').mockReturnValue(320)
      jest.spyOn($container, 'clientHeight', 'get').mockReturnValue(240)

      resizeObserverMock.mockElementSize($container, {
        contentBoxSize: { inlineSize: 500, blockSize: 500 }
      })

      // Trigger resize
      resizeObserverMock.resize()

      expect($container).toHaveAttribute('tabindex')
    })
  })
})
