import { getByRole } from '@testing-library/dom'

import { initCharacterCount } from './character-count.mjs'

describe('Character count', () => {
  /** @type {HTMLTextAreaElement} */
  let $textarea

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="nhsuk-character-count" data-module="nhsuk-character-count" data-maxlength="10">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="more-detail">
            Can you provide more detail?
          </label>
          <div class="nhsuk-hint" id="more-detail-hint">
            Don't include personal or financial information, eg your National Insurance number or credit card details.
          </div>
          <textarea class="nhsuk-textarea nhsuk-js-character-count" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
        </div>
        <div class="nhsuk-hint nhsuk-character-count__message" id="more-detail-info">
          You can enter up to 10 characters
        </div>
      </div>
    `

    const $container = document.querySelector('.nhsuk-character-count')

    $textarea = getByRole($container, 'textbox', {
      name: 'Can you provide more detail?'
    })

    jest.spyOn($textarea, 'addEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initCharacterCount()

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
      expect(() => initCharacterCount()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initCharacterCount()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initCharacterCount({ scope })).not.toThrow()
    })
  })
})
