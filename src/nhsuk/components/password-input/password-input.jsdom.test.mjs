import { components } from '@nhsuk/frontend-lib'
import { userEvent } from '@testing-library/user-event'

import { examples } from './macro-options.mjs'
import { PasswordInput, initPasswordInputs } from './password-input.mjs'

const user = userEvent.setup()

describe('Password input', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLInputElement} */
  let $input

  /** @type {HTMLElement} */
  let $button

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render(
      'password-input',
      examples[example]
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${PasswordInput.moduleName}"]`)
    )

    $input = /** @type {HTMLInputElement} */ (
      $root.querySelector('.nhsuk-js-password-input-input')
    )

    $button = /** @type {HTMLButtonElement} */ (
      $root.querySelector('.nhsuk-js-password-input-toggle')
    )

    jest.spyOn($button, 'addEventListener')
    jest.spyOn($button, 'click')
    jest.spyOn(window, 'addEventListener')
  }

  beforeEach(() => {
    initExample('default')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initPasswordInputs()

      // Adds listener for window pageshow
      expect(window.addEventListener).toHaveBeenNthCalledWith(
        1,
        'pageshow',
        expect.any(Function)
      )

      // Adds listener for show/hide button click
      expect($button.addEventListener).toHaveBeenNthCalledWith(
        1,
        'click',
        expect.any(Function)
      )
    })

    it('should throw with missing password input', () => {
      $input.remove()

      expect(() => initPasswordInputs()).toThrow(
        `${PasswordInput.moduleName}: Form field (\`.nhsuk-js-password-input-input\`) not found`
      )
    })

    it('should throw with missing show/hide button', () => {
      $button.remove()

      expect(() => initPasswordInputs()).toThrow(
        `${PasswordInput.moduleName}: Button (\`.nhsuk-js-password-input-toggle\`) not found`
      )
    })

    it('should not throw with missing component', () => {
      $root.remove()
      expect(() => initPasswordInputs()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initPasswordInputs()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initPasswordInputs({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new PasswordInput($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new PasswordInput($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new PasswordInput()).toThrow(
        `${PasswordInput.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new PasswordInput($svg)).toThrow(
        `${PasswordInput.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw with missing $input element', () => {
      $input.remove()

      expect(() => new PasswordInput($root)).toThrow(
        `${PasswordInput.moduleName}: Form field (\`.nhsuk-js-password-input-input\`) not found`
      )
    })

    it('should throw with wrong $input element type', () => {
      $input.setAttribute('type', 'email')

      expect(() => new PasswordInput($root)).toThrow(
        `${PasswordInput.moduleName}: Form field (\`.nhsuk-js-password-input-input\`) is not of type HTMLInputElement with attribute (\`type="password"\`)`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new PasswordInput($root)
        new PasswordInput($root)
      }).toThrow(
        `${PasswordInput.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      initPasswordInputs()
    })

    it('should have accessible name and role', async () => {
      expect($button).toHaveRole('button')
      expect($button).toHaveAccessibleName('Show password')

      // Click to show password
      await user.click($button)

      expect($button).toHaveRole('button')
      expect($button).toHaveAccessibleName('Hide password')
    })
  })

  describe('Nunjucks configuration', () => {
    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('password-input', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const component = new PasswordInput(
        document.querySelector(`[data-module="${PasswordInput.moduleName}"]`)
      )

      expect(component.config).toEqual({
        i18n: PasswordInput.defaults.i18n
      })
    })

    it('configures default text', () => {
      initExample('default')

      const component = new PasswordInput(
        document.querySelector(`[data-module="${PasswordInput.moduleName}"]`)
      )

      expect(component.config).toEqual({
        i18n: PasswordInput.defaults.i18n
      })
    })

    it('configures translated text', () => {
      initExample('with translations')

      const component = new PasswordInput(
        document.querySelector(`[data-module="${PasswordInput.moduleName}"]`)
      )

      expect(component.config).toEqual({
        i18n: {
          hidePassword: 'Cuddio',
          hidePasswordAriaLabel: 'Cuddio cyfrinair',
          passwordHiddenAnnouncement: "Mae eich cyfrinair wedi'i guddio.",
          passwordShownAnnouncement: 'Mae eich cyfrinair yn weladwy.',
          showPassword: 'Datguddia',
          showPasswordAriaLabel: 'Datgelu cyfrinair'
        }
      })
    })
  })

  describe('JavaScript configuration', () => {
    beforeEach(() => {
      initExample('default')
    })

    describe('i18n', () => {
      it('overrides the default translation keys', () => {
        const component = new PasswordInput($root, {
          i18n: {
            hidePassword: 'Custom text'
          }
        })

        expect(component.config).toEqual({
          i18n: {
            ...PasswordInput.defaults.i18n,
            hidePassword: 'Custom text'
          }
        })
      })
    })

    describe('with HTML data attributes', () => {
      it('overrides the default translation keys', () => {
        $root.setAttribute('data-i18n.hide-password', 'Custom text')

        const component = new PasswordInput($root)

        expect(component.config).toEqual({
          i18n: {
            ...PasswordInput.defaults.i18n,
            hidePassword: 'Custom text'
          }
        })
      })
    })
  })
})
