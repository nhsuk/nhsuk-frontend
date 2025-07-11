import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'
import { outdent } from 'outdent'

import { Checkboxes, initCheckboxes } from './checkboxes.mjs'

describe('Checkboxes', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLDivElement[]} */
  let $conditionals

  /** @type {HTMLInputElement[]} */
  let $inputs

  beforeEach(() => {
    const emailHtml = components.render('input', {
      context: {
        id: 'email',
        name: 'email',
        classes: 'nhsuk-u-width-two-thirds',
        label: {
          text: 'Email address'
        }
      }
    })

    const phoneHtml = components.render('input', {
      context: {
        id: 'phone',
        name: 'phone',
        classes: 'nhsuk-u-width-two-thirds',
        label: {
          text: 'Phone number'
        }
      }
    })

    const mobileHtml = components.render('input', {
      context: {
        id: 'mobile',
        name: 'mobile',
        classes: 'nhsuk-u-width-two-thirds',
        label: {
          text: 'Mobile phone number'
        }
      }
    })

    document.body.innerHTML = outdent`
      <form method="post" novalidate>
        ${components.render('checkboxes', {
          context: {
            idPrefix: 'contact',
            name: 'contact',
            fieldset: {
              legend: {
                text: 'How would you prefer to be contacted?',
                classes: 'nhsuk-fieldset__legend--l',
                isPageHeading: 'true'
              }
            },
            hint: {
              text: 'Select all options that are relevant to you'
            },
            items: [
              {
                value: 'email',
                text: 'Email',
                conditional: {
                  html: emailHtml
                }
              },
              {
                value: 'phone',
                text: 'Phone',
                conditional: {
                  html: phoneHtml
                }
              },
              {
                value: 'text',
                text: 'Text message',
                conditional: {
                  html: mobileHtml
                }
              }
            ]
          }
        })}
      </form>
    `

    $root = document.querySelector(`[data-module="${Checkboxes.moduleName}"]`)

    $conditionals = [
      ...$root.querySelectorAll('.nhsuk-checkboxes__conditional')
    ]

    const $input1 = getByRole($root, 'checkbox', {
      name: 'Email'
    })

    const $input2 = getByRole($root, 'checkbox', {
      name: 'Phone'
    })

    const $input3 = getByRole($root, 'checkbox', {
      name: 'Text message'
    })

    $inputs = [$input1, $input2, $input3]

    jest.spyOn($input1, 'addEventListener')
    jest.spyOn($input2, 'addEventListener')
    jest.spyOn($input3, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initCheckboxes()

      for (const $input of $inputs) {
        expect($input.addEventListener).toHaveBeenCalledWith(
          'click',
          expect.any(Function)
        )
      }
    })

    it('should throw with missing conditional content', () => {
      $conditionals[0].remove()

      expect(() => initCheckboxes()).toThrow(
        `Checkboxes: Conditional reveal (\`id="${$conditionals[0].id}"\`) not found`
      )
    })

    it('should throw with missing checkboxes', () => {
      for (const $input of $inputs) {
        $input.remove()
      }

      expect(() => initCheckboxes()).toThrow(
        'Checkboxes: Form inputs (`<input type="checkbox">`) not found'
      )
    })

    it('should not throw with missing checkbox `aria-controls` attribute', () => {
      for (const $input of $inputs) {
        $input.removeAttribute('aria-controls')
      }

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
        'Checkboxes: Root element (`$root`) not found'
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Checkboxes($svg)).toThrow(
        'Checkboxes: Root element (`$root`) is not of type HTMLElement'
      )
    })
  })

  describe('Conditional content', () => {
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

      window.addEventListener('pageshow', initCheckboxes)
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
})
