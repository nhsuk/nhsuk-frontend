/* eslint-disable no-new */

const { render } = require('@nhsuk-frontend/helpers/puppeteer')
const { getExamples } = require('@nhsuk-frontend/lib/components')

describe('Notification banner', () => {
  let examples

  beforeAll(async () => {
    examples = await getExamples('notification-banner')
  })

  describe('when type is set to "success"', () => {
    it('has the correct tabindex attribute to be focused with JavaScript', async () => {
      await render(
        page,
        'notification-banner',
        examples['with type as success']
      )

      const tabindex = await page.$eval('.nhsuk-notification-banner', (el) =>
        el.getAttribute('tabindex')
      )

      expect(tabindex).toBe('-1')
    })

    it('is automatically focused when the page loads', async () => {
      await render(
        page,
        'notification-banner',
        examples['with type as success']
      )

      const activeElement = await page.evaluate(() =>
        document.activeElement.getAttribute('data-module')
      )

      expect(activeElement).toBe('nhsuk-notification-banner')
    })

    it('removes the tabindex attribute on blur', async () => {
      await render(
        page,
        'notification-banner',
        examples['with type as success']
      )

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
        await render(
          page,
          'notification-banner',
          examples['auto-focus disabled, with type as success']
        )
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
        await render(
          page,
          'notification-banner',
          examples['role=alert overridden to role=region, with type as success']
        )
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
        await render(page, 'notification-banner', examples['custom tabindex'])
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
