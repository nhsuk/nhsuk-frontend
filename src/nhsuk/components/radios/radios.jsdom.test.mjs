import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'
import { outdent } from 'outdent'

import { Radios, initRadios } from './radios.mjs'

describe('Radios', () => {
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
        spellcheck: false,
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
        type: 'tel',
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
        type: 'tel',
        classes: 'nhsuk-u-width-two-thirds',
        label: {
          text: 'Mobile phone number'
        }
      }
    })

    document.body.innerHTML = outdent`
      <form method="post" novalidate>
        ${components.render('radios', {
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
              text: 'Select 1 option that is relevant to you'
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

    $root = document.querySelector(`[data-module="${Radios.moduleName}"]`)

    $conditionals = [...$root.querySelectorAll('.nhsuk-radios__conditional')]

    const $input1 = getByRole($root, 'radio', {
      name: 'Email'
    })

    const $input2 = getByRole($root, 'radio', {
      name: 'Phone'
    })

    const $input3 = getByRole($root, 'radio', {
      name: 'Text message'
    })

    $inputs = [$input1, $input2, $input3]

    jest.spyOn($input1, 'addEventListener')
    jest.spyOn($input2, 'addEventListener')
    jest.spyOn($input3, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initRadios()

      for (const $input of $inputs) {
        expect($input.addEventListener).toHaveBeenCalledWith(
          'click',
          expect.any(Function)
        )
      }
    })

    it('should throw with missing conditional content', () => {
      $conditionals[0].remove()

      expect(() => initRadios()).toThrow(
        `${Radios.moduleName}: Conditional reveal (\`id="${$conditionals[0].id}"\`) not found`
      )
    })

    it('should throw with missing radios', () => {
      for (const $input of $inputs) {
        $input.remove()
      }

      expect(() => initRadios()).toThrow(
        `${Radios.moduleName}: Form inputs (\`<input type="radio">\`) not found`
      )
    })

    it('should not throw with missing radio `aria-controls` attribute', () => {
      for (const $input of $inputs) {
        $input.removeAttribute('aria-controls')
      }

      expect(() => initRadios()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initRadios()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initRadios({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Radios($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Radios($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      expect(() => new Radios()).toThrow(
        `${Radios.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Radios($svg)).toThrow(
        `${Radios.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Radios($root)
        new Radios($root)
      }).toThrow(
        `${Radios.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Conditional content', () => {
    it('should be hidden by default', () => {
      initRadios()

      for (const $input of $inputs) {
        const index = $inputs.indexOf($input)
        const $conditional = $conditionals.at(index)

        // Conditional content hidden
        expect($input).toHaveAttribute('aria-expanded', 'false')
        expect($conditional).toHaveClass('nhsuk-radios__conditional--hidden')
      }
    })

    it('should be visible when input is checked', () => {
      initRadios()

      for (const $input of $inputs) {
        const index = $inputs.indexOf($input)
        const $conditional = $conditionals.at(index)

        $input.click()

        // Conditional content visible
        expect($input).toHaveAttribute('aria-expanded', 'true')
        expect($conditional).not.toHaveClass(
          'nhsuk-radios__conditional--hidden'
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
      expect($conditional).toHaveClass('nhsuk-radios__conditional--hidden')

      window.addEventListener('pageshow', initRadios)
      window.dispatchEvent(new Event('pageshow'))

      // Conditional content visible
      expect($input).toHaveAttribute('aria-expanded', 'true')
      expect($conditional).not.toHaveClass('nhsuk-radios__conditional--hidden')
    })

    it('should be hidden when other input is checked', () => {
      initRadios()

      for (const $input of $inputs) {
        const index = $inputs.indexOf($input)

        const $conditional = $conditionals.at(index)
        const $conditionalOther = $conditionals.at(index - 1)
        const $inputOther = $inputs.at(index - 1)

        $input.click()
        $inputOther.click()

        // Conditional content hidden for input
        expect($input).toHaveAttribute('aria-expanded', 'false')
        expect($conditional).toHaveClass('nhsuk-radios__conditional--hidden')

        // Conditional content visible for other input
        expect($inputOther).toHaveAttribute('aria-expanded', 'true')
        expect($conditionalOther).not.toHaveClass(
          'nhsuk-radios__conditional--hidden'
        )
      }
    })
  })
})
