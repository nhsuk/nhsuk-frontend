import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'

import { examples } from './fixtures.mjs'
import { Select, initSelects } from './select.mjs'

describe('Select', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLSelectElement} */
  let $select

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render('select', examples[example])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Select.moduleName}"]`)
    )

    $select = getByRole($root, 'combobox')
  }

  beforeEach(() => {
    initExample('default')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      const addEventListenerSpy = jest.spyOn(
        HTMLButtonElement.prototype,
        'addEventListener'
      )

      initSelects()

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      )

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keyup',
        expect.any(Function)
      )
    })

    it('should throw with missing select', () => {
      $select.remove()

      expect(() => initSelects()).toThrow(
        `${Select.moduleName}: Form field (\`.nhsuk-js-select\`) not found`
      )
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initSelects()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initSelects({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Select($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Select($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new Select()).toThrow(
        `${Select.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Select($svg)).toThrow(
        `${Select.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw with wrong input element type', () => {
      const $div = document.createElement('div')
      $div.classList.add('nhsuk-js-select')

      $select.replaceWith($div)

      expect(() => new Select($root)).toThrow(
        `${Select.moduleName}: Form field (\`.nhsuk-js-select\`) is not of type HTMLSelectElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Select($root)
        new Select($root)
      }).toThrow(
        `${Select.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Nunjucks configuration', () => {
    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('select', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const select = new Select(
        document.querySelector(`[data-module="${Select.moduleName}"]`)
      )

      expect(select.config).toEqual({
        search: Select.defaults.search,
        i18n: Select.defaults.i18n
      })
    })
  })

  describe('JavaScript configuration', () => {
    beforeEach(() => {
      initExample('to configure in JavaScript')
    })

    describe('i18n', () => {
      it('overrides the default translation keys', () => {
        const component = new Select($root, {
          search: true,
          i18n: {
            results: {
              one: 'Custom text. %{count} result'
            }
          }
        })

        expect(component.formatCountMessage(1)).toBe('Custom text. 1 result')

        // Other keys remain untouched

        expect(component.formatStatusMessage()).toBe(
          'Select an option or search (4 options)'
        )
      })

      it('overrides text for number of options found', () => {
        const component = new Select($root, {
          search: true,
          i18n: {
            noResults: 'Custom text. No results found.',
            results: {
              one: 'Custom text. %{count} result.',
              other: 'Custom text. %{count} results.'
            }
          }
        })

        expect(component.formatCountMessage(0)).toBe(
          'Custom text. No results found.'
        )

        expect(component.formatCountMessage(1)).toBe('Custom text. 1 result.')

        expect(component.formatCountMessage(2)).toBe('Custom text. 2 results.')
      })
    })

    describe('with HTML lang attribute', () => {
      it('overrides the locale when set on the element', () => {
        $root.setAttribute('lang', 'de')

        const component = new Select($root, {
          search: true
        })

        expect(component.formatCountMessage(10000)).toBe('10.000 options found')
      })

      it('overrides the locale when set on an ancestor', () => {
        document.body.setAttribute('lang', 'de')

        const component = new Select($root, {
          search: true
        })

        expect(component.formatCountMessage(10000)).toBe('10.000 options found')
      })
    })

    describe('with HTML data attributes', () => {
      it('overrides the default translation keys', () => {
        $root.setAttribute(
          'data-i18n.results.one',
          'Custom text. %{count} result.'
        )

        const component = new Select($root, {
          search: true
        })

        expect(component.formatCountMessage(1)).toBe('Custom text. 1 result.')

        // Other keys remain untouched

        expect(component.formatStatusMessage()).toBe(
          'Select an option or search (4 options)'
        )
      })

      it('overrides the default translation keys and configuration', () => {
        $root.setAttribute(
          'data-i18n.results.one',
          'Custom text. %{count} result.'
        )

        const component = new Select($root, {
          search: true,
          i18n: {
            results: {
              one: 'Different custom text. %{count} result.'
            }
          }
        })

        expect(component.formatCountMessage(1)).toBe('Custom text. 1 result.')

        // Other keys remain untouched

        expect(component.formatCountMessage(0)).toBe('No options found')

        expect(component.formatStatusMessage()).toBe(
          'Select an option or search (4 options)'
        )
      })
    })
  })
})
