import { render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { examples } from './fixtures.mjs'
import { Tabs } from './tabs.mjs'

test.describe('Tabs', () => {
  /** @type {Locator} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'tabs', examples[example], browserOptions)

    $component = page.locator(`[data-module="${Tabs.moduleName}"]`)
  }

  test.describe('when JavaScript is unavailable or fails', () => {
    test.use({ javaScriptEnabled: false })

    test.beforeEach(async ({ page }) => {
      await initExample(page, 'default')
    })

    test('falls back to making all tab containers visible', async () => {
      const $firstPanel = $component.locator('.nhsuk-tabs__panel').first()

      await expect($firstPanel).toBeVisible()
    })
  })

  test.describe('when JavaScript is available', () => {
    test.beforeEach(async ({ page }) => {
      await initExample(page, 'default')
    })

    test('should indicate the open state of the first tab', async () => {
      const $firstItem = $component.locator(
        '.nhsuk-tabs__list-item:first-child'
      )
      const $firstTab = $firstItem.locator('.nhsuk-tabs__tab')

      await expect($firstTab).toHaveAttribute('aria-selected', 'true')
      await expect($firstItem).toContainClass('nhsuk-tabs__list-item--selected')
    })

    test('should display the first tab panel', async () => {
      const $firstPanel = $component.locator('.nhsuk-tabs__panel').first()

      await expect($firstPanel).not.toContainClass('nhsuk-tabs__panel--hidden')
    })

    test('should hide all the tab panels except for the first one', async () => {
      const $otherPanels = $component.locator(
        '.nhsuk-tabs__panel ~ .nhsuk-tabs__panel'
      )

      await expect($otherPanels).toHaveCount(3)

      for (const $panel of await $otherPanels.all()) {
        await expect($panel).toContainClass('nhsuk-tabs__panel--hidden')
      }
    })
  })

  test.describe('when a tab is pressed', () => {
    test.beforeEach(async ({ page }) => {
      await initExample(page, 'default')
    })

    test('should indicate the open state of the pressed tab', async () => {
      const $secondListItem = $component.locator(
        '.nhsuk-tabs__list-item:nth-child(2)'
      )

      const $secondTab = $secondListItem.locator('.nhsuk-tabs__tab')

      // Click the second tab
      await $secondTab.click()

      await expect($secondTab).toHaveAttribute('aria-selected', 'true')
      await expect($secondListItem).toContainClass(
        'nhsuk-tabs__list-item--selected'
      )
    })

    test('should display the tab panel associated with the selected tab', async () => {
      const $secondTab = $component.locator(
        '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
      )

      const $secondPanel = $component.locator(
        '.nhsuk-tabs__panel:nth-of-type(2)'
      )

      // Click the second tab
      await $secondTab.click()

      await expect($secondPanel).toHaveAttribute(
        'id',
        (await $secondTab.getAttribute('aria-controls')) ?? ''
      )

      await expect($secondPanel).not.toContainClass('nhsuk-tabs__panel--hidden')
    })

    test.describe('when the tab contains a DOM element', () => {
      test.beforeEach(async ({ page }) => {
        await initExample(page, 'default')
      })

      test('should display the tab panel associated with the selected tab', async () => {
        const $secondTab = $component.locator(
          '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
        )

        // Replace contents of second tab with a DOM element
        await $secondTab.evaluate(($el) => {
          $el.innerHTML = '<span>Past week</span>'
        })

        const secondPanelId = await $secondTab.getAttribute('aria-controls')
        const $secondPanel = $component.locator(`#${secondPanelId}`)

        // Click the DOM element inside the second tab
        await $secondTab.locator('span').click()

        await expect($secondPanel).toHaveAttribute('id', 'example-2')
        await expect($secondPanel).not.toContainClass(
          'nhsuk-tabs__panel--hidden'
        )
      })
    })
  })

  test.describe('when first tab is focused and the right arrow key is pressed', () => {
    test.beforeEach(async ({ page }) => {
      await initExample(page, 'default')
    })

    test('should indicate the open state of the next tab', async ({ page }) => {
      const $firstListItem = $component.locator(
        '.nhsuk-tabs__list-item:first-child'
      )

      const $secondListItem = $component.locator(
        '.nhsuk-tabs__list-item:nth-child(2)'
      )

      const $firstTab = $firstListItem.locator('.nhsuk-tabs__tab')
      const $secondTab = $secondListItem.locator('.nhsuk-tabs__tab')

      // Press right arrow when focused on the first tab
      await $firstTab.focus()
      await page.keyboard.press('ArrowRight')

      await expect($secondTab).toHaveAttribute('aria-selected', 'true')
      await expect($secondListItem).toContainClass(
        'nhsuk-tabs__list-item--selected'
      )
    })

    test('should display the tab panel associated with the selected tab', async ({
      page
    }) => {
      const $firstTab = $component.locator(
        '.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab'
      )

      const $secondTab = $component.locator(
        '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
      )

      const secondPanelId = await $secondTab.getAttribute('aria-controls')
      const $secondPanel = $component.locator(`#${secondPanelId}`)

      // Press right arrow
      await $firstTab.focus()
      await page.keyboard.down('ArrowRight')

      await expect($secondPanel).toHaveAttribute('id', 'example-2')
      await expect($secondPanel).not.toContainClass('nhsuk-tabs__panel--hidden')
    })
  })

  test.describe('when a hash associated with a tab panel is passed in the URL', () => {
    test('should indicate the open state of the associated tab', async ({
      page
    }) => {
      await initExample(page, 'default')

      await page.evaluate(() => {
        window.location.hash = '#example-2'
      })

      const $currentTab = $component.locator(
        '.nhsuk-tabs__tab[href="#example-2"]'
      )
      const $currentItem = $component.locator(
        '.nhsuk-tabs__list-item:has(.nhsuk-tabs__tab[href="#example-2"])'
      )

      const currentPanelId = await $currentTab.getAttribute('aria-controls')
      const $currentPanel = $component.locator(`#${currentPanelId}`)

      await expect($currentTab).toHaveAttribute('aria-selected', 'true')
      await expect($currentItem).toContainClass(
        'nhsuk-tabs__list-item--selected'
      )

      await expect($currentPanel).toHaveAttribute('id', 'example-2')
      await expect($currentPanel).not.toContainClass(
        'nhsuk-tabs__panel--hidden'
      )
    })

    test('should only update based on hashes that are tabs', async ({
      page
    }) => {
      await initExample(page, 'with anchor in panel')

      await page.locator('[href="#anchor"]').click()

      const activeElementId = await page.evaluate(
        () => document.activeElement?.id
      )

      expect(activeElementId).toBe('anchor')
    })
  })

  test.describe('when rendered on a small device', () => {
    test.use({
      viewport: {
        width: 320,
        height: 480
      }
    })

    test('falls back to making the all tab containers visible', async ({
      page
    }) => {
      await initExample(page, 'default')

      const $firstPanel = $component.locator('.nhsuk-tabs__panel').first()

      await expect($firstPanel).toBeVisible()
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
            const { Tabs } = await import('nhsuk-frontend')
            new Tabs($root)
          }
        })
      ).rejects.toThrow(
        'InitError: nhsuk-tabs: Root element (`$root`) already initialised'
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
        'ElementError: nhsuk-tabs: Root element (`$root`) not found'
      )
    })

    test('throws when there are no tabs', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root, { selector }) {
            $root.querySelectorAll(selector).forEach((item) => item.remove())
          },
          context: {
            selector: 'a.nhsuk-tabs__tab'
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-tabs: Links (`<a class="nhsuk-tabs__tab">`) not found'
      )
    })

    test('throws when the tab list is missing', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root, { selector }) {
            $root
              .querySelector(selector)
              ?.setAttribute('class', 'nhsuk-tabs__typo')
          },
          context: {
            selector: '.nhsuk-tabs__list'
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-tabs: List (`<ul class="nhsuk-tabs__list">`) not found'
      )
    })

    test('throws when there the tab list is empty', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root, { selector, className }) {
            $root
              .querySelectorAll(selector)
              .forEach((item) => item.setAttribute('class', className))
          },
          context: {
            selector: '.nhsuk-tabs__list-item',
            className: 'nhsuk-tabs__list-typo'
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-tabs: List items (`<li class="nhsuk-tabs__list-item">`) not found'
      )
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
