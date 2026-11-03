import { within } from '@testing-library/dom'

import { components } from '#lib'

import { FileUpload } from './file-upload.mjs'
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
    $input = within($root).getByLabelText('Upload a file')

    jest.spyOn($input, 'addEventListener')
  }

  beforeEach(() => {
    initExample('default')
  })

  describe('Initialisation via class', () => {
    it('should add event listeners', () => {
      const addEventListenerSpy = jest.spyOn(
        HTMLButtonElement.prototype,
        'addEventListener'
      )

      new FileUpload($root)

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

    it('should not throw with $root element', () => {
      expect(() => new FileUpload($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new FileUpload($root)).toThrow(
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
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
      $div.classList.add('nhsuk-file-upload__input')

      $input.replaceWith($div)

      expect(() => new FileUpload($root)).toThrow(
        `${FileUpload.moduleName}: Form field (\`<input>\`) not found`
      )
    })

    it('should throw with missing input', () => {
      $input.remove()

      expect(() => new FileUpload($root)).toThrow(
        `${FileUpload.moduleName}: Form field (\`<input>\`) not found`
      )
    })

    it('should throw with missing file input', () => {
      $input.setAttribute('type', 'text')

      expect(() => new FileUpload($root)).toThrow(
        `${FileUpload.moduleName}: Form field (\`<input>\`) is not of type HTMLInputElement with attribute (\`type="file"\`)`
      )
    })

    it('should throw with missing input id', () => {
      $input.removeAttribute('id')

      expect(() => new FileUpload($root)).toThrow(
        `${FileUpload.moduleName}: File input (\`<input type="file">\`) attribute (\`id\`) not found`
      )
    })

    it('should throw with missing label', () => {
      const $label = document.querySelector(`label[for="${$input.id}"]`)

      $label?.remove()

      expect(() => new FileUpload($root)).toThrow(
        `${FileUpload.moduleName}: Field label (\`<label for=${$input.id}>\`) not found`
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

    describe('during initialisation', () => {
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
      afterEach(() => {
        document.body.removeAttribute('lang')
        $root.removeAttribute('lang')
      })

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

  describe('Drag and drop', () => {
    /** @type {FileUpload} */
    let component

    /**
     * Create a drag event carrying the given `dataTransfer`
     *
     * Happy DOM does not support the `dataTransfer` event init option, so it
     * has to be assigned to the event directly.
     *
     * @param {string} type - The drag event type
     * @param {DataTransfer} dataTransfer - The drag event data
     * @returns {DragEvent} The drag event
     */
    function createDragEvent(type, dataTransfer) {
      const event = new DragEvent(type, { bubbles: true, cancelable: true })
      Object.defineProperty(event, 'dataTransfer', { value: dataTransfer })
      return event
    }

    /**
     * Create `DataTransfer` with the given number of files
     *
     * @param {number} fileCount - The number of files
     * @returns {DataTransfer} The drag event data
     */
    function createDataTransfer(fileCount) {
      const dataTransfer = new DataTransfer()

      for (let index = 0; index < fileCount; index++) {
        dataTransfer.items.add(new File([''], `test-file-${index}.txt`))
      }
      return dataTransfer
    }

    beforeEach(() => {
      component = new FileUpload($root)
    })

    it('should show dragging state when entering the drop zone', () => {
      const showDraggingState = jest.spyOn(component, 'showDraggingState')

      component.$dropButton.dispatchEvent(
        createDragEvent('dragenter', createDataTransfer(1))
      )
      component.$dropButton.dispatchEvent(
        createDragEvent('dragenter', createDataTransfer(1))
      )

      // The dragging state is only shown once to avoid repeated announcements
      expect(showDraggingState).toHaveBeenCalledTimes(1)
      expect(component.$dropButton).toHaveClass(
        `${FileUpload.defaults.dropButtonClass}--dragging`
      )
      expect(component.$announcements).toHaveTextContent('Entered drop zone')
    })

    it('should hide dragging state when entering another element', () => {
      component.$dropButton.dispatchEvent(
        createDragEvent('dragenter', createDataTransfer(1))
      )
      document.body.dispatchEvent(
        createDragEvent('dragenter', createDataTransfer(1))
      )

      expect(component.$dropButton).not.toHaveClass(
        `${FileUpload.defaults.dropButtonClass}--dragging`
      )
      expect(component.$announcements).toHaveTextContent('Left drop zone')
    })

    it('should not show dragging state when entering another element', () => {
      document.body.dispatchEvent(
        createDragEvent('dragenter', createDataTransfer(1))
      )

      expect(component.$dropButton).not.toHaveClass(
        `${FileUpload.defaults.dropButtonClass}--dragging`
      )
      expect(component.$announcements).toBeEmptyDOMElement()
    })

    it('should hide dragging state when leaving the document', () => {
      document.dispatchEvent(
        createDragEvent('dragleave', createDataTransfer(1))
      )

      expect(component.$dropButton).not.toHaveClass(
        `${FileUpload.defaults.dropButtonClass}--dragging`
      )
      expect(component.$announcements).toHaveTextContent('Left drop zone')
    })

    it('should not announce when leaving one element for another', () => {
      document.body.dispatchEvent(
        createDragEvent('dragenter', createDataTransfer(1))
      )
      document.dispatchEvent(
        createDragEvent('dragleave', createDataTransfer(1))
      )

      expect(component.$announcements).toBeEmptyDOMElement()
    })

    it('should ignore drag events when disabled', () => {
      component.$dropButton.disabled = true

      component.$dropButton.dispatchEvent(
        createDragEvent('dragenter', createDataTransfer(1))
      )

      expect(component.$dropButton).not.toHaveClass(
        `${FileUpload.defaults.dropButtonClass}--dragging`
      )
    })

    describe('when dragging files the input cannot accept', () => {
      it('should not show dragging state when too many files', () => {
        component.$dropButton.dispatchEvent(
          createDragEvent('dragenter', createDataTransfer(2))
        )

        expect(component.$dropButton).not.toHaveClass(
          `${FileUpload.defaults.dropButtonClass}--dragging`
        )
      })

      it('should use data transfer types when no items are listed', () => {
        const showDraggingState = jest.spyOn(component, 'showDraggingState')
        const accepted = createDataTransfer(0)
        const rejected = createDataTransfer(0)

        Object.defineProperty(accepted, 'types', { value: ['Files'] })
        Object.defineProperty(rejected, 'types', { value: ['text/plain'] })

        component.$dropButton.dispatchEvent(
          createDragEvent('dragenter', rejected)
        )
        component.$dropButton.dispatchEvent(
          createDragEvent('dragenter', accepted)
        )

        expect(showDraggingState).toHaveBeenCalledTimes(1)
      })

      it('should show dragging state when no information is available', () => {
        component.$dropButton.dispatchEvent(
          createDragEvent('dragenter', createDataTransfer(0))
        )

        expect(component.$dropButton).toHaveClass(
          `${FileUpload.defaults.dropButtonClass}--dragging`
        )
      })
    })

    describe('when files are dropped', () => {
      it('should fill the input with the dropped file', () => {
        const changeSpy = jest.fn()
        $input.addEventListener('change', changeSpy)

        const event = createDragEvent('drop', createDataTransfer(1))
        component.$dropButton.dispatchEvent(event)

        expect(event.defaultPrevented).toBe(true)
        expect($input.files?.length).toBe(1)
        expect(changeSpy).toHaveBeenCalled()
        expect(component.$status).toHaveTextContent('test-file-0.txt')
        expect(component.$dropButton).not.toHaveClass(
          `${FileUpload.defaults.dropButtonClass}--empty`
        )
      })

      it('should not fill the input when too many files are dropped', () => {
        component.$dropButton.dispatchEvent(
          createDragEvent('drop', createDataTransfer(2))
        )

        expect($input.files?.length).toBe(0)
      })

      it('should fill the input with multiple files when allowed', () => {
        initExample('default')
        $input.setAttribute('multiple', '')
        component = new FileUpload($root)

        component.$dropButton.dispatchEvent(
          createDragEvent('drop', createDataTransfer(2))
        )

        expect($input.files?.length).toBe(2)
        expect(component.$status).toHaveTextContent('2 files chosen')
      })
    })
  })
})
