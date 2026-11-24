import { render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { FileUpload } from './file-upload.mjs'
import { examples } from './fixtures.mjs'

test.describe('File upload', () => {
  const {
    announcementsClass,
    chooseFilesButtonClass,
    dropButtonClass,
    dropZoneClass,
    statusClass
  } = FileUpload.defaults

  /** @type {Locator} */
  let $component

  /** @type {Locator} */
  let $input

  /** @type {Locator} */
  let $dropZone

  /** @type {Locator} */
  let $dropButton

  /** @type {Locator} */
  let $chooseFilesButton

  /** @type {Locator} */
  let $status

  /** @type {Locator} */
  let $announcements

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'file-upload', examples[example], browserOptions)

    $component = page.locator(`[data-module="${FileUpload.moduleName}"]`)
    $input = $component.locator('input')
    $dropZone = $component.locator(`.${dropZoneClass}`)
    $dropButton = $component.locator(`.${dropButtonClass}`)
    $chooseFilesButton = $component.locator(`.${chooseFilesButtonClass}`)
    $status = $component.locator(`.${statusClass}`)
    $announcements = $component.locator(`.${announcementsClass}`)
  }

  /**
   * @param {string[]} names - File names
   */
  function initFiles(names) {
    return names.map((name) => ({
      name,
      mimeType: 'application/octet-stream',
      buffer: Buffer.alloc(0)
    }))
  }

  test.describe('when JavaScript is unavailable or fails', () => {
    test.use({ javaScriptEnabled: false })

    test.beforeEach(async ({ page }) => {
      await initExample(page, 'with hint')
    })

    test('still renders an unmodified file input', async () => {
      await expect($input).toHaveAttribute('type', 'file')
    })

    test('does not inject additional elements', async () => {
      await expect($dropZone).toHaveCount(0)
      await expect($dropButton).toHaveCount(0)
      await expect($status).toHaveCount(0)
    })
  })

  test.describe('when JavaScript is available', () => {
    test.describe('on page load', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'with hint')
      })

      test.describe('wrapper element', () => {
        test('renders the wrapper element', async () => {
          await expect($dropZone).toBeAttached()
        })

        test('moves the file input inside of the wrapper element', async () => {
          await expect($dropZone.locator(':scope > input')).toBeAttached()
        })
      })

      test.describe('file input', () => {
        test('sets tabindex to -1', async () => {
          await expect($input).toHaveAttribute('tabindex', '-1')
        })
      })

      test.describe('label element', () => {
        test('targets the button in its `for` attribute', async () => {
          const buttonId = await $dropButton.getAttribute('id')
          const $label = $component.locator(`[for="${buttonId}"]`)

          await expect($label).toBeAttached()
        })
      })

      test.describe('choose file button', () => {
        test('renders the button element', async () => {
          await expect($dropButton).toBeAttached()
          await expect($dropButton).toHaveAttribute('type', 'button')
        })

        test('has same aria-describedby value as input', async () => {
          await expect($dropButton).toHaveAttribute(
            'aria-describedby',
            'file-upload-hint'
          )
        })

        test('renders the button with default text', async () => {
          await expect($chooseFilesButton).toHaveText('Choose file')
          await expect($status).toHaveText('No file chosen')
          await expect($status).toHaveAttribute('aria-live', 'polite')
        })
      })
    })

    test.describe('when clicking the choose file button', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'with hint')
      })

      for (const selector of [
        `.${dropButtonClass}`,
        `.${chooseFilesButtonClass}`,
        `.${statusClass}`
      ]) {
        test(`opens the file picker (${selector})`, async ({ page }) => {
          // It doesn't seem to be possible to check if the file picker dialog
          // opens as an isolated test, so this test clicks the button, tries to
          // set a value in the file chooser, then checks if that value was set
          // on the input as expected.
          const testFilename = 'test.gif'

          const [fileChooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            page.locator(selector).click()
          ])

          await fileChooser.setFiles(initFiles([testFilename]))

          // For Windows and backward compatibility, the values of file inputs
          // are always formatted starting with `C:\\fakepath\\`
          await expect($input).toHaveValue(`C:\\fakepath\\${testFilename}`)
        })
      }
    })

    test.describe('when selecting a file', () => {
      const testFilename = 'fakefile.txt'

      test.beforeEach(async ({ page }) => {
        await initExample(page, 'with hint')

        const [fileChooser] = await Promise.all([
          page.waitForEvent('filechooser'),
          $dropButton.click()
        ])

        await fileChooser.setFiles(initFiles([testFilename]))
      })

      test('updates the file input value', async () => {
        const inputElementFileCount = await $input.evaluate(
          ($el) => /** @type {HTMLInputElement} */ ($el).files?.length
        )

        // For Windows and backward compatibility, the values of file inputs
        // are always formatted starting with `C:\\fakepath\\`
        await expect($input).toHaveValue(`C:\\fakepath\\${testFilename}`)

        // Also check the files object
        expect(inputElementFileCount).toBe(1)
      })

      test('updates the filename in the status element', async () => {
        await expect($status).toHaveText(testFilename)
      })
    })

    test.describe('when selecting multiple files', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'with multiple')

        const [fileChooser] = await Promise.all([
          page.waitForEvent('filechooser'),
          $dropButton.click()
        ])

        await fileChooser.setFiles(
          initFiles(['testfile1.txt', 'testfile2.pdf'])
        )
      })

      test('updates the file input value', async () => {
        const inputElementFileCount = await $input.evaluate(
          ($el) => /** @type {HTMLInputElement} */ ($el).files?.length
        )

        // For Windows and backward compatibility, the values of file inputs
        // are always formatted starting with `C:\\fakepath\\`
        //
        // Additionally, `value` will only ever return the first file selected
        await expect($input).toHaveValue(`C:\\fakepath\\testfile1.txt`)

        // Also check the files object
        expect(inputElementFileCount).toBe(2)
      })

      test('shows the number of files selected in the status element', async () => {
        await expect($status).toHaveText('2 files chosen')
      })
    })

    test.describe('dropzone', () => {
      /**
       * Shared data to drag on the element
       *
       * @type {JSHandle<DataTransfer>}
       */
      let dataTransfer

      /**
       * @param {Page} page - Playwright page object
       */
      async function initFiles(page) {
        dataTransfer = await page.evaluateHandle(() => {
          const transfer = new DataTransfer()
          transfer.items.add(new File([''], 'fakefile.txt'))
          return transfer
        })
      }

      test.beforeEach(async ({ page }) => {
        await initExample(page, 'default')
        await initFiles(page)
      })

      test('is not shown by default', async () => {
        await expect($dropButton).not.toContainClass(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect($announcements).toHaveText('')
        // As the announcement is feedback while user is dragging,
        // best to announce it as soon as the user enters the zone
        await expect($announcements).toHaveAttribute('aria-live', 'assertive')
      })

      test('gets shown when entering the field', async () => {
        await $dropZone.dispatchEvent('dragenter', { dataTransfer })

        await expect($dropButton).toContainClass(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect($announcements).toHaveText('Entered drop zone')
      })

      test('gets hidden when dropping on the field', async () => {
        await $dropZone.dispatchEvent('dragenter', { dataTransfer })
        await $dropButton.dispatchEvent('drop', { dataTransfer })

        await expect($dropButton).not.toContainClass(
          'nhsuk-file-upload__drop-button--dragging'
        )

        // The presence of 'Entered drop zone' confirms we entered the drop zone
        // rather than being in the initial state
        await expect($announcements).toHaveText('Entered drop zone')
      })

      test('gets hidden when dragging a file and leaving the field', async ({
        page
      }) => {
        const $body = page.locator('body')

        await $dropZone.dispatchEvent('dragenter', { dataTransfer })
        await $body.dispatchEvent('dragenter', { dataTransfer })

        await expect($dropButton).not.toContainClass(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect($announcements).toHaveText('Left drop zone')
      })

      test('gets hidden when dragging a file and leaving the document', async () => {
        await $dropZone.dispatchEvent('dragenter', { dataTransfer })

        // It doesn't seem doable to make Playwright drag outside the viewport
        // so instead, we can only mock two 'dragleave' events
        await $dropZone.evaluate(($el) => {
          $el.dispatchEvent(new Event('dragleave', { bubbles: true }))
          $el.dispatchEvent(new Event('dragleave', { bubbles: true }))
        })

        await expect($dropButton).not.toContainClass(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect($announcements).toHaveText('Left drop zone')
      })

      test('does not appear if button disabled', async ({ page }) => {
        await initExample(page, 'disabled')
        await initFiles(page)

        await $dropZone.dispatchEvent('dragenter', { dataTransfer })

        await expect($dropButton).not.toContainClass(
          'nhsuk-file-upload__drop-button--dragging'
        )

        await expect($announcements).toHaveText('')
      })
    })

    test.describe('accessible name', () => {
      test('includes the label, the status, the pseudo button and instruction', async ({
        page
      }) => {
        await initExample(page, 'default')

        await expect(page.locator(`.${dropButtonClass}`)).toHaveAccessibleName(
          'Upload a file  ,   No file chosen Choose file or drop file'
        )
      })

      test('includes the label, file name, pseudo button and instruction once a file is selected', async ({
        page
      }) => {
        await initExample(page, 'default')

        const [fileChooser] = await Promise.all([
          page.waitForEvent('filechooser'),
          $dropButton.click()
        ])

        await fileChooser.setFiles(initFiles(['fakefile.txt']))

        await expect(page.locator(`.${dropButtonClass}`)).toHaveAccessibleName(
          'Upload a file  ,   fakefile.txt Choose file or drop file'
        )
      })

      test('includes the label, file name, pseudo button and instruction once multiple files are selected', async ({
        page
      }) => {
        await initExample(page, 'with multiple')

        const [fileChooser] = await Promise.all([
          page.waitForEvent('filechooser'),
          $dropButton.click()
        ])

        await fileChooser.setFiles(
          initFiles(['fakefile1.txt', 'fakefile2.txt'])
        )

        await expect(page.locator(`.${dropButtonClass}`)).toHaveAccessibleName(
          'Upload multiple files  ,   2 files chosen Choose files or drop files'
        )
      })
    })

    test.describe('i18n', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'with translations')
      })

      test('uses the correct translation for the choose file button', async () => {
        await expect($chooseFilesButton).toHaveText('Dewiswch ffeil')
        await expect($status).toHaveText("Dim ffeil wedi'i dewis")
      })

      test.describe('status element', () => {
        test('uses the correct translation when no files are selected', async () => {
          await expect($status).toHaveText("Dim ffeil wedi'i dewis")
        })

        test('uses the correct translation when multiple files are selected', async ({
          page
        }) => {
          const [fileChooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            $dropButton.click()
          ])

          await fileChooser.setFiles(
            initFiles(['testfile1.txt', 'testfile2.pdf'])
          )

          await expect($status).toHaveText("2 ffeil wedi'u dewis")
        })
      })
    })

    test.describe('disabled state syncing', () => {
      test('disables the button if the input is disabled on page load', async ({
        page
      }) => {
        await initExample(page, 'disabled')

        await expect($dropButton).toBeDisabled()
        await expect($component).toContainClass('nhsuk-file-upload--disabled')
      })

      test('disables the button if the input is disabled programmatically', async ({
        page
      }) => {
        await initExample(page, 'default')

        await $input.evaluate(($el) => $el.setAttribute('disabled', ''))

        await expect($dropButton).toBeDisabled()
        await expect($component).toContainClass('nhsuk-file-upload--disabled')
      })

      test('enables the button if the input is enabled programmatically', async ({
        page
      }) => {
        await initExample(page, 'disabled')

        await $input.evaluate(($el) => $el.removeAttribute('disabled'))

        await expect($dropButton).toBeEnabled()
        await expect($component).not.toContainClass(
          'nhsuk-file-upload--disabled'
        )
      })
    })

    test.describe('aria-describedby', () => {
      test('copies the `aria-describedby` attribute from the `<input>` to the `<button>`', async ({
        page
      }) => {
        await initExample(page, 'with error message and hint')

        await expect($dropButton).toHaveAttribute(
          'aria-describedby',
          'file-upload-hint file-upload-error'
        )
      })

      test('does not add an `aria-describedby` attribute to the `<button>` if there is none on the `<input>`', async ({
        page
      }) => {
        await initExample(page, 'default')

        await expect($dropButton).not.toHaveAttribute('aria-describedby')
      })
    })

    test.describe('Error handling', () => {
      test('can throw a SupportError if appropriate', async ({ page }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation() {
              document.body.classList.remove('nhsuk-frontend-supported')
            }
          })
        ).rejects.toThrow(
          'SupportError: NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
        )
      })

      test('throws when initialised twice', async ({ page }) => {
        await expect(
          initExample(page, 'default', {
            async afterInitialisation($root) {
              const { FileUpload } = await import('nhsuk-frontend')
              new FileUpload($root)
            }
          })
        ).rejects.toThrow(
          'InitError: nhsuk-file-upload: Root element (`$root`) already initialised'
        )
      })

      test('throws when $root is not set', async ({ page }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root) {
              $root.remove()
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-file-upload: Root element (`$root`) not found'
        )
      })

      test('throws when receiving the wrong type for $root', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root) {
              // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
              $root.outerHTML = `<svg data-module="nhsuk-file-upload"></svg>`
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-file-upload: Root element (`$root`) is not of type HTMLElement'
        )
      })

      test.describe('missing or misconfigured elements', () => {
        test('throws if the input is missing', async ({ page }) => {
          await expect(
            initExample(page, 'default', {
              beforeInitialisation() {
                document.querySelector('[type="file"]')?.remove()
              }
            })
          ).rejects.toThrow(
            'ElementError: nhsuk-file-upload: Form field (`<input>`) not found'
          )
        })

        test('throws if the input has no `id` attribute', async ({ page }) => {
          await expect(
            initExample(page, 'default', {
              beforeInitialisation() {
                document.querySelector('[type="file"]')?.removeAttribute('id')
              }
            })
          ).rejects.toThrow(
            'ElementError: nhsuk-file-upload: File input (`<input type="file">`) attribute (`id`) not found'
          )
        })

        test('throws if the input type is not "file"', async ({ page }) => {
          await expect(
            initExample(page, 'default', {
              beforeInitialisation() {
                document
                  .querySelector('[type="file"]')
                  ?.setAttribute('type', 'text')
              }
            })
          ).rejects.toThrow(
            'ElementError: nhsuk-file-upload: Form field (`<input>`) is not of type HTMLInputElement with attribute (`type="file"`)'
          )
        })

        test('throws if no label is present', async ({ page }) => {
          await expect(
            initExample(page, 'default', {
              beforeInitialisation() {
                document.querySelector('label')?.remove()
              }
            })
          ).rejects.toThrow(
            'ElementError: nhsuk-file-upload: Field label (`<label for=file-upload>`) not found'
          )

          // Expect the input to still be visible
          await expect(page.locator('input').first()).toBeVisible({
            timeout: 100
          })
        })

        test('does not throw if the drop zone already exists', async ({
          page
        }) => {
          await expect(
            initExample(page, 'default', {
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
          await expect(page.locator('input').first()).toBeHidden({
            timeout: 100
          })
        })

        test('does not throw if the drop zone has `data-module` attribute', async ({
          page
        }) => {
          await expect(
            initExample(page, 'default', {
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
          await expect(page.locator('input').first()).toBeHidden({
            timeout: 100
          })
        })
      })
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { JSHandle, Locator, Page } from '@playwright/test'
 */
