import * as timers from 'node:timers/promises'

import { render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { CharacterCount } from './character-count.mjs'
import { examples } from './fixtures.mjs'

test.describe('Character count', () => {
  const focusIntervalTime = 1000 // ms
  const lastInputOffsetTime = 500 // ms

  // The longest possible time from a keyboard user ending input and the screen
  // reader counter being updated (+ 100ms to stay outside the total wait time)
  const debouncedWaitTime = focusIntervalTime + lastInputOffsetTime + 100

  /** @type {Locator} */
  let $component

  /** @type {Locator} */
  let $screenReaderCountMessage

  /** @type {Locator} */
  let $textarea

  /** @type {Locator} */
  let $textareaDescription

  /** @type {Locator} */
  let $visibleCountMessage

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'character-count', examples[example], browserOptions)

    $component = page.locator(`[data-module="${CharacterCount.moduleName}"]`)

    $screenReaderCountMessage = $component.locator(
      '.nhsuk-character-count__sr-status'
    )

    $textarea = $component.locator('.nhsuk-textarea')
    $textareaDescription = $component.locator('.nhsuk-character-count__message')
    $visibleCountMessage = $component.locator('.nhsuk-character-count__status')
  }

  test.describe('when JavaScript is unavailable or fails', () => {
    test.use({ javaScriptEnabled: false })

    test('shows the textarea description', async ({ page }) => {
      await initExample(page, 'default')

      await expect($textareaDescription).toHaveText(
        'You can enter up to 200 characters'
      )
    })
  })

  test.describe('when JavaScript is available', () => {
    test.describe('on page load', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'default')
      })

      test('injects the visual counter', async () => {
        await expect($visibleCountMessage).toBeVisible()
      })

      test('injects the screen reader counter', async () => {
        await expect($screenReaderCountMessage).toBeVisible()
      })

      test('hides the textarea description', async () => {
        await expect($textareaDescription).toContainClass(
          'nhsuk-u-visually-hidden'
        )
      })

      test('retains error class if there is already an error', async ({
        page
      }) => {
        await initExample(page, 'with error message')

        await expect($textarea).toContainClass('nhsuk-textarea--error')
      })
    })

    test.describe('when counting length', () => {
      test('shows the dynamic message', async ({ page }) => {
        await initExample(page, 'default')

        await expect($visibleCountMessage).toHaveText(
          'You have 200 characters remaining'
        )

        await expect($screenReaderCountMessage).toHaveText(
          'You have 200 characters remaining'
        )
      })

      test('shows the characters remaining if the field is pre-filled', async ({
        page
      }) => {
        await initExample(page, 'with value')

        await expect($visibleCountMessage).toHaveText(
          'You have 55 characters remaining'
        )

        await expect($screenReaderCountMessage).toHaveText(
          'You have 55 characters remaining'
        )
      })

      test('counts down to the character limit', async ({ page }) => {
        await initExample(page, 'default')

        await $textarea.press('A')

        await expect($visibleCountMessage).toHaveText(
          'You have 199 characters remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        await expect($screenReaderCountMessage).toHaveText(
          'You have 199 characters remaining'
        )
      })

      test('uses the singular when there is only one character remaining', async ({
        page
      }) => {
        await initExample(page, 'default')

        await $textarea.pressSequentially('A'.repeat(199))

        await expect($visibleCountMessage).toHaveText(
          'You have 1 character remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        await expect($screenReaderCountMessage).toHaveText(
          'You have 1 character remaining'
        )
      })

      test('retains error class if there is already an error', async ({
        page
      }) => {
        await initExample(page, 'with error message')

        await $textarea.press('A')

        await expect($textarea).toContainClass('nhsuk-textarea--error')
      })

      test.describe('when the character limit is exceeded', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, 'default')

          await $textarea.pressSequentially('A'.repeat(201))
        })

        test('shows the number of characters over the limit', async () => {
          await expect($visibleCountMessage).toHaveText(
            'You have 1 character too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          await expect($screenReaderCountMessage).toHaveText(
            'You have 1 character too many'
          )
        })

        test('uses the plural when the limit is exceeded by 2 or more', async () => {
          await $textarea.press('A')

          await expect($visibleCountMessage).toHaveText(
            'You have 2 characters too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          await expect($screenReaderCountMessage).toHaveText(
            'You have 2 characters too many'
          )
        })

        test('adds error styles to the textarea', async () => {
          await expect($textarea).toContainClass('nhsuk-textarea--error')
        })

        test('adds error styles to the count message', async () => {
          await expect($visibleCountMessage).toContainClass(
            'nhsuk-error-message'
          )
        })
      })

      test.describe('when the character limit is exceeded on page load', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, 'with error message')
        })

        test('shows the number of characters over the limit', async () => {
          await expect($visibleCountMessage).toHaveText(
            'You have 42 characters too many'
          )

          await expect($screenReaderCountMessage).toHaveText(
            'You have 42 characters too many'
          )
        })

        test('adds error styles to the textarea', async () => {
          await expect($textarea).toContainClass('nhsuk-textarea--error')
        })

        test('adds error styles to the count message', async () => {
          await expect($visibleCountMessage).toContainClass(
            'nhsuk-error-message'
          )
        })
      })

      test.describe('when a threshold is set', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, 'with threshold')
        })

        test('does not show the limit until the threshold is reached', async () => {
          await expect($visibleCountMessage).toHaveJSProperty('hidden', true)

          // Ensure threshold is hidden for users of assistive technologies
          await expect($screenReaderCountMessage).toHaveAttribute(
            'aria-hidden',
            'true'
          )
        })

        test('becomes visible once the threshold is reached', async () => {
          await $textarea.pressSequentially('A'.repeat(8))

          await expect($visibleCountMessage).toHaveJSProperty('hidden', false)

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          // Ensure threshold is visible for users of assistive technologies
          await expect($screenReaderCountMessage).not.toHaveAttribute(
            'aria-hidden'
          )
        })
      })

      test.describe('when a maxlength attribute is specified on the textarea', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, 'with maxlength attribute')
        })

        test('should not have a maxlength attribute once the JS has run', async () => {
          await expect($textarea).not.toHaveAttribute('maxlength')
        })
      })
    })

    test.describe('when counting characters', () => {
      test('shows the dynamic message', async ({ page }) => {
        await initExample(page, "with count type 'characters'")

        await expect($visibleCountMessage).toHaveText(
          'You have 200 characters remaining'
        )

        await expect($screenReaderCountMessage).toHaveText(
          'You have 200 characters remaining'
        )
      })

      test('shows the characters remaining if the field is pre-filled', async ({
        page
      }) => {
        await initExample(page, "with count type 'characters' and value")

        await expect($visibleCountMessage).toHaveText(
          'You have 55 characters remaining'
        )

        await expect($screenReaderCountMessage).toHaveText(
          'You have 55 characters remaining'
        )
      })

      test('counts down to the character limit', async ({ page }) => {
        await initExample(page, "with count type 'characters'")

        await $textarea.press('A')

        await expect($visibleCountMessage).toHaveText(
          'You have 199 characters remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        await expect($screenReaderCountMessage).toHaveText(
          'You have 199 characters remaining'
        )
      })

      test('uses the singular when there is only one character remaining', async ({
        page
      }) => {
        await initExample(page, "with count type 'characters'")

        await $textarea.pressSequentially('A'.repeat(199))

        await expect($visibleCountMessage).toHaveText(
          'You have 1 character remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        await expect($screenReaderCountMessage).toHaveText(
          'You have 1 character remaining'
        )
      })

      test('retains error class if there is already an error', async ({
        page
      }) => {
        await initExample(
          page,
          "with count type 'characters' and error message"
        )

        await $textarea.press('A')

        await expect($textarea).toContainClass('nhsuk-textarea--error')
      })

      test.describe('when the character limit is exceeded', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, "with count type 'characters'")

          await $textarea.pressSequentially('A'.repeat(201))
        })

        test('shows the number of characters over the limit', async () => {
          await expect($visibleCountMessage).toHaveText(
            'You have 1 character too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          await expect($screenReaderCountMessage).toHaveText(
            'You have 1 character too many'
          )
        })

        test('uses the plural when the limit is exceeded by 2 or more', async () => {
          await $textarea.press('A')

          await expect($visibleCountMessage).toHaveText(
            'You have 2 characters too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          await expect($screenReaderCountMessage).toHaveText(
            'You have 2 characters too many'
          )
        })

        test('adds error styles to the textarea', async () => {
          await expect($textarea).toContainClass('nhsuk-textarea--error')
        })

        test('adds error styles to the count message', async () => {
          await expect($visibleCountMessage).toContainClass(
            'nhsuk-error-message'
          )
        })
      })

      test.describe('when the character limit is exceeded on page load', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(
            page,
            "with count type 'characters' and error message"
          )
        })

        test('shows the number of characters over the limit', async () => {
          await expect($visibleCountMessage).toHaveText(
            'You have 42 characters too many'
          )

          await expect($screenReaderCountMessage).toHaveText(
            'You have 42 characters too many'
          )
        })

        test('adds error styles to the textarea', async () => {
          await expect($textarea).toContainClass('nhsuk-textarea--error')
        })

        test('adds error styles to the count message', async () => {
          await expect($visibleCountMessage).toContainClass(
            'nhsuk-error-message'
          )
        })
      })

      test.describe('when a threshold is set', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, "with count type 'characters' and threshold")
        })

        test('does not show the limit until the threshold is reached', async () => {
          await expect($visibleCountMessage).toHaveJSProperty('hidden', true)

          // Ensure threshold is hidden for users of assistive technologies
          await expect($screenReaderCountMessage).toHaveAttribute(
            'aria-hidden',
            'true'
          )
        })

        test('becomes visible once the threshold is reached', async () => {
          await $textarea.pressSequentially('A'.repeat(8))

          await expect($visibleCountMessage).toHaveJSProperty('hidden', false)

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          // Ensure threshold is visible for users of assistive technologies
          await expect($screenReaderCountMessage).not.toHaveAttribute(
            'aria-hidden'
          )
        })
      })
    })

    test.describe('when counting words', () => {
      test('shows the dynamic message', async ({ page }) => {
        await initExample(page, "with count type 'words'")

        await expect($visibleCountMessage).toHaveText(
          'You have 50 words remaining'
        )

        await expect($screenReaderCountMessage).toHaveText(
          'You have 50 words remaining'
        )
      })

      test('shows the words remaining if the field is pre-filled', async ({
        page
      }) => {
        await initExample(page, "with count type 'words' and value")

        await expect($visibleCountMessage).toHaveText(
          'You have 1 word remaining'
        )

        await expect($screenReaderCountMessage).toHaveText(
          'You have 1 word remaining'
        )
      })

      test('counts down to the word limit', async ({ page }) => {
        await initExample(page, "with count type 'words'")

        await $textarea.pressSequentially('Hello world')

        await expect($visibleCountMessage).toHaveText(
          'You have 48 words remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        await expect($screenReaderCountMessage).toHaveText(
          'You have 48 words remaining'
        )
      })

      test('uses the singular when there is only one word remaining', async ({
        page
      }) => {
        await initExample(page, "with count type 'words'")

        await $textarea.pressSequentially('Hello '.repeat(49))

        await expect($visibleCountMessage).toHaveText(
          'You have 1 word remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        await expect($screenReaderCountMessage).toHaveText(
          'You have 1 word remaining'
        )
      })

      test.describe('when the word limit is exceeded', () => {
        test.beforeEach(async ({ page }) => {
          await initExample(page, "with count type 'words'")

          await $textarea.pressSequentially('Hello '.repeat(51))
        })

        test('shows the number of words over the limit', async () => {
          await expect($visibleCountMessage).toHaveText(
            'You have 1 word too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          await expect($screenReaderCountMessage).toHaveText(
            'You have 1 word too many'
          )
        })

        test('uses the plural when the limit is exceeded by 2 or more', async () => {
          await $textarea.pressSequentially('World')

          await expect($visibleCountMessage).toHaveText(
            'You have 2 words too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          await expect($screenReaderCountMessage).toHaveText(
            'You have 2 words too many'
          )
        })

        test('adds error styles to the textarea', async () => {
          await expect($textarea).toContainClass('nhsuk-textarea--error')
        })

        test('adds error styles to the count message', async () => {
          await expect($visibleCountMessage).toContainClass(
            'nhsuk-error-message'
          )
        })
      })
    })

    test.describe('JavaScript configuration', () => {
      test.describe('during initialisation', () => {
        test('configures `maxlength`', async ({ page }) => {
          await initExample(page, 'to configure in JavaScript', {
            config: {
              maxlength: 10
            }
          })

          await $textarea.pressSequentially('A'.repeat(11))

          await expect($visibleCountMessage).toHaveText(
            'You have 1 character too many'
          )

          await $textarea.pressSequentially('👩🏻‍🚀')

          // Note that grapheme cluster counting (user-perceived characters) is
          // used by default
          await expect($visibleCountMessage).toHaveText(
            'You have 2 characters too many'
          )
        })

        test('configures `countType: "length"`', async ({ page }) => {
          await initExample(page, 'to configure in JavaScript', {
            config: {
              maxlength: 10,
              countType: 'length'
            }
          })

          await $textarea.pressSequentially('A'.repeat(11))

          await expect($visibleCountMessage).toHaveText(
            'You have 1 character too many'
          )

          await $textarea.pressSequentially('👩🏻‍🚀')

          // Note that code point counting (string length) is used when
          // `countType: "length"` is configured
          await expect($visibleCountMessage).toHaveText(
            'You have 8 characters too many'
          )
        })

        test('configures `countType: "characters"`', async ({ page }) => {
          await initExample(page, 'to configure in JavaScript', {
            config: {
              maxlength: 10,
              countType: 'characters'
            }
          })

          await $textarea.pressSequentially('A'.repeat(11))

          await expect($visibleCountMessage).toHaveText(
            'You have 1 character too many'
          )

          await $textarea.pressSequentially('👩🏻‍🚀')

          // Note that grapheme cluster counting (user-perceived characters) is
          // used when `countType: "characters"` is configured
          await expect($visibleCountMessage).toHaveText(
            'You have 2 characters too many'
          )
        })

        test('configures `countType: "words"`', async ({ page }) => {
          await initExample(page, 'to configure in JavaScript', {
            config: {
              maxlength: 5,
              countType: 'words'
            }
          })

          await $textarea.pressSequentially('My mother-in-law—Wait, what?')

          // Note that words are counted regardless of punctuation when
          // `countType: "words"` is configured
          await expect($visibleCountMessage).toHaveText(
            'You have 1 word too many'
          )

          await $textarea.press('Space')
          await $textarea.pressSequentially("what-d'you-call-it")

          // Note that words are correctly split on hyphens and apostrophes
          // when `countType: "words"` is configured
          await expect($visibleCountMessage).toHaveText(
            'You have 5 words too many'
          )
        })

        test('configures `threshold`', async ({ page }) => {
          await initExample(page, 'to configure in JavaScript', {
            config: {
              maxlength: 10,
              threshold: 80
            }
          })

          // Count message initially hidden
          await expect($visibleCountMessage).toHaveJSProperty('hidden', true)

          // Hit 70% threshold
          await $textarea.pressSequentially('A'.repeat(7))

          // Count message still hidden
          await expect($visibleCountMessage).toHaveJSProperty('hidden', true)

          // Hit 80% threshold
          await $textarea.press('A')

          // Count message now visible
          await expect($visibleCountMessage).toHaveJSProperty('hidden', false)
        })

        test("configures i18n 'textareaDescription'", async ({ page }) => {
          // This tests that a description can be provided through JavaScript attributes
          // and interpolated with the limit provided to the character count in JS.

          await initExample(page, 'without maxlength or textarea description', {
            config: {
              maxlength: 10,
              i18n: {
                textareaDescription: {
                  other: 'No more than %{count} characters'
                }
              }
            }
          })

          await expect($textareaDescription).toHaveText(
            'No more than 10 characters'
          )
        })
      })

      test.describe('with HTML data attributes', () => {
        test('uses `maxlength` data attribute instead of JavaScript `maxlength`', async ({
          page
        }) => {
          await initExample(page, 'default', {
            config: {
              maxlength: 202
            }
          })

          await $textarea.pressSequentially('A'.repeat(201))

          await expect($visibleCountMessage).not.toHaveText(
            // JavaScript config `maxlength: 202` above is overridden
            'You have 1 character remaining'
          )

          await expect($visibleCountMessage).toHaveText(
            // HTML data attribute `maxlength: 200` applied from fixture
            'You have 1 character too many'
          )
        })

        test('interpolates the textarea description in data attributes with the maximum set in JavaScript', async ({
          page
        }) => {
          // This tests that any textarea description provided through data-attributes
          // (or the Nunjucks macro), waiting for a maximum to be provided in
          // JavaScript config, will lead to the message being injected in the
          // element holding the textarea's accessible description
          // (and interpolated to replace `%{count}` with the maximum)

          await initExample(page, 'without maxlength', {
            config: {
              maxlength: 150
            }
          })

          await expect($textareaDescription).toHaveText(
            'No more than 150 characters'
          )
        })
      })
    })

    test.describe('Cross Side Scripting prevention', () => {
      test('injects the localised strings as text not HTML', async ({
        page
      }) => {
        await initExample(page, 'to configure in JavaScript', {
          config: {
            maxlength: 10,
            i18n: {
              charactersUnderLimit: {
                other: '<strong>%{count}</strong> characters left'
              }
            }
          }
        })

        expect((await $visibleCountMessage.innerHTML()).trim()).toBe(
          '&lt;strong&gt;10&lt;/strong&gt; characters left'
        )
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
              const { CharacterCount } = await import('nhsuk-frontend')
              new CharacterCount($root)
            }
          })
        ).rejects.toThrow(
          'InitError: nhsuk-character-count: Root element (`$root`) already initialised'
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
          'ElementError: nhsuk-character-count: Root element (`$root`) not found'
        )
      })

      test('throws when receiving the wrong type for $root', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root) {
              // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
              $root.outerHTML = `<svg data-module="nhsuk-character-count"></svg>`
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-character-count: Root element (`$root`) is not of type HTMLElement'
        )
      })

      test('throws when the textarea is missing', async ({ page }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: '.nhsuk-js-character-count'
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-character-count: Form field (`.nhsuk-js-character-count`) not found'
        )
      })

      test('throws when the textarea is not the right type', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              const $div = document.createElement('div')
              $div.classList.add('nhsuk-js-character-count')

              // Replace with a tag that's neither an `<input>` or `<textarea>`
              $root.querySelector(selector)?.replaceWith($div)
            },
            context: {
              selector: '.nhsuk-js-character-count'
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-character-count: Form field (`.nhsuk-js-character-count`) is not of type HTMLTextareaElement or HTMLInputElement'
        )
      })

      test('throws when the textarea description is missing', async ({
        page
      }) => {
        await expect(
          initExample(page, 'default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: '#example-info'
            }
          })
        ).rejects.toThrow(
          'ElementError: nhsuk-character-count: Count message (`id="example-info"`) not found'
        )
      })

      test('throws when receiving invalid JavaScript configuration', async ({
        page
      }) => {
        await expect(
          initExample(page, 'to configure in JavaScript')
        ).rejects.toThrow(
          'ConfigError: nhsuk-character-count: "maxlength" must be provided'
        )
      })
    })
  })

  test.describe('in mismatched locale', () => {
    test('does not error', async ({ page }) => {
      await expect(
        await initExample(page, 'default', {
          config: {
            // Override maxlength to 10
            maxlength: 10
          },
          beforeInitialisation($root) {
            // Set locale to Welsh, which expects translations for 'one', 'two',
            // 'few' 'many' and 'other' forms – with the default English strings
            // provided we only have translations for 'one' and 'other'.
            //
            // We want to make sure we handle this gracefully in case users have
            // an existing character count inside an incorrect locale.
            $root.setAttribute('lang', 'cy')
          }
        })
      ).resolves.not.toThrow()

      // Type 10 characters so we go 'through' all the different forms as we
      // approach 0 characters remaining.
      await expect(
        $textarea.pressSequentially('A'.repeat(10))
      ).resolves.not.toThrow()
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
