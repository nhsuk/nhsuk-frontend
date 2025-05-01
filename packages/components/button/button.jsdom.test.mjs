import { getByRole } from '@testing-library/dom'

import initButton from './button.js'

describe('Button', () => {
  /** @type {HTMLButtonElement} */
  let $button

  beforeEach(() => {
    document.body.innerHTML = `
      <button class="nhsuk-button" data-module="nhsuk-button" type="submit">
        Save and continue
      </button>
    `

    $button = getByRole(document.body, 'button')

    jest.spyOn($button, 'addEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initButton()

      expect($button.addEventListener).toHaveBeenNthCalledWith(
        1,
        'keydown',
        expect.any(Function)
      )

      expect($button.addEventListener).toHaveBeenNthCalledWith(
        2,
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing button', () => {
      $button.remove()
      expect(() => initButton()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initButton()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initButton({ scope })).not.toThrow()
    })
  })
})
