import { components } from '#lib'

import { examples } from './fixtures.mjs'
import { Scroll, initScroll } from './scroll.mjs'

describe('Scroll', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $content

  beforeEach(() => {
    document.body.innerHTML = components.render('scroll', examples['with HTML'])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Scroll.moduleName}"]`)
    )

    $content = /** @type {HTMLElement} */ (
      $root.querySelector(`.${Scroll.defaults.contentClass}`)
    )

    jest.spyOn($content, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initScroll()

      expect($content.addEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      )
    })

    it('should not throw with missing scroll', () => {
      $root.remove()
      expect(() => initScroll()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initScroll()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initScroll({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Scroll($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Scroll($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new Scroll()).toThrow(
        `${Scroll.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Scroll($svg)).toThrow(
        `${Scroll.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Scroll($root)
        new Scroll($root)
      }).toThrow(
        `${Scroll.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      initScroll()
    })

    it('should add accessible name and role', () => {
      expect($content).toHaveAccessibleName('Example heading')
      expect($content).toHaveRole('region')
    })
  })
})
