import { goToExample, render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { examples } from './fixtures.mjs'
import { PasswordInput } from './password-input.mjs'

test.describe('Password input', () => {
  const inputSelector = '.nhsuk-js-password-input-input'
  const buttonSelector = '.nhsuk-js-password-input-toggle'
  const statusSelector = '.nhsuk-password-input__sr-status'

  /** @type {Locator} */
  let $component

  /** @type {Locator} */
  let $input

  /** @type {Locator} */
  let $button

  /** @type {Locator} */
  let $status

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'password-input', examples[example], browserOptions)

    $component = page.locator(`[data-module="${PasswordInput.moduleName}"]`)
    $input = $component.locator(inputSelector)
    $button = $component.locator(buttonSelector)
    $status = $component.locator(statusSelector)
  }

  test.describe('when JavaScript is unavailable or fails', () => {
    test.use({ javaScriptEnabled: false })

    test('still renders an unmodified password input', async ({ page }) => {
      await initExample(page, 'default')

      await expect($input).toHaveAttribute('type', 'password')
    })

    test('renders the toggle button hidden', async ({ page }) => {
      await initExample(page, 'default')

      await expect($button).toHaveJSProperty('hidden', true)
    })
  })

  test.describe('when JavaScript is available', () => {
    test.describe('on page load', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'default')
      })

      test('renders the status element', async () => {
        await expect($status).toBeAttached()
      })

      test('renders the status element with aria-live', async () => {
        await expect($status).toHaveAttribute('aria-live', 'polite')
      })

      test('renders the status element empty', async () => {
        await expect($status).toHaveText('')
      })

      test('shows the toggle button', async () => {
        await expect($button).toHaveJSProperty('hidden', false)
      })
    })

    for (const [clicks, expectation] of /** @type {const} */ ([
      [1, itShowsThePassword],
      [2, itHidesThePassword],
      [3, itShowsThePassword]
    ])) {
      test.describe(`when clicked ${clicks} time(s)`, () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, 'default')
          for (let i = 0; i < clicks; i++) {
            await $button.click()
          }
        })

        expectation()
      })
    }

    test.describe('when the form is submitted', () => {
      test('reverts the input back to password type', async ({ page }) => {
        await goToExample(page, 'full-page/update-your-account-details')

        // Prevent form submissions so that we don't navigate away during the test
        await page.evaluate(() => {
          document.addEventListener('submit', (e) => e.preventDefault())
        })

        // Type something into the email field
        await page
          .locator('[type="email"]')
          .pressSequentially('test@example.com')

        // Type something into the password field
        await page
          .locator('[type="password"]')
          .first()
          .pressSequentially('Hunter2')

        // Click the "show" button so the password is visible in plain text
        await page.locator(buttonSelector).first().click()

        // Check that the type change has occurred as expected
        const $formInput = page.locator(inputSelector).first()

        await expect($formInput).toHaveAttribute('type', 'text')

        // Submit the form
        await page.locator('main [type="submit"]').click()

        // Check the input type again
        await expect($formInput).toHaveAttribute('type', 'password')
      })
    })

    test.describe('i18n', () => {
      test('uses the correct translations when the password is visible', async ({
        page
      }) => {
        await initExample(page, 'with translations')

        await $button.click()

        // Expect: passwordShownAnnouncementText
        await expect($status).toHaveText('Mae eich cyfrinair yn weladwy.')

        // Expect: hidePasswordText
        await expect($button).toHaveText('Cuddio')

        // Expect: hidePasswordAriaLabel
        await expect($button).toHaveAttribute('aria-label', 'Cuddio cyfrinair')
      })

      test('uses the correct translations when the password is hidden', async ({
        page
      }) => {
        await initExample(page, 'with translations')

        // This test clicks the toggle twice because the status element is not populated when
        // the component is initialised, it only becomes populated after the first toggle.
        await $button.click()
        await $button.click()

        // Expect: passwordHiddenAnnouncementText
        await expect($status).toHaveText("Mae eich cyfrinair wedi'i guddio.")

        // Expect: showPasswordText
        await expect($button).toHaveText('Dangos')

        // Expect: showPasswordAriaLabel
        await expect($button).toHaveAttribute('aria-label', 'Dangos cyfrinair')
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

      test('throws when $root is not set', async ({ page }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root) {
              $root.remove()
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Root element (`$root`) not found'
        )
      })

      test('throws when receiving the wrong type for $root', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root) {
              // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
              $root.outerHTML = `<svg data-module="nhsuk-password-input"></svg>`
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Root element (`$root`) is not of type HTMLElement'
        )
      })

      test('throws when the input element is missing', async ({ page }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: inputSelector
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Form field (`.nhsuk-js-password-input-input`) not found'
        )
      })

      test('throws when the input is not an <input> element', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              const $textarea = document.createElement('textarea')
              $textarea.classList.add('nhsuk-js-password-input-input')

              // Replace the input with a textarea
              $root.querySelector(selector)?.replaceWith($textarea)
            },
            context: {
              selector: inputSelector
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Form field (`.nhsuk-js-password-input-input`) is not of type HTMLInputElement'
        )
      })

      test('throws when the input is not a `password` type', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              // Make the input a number input instead
              $root.querySelector(selector)?.setAttribute('type', 'number')
            },
            context: {
              selector: inputSelector
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Form field (`.nhsuk-js-password-input-input`) is not of type HTMLInputElement with attribute (`type="password"`)'
        )
      })

      test('throws when the button is missing', async ({ page }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: buttonSelector
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Button (`.nhsuk-js-password-input-toggle`) not found'
        )
      })

      test('throws when the button is not a <button> element', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              const $div = document.createElement('div')
              $div.classList.add('nhsuk-js-password-input-toggle')

              // Replace the button with a <div>
              $root.querySelector(selector)?.replaceWith($div)
            },
            context: {
              selector: buttonSelector
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Button (`.nhsuk-js-password-input-toggle`) is not of type HTMLButtonElement'
        )
      })

      test('throws when the button is not a `button` type', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              // Make the button a submit button
              $root.querySelector(selector)?.setAttribute('type', 'submit')
            },
            context: {
              selector: buttonSelector
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-password-input: Button (`.nhsuk-js-password-input-toggle`) is not of type HTMLButtonElement with type="button"'
        )
      })
    })
  })

  // A bundle of tests for when the password has been shown via a user interaction.
  // It's been extracted out as multiple tests check for this state.
  function itShowsThePassword() {
    test('changes the input to type="text"', async () => {
      await expect($input).toHaveAttribute('type', 'text')
    })

    test('changes the status to aria-live="polite"', async () => {
      await expect($status).toHaveAttribute('aria-live', 'polite')
    })

    test('changes the status to say the password is visible', async () => {
      await expect($status).toHaveText('Your password is visible')
    })

    test('changes the button text to "hide"', async () => {
      await expect($button).toHaveText('Hide')
    })

    test('changes the button aria-label to "hide password"', async () => {
      await expect($button).toHaveAttribute('aria-label', 'Hide password')
    })
  }

  // A bundle of tests for when the password has been hidden via a user interaction.
  // (Note: NOT when the component is initially loaded.)
  // It's been extracted out as multiple tests check for this state.
  function itHidesThePassword() {
    test('changes the input to type="password"', async () => {
      await expect($input).toHaveAttribute('type', 'password')
    })

    test('changes the status to say the password is hidden', async () => {
      await expect($status).toHaveText('Your password is hidden')
    })

    test('changes the button text to "show"', async () => {
      await expect($button).toHaveText('Show')
    })

    test('changes the button aria-label to "show password"', async () => {
      await expect($button).toHaveAttribute('aria-label', 'Show password')
    })
  }
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
