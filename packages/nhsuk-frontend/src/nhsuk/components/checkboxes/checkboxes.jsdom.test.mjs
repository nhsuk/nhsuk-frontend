import { fireEvent } from '@testing-library/dom'
import { within } from '@testing-library/dom'

import { components } from '#lib'

import { Checkboxes, initCheckboxes } from './checkboxes.mjs'
import { examples } from './fixtures.mjs'

describe('Checkboxes', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLDivElement[]} */
  let $conditionals

  /** @type {HTMLInputElement[]} */
  let $inputs = []

  /** @type {HTMLInputElement} */
  let $input1

  /** @type {HTMLInputElement} */
  let $input2

  /** @type {HTMLInputElement} */
  let $input3

  /** @type {HTMLInputElement} */
  let $inputBehaviour

  const optionsExclusive = {
    labels: ['Email', 'Phone', 'Text message'],
    labelBehaviour: 'I do not want to be contacted'
  }

  const optionsInclusive = {
    labels: [
      '4-in-1 pre-school booster',
      '6-in-1',
      'HPV',
      'MenB',
      'MenACWY',
      'MMRV',
      'Rotavirus',
      'Pneumococcal',
      'Td/IPV'
    ],
    labelBehaviour: 'All 9 vaccines'
  }

  /**
   * @param {keyof typeof examples} example
   * @param {typeof optionsExclusive | typeof optionsInclusive} options
   */
  function initExample(example, options) {
    document.body.innerHTML = components.render('checkboxes', examples[example])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Checkboxes.moduleName}"]`)
    )

    $conditionals = /** @type {HTMLDivElement[]} */ ([
      ...$root.querySelectorAll('.nhsuk-checkboxes__conditional')
    ])

    $inputs = options.labels.map((label) =>
      within($root).getByRole('checkbox', { name: label })
    )

    $input1 = $inputs[0]
    $input2 = $inputs[1]
    $input3 = $inputs[2]

    $inputBehaviour = within($root).getByRole('checkbox', {
      name: options.labelBehaviour
    })

    jest.spyOn($root, 'addEventListener')
  }

  describe('Initialisation via init function', () => {
    beforeEach(() => {
      initExample('with "none" option, conditional content', optionsExclusive)
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
      $inputBehaviour.remove()

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
      initExample('with "none" option', optionsExclusive)
    })

    it('should not throw with $root element', () => {
      expect(() => new Checkboxes($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Checkboxes($root)).toThrow(
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
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

    it('should handle deprecated methods', () => {
      const component = new Checkboxes($root)

      jest.spyOn(component, 'unCheckInputs')

      expect(() => component.unCheckExclusiveInputs($input1)).not.toThrow()
      expect(component.unCheckInputs).toHaveBeenCalledWith($input1, 'exclusive')
    })
  })

  describe('Conditional content', () => {
    beforeEach(() => {
      initExample('with "none" option, conditional content', optionsExclusive)
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
      fireEvent.pageShow(window)

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
      initExample('with "none" option', optionsExclusive)
    })

    it('should uncheck other checkboxes', () => {
      initCheckboxes()

      // Check all options
      for (const $input of $inputs) {
        $input.click()
      }

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check "None" option
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()
    })

    it('should uncheck when other checkboxes are checked', () => {
      initCheckboxes()

      // Check "None" option
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Check 1st option
      $input1.click()

      expect($inputBehaviour).not.toBeChecked()
    })
  })

  describe('Exclusive checkbox (named groups)', () => {
    beforeEach(() => {
      initExample('with "none" option (named group)', optionsExclusive)
    })

    it('should uncheck other checkboxes', () => {
      initCheckboxes()

      // Check all options
      for (const $input of $inputs) {
        $input.click()
      }

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check "None" option
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()
    })

    it('should uncheck when other checkboxes are checked', () => {
      initCheckboxes()

      // Check "None" option
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Check 1st option
      $input1.click()

      expect($inputBehaviour).not.toBeChecked()
    })
  })

  describe('Exclusive checkbox (named groups, unique)', () => {
    beforeEach(() => {
      initExample('with "none" option (named group, unique)', optionsExclusive)
    })

    it('should uncheck other checkboxes', () => {
      initCheckboxes()

      // Check all options
      for (const $input of $inputs) {
        $input.click()
      }

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check "None" option
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()
    })

    it('should uncheck when other checkboxes are checked', () => {
      initCheckboxes()

      // Check "None" option
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Check 1st option
      $input1.click()

      expect($inputBehaviour).not.toBeChecked()
    })
  })

  describe('Inclusive checkbox', () => {
    beforeEach(() => {
      initExample('with "all" option', optionsInclusive)
    })

    it('should check all other checkboxes', () => {
      new Checkboxes($root)

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()
    })

    it('should uncheck all other checkboxes when unchecked', () => {
      new Checkboxes($root)

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Uncheck "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()
    })

    it('should uncheck when other checkboxes are unchecked', () => {
      new Checkboxes($root)

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Uncheck 1st option
      $input1.click()

      expect($inputBehaviour).not.toBeChecked()
    })

    it('should check automatically when all other checkboxes are checked individually', () => {
      new Checkboxes($root)

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check all options
      for (const $input of $inputs) {
        $input.click()

        // Last option automatically checks "All 9 vaccines"
        expect($inputBehaviour.checked).toBe(
          $inputs.indexOf($input) === $inputs.length - 1 ? true : false
        )
      }

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }
    })
  })

  describe('Inclusive checkbox (named groups)', () => {
    beforeEach(() => {
      initExample('with "all" option (named group)', optionsInclusive)
    })

    it('should check all other checkboxes', () => {
      new Checkboxes($root)

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()
    })

    it('should uncheck all other checkboxes when unchecked', () => {
      new Checkboxes($root)

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Uncheck "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()
    })

    it('should uncheck when other checkboxes are unchecked', () => {
      new Checkboxes($root)

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Uncheck 1st option
      $input1.click()

      expect($inputBehaviour).not.toBeChecked()
    })

    it('should check automatically when all other checkboxes are checked individually', () => {
      new Checkboxes($root)

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check all options
      for (const $input of $inputs) {
        $input.click()

        // Last option automatically checks "All 9 vaccines"
        expect($inputBehaviour.checked).toBe(
          $inputs.indexOf($input) === $inputs.length - 1 ? true : false
        )
      }

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }
    })
  })

  describe('Inclusive checkbox (named groups, unique)', () => {
    beforeEach(() => {
      initExample('with "all" option (named group, unique)', optionsInclusive)
    })

    it('should check all other checkboxes', () => {
      new Checkboxes($root)

      expect($inputs[0]).not.toBeChecked()
      expect($inputs[1]).not.toBeChecked()
      expect($inputs[2]).not.toBeChecked()
      expect($inputBehaviour).not.toBeChecked()

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      expect($inputs[0]).toBeChecked()
      expect($inputs[1]).toBeChecked()
      expect($inputs[2]).toBeChecked()
      expect($inputBehaviour).toBeChecked()
    })

    it('should uncheck all other checkboxes when unchecked', () => {
      new Checkboxes($root)

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      expect($inputs[0]).toBeChecked()
      expect($inputs[1]).toBeChecked()
      expect($inputs[2]).toBeChecked()
      expect($inputBehaviour).toBeChecked()

      // Uncheck "All 9 vaccines"
      $inputBehaviour.click()

      expect($inputs[0]).not.toBeChecked()
      expect($inputs[1]).not.toBeChecked()
      expect($inputs[2]).not.toBeChecked()
      expect($inputBehaviour).not.toBeChecked()
    })

    it('should uncheck when other checkboxes are unchecked', () => {
      new Checkboxes($root)

      // Check "All 9 vaccines"
      $inputBehaviour.click()

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }

      expect($inputBehaviour).toBeChecked()

      // Uncheck 1st option
      $input1.click()

      expect($inputBehaviour).not.toBeChecked()
    })

    it('should check automatically when all other checkboxes are checked individually', () => {
      new Checkboxes($root)

      // Confirm that all are not checked
      for (const $input of $inputs) {
        expect($input).not.toBeChecked()
      }

      expect($inputBehaviour).not.toBeChecked()

      // Check all options
      for (const $input of $inputs) {
        $input.click()

        // Last option automatically checks "All 9 vaccines"
        expect($inputBehaviour.checked).toBe(
          $inputs.indexOf($input) === $inputs.length - 1 ? true : false
        )
      }

      // Confirm that all are checked
      for (const $input of $inputs) {
        expect($input).toBeChecked()
      }
    })
  })
})
