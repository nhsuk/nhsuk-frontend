import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'

import { initButtons } from './button.mjs'

describe('Button', () => {
  /** @type {HTMLElement} */
  let $root

  beforeEach(() => {
    document.body.innerHTML = components.render('button', {
      context: { text: 'Save and continue' }
    })

    $root = getByRole(document.body, 'button')

    jest.spyOn($root, 'addEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initButtons()

      expect($root.addEventListener).toHaveBeenNthCalledWith(
        1,
        'keydown',
        expect.any(Function)
      )

      expect($root.addEventListener).toHaveBeenNthCalledWith(
        2,
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing button', () => {
      $root.remove()
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
