import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'

import { Checkboxes, initCheckboxes } from './checkboxes.mjs'
import { examples } from './macro-options.mjs'

describe('Checkboxes', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLDivElement[]} */
  let $conditionals

  /** @type {HTMLElement} */
  let $input1

  /** @type {HTMLElement} */
  let $input2

  /** @type {HTMLElement} */
  let $input3

  /** @type {HTMLElement} */
  let $inputNone

  /**
   * @param {keyof typeof examples} exampleName
   */
  function initExample(exampleName) {
    document.body.innerHTML = components.render(
      'checkboxes',
      examples[exampleName]
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Checkboxes.moduleName}"]`)
    )

    $conditionals = /** @type {HTMLDivElement[]} */ ([
      ...$root.querySelectorAll('.nhsuk-checkboxes__conditional')
    ])

    $input1 = getByRole($root, 'checkbox', {
      name: 'Email'
    })

    $input2 = getByRole($root, 'checkbox', {
      name: 'Phone'
    })

    $input3 = getByRole($root, 'checkbox', {
      name: 'Text message'
    })

    $inputNone = getByRole($root, 'checkbox', {
      name: 'None of the above'
    })

    jest.spyOn($root, 'addEventListener')
  }

  describe('Initialisation via init function', () => {
    beforeEach(() => {
      initExample('with "none of the above" option')
    })

    it('should add event listeners', () => {
      initCheckboxes()

      expect($root.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should throw with missing conditional content', () => {
      $conditionals[0].remove()

      expect(() => initCheckboxes()).toThrow(
        `${Checkboxes.moduleName}: Conditional reveal (\`id="${$conditionals[0].id}"\`) not found`
      )
    })

    it('should throw with missing checkboxes', () => {
      $input1.remove()
      $input2.remove()
      $input3.remove()
      $inputNone.remove()

      expect(() => initCheckboxes()).toThrow(
        `${Checkboxes.moduleName}: Form inputs (\`<input type="checkbox">\`) not found`
      )
    })

    it('should not throw with missing checkbox `aria-controls` attribute', () => {
      $input1.removeAttribute('aria-controls')
      $input2.removeAttribute('aria-controls')
      $input3.removeAttribute('aria-controls')

      expect(() => initCheckboxes()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initCheckboxes()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initCheckboxes({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    beforeEach(() => {
      initExample('with "none of the above" option')
    })

    it('should not throw with $root element', () => {
      expect(() => new Checkboxes($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Checkboxes($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      expect(() => new Checkboxes()).toThrow(
        `${Checkboxes.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Checkboxes($svg)).toThrow(
        `${Checkboxes.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Checkboxes($root)
        new Checkboxes($root)
      }).toThrow(
        `${Checkboxes.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Conditional content', () => {
    /** @type {HTMLElement[]} */
    let $inputs = []

    beforeEach(() => {
      initExample('with "none of the above" option')
      $inputs = [$input1, $input2, $input3]
    })

    it('should be hidden by default', () => {
      initCheckboxes()

      for (const $input of $inputs) {
        const index = $inputs.indexOf($input)
        const $conditional = $conditionals.at(index)

        // Conditional content hidden
        expect($input).toHaveAttribute('aria-expanded', 'false')
        expect($conditional).toHaveClass(
          'nhsuk-checkboxes__conditional--hidden'
        )
      }
    })

    it('should be visible when input is checked', () => {
      initCheckboxes()

      for (const $input of $inputs) {
        const index = $inputs.indexOf($input)
        const $conditional = $conditionals.at(index)

        $input.click()

        // Conditional content visible
        expect($input).toHaveAttribute('aria-expanded', 'true')
        expect($conditional).not.toHaveClass(
          'nhsuk-checkboxes__conditional--hidden'
        )
      }
    })

    it('should be visible when input is pre-checked (deferred initialisation)', () => {
      const $input = $inputs[0]
      const $conditional = $conditionals[0]

      // Pre-check the first input
      $input.click()

      // Conditional content not visible
      expect($input).not.toHaveAttribute('aria-expanded', 'true')
      expect($conditional).toHaveClass('nhsuk-checkboxes__conditional--hidden')

      window.addEventListener('pageshow', () => initCheckboxes())
      window.dispatchEvent(new Event('pageshow'))

      // Conditional content visible
      expect($input).toHaveAttribute('aria-expanded', 'true')
      expect($conditional).not.toHaveClass(
        'nhsuk-checkboxes__conditional--hidden'
      )
    })

    it('should be hidden when input is unchecked', () => {
      initCheckboxes()

      for (const $input of $inputs) {
        const index = $inputs.indexOf($input)
        const $conditional = $conditionals.at(index)

        $input.click()
        $input.click()

        // Conditional content hidden
        expect($input).toHaveAttribute('aria-expanded', 'false')
        expect($conditional).toHaveClass(
          'nhsuk-checkboxes__conditional--hidden'
        )
      }
    })
  })

  describe('Exclusive checkbox', () => {
    beforeEach(() => {
      initExample('with "none of the above" option')
    })

    it('should uncheck other checkboxes', () => {
      initCheckboxes()

      // Tick all options
      $input1.click()
      $input2.click()
      $input3.click()

      expect($input1).toBeChecked()
      expect($input2).toBeChecked()
      expect($input3).toBeChecked()
      expect($inputNone).not.toBeChecked()

      // Tick "None of the above"
      $inputNone.click()

      expect($input1).not.toBeChecked()
      expect($input2).not.toBeChecked()
      expect($input3).not.toBeChecked()
      expect($inputNone).toBeChecked()
    })

    it('should uncheck when other checkboxes are checked', () => {
      initCheckboxes()

      // Tick "None of the above"
      $inputNone.click()

      expect($input1).not.toBeChecked()
      expect($input2).not.toBeChecked()
      expect($input3).not.toBeChecked()
      expect($inputNone).toBeChecked()

      // Tick 1st option
      $input1.click()

      expect($inputNone).not.toBeChecked()
    })
  })

  describe('Exclusive checkbox (named groups)', () => {
    beforeEach(() => {
      initExample('with "none of the above" option (named group)')
    })

    it('should uncheck other checkboxes', () => {
      initCheckboxes()

      // Tick all options
      $input1.click()
      $input2.click()
      $input3.click()

      expect($input1).toBeChecked()
      expect($input2).toBeChecked()
      expect($input3).toBeChecked()
      expect($inputNone).not.toBeChecked()

      // Tick "None of the above"
      $inputNone.click()

      expect($input1).not.toBeChecked()
      expect($input2).not.toBeChecked()
      expect($input3).not.toBeChecked()
      expect($inputNone).toBeChecked()
    })

    it('should uncheck when other checkboxes are checked', () => {
      initCheckboxes()

      // Tick "None of the above"
      $inputNone.click()

      expect($input1).not.toBeChecked()
      expect($input2).not.toBeChecked()
      expect($input3).not.toBeChecked()
      expect($inputNone).toBeChecked()

      // Tick 1st option
      $input1.click()

      expect($inputNone).not.toBeChecked()
    })
  })
})
