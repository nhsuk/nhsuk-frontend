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

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${CharacterCount.moduleName}"]`)
    )

    $textarea = getByRole($root, 'textbox', {
      name: 'Can you provide more detail?'
    })

    $description = document.getElementById(`${$textarea.id}-info`)

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

  describe('JavaScript configuration', () => {
    it('configures the number of characters using `data-maxlength`', () => {
      document.body.innerHTML = components.render(
        'character-count',
        examples.default
      )

      const characterCount = new CharacterCount(
        document.querySelector(`[data-module="${CharacterCount.moduleName}"]`)
      )

      expect(characterCount.config).toEqual({
        maxlength: 10,
        threshold: 0
      })
    })

    it('configures the number of words using `data-maxwords`', () => {
      document.body.innerHTML = components.render(
        'character-count',
        examples['with max words']
      )

      const characterCount = new CharacterCount(
        document.querySelector(`[data-module="${CharacterCount.moduleName}"]`)
      )

      expect(characterCount.config).toEqual({
        maxwords: 10,
        threshold: 0
      })
    })

    it('configures the threshold using `data-threshold`', () => {
      document.body.innerHTML = components.render(
        'character-count',
        examples['with threshold']
      )

      const characterCount = new CharacterCount(
        document.querySelector(`[data-module="${CharacterCount.moduleName}"]`)
      )

      expect(characterCount.config).toEqual({
        maxlength: 10,
        threshold: 8
      })
    })

    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('character-count', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const characterCount = new CharacterCount(
        document.querySelector(`[data-module="${CharacterCount.moduleName}"]`)
      )

      expect(characterCount.config).toEqual({
        maxlength: 10,
        threshold: 0
      })
    })
  })
})
