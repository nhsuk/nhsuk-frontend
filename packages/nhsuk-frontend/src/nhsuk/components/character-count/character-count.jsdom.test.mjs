import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'

import { CharacterCount, initCharacterCounts } from './character-count.mjs'

describe('Character count', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLTextAreaElement} */
  let $textarea

  /** @type {HTMLElement} */
  let $description

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

    $root = document.querySelector(
      `[data-module="${CharacterCount.moduleName}"]`
    )

    $textarea = getByRole($root, 'textbox', {
      name: 'Can you provide more detail?'
    })

    $description = document.querySelector(`#${$textarea.id}-info`)

    jest.spyOn($textarea, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
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

    it('should throw with missing textarea', () => {
      $textarea.remove()

      expect(() => initCharacterCounts()).toThrow(
        'CharacterCount: Form field (`.nhsuk-js-character-count`) not found'
      )
    })

    it('should throw with missing count message', () => {
      $description.remove()

      expect(() => new CharacterCount($root)).toThrow(
        'CharacterCount: Count message (`id="example-info"`) not found'
      )
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

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new CharacterCount($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new CharacterCount($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      expect(() => new CharacterCount()).toThrow(
        'CharacterCount: Root element (`$root`) not found'
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new CharacterCount($svg)).toThrow(
        'CharacterCount: Root element (`$root`) is not of type HTMLElement'
      )
    })
  })
})
