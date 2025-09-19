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

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render(
      'character-count',
      examples[example]
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${CharacterCount.moduleName}"]`)
    )

    $textarea = getByRole($root, 'textbox')
    $description = document.getElementById(`${$textarea.id}-info`)

    jest.spyOn($textarea, 'addEventListener')
  }

  beforeEach(() => {
    initExample('default')
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
        `${CharacterCount.moduleName}: Count message (\`id="example-info"\`) not found`
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
      // @ts-expect-error Parameter '$root' not provided
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

    it('should throw with wrong input element type', () => {
      const $div = document.createElement('div')
      $div.classList.add('nhsuk-js-character-count')

      $textarea.replaceWith($div)

      expect(() => new CharacterCount($root)).toThrow(
        `${CharacterCount.moduleName}: Form field (\`.nhsuk-js-character-count\`) is not of type HTMLTextareaElement or HTMLInputElement`
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

  describe('Nunjucks configuration', () => {
    it('configures the number of characters', () => {
      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        maxlength: 200,
        threshold: 0
      })
    })

    it('configures the number of words', () => {
      initExample('with word count')

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        maxwords: 150,
        threshold: 0
      })
    })

    it('configures the threshold', () => {
      initExample('with threshold')

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        maxlength: 112,
        threshold: 75
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
        maxlength: 200,
        threshold: 0
      })
    })
  })
})
