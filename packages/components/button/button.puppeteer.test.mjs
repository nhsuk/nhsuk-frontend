const {
  PORT = '3000',
  BASE_HOST = `localhost:${PORT}`, // Default via `npm start`
  BASE_URL = `http://${BASE_HOST}/nhsuk-frontend`
} = process.env

describe('Button', () => {
  beforeAll(async () => {
    await page.goto(`${BASE_URL}/components/button/link.html`)
  })

  describe('Button as link', () => {
    it('triggers the click event when the space key is pressed', async () => {
      await page.evaluate(() => document.body.querySelector('.nhsuk-button'))

      await page.focus('a[role="button"]')

      // we need to start the waitForNavigation() before the keyboard action
      // so we return a promise that is fulfilled when the navigation and the keyboard action are
      // respectively fulfilled
      // this is somewhat counter intuitive, as we humans expect to act and then wait for something.
      await Promise.all([
        page.waitForNavigation(),
        page.keyboard.press('Space')
      ])

      const url = new URL(page.url())
      expect(url.href).toBe(`${BASE_URL}/components/button/link.html#`)
    })
  })

  describe('preventing double clicks', () => {
    // Click counting is done through using the button to submit
    // a form and counting submissions. It requires some bits of recurring
    // logic which are wrapped in the following helpers

    /**
     * Wraps the button rendered on the page in a form
     *
     * Examples don't do this and we need it to have something to submit
     */
    function trackClicks() {
      return page.evaluate(() => {
        const $button = document.querySelector('button')
        const $form = document.createElement('form')
        $button.parentNode.appendChild($form)
        $form.appendChild($button)

        window.TEST_SUBMIT_EVENTS = 0
        $form.addEventListener('submit', (event) => {
          window.TEST_SUBMIT_EVENTS += 1
          // Don't refresh the page, which will destroy the context to test against.
          event.preventDefault()
        })
      })
    }

    /**
     * Gets the number of times the form was submitted
     *
     * @returns {number} Number of times the form was submitted
     */
    function getClicksCount() {
      return page.evaluate(() => window.TEST_SUBMIT_EVENTS)
    }

    describe('not enabled', () => {
      beforeEach(async () => {
        await page.goto(`${BASE_URL}/components/button/index.html`)
        await trackClicks()
      })

      it('does not prevent multiple submissions', async () => {
        await page.click('button')
        await page.click('button')

        const clicksCount = await getClicksCount()

        expect(clicksCount).toBe(2)
      })
    })

    describe('using data-attributes', () => {
      beforeEach(async () => {
        await page.goto(
          `${BASE_URL}/components/button/prevent-double-click.html`
        )
        await trackClicks()
      })

      it('prevents unintentional submissions when in a form', async () => {
        await page.click('button')
        await page.click('button')

        const clicksCount = await getClicksCount()

        expect(clicksCount).toBe(1)
      })

      it('does not prevent intentional multiple clicks', async () => {
        await page.click('button')
        await page.click('button', { delay: 1000 })

        const clicksCount = await getClicksCount()

        expect(clicksCount).toBe(2)
      })

      it('does not prevent subsequent clicks on different buttons', async () => {
        // Clone button to have two buttons on the page
        await page.evaluate(() => {
          const $button = document.querySelector('button')
          const $secondButton = $button.cloneNode(true)

          document.querySelector('form').appendChild($secondButton)
        })

        await page.click('button:nth-child(1)')
        await page.click('button:nth-child(2)')

        const clicksCount = await getClicksCount()

        expect(clicksCount).toBe(2)
      })
    })
  })
})
