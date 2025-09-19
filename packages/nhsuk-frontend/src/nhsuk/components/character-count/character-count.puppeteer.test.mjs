import { setTimeout } from 'node:timers/promises'

import { goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

// The longest possible time from a keyboard user ending input and the screen
// reader counter being updated: handleFocus interval time + last input wait time
const debouncedWaitTime = 1500

describe('Character count', () => {
  /** @type {Page} */
  let page

  describe('when JavaScript is unavailable or fails', () => {
    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    beforeEach(async () => {
      page = await goToComponent(browser, 'character-count')

      await page.setJavaScriptEnabled(false)
      await page.reload()
    })

    it('shows the static message', async () => {
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
        page = await goToComponent(browser, 'character-count')
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
        page = await goToComponent(browser, 'character-count', {
          example: 'with error message'
        })

        const textareaClasses = await page.$eval(
          '.nhsuk-textarea',
          (el) => el.className
        )
        expect(textareaClasses).toContain('nhsuk-textarea--error')
      })
    })

    describe('when counting characters', () => {
      beforeEach(async () => {
        page = await goToComponent(browser, 'character-count')
      })

      it('shows the dynamic message', async () => {
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
        page = await goToComponent(browser, 'character-count', {
          example: 'with default value'
        })

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
        await page.type('.nhsuk-js-character-count', 'A')

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 199 characters remaining')

        // Wait for debounced update to happen
        await setTimeout(debouncedWaitTime)

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 199 characters remaining')
      })

      it('uses the singular when there is only one character remaining', async () => {
        await page.type('.nhsuk-js-character-count', 'A'.repeat(199))

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 1 character remaining')

        // Wait for debounced update to happen
        await setTimeout(debouncedWaitTime)

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 1 character remaining')
      })

      it('retains error class if there is already an error', async () => {
        page = await goToComponent(browser, 'character-count', {
          example: 'with error message'
        })

        await page.type('.nhsuk-js-character-count', 'A')

        // Wait for debounced update to happen
        await setTimeout(debouncedWaitTime)

        const textareaClasses = await page.$eval(
          '.nhsuk-textarea',
          (el) => el.className
        )
        expect(textareaClasses).toContain('nhsuk-textarea--error')
      })

      describe('when the character limit is exceeded', () => {
        beforeEach(async () => {
          page = await goToComponent(browser, 'character-count')
          await page.type('.nhsuk-js-character-count', 'A'.repeat(201))
        })

        it('shows the number of characters over the limit', async () => {
          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 character too many')

          // Wait for debounced update to happen
          await setTimeout(debouncedWaitTime)

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
          await setTimeout(debouncedWaitTime)

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
          page = await goToComponent(browser, 'character-count', {
            example: 'with hint and error'
          })
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
          page = await goToComponent(browser, 'character-count', {
            example: 'with threshold'
          })
        })

        it('does not show the limit until the threshold is reached', async () => {
          const visibility = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => window.getComputedStyle(el).visibility
          )
          expect(visibility).toBe('hidden')

          // Wait for debounced update to happen
          await setTimeout(debouncedWaitTime)

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
          await setTimeout(debouncedWaitTime)

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
          page = await goToComponent(browser, 'character-count', {
            example: 'with maxlength attribute'
          })
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
        page = await goToComponent(browser, 'character-count', {
          example: 'with word count'
        })
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
        await setTimeout(debouncedWaitTime)

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
        await setTimeout(debouncedWaitTime)

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 1 word remaining')
      })

      describe('when the word limit is exceeded', () => {
        beforeEach(async () => {
          page = await goToComponent(browser, 'character-count', {
            example: 'with word count'
          })

          await page.type('.nhsuk-js-character-count', 'Hello '.repeat(151))
        })

        it('shows the number of words over the limit', async () => {
          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 word too many')

          // Wait for debounced update to happen
          await setTimeout(debouncedWaitTime)

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
          await setTimeout(debouncedWaitTime)

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
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
