import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'

import { CharacterCount, initCharacterCounts } from './character-count.mjs'
import { examples } from './macro-options.mjs'

describe('Character count', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLTextAreaElement} */
  let $textarea

  /** @type {HTMLElement} */
  let $description

  beforeEach(() => {
    document.body.innerHTML = components.render(
      'character-count',
      examples.default
    )

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
        `${CharacterCount.moduleName}: Form field (\`.nhsuk-js-character-count\`) not found`
      )
    })

    it('should throw with missing count message', () => {
      $description.remove()

      expect(() => new CharacterCount($root)).toThrow(
        `${CharacterCount.moduleName}: Count message (\`id="more-detail-info"\`) not found`
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
        `${CharacterCount.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new CharacterCount($svg)).toThrow(
        `${CharacterCount.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new CharacterCount($root)
        new CharacterCount($root)
      }).toThrow(
        `${CharacterCount.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })
})
