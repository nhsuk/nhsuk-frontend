import { render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { examples } from './fixtures.mjs'

test.describe('Skip link', () => {
  /** @type {Locator} */
  let $main

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'skip-link', examples[example], browserOptions)

    $main = page.locator('#maincontent')
  }

  test.describe('Focus handling', () => {
    test.beforeEach(async ({ page }) => {
      await initExample(page, 'default')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
    })

    test('focuses the linked element', async () => {
      await expect($main).toBeFocused()
    })

    test('adds the tabindex attribute to the linked element', async () => {
      await expect($main).toHaveAttribute('tabindex', '-1')
    })

    test('adds the class for removing the native focus style to the linked element', async () => {
      await expect($main).toContainClass('nhsuk-skip-link-focused-element')
    })

    test('removes the tabindex attribute from the linked element on blur', async () => {
      await $main.blur()

      await expect($main).not.toHaveAttribute('tabindex')
    })

    test('removes the class for removing the native focus style from the linked element on blur', async () => {
      await $main.blur()

      await expect($main).not.toContainClass('nhsuk-skip-link-focused-element')
    })
  })

  test.describe('Error handling', () => {
    test('can return early without errors for external href', async ({
      page
    }) => {
      await expect(
        initExample(page, 'default', {
          context: {
            text: 'Exit this page',
            href: 'https://www.bbc.co.uk/weather'
          }
        })
      ).resolves.not.toThrow()
    })

    test('can return early without errors when linking to another page (without hash fragment)', async ({
      page
    }) => {
      await expect(
        initExample(page, 'default', {
          context: {
            text: 'Exit this page',
            href: '/clear-session-data'
          }
        })
      ).resolves.not.toThrow()
    })

    test('can return early without errors when linking to another page (with hash fragment)', async ({
      page
    }) => {
      await expect(
        initExample(page, 'default', {
          context: {
            text: 'Skip to main content',
            href: '/somewhere-else#main-content'
          }
        })
      ).resolves.not.toThrow()
    })

    test('can return early without errors when linking to the current page (with hash fragment)', async ({
      page
    }) => {
      await expect(
        initExample(page, 'default', {
          context: {
            text: 'Skip to main content',
            href: '#maincontent'
          }
        })
      ).resolves.not.toThrow()
    })

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
            const { SkipLink } = await import('nhsuk-frontend')
            new SkipLink($root)
          }
        })
      ).rejects.toThrow(
        'InitError: nhsuk-skip-link: Root element (`$root`) already initialised'
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
        'ElementError: nhsuk-skip-link: Root element (`$root`) not found'
      )
    })

    test('throws when receiving the wrong type for $root', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-skip-link"></svg>`
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-skip-link: Root element (`$root`) is not of type HTMLAnchorElement'
      )
    })

    test('throws when the linked element is missing', async ({ page }) => {
      await expect(initExample(page, 'without link target')).rejects.toThrow(
        'ElementError: nhsuk-skip-link: Target content (`id="this-element-does-not-exist"`) not found'
      )
    })

    test('throws when the href does not contain a hash', async ({ page }) => {
      await expect(initExample(page, 'without hash fragment')).rejects.toThrow(
        'ElementError: nhsuk-skip-link: Target link (`href="/nhsuk-frontend/components/boilerplate/"`) hash fragment not found'
      )
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
