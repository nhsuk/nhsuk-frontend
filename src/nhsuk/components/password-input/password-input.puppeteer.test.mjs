import {
  getAttribute,
  getProperty,
  getText,
  goToExample,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'
import { PasswordInput } from './password-input.mjs'

describe('Password input', () => {
  const inputSelector = '.nhsuk-js-password-input-input'
  const buttonSelector = '.nhsuk-js-password-input-toggle'
  const statusSelector = '.nhsuk-password-input__sr-status'

  /** @type {ElementHandle<HTMLElement>} */
  let $component

  /** @type {ElementHandle<HTMLInputElement>} */
  let $input

  /** @type {ElementHandle<HTMLButtonElement>} */
  let $button

  /** @type {ElementHandle<HTMLElement> | null} */
  let $status

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'password-input', examples[example], browserOptions)

    $component = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$(`[data-module="${PasswordInput.moduleName}"]`)
    )

    $input = /** @type {ElementHandle<HTMLInputElement>} */ (
      await $component.$(inputSelector)
    )

    $button = /** @type {ElementHandle<HTMLButtonElement>} */ (
      await $component.$(buttonSelector)
    )

    $status = /** @type {ElementHandle<HTMLElement> | null} */ (
      await $component.$(statusSelector)
    )
  }

  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('still renders an unmodified password input', async () => {
      await initExample('default')

      expect(await getAttribute($input, 'type')).toBe('password')
    })

    it('renders the toggle button hidden', async () => {
      await initExample('default')

      expect(await getProperty($button, 'hidden')).toBe(true)
    })
  })

  describe('when JavaScript is available', () => {
    describe('on page load', () => {
      beforeAll(async () => {
        await initExample('default')
      })

      it('renders the status element', async () => {
        expect($status).toBeDefined()
      })

      it('renders the status element with aria-live', async () => {
        expect(await getAttribute($status, 'aria-live')).toBe('polite')
      })

      it('renders the status element empty', async () => {
        expect(await getText($status)).toBe('')
      })

      it('shows the toggle button', async () => {
        expect(await getProperty($button, 'hidden')).toBe(false)
      })
    })

    describe.each([
      [1, itShowsThePassword],
      [2, itHidesThePassword],
      [3, itShowsThePassword]
    ])('when clicked %i time(s)', (clicks, expectation) => {
      beforeAll(async () => {
        await initExample('default')
        for (let i = 0; i < clicks; i++) {
          await $button.click()
        }
      })

      expectation()
    })

    describe('when the form is submitted', () => {
      it('reverts the input back to password type', async () => {
        await goToExample(page, 'full-page/update-your-account-details')

        // Prevent form submissions so that we don't navigate away during the test
        await page.evaluate(() => {
          document.addEventListener('submit', (e) => e.preventDefault())
        })

        // Type something into the email field
        await page.type('[type="email"]', 'test@example.com')

        // Type something into the password field
        await page.type('[type="password"]', 'Hunter2')

        // Click the "show" button so the password is visible in plain text
        await page.click(buttonSelector)

        // Check that the type change has occurred as expected
        const $formInput = /** @type {ElementHandle<HTMLInputElement>} */ (
          await page.$(inputSelector)
        )

        const beforeSubmitType = await getAttribute($formInput, 'type')

        // Submit the form
        await page.click('main [type="submit"]')

        // Check the input type again
        const afterSubmitType = await getAttribute($formInput, 'type')

        expect(beforeSubmitType).toBe('text')
        expect(afterSubmitType).toBe('password')
      })
    })

    describe('i18n', () => {
      it('uses the correct translations when the password is visible', async () => {
        await initExample('with translations')

        await $button.click()

        // Expect: passwordShownAnnouncementText
        expect(await getText($status)).toBe('Mae eich cyfrinair yn weladwy.')

        // Expect: hidePasswordText
        expect(await getText($button)).toBe('Cuddio')

        // Expect: hidePasswordAriaLabelText
        expect(await getAttribute($button, 'aria-label')).toBe(
          'Cuddio cyfrinair'
        )
      })

      it('uses the correct translations when the password is hidden', async () => {
        await initExample('with translations')

        // This test clicks the toggle twice because the status element is not populated when
        // the component is initialised, it only becomes populated after the first toggle.
        await $button.click()
        await $button.click()

        // Expect: passwordHiddenAnnouncementText
        expect(await getText($status)).toBe("Mae eich cyfrinair wedi'i guddio.")

        // Expect: showPasswordText
        expect(await getText($button)).toBe('Datguddia')

        // Expect: showPasswordAriaLabelText
        expect(await getAttribute($button, 'aria-label')).toBe(
          'Datgelu cyfrinair'
        )
      })
    })

    describe('errors at instantiation', () => {
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
            message: 'nhsuk-password-input: Root element (`$root`) not found'
          }
        })
      })

      it('throws when receiving the wrong type for $root', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root) {
              // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
              $root.outerHTML = `<svg data-module="nhsuk-password-input"></svg>`
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-password-input: Root element (`$root`) is not of type HTMLElement'
          }
        })
      })

      it('throws when the input element is missing', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: inputSelector
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-password-input: Form field (`.nhsuk-js-password-input-input`) not found'
          }
        })
      })

      it('throws when the input is not an <input> element', () => {
        return expect(
          initExample('default', {
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
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-password-input: Form field (`.nhsuk-js-password-input-input`) is not of type HTMLInputElement'
          }
        })
      })

      it('throws when the input is not a `password` type', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root, { selector }) {
              // Make the input a number input instead
              $root.querySelector(selector)?.setAttribute('type', 'number')
            },
            context: {
              selector: inputSelector
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-password-input: Form field (`.nhsuk-js-password-input-input`) is not of type HTMLInputElement with attribute (`type="password"`)'
          }
        })
      })

      it('throws when the button is missing', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: buttonSelector
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-password-input: Button (`.nhsuk-js-password-input-toggle`) not found'
          }
        })
      })

      it('throws when the button is not a <button> element', () => {
        return expect(
          initExample('default', {
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
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-password-input: Button (`.nhsuk-js-password-input-toggle`) is not of type HTMLButtonElement'
          }
        })
      })

      it('throws when the button is not a `button` type', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root, { selector }) {
              // Make the button a submit button
              $root.querySelector(selector)?.setAttribute('type', 'submit')
            },
            context: {
              selector: buttonSelector
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-password-input: Button (`.nhsuk-js-password-input-toggle`) is not of type HTMLButtonElement with type="button"'
          }
        })
      })
    })
  })

  // A bundle of tests for when the password has been shown via a user interaction.
  // It's been extracted out as multiple tests check for this state.
  function itShowsThePassword() {
    it('changes the input to type="text"', async () => {
      expect(await getAttribute($input, 'type')).toBe('text')
    })

    it('changes the status to aria-live="polite"', async () => {
      expect(await getAttribute($status, 'aria-live')).toBe('polite')
    })

    it('changes the status to say the password is visible', async () => {
      expect(await getText($status)).toBe('Your password is visible')
    })

    it('changes the button text to "hide"', async () => {
      expect(await getText($button)).toBe('Hide')
    })

    it('changes the button aria-label to "hide password"', async () => {
      expect(await getAttribute($button, 'aria-label')).toBe('Hide password')
    })
  }

  // A bundle of tests for when the password has been hidden via a user interaction.
  // (Note: NOT when the component is initially loaded.)
  // It's been extracted out as multiple tests check for this state.
  function itHidesThePassword() {
    it('changes the input to type="password"', async () => {
      expect(await getAttribute($input, 'type')).toBe('password')
    })

    it('changes the status to say the password is hidden', async () => {
      expect(await getText($status)).toBe('Your password is hidden')
    })

    it('changes the button text to "show"', async () => {
      expect(await getText($button)).toBe('Show')
    })

    it('changes the button aria-label to "show password"', async () => {
      expect(await getAttribute($button, 'aria-label')).toBe('Show password')
    })
  }
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle } from 'puppeteer'
 */
