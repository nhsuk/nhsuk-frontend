import {
  getAccessibleName,
  getAttribute,
  getProperty,
  getText,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { FileUpload } from './file-upload.mjs'
import { examples } from './fixtures.mjs'

describe('File upload', () => {
  /** @type {ElementHandle<HTMLElement>} */
  let $component

  /** @type {ElementHandle<HTMLInputElement>} */
  let $input

  /** @type {ElementHandle<HTMLElement>} */
  let $dropZone

  /** @type {ElementHandle<HTMLButtonElement>} */
  let $dropButton

  /** @type {ElementHandle} */
  let $chooseFilesButton

  /** @type {ElementHandle} */
  let $status

  /** @type {ElementHandle} */
  let $announcements

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'file-upload', examples[example], browserOptions)

    $component = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$(`[data-module="${FileUpload.moduleName}"]`)
    )

    $input = /** @type {ElementHandle<HTMLInputElement>} */ (
      await $component.$('input')
    )

    $dropZone = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$(`.${FileUpload.defaults.dropZoneClass}`)
    )

    $dropButton = /** @type {ElementHandle<HTMLButtonElement>} */ (
      await $component.$(`.${FileUpload.defaults.dropButtonClass}`)
    )

    $chooseFilesButton = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$(`.${FileUpload.defaults.chooseFilesButtonClass}`)
    )

    $status = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$(`.${FileUpload.defaults.statusClass}`)
    )

    $announcements = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$(`.${FileUpload.defaults.announcementsClass}`)
    )
  }

  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
      await initExample('with hint')
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('still renders an unmodified file input', async () => {
      expect(await getAttribute($input, 'type')).toBe('file')
    })

    it('does not inject additional elements', async () => {
      expect($dropZone).toBeNull()
      expect($dropButton).toBeNull()
      expect($status).toBeNull()
    })
  })

  describe('when JavaScript is available', () => {
    describe('on page load', () => {
      beforeAll(async () => {
        await initExample('with hint')
      })

      describe('wrapper element', () => {
        it('renders the wrapper element', async () => {
          expect($dropZone).toBeDefined()
        })

        it('moves the file input inside of the wrapper element', async () => {
          const isDropZoneInputParent = await page.evaluate(
            ($el1, $el2) => $el1 === $el2.parentElement,
            $dropZone,
            $input
          )

          expect(isDropZoneInputParent).toBe(true)
        })
      })

      describe('file input', () => {
        it('sets tabindex to -1', async () => {
          expect(await getAttribute($input, 'tabindex')).toBe('-1')
        })
      })

      describe('label element', () => {
        it('targets the button in its `for` attribute', async () => {
          const buttonId = await getProperty($dropButton, 'id')
          const $label = await $component.$(`[for="${buttonId}"]`)

          expect($label).not.toBeNull()
        })
      })

      describe('choose file button', () => {
        it('renders the button element', async () => {
          expect($dropButton).toBeDefined()
          expect(await getAttribute($dropButton, 'type')).toBe('button')
        })

        it('has same aria-describedby value as input', async () => {
          expect(await getAttribute($dropButton, 'aria-describedby')).toBe(
            'file-upload-hint'
          )
        })

        it('renders the button with default text', async () => {
          expect(await getText($chooseFilesButton)).toBe('Choose file')
          expect(await getText($status)).toBe('No file chosen')
          expect(await getAttribute($status, 'aria-live')).toBe('polite')
        })
      })
    })

    describe('when clicking the choose file button', () => {
      it.each([
        `.${FileUpload.defaults.dropButtonClass}`,
        `.${FileUpload.defaults.chooseFilesButtonClass}`,
        `.${FileUpload.defaults.statusClass}`
      ])('opens the file picker', async (selector) => {
        // It doesn't seem to be possible to check if the file picker dialog
        // opens as an isolated test, so this test clicks the button, tries to
        // set a value in the file chooser, then checks if that value was set
        // on the input as expected.
        const testFilename = 'test.gif'

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          page.click(selector)
        ])

        await fileChooser.accept([testFilename])

        // For Windows and backward compatibility, the values of file inputs
        // are always formatted starting with `C:\\fakepath\\`
        expect(await getProperty($input, 'value')).toBe(
          `C:\\fakepath\\${testFilename}`
        )
      })
    })

    describe('when selecting a file', () => {
      const testFilename = 'fakefile.txt'

      beforeEach(async () => {
        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          $dropButton?.click()
        ])

        await fileChooser.accept([testFilename])
      })

      it('updates the file input value', async () => {
        const inputElementFiles = await $input.evaluate(($el) => $el.files)

        // For Windows and backward compatibility, the values of file inputs
        // are always formatted starting with `C:\\fakepath\\`
        expect(await getProperty($input, 'value')).toBe(
          `C:\\fakepath\\${testFilename}`
        )

        // Also check the files object
        expect(inputElementFiles?.[0]).toBeDefined()
      })

      it('updates the filename in the status element', async () => {
        expect(await getText($status)).toBe(testFilename)
      })
    })

    describe('when selecting multiple files', () => {
      beforeEach(async () => {
        await initExample('with multiple')

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          $dropButton?.click()
        ])

        await fileChooser.accept(['testfile1.txt', 'testfile2.pdf'])
      })

      it('updates the file input value', async () => {
        const inputElementFiles = await $input.evaluate(($el) => $el.files)

        // For Windows and backward compatibility, the values of file inputs
        // are always formatted starting with `C:\\fakepath\\`
        //
        // Additionally, `value` will only ever return the first file selected
        expect(await getProperty($input, 'value')).toBe(
          `C:\\fakepath\\testfile1.txt`
        )

        // Also check the files object
        expect(inputElementFiles?.[0]).toBeDefined()
        expect(inputElementFiles?.[1]).toBeDefined()
      })

      it('shows the number of files selected in the status element', async () => {
        expect(await getText($status)).toBe('2 files chosen')
      })
    })

    describe('dropzone', () => {
      /**
       * Shared data to drag on the element
       *
       * @type {Protocol.Input.DragData}
       */
      let dragData

      /** @type {Point} */
      let dragPosition

      beforeEach(async () => {
        await initExample('default')

        dragData = {
          items: [],
          files: [import.meta.filename],
          dragOperationsMask: 1 // Copy
        }

        dragPosition = await $dropZone.clickablePoint({ x: 0, y: 0 })
      })

      it('is not shown by default', async () => {
        expect(await getAttribute($dropButton, 'class')).not.toContain(
          'nhsuk-file-upload__drop-button--dragging'
        )

        expect(await getText($announcements)).toBe('')
        // As the announcement is feedback while user is dragging,
        // best to announce it as soon as the user enters the zone
        expect(await getAttribute($announcements, 'aria-live')).toBe(
          'assertive'
        )
      })

      it('gets shown when entering the field', async () => {
        await page.mouse.dragEnter(dragPosition, dragData)

        expect(await getAttribute($dropButton, 'class')).toContain(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect(getText($announcements)).resolves.toBe('Entered drop zone')
      })

      it('gets hidden when dropping on the field', async () => {
        // Puppeteer's Mouse.drop is meant to do both the `dragEnter` and
        // `drop` in a row but it seems to do this too quickly for the
        // `<input>` to effectively receive the drop
        await page.mouse.dragEnter(dragPosition, dragData)
        await page.mouse.drop(dragPosition, dragData)

        expect(await getAttribute($dropButton, 'class')).not.toContain(
          'nhsuk-file-upload__drop-button--dragging'
        )

        // The presence of 'Entered drop zone' confirms we entered the drop zone
        // rather than being in the initial state
        await expect(getText($announcements)).resolves.toBe('Entered drop zone')
      })

      it('gets hidden when dragging a file and leaving the field', async () => {
        await page.mouse.dragEnter(dragPosition, dragData)

        // Move enough to the left to be out of the wrapper properly
        // but not up or down in case there's other elements in the flow of the page
        dragPosition.x -= 20

        await page.mouse.dragEnter(dragPosition, dragData)

        expect(await getAttribute($dropButton, 'class')).not.toContain(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect(getText($announcements)).resolves.toBe('Left drop zone')
      })

      it('gets hidden when dragging a file and leaving the document', async () => {
        await page.mouse.dragEnter(dragPosition, dragData)

        // It doesn't seem doable to make Puppeteer drag outside the viewport
        // so instead, we can only mock two 'dragleave' events
        await $dropZone?.evaluate(($el) => {
          $el.dispatchEvent(new Event('dragleave', { bubbles: true }))
          $el.dispatchEvent(new Event('dragleave', { bubbles: true }))
        })

        expect(await getAttribute($dropButton, 'class')).not.toContain(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect(getText($announcements)).resolves.toBe('Left drop zone')
      })

      it('does not appear if button disabled', async () => {
        await initExample('disabled')

        await page.mouse.dragEnter(dragPosition, dragData)

        expect(await getAttribute($dropButton, 'class')).not.toContain(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect(getText($announcements)).resolves.toBe('')
      })
    })

    describe('accessible name', () => {
      beforeEach(async () => {})

      it('includes the label, the status, the pseudo button and instruction', async () => {
        await initExample('default')

        expect(await getAccessibleName(page, $dropButton)).toBe(
          'Upload a file  ,   No file chosen  ,   Choose file or drop file'
        )
      })

      it('includes the label, file name, pseudo button and instruction once a file is selected', async () => {
        await initExample('default')

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          $dropButton?.click()
        ])

        await fileChooser.accept(['fakefile.txt'])

        expect(await getAccessibleName(page, $dropButton)).toBe(
          'Upload a file  ,   fakefile.txt  ,   Choose file or drop file'
        )
      })

      it('includes the label, file name, pseudo button and instruction once multiple files are selected', async () => {
        await initExample('with multiple')

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          $dropButton?.click()
        ])

        await fileChooser.accept(['fakefile1.txt', 'fakefile2.txt'])

        expect(await getAccessibleName(page, $dropButton)).toBe(
          'Upload multiple files  ,   2 files chosen  ,   Choose files or drop files'
        )
      })
    })

    describe('i18n', () => {
      beforeEach(async () => {
        await initExample('with translations')
      })

      it('uses the correct translation for the choose file button', async () => {
        expect(await getText($chooseFilesButton)).toBe('Dewiswch ffeil')
        expect(await getText($status)).toBe("Dim ffeil wedi'i dewis")
      })

      describe('status element', () => {
        it('uses the correct translation when no files are selected', async () => {
          expect(await getText($status)).toBe("Dim ffeil wedi'i dewis")
        })

        it('uses the correct translation when multiple files are selected', async () => {
          const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            $dropButton?.click()
          ])

          await fileChooser.accept(['testfile1.txt', 'testfile2.pdf'])

          expect(await getText($status)).toBe("2 ffeil wedi'u dewis")
        })
      })
    })

    describe('disabled state syncing', () => {
      it('disables the button if the input is disabled on page load', async () => {
        await initExample('disabled')

        expect(await getProperty($dropButton, 'disabled')).toBe(true)
        expect(await getAttribute($component, 'class')).toContain(
          'nhsuk-file-upload--disabled'
        )
      })

      it('disables the button if the input is disabled programmatically', async () => {
        await initExample('default')

        await $input.evaluate(($el) => $el.setAttribute('disabled', ''))

        expect(await getProperty($dropButton, 'disabled')).toBe(true)
        expect(await getAttribute($component, 'class')).toContain(
          'nhsuk-file-upload--disabled'
        )
      })

      it('enables the button if the input is enabled programmatically', async () => {
        await initExample('disabled')

        await $input.evaluate(($el) => $el.removeAttribute('disabled'))

        expect(await getProperty($dropButton, 'disabled')).toBe(false)
        expect(await getAttribute($component, 'class')).not.toContain(
          'nhsuk-file-upload--disabled'
        )
      })
    })

    describe('aria-describedby', () => {
      it('copies the `aria-describedby` attribute from the `<input>` to the `<button>`', async () => {
        await initExample('with error message and hint')

        expect(await getAttribute($dropButton, 'aria-describedby')).toBe(
          'file-upload-hint file-upload-error'
        )
      })

      it('does not add an `aria-describedby` attribute to the `<button>` if there is none on the `<input>`', async () => {
        await initExample('default')

        expect(await getAttribute($dropButton, 'aria-describedby')).toBeNull()
      })
    })

    describe('Error handling', () => {
      it('can throw a SupportError if appropriate', () => {
        return expect(
          initExample('default', {
            beforeInitialisation() {
              document.body.classList.remove('nhsuk-frontend-supported')
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'SupportError',
            message:
              'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
          }
        })
      })

      it('throws when initialised twice', () => {
        return expect(
          initExample('default', {
            async afterInitialisation($root) {
              const { FileUpload } = await import('nhsuk-frontend')
              new FileUpload($root)
            }
          })
        ).rejects.toMatchObject({
          name: 'InitError',
          message:
            'nhsuk-file-upload: Root element (`$root`) already initialised'
        })
      })

      it('throws when $root is not set', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root) {
              $root.remove()
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message: 'nhsuk-file-upload: Root element (`$root`) not found'
          }
        })
      })

      it('throws when receiving the wrong type for $root', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root) {
              // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
              $root.outerHTML = `<svg data-module="nhsuk-file-upload"></svg>`
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-file-upload: Root element (`$root`) is not of type HTMLElement'
          }
        })
      })

      describe('missing or misconfigured elements', () => {
        it('throws if the input is missing', () => {
          return expect(
            initExample('default', {
              beforeInitialisation() {
                document.querySelector('[type="file"]')?.remove()
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message: 'nhsuk-file-upload: Form field (`<input>`) not found'
            }
          })
        })

        it('throws if the input has no `id` attribute', () => {
          return expect(
            initExample('default', {
              beforeInitialisation() {
                document.querySelector('[type="file"]')?.removeAttribute('id')
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message:
                'nhsuk-file-upload: File input (`<input type="file">`) attribute (`id`) not found'
            }
          })
        })

        it('throws if the input type is not "file"', () => {
          return expect(
            initExample('default', {
              beforeInitialisation() {
                document
                  .querySelector('[type="file"]')
                  ?.setAttribute('type', 'text')
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message:
                'nhsuk-file-upload: Form field (`<input>`) is not of type HTMLInputElement with attribute (`type="file"`)'
            }
          })
        })

        it('throws if no label is present', async () => {
          await expect(
            initExample('default', {
              beforeInitialisation() {
                document.querySelector('label')?.remove()
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message:
                'nhsuk-file-upload: Field label (`<label for=file-upload>`) not found'
            }
          })

          // Expect the input to still be visible
          await page.waitForSelector('input', { visible: true, timeout: 100 })
        })

        it('does not throw if the drop zone already exists', async () => {
          await expect(
            initExample('default', {
              beforeInitialisation($root, { dropZoneSelector, inputSelector }) {
                const $input = /** @type {HTMLElement} */ (
                  $root.querySelector(inputSelector)
                )

                // 1. Create drop zone
                const $dropZone = document.createElement('div')
                $dropZone.classList.add(dropZoneSelector)

                // 2. Move input into drop zone
                $input.replaceWith($dropZone)
                $dropZone.appendChild($input)
              },
              context: {
                dropZoneSelector: FileUpload.defaults.dropZoneClass,
                inputSelector: 'input'
              }
            })
          ).resolves.not.toThrow()

          // Expect the input to not be visible
          await page.waitForSelector('input', { visible: false, timeout: 100 })
        })

        it('does not throw if the drop zone has `data-module` attribute', async () => {
          await expect(
            initExample('default', {
              beforeInitialisation($root, { dropZoneSelector, inputSelector }) {
                const $input = /** @type {HTMLElement} */ (
                  $root.querySelector(inputSelector)
                )

                // 1. Create drop zone
                const $dropZone = document.createElement('div')
                $dropZone.classList.add(dropZoneSelector)

                // 2. Move input into drop zone
                $input.replaceWith($dropZone)
                $dropZone.appendChild($input)

                // 3. Move the module to the drop zone
                $root.removeAttribute('data-module')
                $dropZone.setAttribute('data-module', 'nhsuk-file-upload')
              },
              context: {
                dropZoneSelector: FileUpload.defaults.dropZoneClass,
                inputSelector: 'input'
              }
            })
          ).resolves.not.toThrow()

          // Expect the input to not be visible
          await page.waitForSelector('input', { visible: false, timeout: 100 })
        })
      })
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle, Point, Protocol } from 'puppeteer'
 */
