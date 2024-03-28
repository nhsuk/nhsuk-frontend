import puppeteer from 'puppeteer'

describe('Button', () => {
  let page
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()

    await page.goto('http://localhost:3000/components/button/link.html')
  })

  afterAll(async () => {
    await browser.close()
  })

  describe('Button as link', () => {
    it('triggers the click event when the space key is pressed', async () => {
      await page.waitForSelector('a')
      const pathname = await page.evaluate(() => document.body.getElementsByTagName('a')[0]?.getAttribute('href'))

      await page.focus('a[role="button"]')

      // we need to start the waitForNavigation() before the keyboard action
      // so we return a promise that is fulfilled when the navigation and the keyboard action are
      // respectively fulfilled
      // this is somewhat counter intuitive, as we humans expect to act and then wait for something.
      await Promise.all([page.waitForNavigation(), page.keyboard.press('Space')])

      const url = new URL(await page.url())
      expect(url.pathname).toBe(pathname)
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
     *
     * @param {import('puppeteer').Page} page - Puppeteer page object
     * @returns {undefined}
     */
    function trackClicks(puppeteerPage) {
      return puppeteerPage.evaluate(() => {
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
    function getClicksCount(puppeteerPage) {
      return puppeteerPage.evaluate(() => window.TEST_SUBMIT_EVENTS)
    }

    describe('not enabled', () => {
      beforeEach(async () => {
        await page.goto('http://localhost:3000/components/button/index.html')
        await trackClicks(page)
      })

      it('does not prevent multiple submissions', async () => {
        await page.click('button')
        await page.click('button')

        const clicksCount = await getClicksCount(page)

        expect(clicksCount).toBe(2)
      })
    })

    describe('using data-attributes', () => {
      beforeEach(async () => {
        await page.goto('http://localhost:3000/components/button/prevent-double-click.html')
        await trackClicks(page)
      })

      it('prevents unintentional submissions when in a form', async () => {
        await page.click('button')
        await page.click('button')

        const clicksCount = await getClicksCount(page)

        expect(clicksCount).toBe(1)
      })

      it('does not prevent intentional multiple clicks', async () => {
        await page.click('button')
        await page.click('button', { delay: 1000 })

        const clicksCount = await getClicksCount(page)

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

        const clicksCount = await getClicksCount(page)

        expect(clicksCount).toBe(2)
      })
    })
  })
})
