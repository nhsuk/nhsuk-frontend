import { components } from '@nhsuk/frontend-lib'
import { userEvent } from '@testing-library/user-event'

import { Button, initButtons } from './button.mjs'
import { examples } from './fixtures.mjs'

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

  describe('Nunjucks configuration', () => {
    it('configures prevent double click explicitly enabled', () => {
      initExample('with double click prevented')

      const button = new Button($root)
      expect(button.config).toEqual({
        preventDoubleClick: true
      })
    })

    it('configures prevent double click disabled', () => {
      initExample('with double click not prevented')

      const button = new Button($root)
      expect(button.config).toEqual({
        preventDoubleClick: false
      })
    })

    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('button', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const button = new Button(
        document.querySelector(`[data-module="${Button.moduleName}"]`)
      )

      expect(button.config).toEqual({
        preventDoubleClick: false
      })
    })
  })
})
