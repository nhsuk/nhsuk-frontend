const {
  PORT = '3000',
  BASE_HOST = `localhost:${PORT}`, // Default via `npm start`
  BASE_URL = `http://${BASE_HOST}/nhsuk-frontend`
} = process.env

// The longest possible time from a keyboard user ending input and the screen
// reader counter being updated: handleFocus interval time + last input wait time
const debouncedWaitTime = 1500

describe('Character count', () => {
  describe('when JavaScript is unavailable or fails', () => {
    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    beforeEach(async () => {
      await page.setJavaScriptEnabled(false)

      await Promise.all([
        page.goto(`${BASE_URL}/components/character-count/default/`),
        page.waitForNavigation()
      ])
    })

    it('shows the static message', async () => {
      const message = await page.$eval(
        '.nhsuk-character-count__message',
        (el) => el.innerHTML.trim()
      )

      expect(message).toBe('You can enter up to 10 characters')
    })
  })

  describe('when JavaScript is available', () => {
    describe('on page load', () => {
      beforeEach(async () => {
        await Promise.all([
          page.goto(`${BASE_URL}/components/character-count/default/`),
          page.waitForNavigation()
        ])
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

      it('hides the fallback hint', async () => {
        const messageClasses = await page.$eval(
          '.nhsuk-character-count__message',
          (el) => el.className
        )
        expect(messageClasses).toContain('nhsuk-u-visually-hidden')
      })

      it('retains error class if there is already an error', async () => {
        await Promise.all([
          page.goto(
            `${BASE_URL}/components/character-count/with-error-message/`
          ),
          page.waitForNavigation()
        ])

        const textareaClasses = await page.$eval(
          '.nhsuk-textarea',
          (el) => el.className
        )
        expect(textareaClasses).toContain('nhsuk-textarea--error')
      })
    })

    describe('when counting characters', () => {
      beforeEach(async () => {
        await Promise.all([
          page.goto(`${BASE_URL}/components/character-count/default/`),
          page.waitForNavigation()
        ])
      })

      it('shows the dynamic message', async () => {
        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 10 characters remaining')

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 10 characters remaining')
      })

      it('shows the characters remaining if the field is pre-filled', async () => {
        await Promise.all([
          page.goto(
            `${BASE_URL}/components/character-count/with-default-value/`
          ),
          page.waitForNavigation()
        ])

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 67 characters remaining')

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 67 characters remaining')
      })

      it('counts down to the character limit', async () => {
        await page.type('.nhsuk-js-character-count', 'A')

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 9 characters remaining')

        // Wait for debounced update to happen
        await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 9 characters remaining')
      })

      it('uses the singular when there is only one character remaining', async () => {
        await page.type('.nhsuk-js-character-count', 'A'.repeat(9))

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 1 character remaining')

        // Wait for debounced update to happen
        await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 1 character remaining')
      })

      it('retains error class if there is already an error', async () => {
        await Promise.all([
          page.goto(
            `${BASE_URL}/components/character-count/with-error-message/`
          ),
          page.waitForNavigation()
        ])

        await page.type('.nhsuk-js-character-count', 'A')

        // Wait for debounced update to happen
        await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

        const textareaClasses = await page.$eval(
          '.nhsuk-textarea',
          (el) => el.className
        )
        expect(textareaClasses).toContain('nhsuk-textarea--error')
      })

      describe('when the character limit is exceeded', () => {
        beforeEach(async () => {
          await Promise.all([
            page.goto(`${BASE_URL}/components/character-count/default/`),
            page.waitForNavigation()
          ])

          await page.type('.nhsuk-js-character-count', 'A'.repeat(11))
        })

        it('shows the number of characters over the limit', async () => {
          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 character too many')

          // Wait for debounced update to happen
          await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

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
          await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

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
          await Promise.all([
            page.goto(
              `${BASE_URL}/components/character-count/with-default-value-exceeding-limit/`
            ),
            page.waitForNavigation()
          ])
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
          await Promise.all([
            page.goto(`${BASE_URL}/components/character-count/with-threshold/`),
            page.waitForNavigation()
          ])
        })

        it('does not show the limit until the threshold is reached', async () => {
          const visibility = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => window.getComputedStyle(el).visibility
          )
          expect(visibility).toBe('hidden')

          // Wait for debounced update to happen
          await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

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
          await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

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
          await Promise.all([
            page.goto(
              `${BASE_URL}/components/character-count/with-maxlength-attribute/`
            ),
            page.waitForNavigation()
          ])
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
        await Promise.all([
          page.goto(`${BASE_URL}/components/character-count/with-max-words/`),
          page.waitForNavigation()
        ])
      })

      it('shows the dynamic message', async () => {
        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 10 words remaining')

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 10 words remaining')
      })

      it('counts down to the word limit', async () => {
        await page.type('.nhsuk-js-character-count', 'Hello world')

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 8 words remaining')

        // Wait for debounced update to happen
        await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 8 words remaining')
      })

      it('uses the singular when there is only one word remaining', async () => {
        await page.type('.nhsuk-js-character-count', 'Hello '.repeat(9))

        const message = await page.$eval(
          '.nhsuk-character-count__status',
          (el) => el.innerHTML.trim()
        )
        expect(message).toBe('You have 1 word remaining')

        // Wait for debounced update to happen
        await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

        const srMessage = await page.$eval(
          '.nhsuk-character-count__sr-status',
          (el) => el.innerHTML.trim()
        )
        expect(srMessage).toBe('You have 1 word remaining')
      })

      describe('when the word limit is exceeded', () => {
        beforeEach(async () => {
          await Promise.all([
            page.goto(`${BASE_URL}/components/character-count/with-max-words/`),
            page.waitForNavigation()
          ])
          await page.type('.nhsuk-js-character-count', 'Hello '.repeat(11))
        })

        it('shows the number of words over the limit', async () => {
          const message = await page.$eval(
            '.nhsuk-character-count__status',
            (el) => el.innerHTML.trim()
          )
          expect(message).toBe('You have 1 word too many')

          // Wait for debounced update to happen
          await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

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
          await new Promise((resolve) => setTimeout(resolve, debouncedWaitTime))

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
