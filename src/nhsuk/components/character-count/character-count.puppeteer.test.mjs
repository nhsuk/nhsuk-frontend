import * as timers from 'node:timers/promises'

import { render } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Character count', () => {
  const focusIntervalTime = 1000 // ms
  const lastInputOffsetTime = 500 // ms

  // The longest possible time from a keyboard user ending input and the screen
  // reader counter being updated (+ 100ms to stay outside the total wait time)
  const debouncedWaitTime = focusIntervalTime + lastInputOffsetTime + 100

  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('shows the textarea description', async () => {
      await render(page, 'character-count', examples.default)

      const message = await page.$eval(
        '.nhsuk-character-count__message',
        (el) => el.innerHTML.trim()
      )

      expect(message).toBe('You can enter up to 200 characters')
    })
  })

  describe('when JavaScript is available', () => {
    describe('on page load', () => {
      beforeEach(async () => {
        await render(page, 'character-count', examples.default)
      })

      it('injects the visual counter', async () => {
        const message =
          (await page.$('.nhsuk-character-count__status')) !== null
        expect(message).toBeTruthy()
      })

      it('injects the screen reader counter', async () => {
        const srMessage =
          (await page.$('.nhsuk-character-count__sr-status')) !== null
        expect(srMessage).toBeTruthy()
      })

      it('hides the textarea description', async () => {
        const messageClasses = await page.$eval(
          '.nhsuk-character-count__message',
          (el) => el.className
        )
        expect(messageClasses).toContain('nhsuk-u-visually-hidden')
      })

      it('retains error class if there is already an error', async () => {
        await render(page, 'character-count', examples['with error message'])

        const textareaClasses = await page.$eval(
          '.nhsuk-textarea',
          (el) => el.className
        )
        expect(textareaClasses).toContain('nhsuk-textarea--error')
      })
    })

    describe('when counting characters', () => {
      it('shows the dynamic message', async () => {
        await render(page, 'character-count', examples.default)

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 200 characters remaining')

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 200 characters remaining')
      })

      it('shows the characters remaining if the field is pre-filled', async () => {
        await render(page, 'character-count', examples['with default value'])

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 57 characters remaining')

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 57 characters remaining')
      })

      it('counts down to the character limit', async () => {
        await render(page, 'character-count', examples.default)

        await page.type('.nhsuk-js-character-count', 'A')

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 199 characters remaining')

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 199 characters remaining')
      })

      it('uses the singular when there is only one character remaining', async () => {
        await render(page, 'character-count', examples.default)

        await page.type('.nhsuk-js-character-count', 'A'.repeat(199))

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 1 character remaining')

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 1 character remaining')
      })

      it('retains error class if there is already an error', async () => {
        await render(page, 'character-count', examples['with error message'])

        await page.type('.nhsuk-js-character-count', 'A')

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        const textareaClasses = await page.$eval(
          '.nhsuk-textarea',
          (el) => el.className
        )
        expect(textareaClasses).toContain('nhsuk-textarea--error')
      })

      describe('when the character limit is exceeded', () => {
        beforeEach(async () => {
          await render(page, 'character-count', examples.default)

          await page.type('.nhsuk-js-character-count', 'A'.repeat(201))
        })

        it('shows the number of characters over the limit', async () => {
          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 character too many')

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          const srMessage = await page.$eval(
            '.nhsuk-character-count__sr-status',
            (el) => el.innerHTML.trim()
          )
          expect(srMessage).toBe('You have 1 character too many')
        })

        it('uses the plural when the limit is exceeded by 2 or more', async () => {
          await page.type('.nhsuk-js-character-count', 'A')

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 2 characters too many')

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          const srMessage = await page.$eval(
            '.nhsuk-character-count__sr-status',
            (el) => el.innerHTML.trim()
          )
          expect(srMessage).toBe('You have 2 characters too many')
        })

        it('adds error styles to the textarea', async () => {
          const textareaClasses = await page.$eval(
            '.nhsuk-js-character-count',
            (el) => el.className
          )
          expect(textareaClasses).toContain('nhsuk-textarea--error')
        })

        it('adds error styles to the count message', async () => {
          const messageClasses = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.className
          )
          expect(messageClasses).toContain('nhsuk-error-message')
        })
      })

      describe('when the character limit is exceeded on page load', () => {
        beforeEach(async () => {
          await render(page, 'character-count', examples['with hint and error'])
        })

        it('shows the number of characters over the limit', async () => {
          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 40 characters too many')

          const srMessage = await page.$eval(
            '.nhsuk-character-count__sr-status',
            (el) => el.innerHTML.trim()
          )
          expect(srMessage).toBe('You have 40 characters too many')
        })

        it('adds error styles to the textarea', async () => {
          const textareaClasses = await page.$eval(
            '.nhsuk-js-character-count',
            (el) => el.className
          )
          expect(textareaClasses).toContain('nhsuk-textarea--error')
        })

        it('adds error styles to the count message', async () => {
          const messageClasses = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.className
          )
          expect(messageClasses).toContain('nhsuk-error-message')
        })
      })

      describe('when a threshold is set', () => {
        beforeEach(async () => {
          await render(page, 'character-count', examples['with threshold'])
        })

        it('does not show the limit until the threshold is reached', async () => {
          const visibility = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => window.getComputedStyle(el).visibility
          )
          expect(visibility).toBe('hidden')

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          // Ensure threshold is hidden for users of assistive technologies
          const ariaHidden = await page.$eval(
            '.nhsuk-character-count__sr-status',
            (el) => el.getAttribute('aria-hidden')
          )
          expect(ariaHidden).toBe('true')
        })

        it('becomes visible once the threshold is reached', async () => {
          await page.type('.nhsuk-js-character-count', 'A'.repeat(8))

          const visibility = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => window.getComputedStyle(el).visibility
          )
          expect(visibility).toBe('visible')

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          // Ensure threshold is visible for users of assistive technologies
          const ariaHidden = await page.$eval(
            '.nhsuk-character-count__sr-status',
            (el) => el.getAttribute('aria-hidden')
          )
          expect(ariaHidden).toBeFalsy()
        })
      })

      describe('when a maxlength attribute is specified on the textarea', () => {
        beforeEach(async () => {
          await render(
            page,
            'character-count',
            examples['with maxlength attribute']
          )
        })

        it('should not have a maxlength attribute once the JS has run', async () => {
          const textareaMaxLength = await page.$eval('.nhsuk-textarea', (el) =>
            el.getAttribute('maxlength')
          )
          expect(textareaMaxLength).toBeNull()
        })
      })
    })

    describe('when counting words', () => {
      beforeEach(async () => {
        await render(page, 'character-count', examples['with word count'])
      })

      it('shows the dynamic message', async () => {
        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 150 words remaining')

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 150 words remaining')
      })

      it('counts down to the word limit', async () => {
        await page.type('.nhsuk-js-character-count', 'Hello world')

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 148 words remaining')

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 148 words remaining')
      })

      it('uses the singular when there is only one word remaining', async () => {
        await page.type('.nhsuk-js-character-count', 'Hello '.repeat(149))

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 1 word remaining')

        // Wait for debounced update to happen
        await timers.setTimeout(debouncedWaitTime)

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 1 word remaining')
      })

      describe('when the word limit is exceeded', () => {
        beforeEach(async () => {
          await render(page, 'character-count', examples['with word count'])

          await page.type('.nhsuk-js-character-count', 'Hello '.repeat(151))
        })

        it('shows the number of words over the limit', async () => {
          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 word too many')

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          const srMessage = await page.$eval(
            '.nhsuk-character-count__sr-status',
            (el) => el.innerHTML.trim()
          )
          expect(srMessage).toBe('You have 1 word too many')
        })

        it('uses the plural when the limit is exceeded by 2 or more', async () => {
          await page.type('.nhsuk-js-character-count', 'World')

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 2 words too many')

          // Wait for debounced update to happen
          await timers.setTimeout(debouncedWaitTime)

          const srMessage = await page.$eval(
            '.nhsuk-character-count__sr-status',
            (el) => el.innerHTML.trim()
          )
          expect(srMessage).toBe('You have 2 words too many')
        })

        it('adds error styles to the textarea', async () => {
          const textareaClasses = await page.$eval(
            '.nhsuk-js-character-count',
            (el) => el.className
          )
          expect(textareaClasses).toContain('nhsuk-textarea--error')
        })

        it('adds error styles to the count message', async () => {
          const messageClasses = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.className
          )
          expect(messageClasses).toContain('nhsuk-error-message')
        })
      })
    })

    describe('JavaScript configuration', () => {
      describe('at instantiation', () => {
        it('configures the number of characters', async () => {
          await render(
            page,
            'character-count',
            examples['to configure in JavaScript'],
            {
              config: {
                maxlength: 10
              }
            }
          )

          await page.type('.nhsuk-js-character-count', 'A'.repeat(11))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 character too many')
        })

        it('configures the number of words', async () => {
          await render(
            page,
            'character-count',
            examples['to configure in JavaScript'],
            {
              config: {
                maxwords: 10
              }
            }
          )

          await page.type('.nhsuk-js-character-count', 'Hello '.repeat(11))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 word too many')
        })

        it('configures the threshold', async () => {
          await render(
            page,
            'character-count',
            examples['to configure in JavaScript'],
            {
              config: {
                maxlength: 10,
                threshold: 75
              }
            }
          )

          await page.type('.nhsuk-js-character-count', 'A'.repeat(8))

          const visibility = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => window.getComputedStyle(el).visibility
          )
          expect(visibility).toBe('visible')
        })

        it('configures the description of the textarea', async () => {
          // This tests that a description can be provided through JavaScript attributes
          // and interpolated with the limit provided to the character count in JS.

          await render(
            page,
            'character-count',
            examples[
              'with neither maxlength, maxwords nor textarea description set'
            ],
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

          const message = await page.$eval(
            '.nhsuk-character-count__message',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('No more than 10 characters')
        })
      })

      describe('via `initAll`', () => {
        it('configures the number of characters', async () => {
          await render(
            page,
            'character-count',
            examples['to configure in JavaScript'],
            {
              config: {
                maxlength: 10
              }
            }
          )

          await page.type('.nhsuk-js-character-count', 'A'.repeat(11))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 character too many')
        })

        it('configures the number of words', async () => {
          await render(
            page,
            'character-count',
            examples['to configure in JavaScript'],
            {
              config: {
                maxwords: 10
              }
            }
          )

          await page.type('.nhsuk-js-character-count', 'Hello '.repeat(11))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 word too many')
        })

        it('configures the threshold', async () => {
          await render(
            page,
            'character-count',
            examples['to configure in JavaScript'],
            {
              config: {
                maxlength: 10,
                threshold: 75
              }
            }
          )

          await page.type('.nhsuk-js-character-count', 'A'.repeat(8))

          const visibility = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => window.getComputedStyle(el).visibility
          )
          expect(visibility).toBe('visible')
        })
      })

      describe('when data-attributes are present', () => {
        it('uses `maxlength` data attribute instead of the JS one', async () => {
          await render(page, 'character-count', examples.default, {
            config: {
              maxlength: 202 // JS configuration that would tell 1 character remaining
            }
          })

          await page.type('.nhsuk-js-character-count', 'A'.repeat(201))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 character too many')
        })

        it("uses `maxlength` data attribute instead of JS's `maxwords`", async () => {
          await render(page, 'character-count', examples.default, {
            config: {
              maxwords: 202
            }
          })

          await page.type('.nhsuk-js-character-count', 'A'.repeat(201))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 character too many')
        })

        it('uses `maxwords` data attribute instead of the JS one', async () => {
          await render(page, 'character-count', examples['with word count'], {
            config: {
              maxwords: 152 // JS configuration that would tell 1 word remaining
            }
          })

          await page.type('.nhsuk-js-character-count', 'Hello '.repeat(151))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 word too many')
        })

        it("uses `maxwords` data attribute instead of the JS's `maxlength`", async () => {
          await render(page, 'character-count', examples['with word count'], {
            config: {
              maxlength: 150
            }
          })

          await page.type('.nhsuk-js-character-count', 'Hello '.repeat(151))

          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 word too many')
        })

        it('interpolates the textarea description in data attributes with the maximum set in JavaScript', async () => {
          // This tests that any textarea description provided through data-attributes
          // (or the Nunjucks macro), waiting for a maximum to be provided in
          // JavaScript config, will lead to the message being injected in the
          // element holding the textarea's accessible description
          // (and interpolated to replace `%{count}` with the maximum)

          await render(
            page,
            'character-count',
            examples['with neither maxlength nor maxwords set'],
            {
              config: {
                maxlength: 150
              }
            }
          )

          const message = await page.$eval(
            '.nhsuk-character-count__message',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('No more than 150 characters')
        })
      })
    })

    describe('Cross Side Scripting prevention', () => {
      it('injects the localised strings as text not HTML', async () => {
        await render(
          page,
          'character-count',
          examples['to configure in JavaScript'],
          {
            config: {
              maxlength: 10,
              i18n: {
                charactersUnderLimit: {
                  other: '<strong>%{count}</strong> characters left'
                }
              }
            }
          }
        )

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('&lt;strong&gt;10&lt;/strong&gt; characters left')
      })
    })

    describe('errors at instantiation', () => {
      it('can throw a SupportError if appropriate', async () => {
        await expect(
          render(page, 'character-count', examples.default, {
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
          render(page, 'character-count', examples.default, {
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

      it('throws when $root is not set', async () => {
        await expect(
          render(page, 'character-count', examples.default, {
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

      it('throws when receiving the wrong type for $root', async () => {
        await expect(
          render(page, 'character-count', examples.default, {
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

      it('throws when the textarea is missing', async () => {
        await expect(
          render(page, 'character-count', examples.default, {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector).remove()
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

      it('throws when the textarea is not the right type', async () => {
        await expect(
          render(page, 'character-count', examples.default, {
            beforeInitialisation($root, { selector }) {
              // Replace with a tag that's neither an `<input>` or `<textarea>`
              $root.querySelector(selector).outerHTML =
                '<div class="nhsuk-js-character-count"></div>'
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

      it('throws when the textarea description is missing', async () => {
        await expect(
          render(page, 'character-count', examples.default, {
            beforeInitialisation($root, { selector }) {
              $root.querySelector(selector).remove()
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

      it('throws when receiving invalid JavaScript configuration', async () => {
        await expect(
          render(
            page,
            'character-count',
            examples['to configure in JavaScript']
          )
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

      await render(page, 'character-count', examples.default, {
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
      await page.type('.nhsuk-js-character-count', 'A'.repeat(10))

      // Expect the page error event not to have been fired
      expect(pageErrorListener).not.toHaveBeenCalled()
    })
  })
})
