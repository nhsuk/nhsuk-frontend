import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'

import { initButtons } from './button.mjs'

describe('Button', () => {
  /** @type {HTMLButtonElement} */
  let $button

  beforeEach(() => {
    document.body.innerHTML = components.render('button', {
      context: { text: 'Save and continue' }
    })

    $button = getByRole(document.body, 'button')

    jest.spyOn($button, 'addEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initButtons()

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
      expect(() => initButtons()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initButtons()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initButtons({ scope })).not.toThrow()
    })
  })
})
