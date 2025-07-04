import { components } from '@nhsuk/frontend-lib'
import { getAllByRole, getByRole } from '@testing-library/dom'
import { outdent } from 'outdent'

import { initErrorSummary } from './error-summary.mjs'

describe('Error summary', () => {
  /** @type {HTMLDivElement} */
  let $root

  /** @type {HTMLAnchorElement[]} */
  let $links

  /** @type {HTMLInputElement} */
  let $input

  /** @type {HTMLLabelElement} */
  let $label

  beforeEach(() => {
    const descriptionHtml = outdent`
      Optional description of the errors and how to correct them.<br>
      Note that the error summary should receive focus on page load using the JavaScript that comes with this component.
    `

    document.body.innerHTML = outdent`
      <form method="post" novalidate>
        ${components.render('error-summary', {
          context: {
            titleText: 'There is a problem',
            descriptionHtml,
            errorList: [
              {
                text: 'Link to input error with explanation',
                href: '#example'
              }
            ]
          }
        })}

        ${components.render('input', {
          context: {
            id: 'example',
            name: 'example',
            label: {
              text: 'National Insurance number'
            },
            hint: {
              text: "Clicking an error summary link should scroll the top of this input's label into view."
            },
            errorMessage: {
              text: 'Error message goes here'
            }
          }
        })}
      </form>
    `

    const $container = document.querySelector('form')

    $root = getByRole($container, 'alert', {
      name: 'There is a problem'
    })

    $links = getAllByRole($root, 'link')

    $input = getByRole($container, 'textbox', {
      name: 'National Insurance number'
    })

    $label = $input.labels[0]

    jest.spyOn($root, 'addEventListener')
    jest.spyOn($input, 'focus')
    jest.spyOn($label, 'scrollIntoView')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initErrorSummary()

      expect($root.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing error summary', () => {
      $root.remove()
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

        expect($root).toHaveFocus()
      })

      it('sets focus automatically (focusOnPageLoad: true)', () => {
        initErrorSummary({
          focusOnPageLoad: true
        })

        expect($root).toHaveFocus()
      })

      it('does not set focus automatically (focusOnPageLoad: false)', () => {
        initErrorSummary({
          focusOnPageLoad: false
        })

        expect($root).not.toHaveFocus()
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
