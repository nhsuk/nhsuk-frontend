import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'

import { initCharacterCounts } from './character-count.mjs'

describe('Character count', () => {
  /** @type {HTMLTextAreaElement} */
  let $textarea

  beforeEach(() => {
    document.body.innerHTML = components.render('character-count', {
      context: {
        label: {
          text: 'Can you provide more detail?'
        },
        hint: {
          text: "Don't include personal or financial information, eg your National Insurance number or credit card details."
        },
        id: 'example',
        maxlength: '10'
      }
    })

    const $container = document.querySelector('.nhsuk-character-count')

    $textarea = getByRole($container, 'textbox', {
      name: 'Can you provide more detail?'
    })

    jest.spyOn($textarea, 'addEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initCharacterCounts()

      expect($textarea.addEventListener).toHaveBeenCalledWith(
        'keyup',
        expect.any(Function)
      )

      expect($textarea.addEventListener).toHaveBeenCalledWith(
        'focus',
        expect.any(Function)
      )

      expect($textarea.addEventListener).toHaveBeenCalledWith(
        'blur',
        expect.any(Function)
      )
    })

    it('should not throw with missing textarea', () => {
      $textarea.remove()
      expect(() => initCharacterCounts()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initCharacterCounts()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initCharacterCounts({ scope })).not.toThrow()
    })
  })
})
