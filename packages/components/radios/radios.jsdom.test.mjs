import { getByRole } from '@testing-library/dom'

import initRadios from './radios.js'

describe('Radios', () => {
  /** @type {HTMLDivElement[]} */
  let $conditionals

  /** @type {HTMLInputElement[]} */
  let $inputs

  beforeEach(() => {
    document.body.innerHTML = `
      <form method="post" novalidate>
        <div class="nhsuk-form-group">
          <fieldset class="nhsuk-fieldset" aria-describedby="contact-hint">
            <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--m">
              How would you prefer to be contacted?
            </legend>

            <div class="nhsuk-hint" id="contact-hint">
              Select all options that are relevant to you.
            </div>

            <div class="nhsuk-radios nhsuk-radios--conditional">
              <div class="nhsuk-radios__item">
                <input class="nhsuk-radios__input" id="contact-1" name="contact" type="radio" value="email" aria-controls="conditional-contact-1" aria-expanded="false">
                <label class="nhsuk-label nhsuk-radios__label" for="contact-1">
                  Email
                </label>
              </div>

              <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-contact-1">
                <div class="nhsuk-form-group">
                  <label class="nhsuk-label" for="email">
                    Email address
                  </label>
                  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text">
                </div>
              </div>

              <div class="nhsuk-radios__item">
                <input class="nhsuk-radios__input" id="contact-2" name="contact" type="radio" value="phone" aria-controls="conditional-contact-2" aria-expanded="false">
                <label class="nhsuk-label nhsuk-radios__label" for="contact-2">
                  Phone
                </label>
              </div>

              <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-contact-2">
                <div class="nhsuk-form-group">
                  <label class="nhsuk-label" for="phone">
                    Phone number
                  </label>
                  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="text">
                </div>
              </div>

              <div class="nhsuk-radios__item">
                <input class="nhsuk-radios__input" id="contact-3" name="contact" type="radio" value="text" aria-controls="conditional-contact-3" aria-expanded="false">
                <label class="nhsuk-label nhsuk-radios__label" for="contact-3">
                  Text message
                </label>
              </div>

              <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-contact-3">
                <div class="nhsuk-form-group">
                  <label class="nhsuk-label" for="text">
                    Mobile phone number
                  </label>
                  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="text">
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    `

    const $container = document.querySelector('.nhsuk-radios')

    $conditionals = [
      ...$container.querySelectorAll('.nhsuk-radios__conditional')
    ]

    const $input1 = getByRole($container, 'radio', {
      name: 'Email'
    })

    const $input2 = getByRole($container, 'radio', {
      name: 'Phone'
    })

    const $input3 = getByRole($container, 'radio', {
      name: 'Text message'
    })

    $inputs = [$input1, $input2, $input3]

    jest.spyOn($input1, 'addEventListener')
    jest.spyOn($input2, 'addEventListener')
    jest.spyOn($input3, 'addEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initRadios()

      for (const $input of $inputs) {
        expect($input.addEventListener).toHaveBeenCalledWith(
          'change',
          expect.any(Function)
        )
      }
    })

    it('should not throw with missing radios', () => {
      for (const $input of $inputs) {
        $input.remove()
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
