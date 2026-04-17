import { getAttribute, render } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'
import { NotificationBanner } from './notification-banner.mjs'

describe('Notification banner', () => {
  /** @type {ElementHandle<HTMLElement>} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'notification-banner', examples[example], browserOptions)

    $component = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$(`[data-module="${NotificationBanner.moduleName}"]`)
    )
  }

  describe('when variant is set to "success"', () => {
    it('has the correct tabindex attribute to be focused with JavaScript', async () => {
      await initExample('with success variant')

      expect(await getAttribute($component, 'tabindex')).toBe('-1')
    })

    it('is automatically focused when the page loads', async () => {
      await initExample('with success variant')

      const activeElementModuleName = await page.evaluate(() =>
        document.activeElement?.getAttribute('data-module')
      )

      expect(activeElementModuleName).toBe(NotificationBanner.moduleName)
    })

    it('removes the tabindex attribute on blur', async () => {
      await initExample('with success variant')

      await $component.evaluate(($el) => $el.blur())

      expect(await getAttribute($component, 'tabindex')).toBeNull()
    })

    describe('and role is overridden to "region"', () => {
      beforeAll(async () => {
        await initExample(
          'role=alert overridden to role=region, with success variant'
        )
      })

      it('does not have a tabindex attribute', async () => {
        expect(await getAttribute($component, 'tabindex')).toBeNull()
      })

      it('does not focus the notification banner', async () => {
        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        expect(activeElementModuleName).not.toBe(NotificationBanner.moduleName)
      })
    })

    describe('and a custom tabindex is set', () => {
      beforeAll(async () => {
        await initExample('custom tabindex')
      })

      it('does not remove the tabindex attribute on blur', async () => {
        await $component.evaluate(($el) => $el.blur())

        expect(await getAttribute($component, 'tabindex')).toBe('2')
      })
    })
  })

  describe('JavaScript configuration', () => {
    describe('during initialisation', () => {
      it("configures 'disableAutoFocus: true' to prevent auto-focus", async () => {
        await initExample('with success variant', {
          config: {
            disableAutoFocus: true
          }
        })

        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        // Does not add the tabindex attribute on page load
        expect(await getAttribute($component, 'tabindex')).toBeNull()

        // Does not automatically focus on page load
        expect(activeElementModuleName).not.toBe(NotificationBanner.moduleName)
      })

      it("configures 'disableAutoFocus: false' to explicitly enable auto-focus", async () => {
        await initExample('with success variant', {
          config: {
            disableAutoFocus: false
          }
        })

        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        // Adds the tabindex attribute on page load
        expect(await getAttribute($component, 'tabindex')).toBe('-1')

        // Automatically focused on page load
        expect(activeElementModuleName).toBe(NotificationBanner.moduleName)
      })
    })

    describe('with HTML data attributes', () => {
      it("configures 'disableAutoFocus: true' to prevent auto-focus", async () => {
        await initExample('auto-focus disabled, with success variant')

        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        // Does not add the tabindex attribute on page load
        expect(await getAttribute($component, 'tabindex')).toBeNull()

        // Does not automatically focus on page load
        expect(activeElementModuleName).not.toBe(NotificationBanner.moduleName)
      })

      it("configures 'disableAutoFocus: false' to explicitly enable auto-focus", async () => {
        await initExample('auto-focus explicitly enabled, with success variant')

        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        // Adds the tabindex attribute on page load
        expect(await getAttribute($component, 'tabindex')).toBe('-1')

        // Automatically focused on page load
        expect(activeElementModuleName).toBe(NotificationBanner.moduleName)
      })

      it('uses `disableAutoFocus` data attribute instead of JavaScript `disableAutoFocus`', async () => {
        await initExample(
          'auto-focus explicitly enabled, with success variant',
          {
            config: {
              disableAutoFocus: false
            }
          }
        )

        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        // Adds the tabindex attribute on page load
        expect(await getAttribute($component, 'tabindex')).toBe('-1')

        // Automatically focused on page load
        expect(activeElementModuleName).toBe(NotificationBanner.moduleName)
      })
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
            const { NotificationBanner } = await import('nhsuk-frontend')
            new NotificationBanner($root)
          }
        })
      ).rejects.toMatchObject({
        name: 'InitError',
        message:
          'nhsuk-notification-banner: Root element (`$root`) already initialised'
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
          message: 'nhsuk-notification-banner: Root element (`$root`) not found'
        }
      })
    })

    it('throws when receiving the wrong type for $root', () => {
      return expect(
        initExample('default', {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-notification-banner"></svg>`
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-notification-banner: Root element (`$root`) is not of type HTMLElement'
        }
      })
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle } from 'puppeteer'
 */
