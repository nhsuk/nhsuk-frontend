import * as timers from 'node:timers/promises'

import {
  getAttribute,
  getHtml,
  getProperty,
  getText,
  isVisible,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { CharacterCount } from './character-count.mjs'
import { examples } from './fixtures.mjs'

describe('Character count', () => {
  const focusIntervalTime = 1000 // ms
  const lastInputOffsetTime = 500 // ms

  // The longest possible time from a keyboard user ending input and the screen
  // reader counter being updated (+ 100ms to stay outside the total wait time)
  const debouncedWaitTime = focusIntervalTime + lastInputOffsetTime + 100

  /** @type {ElementHandle} */
  let $component

  /** @type {ElementHandle} */
  let $screenReaderCountMessage

  /** @type {ElementHandle} */
  let $textarea

  /** @type {ElementHandle} */
  let $textareaDescription

  /** @type {ElementHandle<HTMLElement>} */
  let $visibleCountMessage

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'character-count', examples[example], browserOptions)

    $component = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$(`[data-module="${CharacterCount.moduleName}"]`)
    )

    $screenReaderCountMessage = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$('div.nhsuk-character-count__sr-status')
    )

    $textarea = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$('textarea.nhsuk-textarea')
    )

    $textareaDescription = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$('div.nhsuk-character-count__message')
    )

    $visibleCountMessage = /** @type {ElementHandle<HTMLElement>} */ (
      await $component.$('div.nhsuk-character-count__status')
    )
  }

  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('shows the textarea description', async () => {
      await initExample('default')

      expect((await getText($textareaDescription))?.trim()).toBe(
        'You can enter up to 200 characters'
      )
    })
  })

  describe('when JavaScript is available', () => {
    describe('on page load', () => {
      beforeEach(async () => {
        await initExample('default')
      })

      it('injects the visual counter', async () => {
        expect(await isVisible($visibleCountMessage)).toBe(true)
      })

      it('injects the screen reader counter', async () => {
        expect(await isVisible($screenReaderCountMessage)).toBe(true)
      })

      it('hides the textarea description', async () => {
        expect(await getAttribute($textareaDescription, 'class')).toContain(
          'nhsuk-u-visually-hidden'
        )
      })

      it('retains error class if there is already an error', async () => {
        await initExample('with error message')

        expect(await getAttribute($textarea, 'class')).toContain(
          'nhsuk-textarea--error'
        )
      })
    })

    describe('when counting characters', () => {
      it('shows the dynamic message', async () => {
        await initExample('default')

        expect(await getText($visibleCountMessage)).toBe(
          'You have 200 characters remaining'
        )

        expect(await getText($screenReaderCountMessage)).toBe(
          'You have 200 characters remaining'
        )
      })

      it('shows the characters remaining if the field is pre-filled', async () => {
        await initExample('with default value')

        expect(await getText($visibleCountMessage)).toBe(
          'You have 57 characters remaining'
        )

        expect(await getText($screenReaderCountMessage)).toBe(
          'You have 57 characters remaining'
        )
      })

      it('counts down to the character limit', async () => {
        await initExample('default')

        await $textarea.type('A')

        expect(await getText($visibleCountMessage)).toBe(
          'You have 199 characters remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        expect(await getText($screenReaderCountMessage)).toBe(
          'You have 199 characters remaining'
        )
      })

      it('uses the singular when there is only one character remaining', async () => {
        await initExample('default')

        await $textarea.type('A'.repeat(199))

        expect(await getText($visibleCountMessage)).toBe(
          'You have 1 character remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        expect(await getText($screenReaderCountMessage)).toBe(
          'You have 1 character remaining'
        )
      })

      it('retains error class if there is already an error', async () => {
        await initExample('with error message')

        await $textarea.type('A')

        expect(await getAttribute($textarea, 'class')).toContain(
          'nhsuk-textarea--error'
        )
      })

      describe('when the character limit is exceeded', () => {
        beforeEach(async () => {
          await initExample('default')

          await $textarea.type('A'.repeat(201))
        })

        it('shows the number of characters over the limit', async () => {
          expect(await getText($visibleCountMessage)).toBe(
            'You have 1 character too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          expect(await getText($screenReaderCountMessage)).toBe(
            'You have 1 character too many'
          )
        })

        it('uses the plural when the limit is exceeded by 2 or more', async () => {
          await $textarea.type('A')

          expect(await getText($visibleCountMessage)).toBe(
            'You have 2 characters too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          expect(await getText($screenReaderCountMessage)).toBe(
            'You have 2 characters too many'
          )
        })

        it('adds error styles to the textarea', async () => {
          expect(await getAttribute($textarea, 'class')).toContain(
            'nhsuk-textarea--error'
          )
        })

        it('adds error styles to the count message', async () => {
          expect(await getAttribute($visibleCountMessage, 'class')).toContain(
            'nhsuk-error-message'
          )
        })
      })

      describe('when the character limit is exceeded on page load', () => {
        beforeEach(async () => {
          await initExample('with hint and error')
        })

        it('shows the number of characters over the limit', async () => {
          expect(await getText($visibleCountMessage)).toBe(
            'You have 40 characters too many'
          )

          expect(await getText($screenReaderCountMessage)).toBe(
            'You have 40 characters too many'
          )
        })

        it('adds error styles to the textarea', async () => {
          expect(await getAttribute($textarea, 'class')).toContain(
            'nhsuk-textarea--error'
          )
        })

        it('adds error styles to the count message', async () => {
          expect(await getAttribute($visibleCountMessage, 'class')).toContain(
            'nhsuk-error-message'
          )
        })
      })

      describe('when a threshold is set', () => {
        beforeEach(async () => {
          await initExample('with threshold')
        })

        it('does not show the limit until the threshold is reached', async () => {
          expect(await getProperty($visibleCountMessage, 'hidden')).toBe(true)

          // Ensure threshold is hidden for users of assistive technologies
          expect(
            await getAttribute($screenReaderCountMessage, 'aria-hidden')
          ).toBe('true')
        })

        it('becomes visible once the threshold is reached', async () => {
          await $textarea.type('A'.repeat(8))

          expect(await getProperty($visibleCountMessage, 'hidden')).toBe(false)

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          // Ensure threshold is visible for users of assistive technologies
          expect(
            await getAttribute($screenReaderCountMessage, 'aria-hidden')
          ).toBeNull()
        })
      })

      describe('when a maxlength attribute is specified on the textarea', () => {
        beforeEach(async () => {
          await initExample('with maxlength attribute')
        })

        it('should not have a maxlength attribute once the JS has run', async () => {
          expect(await getAttribute($textarea, 'maxlength')).toBeNull()
        })
      })
    })

    describe('when counting words', () => {
      beforeEach(async () => {
        await initExample("with 'words' count type")
      })

      it('shows the dynamic message', async () => {
        expect(await getText($visibleCountMessage)).toBe(
          'You have 150 words remaining'
        )

        expect(await getText($screenReaderCountMessage)).toBe(
          'You have 150 words remaining'
        )
      })

      it('counts down to the word limit', async () => {
        await $textarea.type('Hello world')

        expect(await getText($visibleCountMessage)).toBe(
          'You have 148 words remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        expect(await getText($screenReaderCountMessage)).toBe(
          'You have 148 words remaining'
        )
      })

      it('uses the singular when there is only one word remaining', async () => {
        await $textarea.type('Hello '.repeat(149))

        expect(await getText($visibleCountMessage)).toBe(
          'You have 1 word remaining'
        )

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        expect(await getText($screenReaderCountMessage)).toBe(
          'You have 1 word remaining'
        )
      })

      describe('when the word limit is exceeded', () => {
        beforeEach(async () => {
          await initExample("with 'words' count type")

          await $textarea.type('Hello '.repeat(151))
        })

        it('shows the number of words over the limit', async () => {
          expect(await getText($visibleCountMessage)).toBe(
            'You have 1 word too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          expect(await getText($screenReaderCountMessage)).toBe(
            'You have 1 word too many'
          )
        })

        it('uses the plural when the limit is exceeded by 2 or more', async () => {
          await $textarea.type('World')

          expect(await getText($visibleCountMessage)).toBe(
            'You have 2 words too many'
          )

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          expect(await getText($screenReaderCountMessage)).toBe(
            'You have 2 words too many'
          )
        })

        it('adds error styles to the textarea', async () => {
          expect(await getAttribute($textarea, 'class')).toContain(
            'nhsuk-textarea--error'
          )
        })

        it('adds error styles to the count message', async () => {
          expect(await getAttribute($visibleCountMessage, 'class')).toContain(
            'nhsuk-error-message'
          )
        })
      })
    })

    describe('JavaScript configuration', () => {
      describe('during initialisation', () => {
        it('configures `maxlength`', async () => {
          await initExample('to configure in JavaScript', {
            config: {
              maxlength: 10
            }
          })

          await $textarea.type('👩🏻‍🚀'.repeat(11))

          // Note that code point counting is used by default
          expect(await getText($visibleCountMessage)).toBe(
            'You have 67 characters too many'
          )
        })

        it('configures `maxwords` (deprecated)', async () => {
          await initExample('to configure in JavaScript', {
            config: {
              maxwords: 5
            }
          })

          await $textarea.type('My mother-in-law—Wait, what?')

          // Note that only consecutive whitespace separates words
          expect(await getText($visibleCountMessage)).toBe(
            'You have 2 words remaining'
          )
        })

        it('configures `countType: "length"`', async () => {
          await initExample('to configure in JavaScript', {
            config: {
              maxlength: 10,
              countType: 'length'
            }
          })

          await $textarea.type('A'.repeat(11))

          expect(await getText($visibleCountMessage)).toBe(
            'You have 1 character too many'
          )
        })

        it('configures `countType: "characters"`', async () => {
          await initExample('to configure in JavaScript', {
            config: {
              maxlength: 10,
              countType: 'characters'
            }
          })

          await $textarea.type('👩🏻‍🚀'.repeat(11))

          // Note that grapheme cluster counting (user-perceived characters) is
          // used when `countType: "characters"` is configured
          expect(await getText($visibleCountMessage)).toBe(
            'You have 1 character too many'
          )
        })

        it('configures `countType: "words"`', async () => {
          await initExample('to configure in JavaScript', {
            config: {
              maxlength: 5,
              countType: 'words'
            }
          })

          await $textarea.type('My mother-in-law—Wait, what?')

          // Note that words are counted regardless of punctuation when
          // `countType: "words"` is configured
          expect(await getText($visibleCountMessage)).toBe(
            'You have 1 word too many'
          )
        })

        it('configures `threshold`', async () => {
          await initExample('to configure in JavaScript', {
            config: {
              maxlength: 10,
              threshold: 75
            }
          })

          await $textarea.type('A'.repeat(8))

          expect(await getProperty($visibleCountMessage, 'hidden')).toBe(false)
        })

        it("configures i18n 'textareaDescription'", async () => {
          // This tests that a description can be provided through JavaScript attributes
          // and interpolated with the limit provided to the character count in JS.

          await initExample(
            'with neither maxlength, maxwords nor textarea description set',
            {
              config: {
                maxlength: 10,
                i18n: {
                  textareaDescription: {
                    other: 'No more than %{count} characters'
                  }
                }
              }
            }
          )

          expect(await getText($textareaDescription)).toBe(
            'No more than 10 characters'
          )
        })
      })

      describe('with HTML data attributes', () => {
        it('uses `maxlength` data attribute instead of JavaScript `maxlength`', async () => {
          await initExample('default', {
            config: {
              maxlength: 202
            }
          })

          await $textarea.type('A'.repeat(201))

          expect(await getText($visibleCountMessage)).not.toBe(
            // JavaScript config `maxlength: 202` above is overridden
            'You have 1 character remaining'
          )

          expect(await getText($visibleCountMessage)).toBe(
            // HTML data attribute `maxlength: 200` applied from fixture
            'You have 1 character too many'
          )
        })

        it('uses `maxlength` data attribute instead of JavaScript `maxwords`', async () => {
          await initExample('default', {
            config: {
              maxwords: 202
            }
          })

          await $textarea.type('A'.repeat(201))

          expect(await getText($visibleCountMessage)).not.toBe(
            // JavaScript config `maxwords: 202` above is overridden
            'You have 201 words remaining'
          )

          expect(await getText($visibleCountMessage)).toBe(
            // HTML data attribute `maxlength: 200` applied from fixture
            'You have 1 character too many'
          )
        })

        it('uses `maxwords` data attribute instead of JavaScript `maxwords`', async () => {
          await initExample('with maxwords', {
            config: {
              maxwords: 152
            }
          })

          await $textarea.type('Hello '.repeat(151))

          expect(await getText($visibleCountMessage)).not.toBe(
            // JavaScript config `maxwords: 152` above is overridden
            'You have 1 word remaining'
          )

          expect(await getText($visibleCountMessage)).toBe(
            // HTML data attribute `maxwords: 150` applied from fixture
            'You have 1 word too many'
          )
        })

        it('uses `maxwords` data attribute instead of JavaScript `maxlength`', async () => {
          await initExample('with maxwords', {
            config: {
              maxlength: 150
            }
          })

          await $textarea.type('Hello '.repeat(151))

          expect(await getText($visibleCountMessage)).not.toBe(
            // JavaScript config `maxlength: 150` above is overridden
            'You have 756 characters too many'
          )

          expect(await getText($visibleCountMessage)).toBe(
            // HTML data attribute `maxwords: 150` applied from fixture
            'You have 1 word too many'
          )
        })

        it('interpolates the textarea description in data attributes with the maximum set in JavaScript', async () => {
          // This tests that any textarea description provided through data-attributes
          // (or the Nunjucks macro), waiting for a maximum to be provided in
          // JavaScript config, will lead to the message being injected in the
          // element holding the textarea's accessible description
          // (and interpolated to replace `%{count}` with the maximum)

          await initExample('with neither maxlength nor maxwords set', {
            config: {
              maxlength: 150
            }
          })

          expect(await getText($textareaDescription)).toBe(
            'No more than 150 characters'
          )
        })
      })
    })

    describe('Cross Side Scripting prevention', () => {
      it('injects the localised strings as text not HTML', async () => {
        await initExample('to configure in JavaScript', {
          config: {
            maxlength: 10,
            i18n: {
              charactersUnderLimit: {
                other: '<strong>%{count}</strong> characters left'
              }
            }
          }
        })

        expect((await getHtml($visibleCountMessage))?.trim()).toBe(
          '&lt;strong&gt;10&lt;/strong&gt; characters left'
        )
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
              const { CharacterCount } = await import('nhsuk-frontend')
              new CharacterCount($root)
            }
          })
        ).rejects.toMatchObject({
          name: 'InitError',
          message:
            'nhsuk-character-count: Root element (`$root`) already initialised'
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
            message: 'nhsuk-character-count: Root element (`$root`) not found'
          }
        })
      })

      it('throws when receiving the wrong type for $root', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root) {
              // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
              $root.outerHTML = `<svg data-module="nhsuk-character-count"></svg>`
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-character-count: Root element (`$root`) is not of type HTMLElement'
          }
        })
      })

      it('throws when the textarea is missing', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: '.nhsuk-js-character-count'
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-character-count: Form field (`.nhsuk-js-character-count`) not found'
          }
        })
      })

      it('throws when the textarea is not the right type', () => {
        return expect(
          initExample('default', {
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
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-character-count: Form field (`.nhsuk-js-character-count`) is not of type HTMLTextareaElement or HTMLInputElement'
          }
        })
      })

      it('throws when the textarea description is missing', () => {
        return expect(
          initExample('default', {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector)?.remove()
            },
            context: {
              selector: '#example-info'
            }
          })
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-character-count: Count message (`id="example-info"`) not found'
          }
        })
      })

      it('throws when receiving invalid JavaScript configuration', () => {
        return expect(
          initExample('to configure in JavaScript')
        ).rejects.toMatchObject({
          cause: {
            name: 'ConfigError',
            message:
              'nhsuk-character-count: Either "maxlength" or "maxwords" must be provided'
          }
        })
      })
    })
  })

  describe('in mismatched locale', () => {
    it('does not error', async () => {
      // Create a listener for the page error event that we can assert on later
      const pageErrorListener = jest.fn()
      page.on('pageerror', pageErrorListener)

      await initExample('default', {
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

      // Type 10 characters so we go 'through' all the different forms as we
      // approach 0 characters remaining.
      await $textarea.type('A'.repeat(10))

      // Expect the page error event not to have been fired
      expect(pageErrorListener).not.toHaveBeenCalled()
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle } from 'puppeteer'
 */
