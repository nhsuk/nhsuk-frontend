import { getAllByRole, getByRole } from '@testing-library/dom'

import { initErrorSummary } from './error-summary.mjs'

describe('Error summary', () => {
  /** @type {HTMLAnchorElement} */
  let $errorSummary

  /** @type {HTMLAnchorElement[]} */
  let $links

  /** @type {HTMLInputElement} */
  let $input

  /** @type {HTMLLabelElement} */
  let $label

  beforeEach(() => {
    document.body.innerHTML = `
      <form method="post" novalidate>
        <div class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1">
          <h2 class="nhsuk-error-summary__title" id="error-summary-title">
            There is a problem
          </h2>
          <div class="nhsuk-error-summary__body">
            <p>
              Optional description of the errors and how to correct them.<br>
              Note that the error summary should receive focus on page load using the JavaScript that comes with this component.
            </p>
            <ul class="nhsuk-list nhsuk-error-summary__list" role="list">
              <li>
                <a href="#input-with-error-message">Link to input error with explanation</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="nhsuk-form-group nhsuk-form-group--error">
          <label class="nhsuk-label" for="input-with-error-message">
            National Insurance number
          </label>
          <div class="nhsuk-hint" id="input-with-error-message-hint">
            Clicking an error summary link should scroll the top of this input's label into view.
          </div>
          <span class="nhsuk-error-message" id="input-with-error-message-error">
            <span class="nhsuk-u-visually-hidden">Error:</span> Error message goes here
          </span>
          <input class="nhsuk-input nhsuk-input--error" id="input-with-error-message" name="test-name-3" type="text" aria-describedby="input-with-error-message-hint input-with-error-message-error">
        </div>
      </form>
    `

    const $container = document.querySelector('form')

    $errorSummary = getByRole($container, 'alert', {
      name: 'There is a problem'
    })

    $links = getAllByRole($errorSummary, 'link')

    $input = getByRole($container, 'textbox', {
      name: 'National Insurance number'
    })

    $label = $input.labels[0]

    jest.spyOn($errorSummary, 'addEventListener')
    jest.spyOn($input, 'focus')
    jest.spyOn($label, 'scrollIntoView')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initErrorSummary()

      expect($errorSummary.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing error summary', () => {
      $errorSummary.remove()
      expect(() => initErrorSummary()).not.toThrow()
    })

    it('should not throw with missing linked element', () => {
      $input.remove()
      expect(() => initErrorSummary()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initErrorSummary()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initErrorSummary({ scope })).not.toThrow()
    })
  })

  describe('Focus handling', () => {
    describe('Alert role', () => {
      it('sets focus automatically', () => {
        initErrorSummary()

        expect($errorSummary).toHaveFocus()
      })

      it('sets focus automatically (focusOnPageLoad: true)', () => {
        initErrorSummary({
          focusOnPageLoad: true
        })

        expect($errorSummary).toHaveFocus()
      })

      it('does not set focus automatically (focusOnPageLoad: false)', () => {
        initErrorSummary({
          focusOnPageLoad: false
        })

        expect($errorSummary).not.toHaveFocus()
      })
    })

    describe('Links', () => {
      it('moves focus to the linked element', () => {
        initErrorSummary()

        $links[0].click()

        expect($input).toHaveFocus()
        expect($label.scrollIntoView).toHaveBeenCalled()
        expect($input.focus).toHaveBeenCalledWith({
          preventScroll: true
        })
      })
    })
  })
})
