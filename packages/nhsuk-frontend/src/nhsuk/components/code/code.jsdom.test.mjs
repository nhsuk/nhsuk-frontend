import { userEvent } from '@testing-library/user-event'
import { mockResizeObserver } from 'jsdom-testing-mocks'

import { components } from '#lib'

import { Code, initCode } from './code.mjs'
import { examples } from './fixtures.mjs'

const user = userEvent.setup({
  writeToClipboard: true
})

const resizeObserverMock = mockResizeObserver()

describe('Code', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $container

  /** @type {HTMLElement} */
  let $content

  /** @type {HTMLButtonElement} */
  let $button

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render('code', examples[example])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Code.moduleName}"]`)
    )

    $container = /** @type {HTMLElement} */ (
      $root.querySelector('.nhsuk-code__container')
    )

    $content = /** @type {HTMLElement} */ (
      $root.querySelector('.nhsuk-code__content')
    )

    $button = /** @type {HTMLButtonElement} */ (
      $root.querySelector('.nhsuk-js-code-button')
    )

    if ($button) {
      jest.spyOn($button, 'addEventListener')
    }

    jest.spyOn($content, 'clientWidth', 'get').mockReturnValue(1024)
    jest.spyOn($content, 'clientHeight', 'get').mockReturnValue(768)

    jest.spyOn($content, 'scrollWidth', 'get').mockReturnValue(500)
    jest.spyOn($content, 'scrollHeight', 'get').mockReturnValue(500)
  }

  beforeEach(() => {
    initExample('button')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initCode()

      expect($button.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing pre element', () => {
      $root.remove()
      expect(() => initCode()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initCode()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initCode({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Code($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Code($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new Code()).toThrow(
        `${Code.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Code($svg)).toThrow(
        `${Code.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw with missing $container element', () => {
      $container.remove()

      expect(() => new Code($root)).toThrow(
        `${Code.moduleName}: Code container (\`.nhsuk-code__container\`) not found`
      )
    })

    it('should throw with missing $content element', () => {
      $content.remove()

      expect(() => new Code($root)).toThrow(
        `${Code.moduleName}: Code content (\`.nhsuk-code__content\`) not found`
      )
    })

    it('should not throw with missing $button element', () => {
      $button.remove()

      expect(() => new Code($root)).not.toThrow()
    })

    it('should throw with wrong $button element type', () => {
      const $div = document.createElement('div')
      $div.classList.add('nhsuk-js-code-button')

      $button.replaceWith($div)

      expect(() => new Code($root)).toThrow(
        `${Code.moduleName}: Button (\`.nhsuk-js-code-button\`) is not of type HTMLButtonElement`
      )
    })

    it('should throw with wrong $button attribute type', () => {
      $button.type = 'reset'

      expect(() => new Code($root)).toThrow(
        `${Code.moduleName}: Button (\`.nhsuk-js-code-button\`) is not of type HTMLButtonElement with type="button"`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Code($root)
        new Code($root)
      }).toThrow(
        `${Code.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      new Code($root)
    })

    it('should have accessible name and role', async () => {
      expect($button).toHaveRole('button')
      expect($button).toHaveAccessibleName('Copy code')

      // Click to copy code
      await user.click($button)

      expect($button).toHaveRole('button')
      expect($button).toHaveAccessibleName('Code copied')

      await expect(navigator.clipboard.readText()).resolves.toBe(
        'This is a plain text code block'
      )
    })

    it('should not add tabindex by default', async () => {
      expect($content).not.toHaveAttribute('tabindex')
    })

    it('should add tabindex when code overflows container', async () => {
      jest.spyOn($content, 'clientWidth', 'get').mockReturnValue(320)
      jest.spyOn($content, 'clientHeight', 'get').mockReturnValue(240)

      resizeObserverMock.mockElementSize($content, {
        contentBoxSize: { inlineSize: 500, blockSize: 500 }
      })

      // Trigger resize
      resizeObserverMock.resize()

      expect($content).toHaveAttribute('tabindex')
    })
  })

  describe('Nunjucks configuration', () => {
    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('code', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const component = new Code(
        document.querySelector(`[data-module="${Code.moduleName}"]`)
      )

      expect(component.config).toEqual(Code.defaults)
    })

    it('configures default text', () => {
      initExample('default')

      const component = new Code(
        document.querySelector(`[data-module="${Code.moduleName}"]`)
      )

      expect(component.config).toEqual(Code.defaults)
    })

    it('configures translated text', () => {
      initExample('with translations')

      const component = new Code(
        document.querySelector(`[data-module="${Code.moduleName}"]`)
      )

      expect(component.config).toEqual({
        ...Code.defaults,
        i18n: {
          copyButton: 'Copïo cod',
          copiedButton: "Cod wedi'i gopïo",
          copiedAnnouncement: "Cod wedi'i gopïo i'r clipfwrdd"
        }
      })
    })
  })

  describe('JavaScript configuration', () => {
    beforeEach(() => {
      initExample('default')
    })

    describe('during initialisation', () => {
      it('overrides the default translation keys', () => {
        const component = new Code($root, {
          i18n: {
            copyButton: 'Custom text'
          }
        })

        expect(component.config).toEqual({
          ...Code.defaults,
          i18n: {
            ...Code.defaults.i18n,
            copyButton: 'Custom text'
          }
        })
      })
    })

    describe('with HTML data attributes', () => {
      it('overrides the default translation keys', () => {
        $root.setAttribute('data-i18n.copy-button', 'Custom text')

        const component = new Code($root)

        expect(component.config).toEqual({
          ...Code.defaults,
          i18n: {
            ...Code.defaults.i18n,
            copyButton: 'Custom text'
          }
        })
      })
    })
  })
})
