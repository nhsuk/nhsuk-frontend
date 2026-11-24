import { render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { examples } from './fixtures.mjs'
import { NotificationBanner } from './notification-banner.mjs'

test.describe('Notification banner', () => {
  /** @type {Locator} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'notification-banner', examples[example], browserOptions)

    $component = page.locator(
      `[data-module="${NotificationBanner.moduleName}"]`
    )
  }

  test.describe('when variant is set to "success"', () => {
    test('has the correct tabindex attribute to be focused with JavaScript', async ({
      page
    }) => {
      await initExample(page, 'with success variant')

      await expect($component).toHaveAttribute('tabindex', '-1')
    })

    test('is automatically focused when the page loads', async ({ page }) => {
      await initExample(page, 'with success variant')

      await expect($component).toBeFocused()
    })

    test('removes the tabindex attribute on blur', async ({ page }) => {
      await initExample(page, 'with success variant')

      await $component.blur()

      await expect($component).not.toHaveAttribute('tabindex')
    })

    test.describe('and role is overridden to "region"', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(
          page,
          'role=alert overridden to role=region, with success variant'
        )
      })

      test('does not have a tabindex attribute', async () => {
        await expect($component).not.toHaveAttribute('tabindex')
      })

      test('does not focus the notification banner', async () => {
        await expect($component).not.toBeFocused()
      })
    })

    test.describe('and a custom tabindex is set', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'custom tabindex')
      })

      test('does not remove the tabindex attribute on blur', async () => {
        await $component.blur()

        await expect($component).toHaveAttribute('tabindex', '2')
      })
    })
  })

  test.describe('JavaScript configuration', () => {
    test.describe('during initialisation', () => {
      test('configures `disableAutoFocus: true` to prevent auto-focus', async ({
        page
      }) => {
        await initExample(page, 'with success variant', {
          config: {
            disableAutoFocus: true
          }
        })

        // Does not add the tabindex attribute on page load
        await expect($component).not.toHaveAttribute('tabindex')

        // Does not automatically focus on page load
        await expect($component).not.toBeFocused()
      })

      test('configures `disableAutoFocus: false` to explicitly enable auto-focus', async ({
        page
      }) => {
        await initExample(page, 'with success variant', {
          config: {
            disableAutoFocus: false
          }
        })

        // Adds the tabindex attribute on page load
        await expect($component).toHaveAttribute('tabindex', '-1')

        // Automatically focused on page load
        await expect($component).toBeFocused()
      })
    })

    test.describe('with HTML data attributes', () => {
      test('configures `disableAutoFocus: true` to prevent auto-focus', async ({
        page
      }) => {
        await initExample(page, 'auto-focus disabled, with success variant')

        // Does not add the tabindex attribute on page load
        await expect($component).not.toHaveAttribute('tabindex')

        // Does not automatically focus on page load
        await expect($component).not.toBeFocused()
      })

      test('configures `disableAutoFocus: false` to explicitly enable auto-focus', async ({
        page
      }) => {
        await initExample(
          page,
          'auto-focus explicitly enabled, with success variant'
        )

        // Adds the tabindex attribute on page load
        await expect($component).toHaveAttribute('tabindex', '-1')

        // Automatically focused on page load
        await expect($component).toBeFocused()
      })

      test('uses `disableAutoFocus` data attribute instead of JavaScript `disableAutoFocus`', async ({
        page
      }) => {
        await initExample(
          page,
          'auto-focus explicitly enabled, with success variant',
          {
            config: {
              disableAutoFocus: false
            }
          }
        )

        // Adds the tabindex attribute on page load
        await expect($component).toHaveAttribute('tabindex', '-1')

        // Automatically focused on page load
        await expect($component).toBeFocused()
      })
    })
  })

  test.describe('Error handling', () => {
    test('can throw a SupportError if appropriate', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation() {
            document.body.classList.remove('nhsuk-frontend-supported')
          }
        })
      ).rejects.toThrow(
        'SupportError: NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
      )
    })

    test('throws when initialised twice', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          async afterInitialisation($root) {
            const { NotificationBanner } = await import('nhsuk-frontend')
            new NotificationBanner($root)
          }
        })
      ).rejects.toThrow(
        'InitError: nhsuk-notification-banner: Root element (`$root`) already initialised'
      )
    })

    test('throws when $root is not set', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root) {
            $root.remove()
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-notification-banner: Root element (`$root`) not found'
      )
    })

    test('throws when receiving the wrong type for $root', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-notification-banner"></svg>`
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-notification-banner: Root element (`$root`) is not of type HTMLElement'
      )
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
