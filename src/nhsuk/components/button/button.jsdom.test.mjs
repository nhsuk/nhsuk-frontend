import { components } from '@nhsuk/frontend-lib'
import { createEvent, fireEvent } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { Button, initButtons } from './button.mjs'
import { examples } from './macro-options.mjs'

const user = userEvent.setup()

describe('Button', () => {
  /** @type {HTMLElement} */
  let $root

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render('button', examples[example])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Button.moduleName}"]`)
    )

    jest.spyOn($root, 'addEventListener')
    jest.spyOn($root, 'click')
  }

  beforeEach(() => {
    initExample('default')
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
      // @ts-expect-error Parameter '$root' not provided
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

  describe('Double click', () => {
    it('should not be prevented', () => {
      initButtons()

      const event = createEvent.click($root)
      jest.spyOn(event, 'preventDefault')

      fireEvent($root, event)
      expect(event.preventDefault).not.toHaveBeenCalled()

      fireEvent($root, event)
      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it('should not be prevented with `preventDoubleClick: false`', () => {
      initExample('with double click not prevented')
      initButtons()

      const event = createEvent.click($root)
      jest.spyOn(event, 'preventDefault')

      fireEvent($root, event)
      expect(event.preventDefault).not.toHaveBeenCalled()

      fireEvent($root, event)
      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it('should be prevented with `preventDoubleClick: true`', () => {
      initExample('with double click prevented')
      initButtons()

      const event = createEvent.click($root)
      jest.spyOn(event, 'preventDefault')

      fireEvent($root, event)
      expect(event.preventDefault).not.toHaveBeenCalled()

      fireEvent($root, event)
      expect(event.preventDefault).toHaveBeenCalled()
    })
  })

  describe('Accessibility (button)', () => {
    beforeEach(() => {
      initButtons()
    })

    it('should have accessible name and role', () => {
      expect($root).toHaveAccessibleName('Save and continue')
      expect($root).toHaveRole('button')
    })

    it('should not trigger the click event when the space key is pressed', async () => {
      $root.focus()

      await user.keyboard('[Space]')
      expect($root.click).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility (link)', () => {
    beforeEach(() => {
      initExample('as a link')
      initButtons()
    })

    it('should have accessible name and role', () => {
      expect($root).toHaveAccessibleName('Link button')
      expect($root).toHaveRole('button')
    })

    it('should trigger the click event when the space key is pressed', async () => {
      $root.focus()

      await user.keyboard('[Space]')
      expect($root.click).toHaveBeenCalled()
    })
  })
})
