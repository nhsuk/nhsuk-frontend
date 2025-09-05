import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'
import { outdent } from 'outdent'

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
        threshold: 0,
        i18n: CharacterCount.defaults.i18n
      })
    })

    it('configures the number of words', () => {
      initExample('with word count')

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        maxwords: 150,
        threshold: 0,
        i18n: CharacterCount.defaults.i18n
      })
    })

    it('configures the threshold', () => {
      initExample('with threshold')

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        maxlength: 112,
        threshold: 75,
        i18n: CharacterCount.defaults.i18n
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
        threshold: 0,
        i18n: CharacterCount.defaults.i18n
      })
    })
  })

  describe('JavaScript configuration', () => {
    beforeEach(() => {
      initExample('to configure in JavaScript')
    })

    it('configures the number of characters', () => {
      const characterCount = new CharacterCount($root, {
        maxlength: 20
      })

      expect(characterCount.config).toEqual({
        maxlength: 20,
        threshold: 0,
        i18n: CharacterCount.defaults.i18n
      })
    })

    it('configures the number of words', () => {
      const characterCount = new CharacterCount($root, {
        maxwords: 20
      })

      expect(characterCount.config).toEqual({
        maxwords: 20,
        threshold: 0,
        i18n: CharacterCount.defaults.i18n
      })
    })

    it('configures the threshold', () => {
      const characterCount = new CharacterCount($root, {
        maxlength: 20,
        threshold: 18
      })

      expect(characterCount.config).toEqual({
        maxlength: 20,
        threshold: 18,
        i18n: CharacterCount.defaults.i18n
      })
    })

    it('should throw when config is invalid', () => {
      expect(() => new CharacterCount($root)).toThrow(
        `${CharacterCount.moduleName}: Either "maxlength" or "maxwords" must be provided`
      )
    })

    describe('i18n', () => {
      it('overrides the default translation keys', () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          i18n: {
            charactersUnderLimit: {
              one: 'Custom text. Count: %{count}'
            }
          }
        })

        expect(component.formatCountMessage(1, 'characters')).toBe(
          'Custom text. Count: 1'
        )

        // Other keys remain untouched

        expect(component.formatCountMessage(10, 'characters')).toBe(
          'You have 10 characters remaining'
        )
      })

      it('overrides text for when max characters is reached', () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          i18n: {
            charactersAtLimit: 'Custom text.'
          }
        })

        expect(component.formatCountMessage(0, 'characters')).toBe(
          'Custom text.'
        )
      })

      it('overrides text for when max words is reached', () => {
        const component = new CharacterCount($root, {
          maxwords: 100,
          i18n: {
            wordsAtLimit: 'Different custom text.'
          }
        })

        expect(component.formatCountMessage(0, 'words')).toBe(
          'Different custom text.'
        )
      })
    })

    describe('with HTML lang attribute', () => {
      it('overrides the locale when set on the element', () => {
        $root.setAttribute('lang', 'de')

        const component = new CharacterCount($root, {
          maxwords: 20000
        })

        expect(component.formatCountMessage(10000, 'words')).toBe(
          'You have 10.000 words remaining'
        )
      })

      it('overrides the locale when set on an ancestor', () => {
        document.body.setAttribute('lang', 'de')

        const component = new CharacterCount($root, {
          maxwords: 20000
        })

        expect(component.formatCountMessage(10000, 'words')).toBe(
          'You have 10.000 words remaining'
        )
      })
    })

    describe('with HTML data attributes', () => {
      it('overrides the default translation keys', () => {
        $root.setAttribute(
          'data-i18n.characters-under-limit.one',
          'Custom text. Count: %{count}'
        )

        const component = new CharacterCount($root, {
          maxlength: 100
        })

        expect(component.formatCountMessage(1, 'characters')).toBe(
          'Custom text. Count: 1'
        )

        // Other keys remain untouched

        expect(component.formatCountMessage(10, 'characters')).toBe(
          'You have 10 characters remaining'
        )
      })

      it('overrides the default translation keys and configuration', () => {
        $root.setAttribute(
          'data-i18n.characters-under-limit.one',
          'Custom text. Count: %{count}'
        )

        const component = new CharacterCount($root, {
          maxlength: 100,
          i18n: {
            charactersUnderLimit: {
              one: 'Different custom text. Count: %{count}'
            }
          }
        })

        expect(component.formatCountMessage(1, 'characters')).toBe(
          'Custom text. Count: 1'
        )

        // Other keys remain untouched

        expect(component.formatCountMessage(-10, 'characters')).toBe(
          'You have 10 characters too many'
        )

        expect(component.formatCountMessage(0, 'characters')).toBe(
          'You have 0 characters remaining'
        )
      })
    })
  })
})

describe('Character count: Format count message', () => {
  let /** @type {CharacterCount} */ componentWithMaxLength
  let /** @type {CharacterCount} */ componentWithMaxWords

  beforeEach(() => {
    const example = examples['to configure in JavaScript']

    // Some tests add attributes to `document.body` so we need to reset it
    // alongside both character count renders (for maxlength and maxwords)
    document.body.outerHTML = outdent`
      <body class="nhsuk-frontend-supported">
        ${components.render('character-count', example)}
        ${components.render('character-count', example)}
      </body>
    `

    const $roots = document.querySelectorAll(
      `[data-module="${CharacterCount.moduleName}"]`
    )

    componentWithMaxLength = new CharacterCount($roots[0], {
      maxlength: 100
    })

    componentWithMaxWords = new CharacterCount($roots[1], {
      maxwords: 100
    })
  })

  it.each([
    { number: 1, expected: 'You have 1 character remaining' },
    { number: 10, expected: 'You have 10 characters remaining' },
    { number: -1, expected: 'You have 1 character too many' },
    { number: -10, expected: 'You have 10 characters too many' },
    { number: 0, expected: 'You have 0 characters remaining' }
  ])(
    'outputs the expected translation for $number characters',
    ({ number, expected }) => {
      expect(
        componentWithMaxLength.formatCountMessage(number, 'characters')
      ).toEqual(expected)
    }
  )

  it.each([
    {
      number: 1,
      type: 'words',
      expected: 'You have 1 word remaining'
    },
    {
      number: 10,
      type: 'words',
      expected: 'You have 10 words remaining'
    },
    {
      number: -1,
      type: 'words',
      expected: 'You have 1 word too many'
    },
    {
      number: -10,
      type: 'words',
      expected: 'You have 10 words too many'
    },
    {
      number: 0,
      type: 'words',
      expected: 'You have 0 words remaining'
    }
  ])(
    'outputs the expected translation for $number words',
    ({ number, expected }) => {
      expect(componentWithMaxWords.formatCountMessage(number, 'words')).toEqual(
        expected
      )
    }
  )

  it('formats the number inserted in the message', () => {
    expect(componentWithMaxWords.formatCountMessage(10000, 'words')).toBe(
      'You have 10,000 words remaining'
    )

    expect(componentWithMaxWords.formatCountMessage(-10000, 'words')).toBe(
      'You have 10,000 words too many'
    )
  })
})
