import { within } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'
import { outdent } from 'outdent'

import { components } from '#lib'

import { CharacterCount } from './character-count.mjs'
import { examples } from './fixtures.mjs'

const user = userEvent.setup()

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

    $textarea = within($root).getByRole('textbox')
    $description = document.getElementById(`${$textarea.id}-info`)

    jest.spyOn($textarea, 'addEventListener')
    jest.spyOn(window, 'addEventListener')
    jest.spyOn(console, 'warn').mockImplementation()
  }

  beforeEach(() => {
    initExample('default')
  })

  describe('Initialisation via class', () => {
    /** @type {typeof Intl.Segmenter} */
    let Segmenter

    beforeEach(() => {
      Segmenter = Intl.Segmenter
    })

    afterEach(() => {
      Object.assign(Intl, { Segmenter })
    })

    it('should add event listeners', () => {
      new CharacterCount($root)

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

    it('should not throw with $root element', () => {
      expect(() => new CharacterCount($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new CharacterCount($root)).toThrow(
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
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

    it('should throw with missing textarea', () => {
      $textarea.remove()

      expect(() => new CharacterCount($root)).toThrow(
        `${CharacterCount.moduleName}: Form field (\`.nhsuk-js-character-count\`) not found`
      )
    })

    it('should throw with missing count message', () => {
      $description?.remove()

      expect(() => new CharacterCount($root)).toThrow(
        `${CharacterCount.moduleName}: Count message (\`id="example-info"\`) not found`
      )
    })

    it('should throw without Intl.Segmenter support', () => {
      // @ts-expect-error The operand of a 'delete' operator cannot be a read-only property
      delete Intl.Segmenter

      expect(() => {
        new CharacterCount($root, {
          countType: 'characters'
        })
      }).toThrow(
        `${CharacterCount.moduleName}: Support for "Intl.Segmenter" required`
      )
    })

    it('should not throw without Intl.Segmenter support when count function is provided', () => {
      // @ts-expect-error The operand of a 'delete' operator cannot be a read-only property
      delete Intl.Segmenter

      expect(() => {
        new CharacterCount($root, {
          countType: 'characters',
          countFunction: jest.fn()
        })
      }).not.toThrow()
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
    it('configures `maxlength`', () => {
      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 200,
        threshold: 0,
        countType: 'characters'
      })
    })

    it('configures `countType: "length"`', () => {
      initExample("with count type 'length'")

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 200,
        threshold: 0,
        countType: 'length'
      })
    })

    it('configures `countType: "characters"`', () => {
      initExample("with count type 'characters'")

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 200,
        threshold: 0,
        countType: 'characters'
      })
    })

    it('configures `countType: "words"`', () => {
      initExample("with count type 'words'")

      const characterCount = new CharacterCount($root)
      expect(characterCount.config).toEqual({
        ...CharacterCount.defaults,
        maxlength: 50,
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
        countType: 'characters'
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
        countType: 'characters'
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

      it('uses specific translation keys when `maxlength` limit with `countType: "words"` is reached', () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          countType: 'words',
          i18n: {
            wordsAtLimit: 'Different custom text.'
          }
        })

        expect(component.formatCountMessage(0)).toBe('Different custom text.')
      })

      it('uses existing textarea value for `maxlength` limit when initialised', async () => {
        await user.click($textarea)
        await user.keyboard('Existing value')

        const component = new CharacterCount($root, {
          maxlength: 100
        })

        expect(component.getCountMessage()).toBe(
          'You have 86 characters remaining'
        )
      })

      it('uses existing textarea value for `maxlength` limit with `countType: "words"` when initialised', async () => {
        await user.click($textarea)
        await user.keyboard('Existing value')

        const component = new CharacterCount($root, {
          maxlength: 100,
          countType: 'words'
        })

        expect(component.getCountMessage()).toBe('You have 98 words remaining')
      })

      it('uses current textarea value for `maxlength` limit via back/forward navigation', async () => {
        const component = new CharacterCount($root, {
          maxlength: 100
        })

        await user.click($textarea)
        await user.keyboard('Newly updated value')

        // Trigger back/forward navigation
        // https://github.com/capricorn86/happy-dom/issues/1848
        const pageshowEvent = new Event('pageshow')
        Object.defineProperty(pageshowEvent, 'persisted', { value: true })
        window.dispatchEvent(pageshowEvent)

        expect(component.getCountMessage()).toBe(
          'You have 81 characters remaining'
        )
      })

      it('uses current textarea value for `maxlength` limit with `countType: "words"` via back/forward navigation', async () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          countType: 'words'
        })

        await user.click($textarea)
        await user.keyboard('Newly updated value')

        // Trigger back/forward navigation
        // https://github.com/capricorn86/happy-dom/issues/1848
        const pageshowEvent = new Event('pageshow')
        Object.defineProperty(pageshowEvent, 'persisted', { value: true })
        window.dispatchEvent(pageshowEvent)

        expect(component.getCountMessage()).toBe('You have 97 words remaining')
      })

      it('uses custom `countFunction` for `maxlength` limit when set', async () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          countFunction: jest.fn().mockReturnValue(10)
        })

        $textarea.focus()
        await user.keyboard('Newly updated value')

        expect(component.config.countFunction).toHaveBeenLastCalledWith(
          'Newly updated value',
          {
            config: component.config,
            segmenter: component.segmenter
          }
        )

        expect(component.getCountMessage()).toBe(
          'You have 90 characters remaining'
        )
      })

      it('uses custom `countFunction` for `maxlength` limit with `countType: "words"` when set', async () => {
        const component = new CharacterCount($root, {
          maxlength: 100,
          countType: 'words',
          countFunction: jest.fn().mockReturnValue(10)
        })

        $textarea.focus()
        await user.keyboard('Newly updated value')

        expect(component.config.countFunction).toHaveBeenLastCalledWith(
          'Newly updated value',
          {
            config: component.config,
            segmenter: component.segmenter
          }
        )

        expect(component.getCountMessage()).toBe('You have 90 words remaining')
      })
    })

    describe('with HTML lang attribute', () => {
      afterEach(() => {
        document.body.removeAttribute('lang')
        $root.removeAttribute('lang')
      })

      it('overrides the locale when set on the element', () => {
        $root.setAttribute('lang', 'de')

        const component = new CharacterCount($root, {
          maxlength: 20000,
          countType: 'words'
        })

        expect(component.formatCountMessage(10000)).toBe(
          'You have 10.000 words remaining'
        )
      })

      it('overrides the locale when set on an ancestor', () => {
        document.body.setAttribute('lang', 'de')

        const component = new CharacterCount($root, {
          maxlength: 20000,
          countType: 'words'
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

  beforeEach(() => {
    const example = examples['to configure in JavaScript']

    document.body.classList.add('nhsuk-frontend-supported')
    document.body.innerHTML = outdent`
      ${components.render('character-count', example)}
      ${components.render('character-count', example)}
      ${components.render('character-count', example)}
      ${components.render('character-count', example)}
    `

    const $roots = document.querySelectorAll(
      `[data-module="${CharacterCount.moduleName}"]`
    )

    component = new CharacterCount($roots[0], {
      maxlength: 100
    })

    componentWithCountTypeCharacters = new CharacterCount($roots[1], {
      maxlength: 100,
      countType: 'length'
    })

    componentWithCountTypeWords = new CharacterCount($roots[2], {
      maxlength: 100,
      countType: 'words'
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
