import {
  getAccessibleName,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('File upload', () => {
  const moduleSelector = '.nhsuk-file-upload'
  const inputSelector = '.nhsuk-file-upload__input'
  const dropZoneSelector = '.nhsuk-file-upload__drop-zone'
  const dropButtonSelector = '.nhsuk-file-upload__drop-button'
  const chooseFilesButtonSelector = '.nhsuk-file-upload__choose-files-button'
  const announcementsSelector = '.nhsuk-file-upload__announcements'
  const statusSelector = '.nhsuk-file-upload__status'

  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
      await render(page, 'file-upload', examples['with hint'])
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('still renders an unmodified file input', async () => {
      const inputType = await page.$eval(inputSelector, (el) =>
        el.getAttribute('type')
      )
      expect(inputType).toBe('file')
    })

    it('does not inject additional elements', async () => {
      const $wrapperElement = await page.$(dropZoneSelector)
      const $buttonElement = await page.$(dropButtonSelector)
      const $statusElement = await page.$(statusSelector)

      expect($wrapperElement).toBeNull()
      expect($buttonElement).toBeNull()
      expect($statusElement).toBeNull()
    })
  })

  describe('when JavaScript is available', () => {
    describe('on page load', () => {
      beforeAll(async () => {
        await render(page, 'file-upload', examples['with hint'])
      })

      describe('wrapper element', () => {
        it('renders the wrapper element', async () => {
          const wrapperElement = await page.$eval(dropZoneSelector, (el) => el)

          expect(wrapperElement).toBeDefined()
        })

        it('moves the file input inside of the wrapper element', async () => {
          const inputElementParent = await page.$eval(
            inputSelector,
            (el) => el.parentNode
          )
          const wrapperElement = await page.$eval(dropZoneSelector, (el) => el)

          expect(inputElementParent).toStrictEqual(wrapperElement)
        })
      })

      describe('file input', () => {
        it('sets tabindex to -1', async () => {
          const inputElementTabindex = await page.$eval(inputSelector, (el) =>
            el.getAttribute('tabindex')
          )

          expect(inputElementTabindex).toBe('-1')
        })
      })

      describe('label element', () => {
        it('targets the button in its `for` attribute', async () => {
          const buttonId = await page.$eval(dropButtonSelector, (el) => el.id)
          const label = await page.$(`[for="${buttonId}"]`)

          expect(label).not.toBeNull()
        })
      })

      describe('choose file button', () => {
        it('renders the button element', async () => {
          const buttonElement = await page.$eval(dropButtonSelector, (el) => el)
          const buttonElementType = await page.$eval(dropButtonSelector, (el) =>
            el.getAttribute('type')
          )

          expect(buttonElement).toBeDefined()
          expect(buttonElementType).toBe('button')
        })

        it('has same aria-describedby value as input', async () => {
          const buttonElementAriaDescribedBy = await page.$eval(
            dropButtonSelector,
            (el) => el.getAttribute('aria-describedby')
          )

          expect(buttonElementAriaDescribedBy).toBe('file-upload-hint')
        })

        it('renders the button with default text', async () => {
          const buttonElementText = await page.$eval(
            `${dropButtonSelector} ${chooseFilesButtonSelector}`,
            (el) => el.innerHTML.trim()
          )

          const [statusElementText, statusElementAriaLiveAttribute] =
            await page.$eval(
              `${dropButtonSelector} ${statusSelector}`,
              (el) => [el.innerHTML.trim(), el.getAttribute('aria-live')]
            )

          expect(buttonElementText).toBe('Choose file')
          expect(statusElementText).toBe('No file chosen')
          expect(statusElementAriaLiveAttribute).toBe('polite')
        })
      })
    })

    describe('when clicking the choose file button', () => {
      it.each([dropButtonSelector, chooseFilesButtonSelector, statusSelector])(
        'opens the file picker',
        async (selector) => {
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

          const inputElementValue = await page.$eval(
            inputSelector,
            // @ts-expect-error - Property 'value' does not exist
            (el) => el.value
          )

          // For Windows and backward compatibility, the values of file inputs
          // are always formatted starting with `C:\\fakepath\\`
          expect(inputElementValue).toBe(`C:\\fakepath\\${testFilename}`)
        }
      )
    })

    describe('when selecting a file', () => {
      const testFilename = 'fakefile.txt'

      beforeEach(async () => {
        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          page.click(dropButtonSelector)
        ])
        await fileChooser.accept([testFilename])
      })

      it('updates the file input value', async () => {
        const inputElementValue = await page.$eval(
          inputSelector,
          // @ts-expect-error - Property 'value' does not exist
          (el) => el.value
        )

        const inputElementFiles = await page.$eval(
          inputSelector,
          // @ts-expect-error - Property 'files' does not exist
          (el) => el.files
        )

        // For Windows and backward compatibility, the values of file inputs
        // are always formatted starting with `C:\\fakepath\\`
        expect(inputElementValue).toBe(`C:\\fakepath\\${testFilename}`)

        // Also check the files object
        expect(inputElementFiles[0]).toBeDefined()
      })

      it('updates the filename in the status element', async () => {
        const statusElementText = await page.$eval(statusSelector, (el) =>
          el.innerHTML.trim()
        )

        expect(statusElementText).toBe(testFilename)
      })
    })

    describe('when selecting multiple files', () => {
      beforeEach(async () => {
        await render(page, 'file-upload', examples['with multiple'])

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          page.click(dropButtonSelector)
        ])
        await fileChooser.accept(['testfile1.txt', 'testfile2.pdf'])
      })

      it('updates the file input value', async () => {
        const inputElementValue = await page.$eval(
          inputSelector,
          // @ts-expect-error - Property 'value' does not exist
          (el) => el.value
        )

        const inputElementFiles = await page.$eval(
          inputSelector,
          // @ts-expect-error - Property 'files' does not exist
          (el) => el.files
        )

        // For Windows and backward compatibility, the values of file inputs
        // are always formatted starting with `C:\\fakepath\\`
        //
        // Additionally, `value` will only ever return the first file selected
        expect(inputElementValue).toBe(`C:\\fakepath\\testfile1.txt`)

        // Also check the files object
        expect(inputElementFiles[0]).toBeDefined()
        expect(inputElementFiles[1]).toBeDefined()
      })

      it('shows the number of files selected in the status element', async () => {
        const statusElementText = await page.$eval(statusSelector, (el) =>
          el.innerHTML.trim()
        )

        expect(statusElementText).toBe('2 files chosen')
      })
    })

    describe('dropzone', () => {
      /** @type {ElementHandle} */
      let $wrapper

      /** @type {ElementHandle} */
      let $announcements

      /** @type {BoundingBox} */
      let wrapperBoundingBox

      /**
       * Shared data to drag on the element
       *
       * @type {Protocol.Input.DragData}
       */
      const dragData = {
        items: [],
        files: [__filename],
        dragOperationsMask: 1 // Copy
      }

      const selectorDropzoneVisible = `${dropButtonSelector}${dropButtonSelector}--dragging`
      const selectorDropzoneHidden = `${dropButtonSelector}:not(${dropButtonSelector}--dragging)`

      beforeEach(async () => {
        await render(page, 'file-upload', examples.default)

        $wrapper = await page.$(dropZoneSelector)
        wrapperBoundingBox = await $wrapper.boundingBox()

        $announcements = await page.$(announcementsSelector)
      })

      it('is not shown by default', async () => {
        await expect(page.$(selectorDropzoneHidden)).resolves.toBeTruthy()

        const [announcementsText, announcementsAriaLive] =
          await $announcements.evaluate((e) => [
            e.textContent,
            e.getAttribute('aria-live')
          ])

        expect(announcementsText).toBe('')
        // As the announcement is feedback while user is dragging,
        // best to announce it as soon as the user enters the zone
        expect(announcementsAriaLive).toBe('assertive')
      })

      it('gets shown when entering the field', async () => {
        // Add a little pixel to make sure we're effectively within the element
        await page.mouse.dragEnter(
          { x: wrapperBoundingBox.x + 1, y: wrapperBoundingBox.y + 1 },
          structuredClone(dragData)
        )

        await expect(page.$(selectorDropzoneVisible)).resolves.toBeTruthy()
        await expect(
          $announcements.evaluate((e) => e.textContent)
        ).resolves.toBe('Entered drop zone')
      })

      it('gets hidden when dropping on the field', async () => {
        // Puppeteer's Mouse.drop is meant to do both the `dragEnter` and
        // `drop` in a row but it seems to do this too quickly for the
        // `<input>` to effectively receive the drop
        await page.mouse.dragEnter(
          { x: wrapperBoundingBox.x + 1, y: wrapperBoundingBox.y + 1 },
          structuredClone(dragData)
        )

        await page.mouse.drop(
          { x: wrapperBoundingBox.x + 1, y: wrapperBoundingBox.y + 1 },
          structuredClone(dragData)
        )

        await expect(page.$(selectorDropzoneHidden)).resolves.toBeTruthy()
        // The presence of 'Entered drop zone' confirms we entered the drop zone
        // rather than being in the initial state
        await expect(
          $announcements.evaluate((e) => e.textContent)
        ).resolves.toBe('Entered drop zone')
      })

      it('gets hidden when dragging a file and leaving the field', async () => {
        // Add a little pixel to make sure we're effectively within the element
        await page.mouse.dragEnter(
          { x: wrapperBoundingBox.x + 1, y: wrapperBoundingBox.y + 1 },
          structuredClone(dragData)
        )

        // Move enough to the left to be out of the wrapper properly
        // but not up or down in case there's other elements in the flow of the page
        await page.mouse.dragEnter(
          { x: wrapperBoundingBox.x - 20, y: wrapperBoundingBox.y },
          structuredClone(dragData)
        )

        await expect(page.$(selectorDropzoneHidden)).resolves.toBeTruthy()
        await expect(
          $announcements.evaluate((e) => e.textContent)
        ).resolves.toBe('Left drop zone')
      })

      it('gets hidden when dragging a file and leaving the document', async () => {
        // Add a little pixel to make sure we're effectively within the element
        await page.mouse.dragEnter(
          { x: wrapperBoundingBox.x + 1, y: wrapperBoundingBox.y + 1 },
          structuredClone(dragData)
        )

        // It doesn't seem doable to make Puppeteer drag outside the viewport
        // so instead, we can only mock two 'dragleave' events
        await page.$eval(dropZoneSelector, ($el) => {
          $el.dispatchEvent(new Event('dragleave', { bubbles: true }))
          $el.dispatchEvent(new Event('dragleave', { bubbles: true }))
        })

        await expect(page.$(selectorDropzoneHidden)).resolves.toBeTruthy()
        await expect(
          $announcements.evaluate((e) => e.textContent)
        ).resolves.toBe('Left drop zone')
      })

      it('does not appear if button disabled', async () => {
        await render(page, 'file-upload', examples.disabled)

        await page.mouse.dragEnter(
          { x: wrapperBoundingBox.x + 1, y: wrapperBoundingBox.y + 1 },
          structuredClone(dragData)
        )

        const disabledAnnouncement = await page.$(announcementsSelector)

        await expect(page.$(selectorDropzoneHidden)).resolves.toBeTruthy()
        await expect(
          disabledAnnouncement.evaluate((e) => e.textContent)
        ).resolves.toBe('')
      })
    })

    describe('accessible name', () => {
      beforeEach(async () => {})

      it('includes the label, the status, the pseudo button and instruction', async () => {
        await render(page, 'file-upload', examples.default)

        const $element = await page.$(dropButtonSelector)

        const accessibleName = await getAccessibleName(page, $element)
        await expect(accessibleName.replaceAll(/\s+/g, ' ')).toBe(
          'Upload a file , No file chosen , Choose file or drop file'
        )
      })

      it('includes the label, file name, pseudo button and instruction once a file is selected', async () => {
        await render(page, 'file-upload', examples.default)

        const $element = await page.$(dropButtonSelector)

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          page.click(dropButtonSelector)
        ])
        await fileChooser.accept(['fakefile.txt'])

        const accessibleName = await getAccessibleName(page, $element)
        await expect(accessibleName.replaceAll(/\s+/g, ' ')).toBe(
          'Upload a file , fakefile.txt , Choose file or drop file'
        )
      })

      it('includes the label, file name, pseudo button and instruction once multiple files are selected', async () => {
        await render(page, 'file-upload', examples['with multiple'])

        const $element = await page.$(dropButtonSelector)

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          page.click(dropButtonSelector)
        ])
        await fileChooser.accept(['fakefile1.txt', 'fakefile2.txt'])

        const accessibleName = await getAccessibleName(page, $element)
        await expect(accessibleName.replaceAll(/\s+/g, ' ')).toBe(
          'Upload multiple files , 2 files chosen , Choose files or drop files'
        )
      })
    })

    describe('i18n', () => {
      beforeEach(async () => {
        await render(page, 'file-upload', examples['with translations'])
      })

      it('uses the correct translation for the choose file button', async () => {
        const buttonElementText = await page.$eval(
          chooseFilesButtonSelector,
          (el) => el.innerHTML.trim()
        )

        const statusElementText = await page.$eval(statusSelector, (el) =>
          el.innerHTML.trim()
        )

        expect(buttonElementText).toBe('Dewiswch ffeil')
        expect(statusElementText).toBe("Dim ffeil wedi'i dewis")
      })

      describe('status element', () => {
        it('uses the correct translation when no files are selected', async () => {
          const statusText = await page.$eval(statusSelector, (el) =>
            el.innerHTML.trim()
          )

          expect(statusText).toBe("Dim ffeil wedi'i dewis")
        })

        it('uses the correct translation when multiple files are selected', async () => {
          const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click(dropButtonSelector)
          ])
          await fileChooser.accept(['testfile1.txt', 'testfile2.pdf'])

          const statusText = await page.$eval(statusSelector, (el) =>
            el.innerHTML.trim()
          )

          expect(statusText).toBe("2 ffeil wedi'u dewis")
        })
      })
    })

    describe('disabled state syncing', () => {
      it('disables the button if the input is disabled on page load', async () => {
        await render(page, 'file-upload', examples.disabled)

        const buttonDisabled = await page.$eval(dropButtonSelector, (el) =>
          el.hasAttribute('disabled')
        )
        const dropZoneDisabled = await page.$eval(moduleSelector, (el) =>
          el.classList.contains('nhsuk-file-upload--disabled')
        )

        expect(buttonDisabled).toBeTruthy()
        expect(dropZoneDisabled).toBeTruthy()
      })

      it('disables the button if the input is disabled programmatically', async () => {
        await render(page, 'file-upload', examples.default)

        await page.$eval(inputSelector, (el) => el.setAttribute('disabled', ''))

        const buttonDisabledAfter = await page.$eval(dropButtonSelector, (el) =>
          el.hasAttribute('disabled')
        )
        const dropZoneDisabled = await page.$eval(moduleSelector, (el) =>
          el.classList.contains('nhsuk-file-upload--disabled')
        )

        expect(buttonDisabledAfter).toBeTruthy()
        expect(dropZoneDisabled).toBeTruthy()
      })

      it('enables the button if the input is enabled programmatically', async () => {
        await render(page, 'file-upload', examples.disabled)

        await page.$eval(inputSelector, (el) => el.removeAttribute('disabled'))

        const buttonDisabled = await page.$eval(dropButtonSelector, (el) =>
          el.hasAttribute('disabled')
        )
        const dropZoneDisabled = await page.$eval(moduleSelector, (el) =>
          el.classList.contains('nhsuk-file-upload--disabled')
        )

        expect(buttonDisabled).toBeFalsy()
        expect(dropZoneDisabled).toBeFalsy()
      })
    })

    describe('aria-describedby', () => {
      it('copies the `aria-describedby` attribute from the `<input>` to the `<button>`', async () => {
        await render(page, 'file-upload', examples['with hint and error'])

        const $button = await page.$(dropButtonSelector)
        const ariaDescribedBy = await $button.evaluate((el) =>
          el.getAttribute('aria-describedby')
        )

        expect(ariaDescribedBy).toBe('file-upload-hint file-upload-error')
      })

      it('does not add an `aria-describedby` attribute to the `<button>` if there is none on the `<input>`', async () => {
        await render(page, 'file-upload', examples.default)

        const $button = await page.$(dropButtonSelector)
        const ariaDescribedBy = await $button.evaluate((el) =>
          el.getAttribute('aria-describedby')
        )

        expect(ariaDescribedBy).toBeNull()
      })
    })

    describe('errors at instantiation', () => {
      it('can throw a SupportError if appropriate', async () => {
        await expect(
          render(page, 'file-upload', examples.default, {
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

      it('throws when initialised twice', async () => {
        await expect(
          render(page, 'file-upload', examples.default, {
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

      it('throws when $root is not set', async () => {
        await expect(
          render(page, 'file-upload', examples.default, {
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

      it('throws when receiving the wrong type for $root', async () => {
        await expect(
          render(page, 'file-upload', examples.default, {
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
        it('throws if the input is missing', async () => {
          await expect(
            render(page, 'file-upload', examples.default, {
              beforeInitialisation() {
                document.querySelector('[type="file"]').remove()
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message: 'nhsuk-file-upload: Form field (`<input>`) not found'
            }
          })
        })

        it('throws if the input has no `id` attribute', async () => {
          await expect(
            render(page, 'file-upload', examples.default, {
              beforeInitialisation() {
                document.querySelector('[type="file"]').removeAttribute('id')
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

        it('throws if the input type is not "file"', async () => {
          await expect(
            render(page, 'file-upload', examples.default, {
              beforeInitialisation() {
                document
                  .querySelector('[type="file"]')
                  .setAttribute('type', 'text')
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
            render(page, 'file-upload', examples.default, {
              beforeInitialisation() {
                document.querySelector('label').remove()
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
            render(page, 'file-upload', examples.default, {
              beforeInitialisation($root, { selector }) {
                const $input = $root.querySelector(selector)

                // 1. Create drop zone
                const $dropZone = document.createElement('div')
                $dropZone.classList.add('nhsuk-file-upload__drop-zone')

                // 2. Move input into drop zone
                $input.replaceWith($dropZone)
                $dropZone.appendChild($input)
              },
              context: {
                selector: inputSelector
              }
            })
          ).resolves.not.toThrow()

          // Expect the input to not be visible
          await page.waitForSelector('input', { visible: false, timeout: 100 })
        })

        it('does not throw if the drop zone has `data-module` attribute', async () => {
          await expect(
            render(page, 'file-upload', examples.default, {
              beforeInitialisation($root, { selector }) {
                const $input = $root.querySelector(selector)

                // 1. Create drop zone
                const $dropZone = document.createElement('div')
                $dropZone.classList.add('nhsuk-file-upload__drop-zone')

                // 2. Move input into drop zone
                $input.replaceWith($dropZone)
                $dropZone.appendChild($input)

                // 3. Move the module to the drop zone
                $root.removeAttribute('data-module')
                $dropZone.setAttribute('data-module', 'nhsuk-file-upload')
              },
              context: {
                selector: inputSelector
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
 * @import { BoundingBox, ElementHandle, Protocol } from 'puppeteer'
 */
