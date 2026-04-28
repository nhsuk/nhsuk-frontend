import { getByRole } from '@testing-library/dom'
import { outdent } from 'outdent'

import { components } from '#lib'

import { CharacterCount, initCharacterCounts } from './character-count.mjs'
import { examples } from './fixtures.mjs'

describe('Character count', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLTextAreaElement} */
  let $textarea

  /** @type {HTMLElement | null} */
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
    jest.spyOn(window, 'addEventListener')
    jest.spyOn(console, 'warn').mockImplementation()
  }

  beforeEach(() => {
    initExample('default')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initCharacterCounts()

      expect($textarea.addEventListener).toHaveBeenCalledWith(
        'input',
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

      expect(window.addEventListener).toHaveBeenCalledWith(
        'pageshow',
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
      $description?.remove()

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

    it('should handle deprecated methods', () => {
      const component = new CharacterCount($root)

      jest.spyOn(component, 'getCountMessage')
      jest.spyOn(component, 'handleInput')
      jest.spyOn(component, 'updateCount')
      jest.spyOn(component, 'updateIfValueChanged')

      expect(() => component.formattedUpdateMessage()).not.toThrow()
      expect(() => component.handleKeyUp()).not.toThrow()
      expect(() => component.count('')).not.toThrow()
      expect(() => component.checkIfValueChanged()).not.toThrow()

      expect(component.count('')).toBe(0)
      expect(component.count('Existing value')).toBe(14)
      expect(component.count('Newly updated value')).toBe(19)

      expect(component.getCountMessage).toHaveBeenCalled()
      expect(component.handleInput).toHaveBeenCalled()
      expect(component.updateCount).toHaveBeenCalled()
      expect(component.updateIfValueChanged).toHaveBeenCalled()
    })

    it('should handle deprecated params', () => {
      $textarea.value = 'Existing value'

      const component = new CharacterCount($root)

      expect(component.getCountMessage()).toBe(
        'You have 186 characters remaining'
      )

      // Temporarily allow deprecated `text` parameter
      component.updateCount('')

      // Temporarily allow  deprecated `countType` parameter
      expect(component.formatCountMessage(200, 'words')).toBe(
        'You have 200 words remaining'
      )
    })
  })

  describe('Nunjucks configuration', () => {
    it('configures `maxlength`', () => {
      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 200,
        threshold: 0,
        countType: 'length'
      })
    })

    it('configures `maxwords` (deprecated)', () => {
      initExample('with maxwords')

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 150,
        maxwords: 150,
        threshold: 0,
        countType: 'words'
      })

      expect(console.warn).toHaveBeenCalledWith(
        `${CharacterCount.moduleName}: Option \`maxwords\` is deprecated. Use \`maxlength\` with \`countType: "words"\` instead.`
      )
    })

    it('configures `countType: "length"`', () => {
      initExample("with 'length' count type")

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 200,
        threshold: 0,
        countType: 'length'
      })
    })

    it('configures `countType: "characters"`', () => {
      initExample("with 'characters' count type")

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 200,
        threshold: 0,
        countType: 'characters'
      })
    })

    it('configures `countType: "words"`', () => {
      initExample("with 'words' count type")

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 150,
        threshold: 0,
        countType: 'words'
      })
    })

    it('configures `threshold`', () => {
      initExample('with threshold')

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 112,
        threshold: 75,
        countType: 'length'
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
        ...CharacterCount.defaults,
        maxlength: 200,
        threshold: 0,
        countType: 'length'
      })
    })
  })

  describe('JavaScript configuration', () => {
    beforeEach(() => {
      initExample('to configure in JavaScript')
    })

    describe('during initialisation', () => {
      it('overrides the default translation keys', () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          i18n: {
            charactersUnderLimit: { one: 'Custom text. Count: %{count}' }
          }
        })

        expect(component.formatCountMessage(1)).toBe('Custom text. Count: 1')

        // Other keys remain untouched
        expect(component.formatCountMessage(10)).toBe(
          'You have 10 characters remaining'
        )
      })

      it('uses specific translation keys when `maxlength` limit is reached', () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          i18n: {
            charactersAtLimit: 'Custom text.'
          }
        })

        expect(component.formatCountMessage(0)).toBe('Custom text.')
      })

      it('uses specific translation keys when `maxwords` limit is reached', () => {
        const component = new CharacterCount($root, {
          maxwords: 100,
          i18n: {
            wordsAtLimit: 'Different custom text.'
          }
        })

        expect(component.formatCountMessage(0)).toBe('Different custom text.')
      })

      it('uses existing textarea value for `maxlength` limit when initialised', () => {
        $textarea.value = 'Existing value'

        const component = new CharacterCount($root, {
          maxlength: 100
        })

        expect(component.getCountMessage()).toBe(
          'You have 86 characters remaining'
        )
      })

      it('uses existing textarea value for `maxwords` limit when initialised', () => {
        $textarea.value = 'Existing value'

        const component = new CharacterCount($root, {
          maxwords: 100
        })

        expect(component.getCountMessage()).toBe('You have 98 words remaining')
      })

      it('uses current textarea value for `maxlength` limit via back/forward navigation', () => {
        const component = new CharacterCount($root, {
          maxlength: 100
        })

        $textarea.value = 'Newly updated value'

        // Trigger back/forward navigation
        window.dispatchEvent(
          new PageTransitionEvent('pageshow', {
            persisted: true
          })
        )

        expect(component.getCountMessage()).toBe(
          'You have 81 characters remaining'
        )
      })

      it('uses current textarea value for `maxwords` limit via back/forward navigation', () => {
        const component = new CharacterCount($root, {
          maxwords: 100
        })

        $textarea.value = 'Newly updated value'

        // Trigger back/forward navigation
        window.dispatchEvent(
          new PageTransitionEvent('pageshow', {
            persisted: true
          })
        )

        expect(component.getCountMessage()).toBe('You have 97 words remaining')
      })
    })

    describe('with HTML lang attribute', () => {
      it('overrides the locale when set on the element', () => {
        $root.setAttribute('lang', 'de')

        const component = new CharacterCount($root, {
          maxwords: 20000
        })

        expect(component.formatCountMessage(10000)).toBe(
          'You have 10.000 words remaining'
        )
      })

      it('overrides the locale when set on an ancestor', () => {
        document.body.setAttribute('lang', 'de')

        const component = new CharacterCount($root, {
          maxwords: 20000
        })

        expect(component.formatCountMessage(10000)).toBe(
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

        expect(component.formatCountMessage(1)).toBe('Custom text. Count: 1')

        // Other keys remain untouched
        expect(component.formatCountMessage(10)).toBe(
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

        expect(component.formatCountMessage(1)).toBe('Custom text. Count: 1')

        // Other keys remain untouched
        expect(component.formatCountMessage(-10)).toBe(
          'You have 10 characters too many'
        )

        expect(component.formatCountMessage(0)).toBe(
          'You have 0 characters remaining'
        )
      })
    })
  })
})

describe('Character count: Format count message', () => {
  let /** @type {CharacterCount} */ component
  let /** @type {CharacterCount} */ componentWithCountTypeCharacters
  let /** @type {CharacterCount} */ componentWithCountTypeWords

  // Deprecated `maxwords` option where `countType` is inferred
  let /** @type {CharacterCount} */ componentWithMaxWords

  beforeEach(() => {
    const example = examples['to configure in JavaScript']

    // Some tests add attributes to `document.body` so we need to reset it
    // alongside both character count renders (for maxlength and maxwords)
    document.body.outerHTML = outdent`
      <body class="nhsuk-frontend-supported">
        ${components.render('character-count', example)}
        ${components.render('character-count', example)}
        ${components.render('character-count', example)}
        ${components.render('character-count', example)}
      </body>
    `

    const $roots = document.querySelectorAll(
      `[data-module="${CharacterCount.moduleName}"]`
    )

    component = new CharacterCount($roots[0], {
      maxlength: 100
    })

    componentWithCountTypeCharacters = new CharacterCount($roots[1], {
      maxlength: 100,
      countType: 'characters'
    })

    componentWithCountTypeWords = new CharacterCount($roots[2], {
      maxlength: 100,
      countType: 'words'
    })

    componentWithMaxWords = new CharacterCount($roots[3], {
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
      expect(component.formatCountMessage(number)).toEqual(expected)

      expect(
        componentWithCountTypeCharacters.formatCountMessage(number)
      ).toEqual(expected)
    }
  )

  it.each([
    { number: 1, expected: 'You have 1 word remaining' },
    { number: 10, expected: 'You have 10 words remaining' },
    { number: -1, expected: 'You have 1 word too many' },
    { number: -10, expected: 'You have 10 words too many' },
    { number: 0, expected: 'You have 0 words remaining' }
  ])(
    'outputs the expected translation for $number words',
    ({ number, expected }) => {
      expect(componentWithCountTypeWords.formatCountMessage(number)).toEqual(
        expected
      )

      // Deprecated `maxwords` option where `countType` is inferred
      expect(componentWithMaxWords.formatCountMessage(number)).toEqual(expected)
    }
  )

  it('formats the number inserted in the message', () => {
    expect(componentWithCountTypeWords.formatCountMessage(10000)).toBe(
      'You have 10,000 words remaining'
    )

    expect(componentWithCountTypeWords.formatCountMessage(-10000)).toBe(
      'You have 10,000 words too many'
    )
  })
})
