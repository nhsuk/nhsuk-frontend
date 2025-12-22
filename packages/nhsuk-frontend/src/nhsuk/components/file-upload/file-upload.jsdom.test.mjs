import { components } from '@nhsuk/frontend-lib'
import { getByLabelText } from '@testing-library/dom'

import { FileUpload, initFileUploads } from './file-upload.mjs'
import { examples } from './fixtures.mjs'

describe('File upload', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLInputElement} */
  let $input

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render(
      'file-upload',
      examples[example]
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${FileUpload.moduleName}"]`)
    )

    // File input has no explicit role
    $input = getByLabelText($root, 'Upload a file')

    jest.spyOn($input, 'addEventListener')
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

      initFileUploads()

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'dragover',
        expect.any(Function)
      )

      expect($input.addEventListener).toHaveBeenCalledWith(
        'change',
        expect.any(Function)
      )
    })

    it('should prevent default dragover events on button', () => {
      const component = new FileUpload($root)

      const event = new Event('dragover')

      jest.spyOn(event, 'preventDefault')

      component.$dropButton.dispatchEvent(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it('should copy click event from button to input', () => {
      const component = new FileUpload($root)

      const clickSpy = jest.spyOn($input, 'click')

      const event = new Event('click')
      component.$dropButton.dispatchEvent(event)

      expect(clickSpy).toHaveBeenCalled()
    })

    it('should throw with missing input', () => {
      $input.remove()

      expect(() => initFileUploads()).toThrow(
        `${FileUpload.moduleName}: Form field (\`<input>\`) not found`
      )
    })

    it('should throw with missing file input', () => {
      $input.setAttribute('type', 'text')

      expect(() => initFileUploads()).toThrow(
        `${FileUpload.moduleName}: Form field (\`<input>\`) is not of type HTMLInputElement with attribute (\`type="file"\`)`
      )
    })

    it('should throw with missing input id', () => {
      $input.removeAttribute('id')

      expect(() => initFileUploads()).toThrow(
        `${FileUpload.moduleName}: File input (\`<input type="file">\`) attribute (\`id\`) not found`
      )
    })

    it('should throw with missing label', () => {
      const $label = document.querySelector(`label[for="${$input.id}"]`)

      $label.remove()

      expect(() => initFileUploads()).toThrow(
        `${FileUpload.moduleName}: Field label (\`<label for=${$input.id}>\`) not found`
      )
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initFileUploads()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initFileUploads({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new FileUpload($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')
      expect(() => new FileUpload($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new FileUpload()).toThrow(
        `${FileUpload.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new FileUpload($svg)).toThrow(
        `${FileUpload.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw with wrong input element type', () => {
      const $div = document.createElement('div')
      $div.classList.add('nhsuk-js-character-count')

      $input.replaceWith($div)

      expect(() => new FileUpload($root)).toThrow(
        `${FileUpload.moduleName}: Form field (\`<input>\`) not found`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new FileUpload($root)
        new FileUpload($root)
      }).toThrow(
        `${FileUpload.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Nunjucks configuration', () => {
    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('file-upload', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const fileUpload = new FileUpload(
        document.querySelector(`[data-module="${FileUpload.moduleName}"]`)
      )

      expect(fileUpload.config).toEqual(FileUpload.defaults)
    })
  })

  describe('JavaScript configuration', () => {
    beforeEach(() => {
      initExample('to configure in JavaScript')
    })

    describe('i18n', () => {
      it('overrides the default translation keys', () => {
        const component = new FileUpload($root, {
          i18n: {
            multipleFilesChosen: {
              one: 'Custom text. 1 file chosen.'
            }
          }
        })

        expect(component.formatStatusMessage(1)).toBe(
          'Custom text. 1 file chosen.'
        )

        // Other keys remain untouched

        expect(component.formatStatusMessage(2)).toBe('2 files chosen')
      })

      it('overrides text for no file chosen', () => {
        const component = new FileUpload($root, {
          i18n: {
            noFileChosen: 'Custom text. No file chosen.'
          }
        })

        expect(component.formatStatusMessage(0)).toBe(
          'Custom text. No file chosen.'
        )
      })

      it('overrides text for multiple files chosen', () => {
        const component = new FileUpload($root, {
          i18n: {
            multipleFilesChosen: {
              one: 'Custom text. %{count} file chosen',
              other: 'Custom text. %{count} files chosen'
            }
          }
        })

        expect(component.formatStatusMessage(1)).toBe(
          'Custom text. 1 file chosen'
        )

        expect(component.formatStatusMessage(2)).toBe(
          'Custom text. 2 files chosen'
        )
      })
    })

    describe('with HTML lang attribute', () => {
      it('overrides the locale when set on the element', () => {
        $root.setAttribute('lang', 'de')

        const component = new FileUpload($root)

        expect(component.formatStatusMessage(10000)).toBe('10.000 files chosen')
      })

      it('overrides the locale when set on an ancestor', () => {
        document.body.setAttribute('lang', 'de')

        const component = new FileUpload($root)

        expect(component.formatStatusMessage(10000)).toBe('10.000 files chosen')
      })
    })

    describe('with HTML data attributes', () => {
      it('overrides the default translation keys', () => {
        $root.setAttribute(
          'data-i18n.multiple-files-chosen.one',
          'Custom text. %{count} file chosen.'
        )

        const component = new FileUpload($root)

        expect(component.formatStatusMessage(1)).toBe(
          'Custom text. 1 file chosen.'
        )

        // Other keys remain untouched

        expect(component.formatStatusMessage(2)).toBe('2 files chosen')
      })

      it('overrides the default translation keys and configuration', () => {
        $root.setAttribute(
          'data-i18n.multiple-files-chosen.one',
          'Custom text. %{count} file chosen.'
        )
        const component = new FileUpload($root, {
          i18n: {
            multipleFilesChosen: {
              one: 'Different custom text. %{count} file chosen.'
            }
          }
        })

        expect(component.formatStatusMessage(1)).toBe(
          'Custom text. 1 file chosen.'
        )

        // Other keys remain untouched

        expect(component.formatStatusMessage(0)).toBe('No file chosen')

        expect(component.formatStatusMessage(2)).toBe('2 files chosen')
      })
    })
  })
})
