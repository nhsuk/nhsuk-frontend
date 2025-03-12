const {
  PORT = 3000,
  BASE_HOST = `localhost:${PORT}`, // Default via `npm start`
  BASE_URL = `http://${BASE_HOST}/nhsuk-frontend`
} = process.env

import { KnownDevices } from 'puppeteer'
const iPhone = KnownDevices['iPhone 6']

describe('Tabs', () => {
  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
    })

    beforeEach(async () => {
      await Promise.all([
        page.goto(`${BASE_URL}/components/tabs/index.html`),
        page.waitForNavigation()
      ])
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('falls back to making all tab containers visible', async () => {
      const isContentVisible = await page.waitForSelector(
        '.nhsuk-tabs__panel',
        { visible: true, timeout: 1000 }
      )
      expect(isContentVisible).toBeTruthy()
    })
  })

  describe('when JavaScript is available', () => {
    beforeEach(async () => {
      await Promise.all([
        page.goto(`${BASE_URL}/components/tabs/index.html`),
        page.waitForNavigation()
      ])
    })

    it('should indicate the open state of the first tab', async () => {
      const firstTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab')
          .getAttribute('aria-selected')
      )
      expect(firstTabAriaSelected).toBe('true')

      const firstTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__list-item:first-child')
            .className
      )
      expect(firstTabClasses).toContain('nhsuk-tabs__list-item--selected')
    })

    it('should display the first tab panel', async () => {
      const tabPanelIsHidden = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs > .nhsuk-tabs__panel')
          .classList.contains('nhsuk-tabs__panel--hidden')
      )
      expect(tabPanelIsHidden).toBeFalsy()
    })

    it('should hide all the tab panels except for the first one', async () => {
      const tabPanelIsHidden = await page.evaluate(() =>
        document.body
          .querySelector(
            '.nhsuk-tabs > .nhsuk-tabs__panel ~ .nhsuk-tabs__panel'
          )
          .classList.contains('nhsuk-tabs__panel--hidden')
      )
      expect(tabPanelIsHidden).toBeTruthy()
    })
  })

  describe('when a tab is pressed', () => {
    beforeEach(async () => {
      await Promise.all([
        page.goto(`${BASE_URL}/components/tabs/index.html`),
        page.waitForNavigation()
      ])
    })

    it('should indicate the open state of the pressed tab', async () => {
      // Click the second tab
      await page.click('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')

      const secondTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-selected')
      )
      expect(secondTabAriaSelected).toBe('true')

      const secondTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__list-item:nth-child(2)')
            .className
      )
      expect(secondTabClasses).toContain('nhsuk-tabs__list-item--selected')
    })

    it('should display the tab panel associated with the selected tab', async () => {
      // Click the second tab
      await page.click('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')

      const secondTabPanelIsHidden = await page.evaluate(() => {
        const secondTabAriaControls = document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-controls')
        return document.body
          .querySelector(`[id="${secondTabAriaControls}"]`)
          .classList.contains('nhsuk-tabs__panel--hidden')
      })
      expect(secondTabPanelIsHidden).toBeFalsy()
    })

    describe('when the tab contains a DOM element', () => {
      beforeEach(async () => {
        await Promise.all([
          page.goto(`${BASE_URL}/components/tabs/index.html`),
          page.waitForNavigation()
        ])
      })

      it('should display the tab panel associated with the selected tab', async () => {
        await page.evaluate(() => {
          // Replace contents of second tab with a DOM element
          const secondTab = document.body.querySelector(
            '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
          )
          secondTab.innerHTML = '<span>Tab 2</span>'
        })

        // Click the DOM element inside the second tab
        await page.click(
          '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab span'
        )

        const secondTabPanelIsHidden = await page.evaluate(() => {
          const secondTabAriaControls = document.body
            .querySelector(
              '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
            )
            .getAttribute('aria-controls')
          return document.body
            .querySelector(`[id="${secondTabAriaControls}"]`)
            .classList.contains('nhsuk-tabs__panel--hidden')
        })
        expect(secondTabPanelIsHidden).toBeFalsy()
      })
    })
  })

  describe('when first tab is focused and the right arrow key is pressed', () => {
    beforeEach(async () => {
      await Promise.all([
        page.goto(`${BASE_URL}/components/tabs/index.html`),
        page.waitForNavigation()
      ])
    })

    it('should indicate the open state of the next tab', async () => {
      // Press right arrow when focused on the first tab
      await page.focus('.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab')
      await page.keyboard.press('ArrowRight')

      const secondTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-selected')
      )
      expect(secondTabAriaSelected).toBe('true')

      const secondTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__list-item:nth-child(2)')
            .className
      )
      expect(secondTabClasses).toContain('nhsuk-tabs__list-item--selected')
    })

    it('should display the tab panel associated with the selected tab', async () => {
      // Press right arrow
      await page.focus('.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab')
      await page.keyboard.down('ArrowRight')

      const secondTabPanelIsHidden = await page.evaluate(() => {
        const secondTabAriaControls = document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-controls')
        return document.body
          .querySelector(`[id="${secondTabAriaControls}"]`)
          .classList.contains('nhsuk-tabs__panel--hidden')
      })
      expect(secondTabPanelIsHidden).toBeFalsy()
    })
  })

  describe('when a hash associated with a tab panel is passed in the URL', () => {
    it('should indicate the open state of the associated tab', async () => {
      await Promise.all([
        page.goto(`${BASE_URL}/components/tabs/index.html#tab-two`),
        page.waitForNavigation()
      ])

      const currentTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__tab[href="#tab-two"]')
          .getAttribute('aria-selected')
      )
      expect(currentTabAriaSelected).toBe('true')

      const currentTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__tab[href="#tab-two"]')
            .parentElement.className
      )
      expect(currentTabClasses).toContain('nhsuk-tabs__list-item--selected')

      const currentTabPanelIsHidden = await page.evaluate(() =>
        document
          .getElementById('tab-two')
          .classList.contains('nhsuk-tabs__panel--hidden')
      )
      expect(currentTabPanelIsHidden).toBeFalsy()
    })

    it('should only update based on hashes that are tabs', async () => {
      await Promise.all([
        page.goto(`${BASE_URL}/components/tabs/tabs-with-anchor-in-panel.html`),
        page.waitForNavigation()
      ])

      await page.click('[href="#anchor"]')

      const activeElementId = await page.evaluate(
        () => document.activeElement.id
      )
      expect(activeElementId).toBe('anchor')
    })
  })

  describe('when rendered on a small device', () => {
    beforeEach(async () => {
      await Promise.all([
        page.goto(`${BASE_URL}/components/tabs/index.html`),
        page.waitForNavigation()
      ])
    })

    it('falls back to making the all tab containers visible', async () => {
      await page.emulate(iPhone)
      const isContentVisible = await page.waitForSelector(
        '.nhsuk-tabs__panel',
        { visible: true, timeout: 1000 }
      )
      expect(isContentVisible).toBeTruthy()
    })
  })
})
