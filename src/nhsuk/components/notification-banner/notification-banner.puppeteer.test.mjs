import { getPage, goToComponent } from '@nhsuk/frontend-helpers/puppeteer.mjs'

describe('Notification banner', () => {
  /** @type {Page} */
  let page

  beforeAll(async () => {
    page = await getPage(browser)
  })

  describe('when type is set to "success"', () => {
    beforeAll(async () => {
      page = await goToComponent(page, 'notification-banner', {
        example: 'with type as success'
      })
    })

    it('has the correct tabindex attribute to be focused with JavaScript', async () => {
      const tabindex = await page.$eval('.nhsuk-notification-banner', (el) =>
        el.getAttribute('tabindex')
      )

      expect(tabindex).toBe('-1')
    })

    it('is automatically focused when the page loads', async () => {
      const activeElement = await page.evaluate(() =>
        document.activeElement.getAttribute('data-module')
      )

      expect(activeElement).toBe('nhsuk-notification-banner')
    })

    it('removes the tabindex attribute on blur', async () => {
      await page.$eval(
        '.nhsuk-notification-banner',
        (el) => el instanceof window.HTMLElement && el.blur()
      )

      const tabindex = await page.$eval('.nhsuk-notification-banner', (el) =>
        el.getAttribute('tabindex')
      )
      expect(tabindex).toBeNull()
    })

    describe('and auto-focus is disabled using data attributes', () => {
      beforeAll(async () => {
        page = await goToComponent(page, 'notification-banner', {
          example: 'auto-focus disabled, with type as success'
        })
      })

      it('does not have a tabindex attribute', async () => {
        const tabindex = await page.$eval('.nhsuk-notification-banner', (el) =>
          el.getAttribute('tabindex')
        )

        expect(tabindex).toBeNull()
      })

      it('does not focus the notification banner', async () => {
        const activeElement = await page.evaluate(() =>
          document.activeElement.getAttribute('data-module')
        )

        expect(activeElement).not.toBe('nhsuk-notification-banner')
      })
    })

    describe('and role is overridden to "region"', () => {
      beforeAll(async () => {
        page = await goToComponent(page, 'notification-banner', {
          example: 'role=alert overridden to role=region, with type as success'
        })
      })

      it('does not have a tabindex attribute', async () => {
        const tabindex = await page.$eval('.nhsuk-notification-banner', (el) =>
          el.getAttribute('tabindex')
        )

        expect(tabindex).toBeNull()
      })

      it('does not focus the notification banner', async () => {
        const activeElement = await page.evaluate(() =>
          document.activeElement.getAttribute('data-module')
        )

        expect(activeElement).not.toBe('nhsuk-notification-banner')
      })
    })

    describe('and a custom tabindex is set', () => {
      beforeAll(async () => {
        page = await goToComponent(page, 'notification-banner', {
          example: 'custom tabindex'
        })
      })

      it('does not remove the tabindex attribute on blur', async () => {
        await page.$eval(
          '.nhsuk-notification-banner',
          (el) => el instanceof window.HTMLElement && el.blur()
        )

        const tabindex = await page.$eval('.nhsuk-notification-banner', (el) =>
          el.getAttribute('tabindex')
        )
        expect(tabindex).toBe('2')
      })
    })
  })
})

/**
 * @import { Page } from 'puppeteer'
 */
