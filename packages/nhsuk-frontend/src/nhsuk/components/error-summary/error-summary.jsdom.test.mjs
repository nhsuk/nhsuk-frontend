import { components } from '@nhsuk/frontend-lib'
import { getAllByRole, getByRole } from '@testing-library/dom'
import { outdent } from 'outdent'

import { examples as dateInputExamples } from '../date-input/macro-options.mjs'

import { ErrorSummary } from './error-summary.mjs'
import { examples } from './macro-options.mjs'

describe('Error summary', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLAnchorElement[]} */
  let $links

  /** @type {HTMLInputElement} */
  let $input

  /** @type {HTMLLabelElement} */
  let $label

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = outdent`
      <form method="post" novalidate>
        ${components.render('error-summary', examples[example])}
        ${components.render('date-input', dateInputExamples['with errors and hint'])}
      </form>
    `

    const $container = document.querySelector('form')

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${ErrorSummary.moduleName}"]`)
    )

    $links = getAllByRole($root, 'link')

    $input = getByRole($container, 'textbox', {
      name: 'Day'
    })

    $label = $input.labels[0]

    jest.spyOn($root, 'addEventListener')
    jest.spyOn($input, 'focus')
    jest.spyOn($label, 'scrollIntoView')

    jest.spyOn(console, 'warn').mockImplementation()
  }

  beforeEach(() => {
    initExample('with description')
  })

  describe('Initialisation via class', () => {
    it('should add event listeners', () => {
      new ErrorSummary($root)

      expect($root.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with $root element', () => {
      expect(() => new ErrorSummary($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new ErrorSummary($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new ErrorSummary()).toThrow(
        `${ErrorSummary.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new ErrorSummary($svg)).toThrow(
        `${ErrorSummary.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should not throw with missing linked element', () => {
      $input.remove()
      expect(() => new ErrorSummary($root)).not.toThrow()
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new ErrorSummary($root)
        new ErrorSummary($root)
      }).toThrow(
        `${ErrorSummary.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      new ErrorSummary($root)
    })

    it('should add accessible name and role', () => {
      expect($root).toHaveAccessibleName('There is a problem')
      expect($root).toHaveRole('alert')
    })
  })

  describe('Focus handling', () => {
    describe('Alert role', () => {
      it('sets focus automatically', () => {
        new ErrorSummary($root)

        expect($root).toHaveFocus()
      })

      it('moves focus to the $root element', () => {
        new ErrorSummary($root)

        expect($root).toHaveFocus()
      })

      it('moves focus to the $root element with `disableAutoFocus: false`', () => {
        new ErrorSummary($root, {
          disableAutoFocus: false
        })

        expect($root).toHaveFocus()
      })

      it('does not move focus to the $root element with `disableAutoFocus: true`', () => {
        new ErrorSummary($root, {
          disableAutoFocus: true
        })

        expect($root).not.toHaveFocus()
      })
    })

    describe('Links', () => {
      it('moves focus to the linked element', () => {
        new ErrorSummary($root)

        $links[0].click()

        expect($input).toHaveFocus()
        expect($label.scrollIntoView).toHaveBeenCalled()
        expect($input.focus).toHaveBeenCalledWith({
          preventScroll: true
        })
      })
    })
  })

  describe('Nunjucks configuration', () => {
    it('configures auto-focus explicitly enabled', () => {
      initExample('auto-focus explicitly enabled')

      const errorSummary = new ErrorSummary($root)
      expect(errorSummary.config).toEqual({
        disableAutoFocus: false
      })
    })

    it('configures auto-focus disabled', () => {
      initExample('auto-focus disabled')

      const errorSummary = new ErrorSummary($root)
      expect(errorSummary.config).toEqual({
        disableAutoFocus: true
      })
    })

    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('error-summary', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const errorSummary = new ErrorSummary(
        document.querySelector(`[data-module="${ErrorSummary.moduleName}"]`)
      )

      expect(errorSummary.config).toEqual({
        disableAutoFocus: false
      })
    })
  })

  describe('JavaScript configuration', () => {
    it('configures auto-focus explicitly enabled', () => {
      const errorSummary = new ErrorSummary($root, {
        disableAutoFocus: false
      })

      expect(errorSummary.config).toEqual({
        disableAutoFocus: false
      })
    })

    it('configures auto-focus disabled', () => {
      const errorSummary = new ErrorSummary($root, {
        disableAutoFocus: true
      })

      expect(errorSummary.config).toEqual({
        disableAutoFocus: true
      })
    })
  })
})
