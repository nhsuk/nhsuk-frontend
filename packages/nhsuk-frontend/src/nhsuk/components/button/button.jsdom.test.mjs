import { components } from '@nhsuk/frontend-lib'

import { Button, initButtons } from './button.mjs'

describe('Button', () => {
  /** @type {HTMLElement} */
  let $root

  beforeEach(() => {
    document.body.innerHTML = components.render('button', {
      context: { text: 'Save and continue' }
    })

    $root = document.querySelector(`[data-module="${Button.moduleName}"]`)

    jest.spyOn($root, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initButtons()

      expect($root.addEventListener).toHaveBeenNthCalledWith(
        1,
        'keydown',
        expect.any(Function)
      )

      expect($root.addEventListener).toHaveBeenNthCalledWith(
        2,
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing button', () => {
      $root.remove()
      expect(() => initButtons()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initButtons()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initButtons({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Button($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Button($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      expect(() => new Button()).toThrow(
        `${Button.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Button($svg)).toThrow(
        `${Button.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Button($root)
        new Button($root)
      }).toThrow(
        `${Button.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      initButtons()
    })

    it('should have accessible name and role', () => {
      expect($root).toHaveAccessibleName('Save and continue')
      expect($root).toHaveRole('button')
    })
  })
})
