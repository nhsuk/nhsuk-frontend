import { render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { Button } from './button.mjs'
import { examples } from './fixtures.mjs'

test.describe('Button', () => {
  /** @type {Locator} */
  let $component

  const clickTimeoutTime = 1000 // ms

  // The longest possible time a button will ignore unintentional clicks for
  // until it can be clicked again (+ 100ms to stay outside the total wait time)
  const debouncedWaitTime = clickTimeoutTime + 100

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'button', examples[example], browserOptions)

    $component = page.locator(`[data-module="${Button.moduleName}"]`)

    await setButtonTracking()
  }

  /**
   * Sets the number of times a button was clicked
   *
   * @param {Locator} [$button] - Playwright button element
   * @returns {Promise<Locator>} Playwright button element
   */
  async function setButtonTracking($button = $component) {
    if (!$button) {
      throw new TypeError('Button is not defined')
    }

    const counts = {
      clicked: 0,
      prevented: 0
    }

    // Track number of button clicks
    await $button.evaluate(($el, counts) => {
      $el.addEventListener(
        'click',
        (event) => {
          counts.clicked++
          $el.dataset.clickedCount = `${counts.clicked}`

          // Track number of button clicks that debounced
          event.preventDefault = () => {
            counts.prevented++
            $el.dataset.preventedCount = `${counts.prevented}`
          }
        },
        // Add listener during capture phase to spy on event
        { capture: true }
      )
    }, counts)

    return $button
  }

  /**
   * Gets the number of times the button was clicked
   *
   * @param {Locator} [$button] - Playwright button element
   * @returns {Promise<{ clicked: number; prevented: number; }>} Number of times the button was clicked
   */
  function getButtonTracking($button = $component) {
    return $button.evaluate(($el) => ({
      clicked: parseInt($el.dataset.clickedCount ?? '0'),
      prevented: parseInt($el.dataset.preventedCount ?? '0')
    }))
  }

  test.describe('Button as a link', () => {
    test.beforeEach(async ({ page }) => {
      await initExample(page, 'as a link')
    })

    test('does not prevent double clicks by default', async () => {
      await $component.click()
      await $component.click()

      await expect(getButtonTracking()).resolves.toMatchObject({
        clicked: 2,
        prevented: 0
      })
    })

    test('triggers the click event when the space key is pressed', async ({
      page
    }) => {
      const href = await $component.evaluate(
        ($el) => /** @type {HTMLAnchorElement} */ ($el).href
      )

      await $component.focus()
      await page.keyboard.press('Space')

      expect(page.url()).toBe(href)
    })
  })

  test.describe('Button as a button', () => {
    test.beforeEach(async ({ page }) => {
      await initExample(page, 'default')
    })

    test('does not prevent double clicks by default', async () => {
      await $component.click()
      await $component.click()

      await expect(getButtonTracking()).resolves.toMatchObject({
        clicked: 2,
        prevented: 0
      })
    })
  })

  test.describe('JavaScript configuration', () => {
    test.describe('during initialisation', () => {
      test('configures `preventDoubleClick: true` to prevent double clicks', async ({
        page
      }) => {
        await initExample(page, 'default', {
          config: {
            preventDoubleClick: true
          }
        })

        await $component.click({
          clickCount: 2
        })

        await expect(getButtonTracking()).resolves.toMatchObject({
          clicked: 2,
          prevented: 1
        })
      })

      test('configures `preventDoubleClick: true` but allows multiple intentional clicks', async ({
        page
      }) => {
        await initExample(page, 'default', {
          config: {
            preventDoubleClick: true
          }
        })

        await $component.click({
          clickCount: 2,
          delay: debouncedWaitTime
        })

        await expect(getButtonTracking()).resolves.toMatchObject({
          clicked: 2,
          prevented: 0
        })
      })

      test('configures `preventDoubleClick: true` to prevent double clicks (configured button only)', async ({
        page
      }) => {
        await initExample(page, 'default', {
          config: {
            preventDoubleClick: true
          }
        })

        await $component.evaluate(($el) =>
          $el.parentNode?.appendChild($el.cloneNode(true))
        )

        // Locate original and cloned button
        const $button1 = await setButtonTracking(
          page.locator('button:nth-child(1)')
        )

        const $button2 = await setButtonTracking(
          page.locator('button:nth-child(2)')
        )

        await $button1.click({
          clickCount: 2
        })

        await $button2.click()

        // 2nd click on button 1 prevented
        await expect(getButtonTracking($button1)).resolves.toMatchObject({
          clicked: 2,
          prevented: 1
        })

        // 3rd click on button 2 not prevented
        await expect(getButtonTracking($button2)).resolves.toMatchObject({
          clicked: 1,
          prevented: 0
        })
      })

      test('configures `preventDoubleClick: false` to explicitly allow double clicks', async ({
        page
      }) => {
        await initExample(page, 'default', {
          config: {
            preventDoubleClick: false
          }
        })

        await $component.click()
        await $component.click()

        await expect(getButtonTracking()).resolves.toMatchObject({
          clicked: 2,
          prevented: 0
        })
      })
    })

    test.describe('with HTML data attributes', () => {
      test('configures `preventDoubleClick: true` to prevent double clicks', async ({
        page
      }) => {
        await initExample(page, 'with double click prevented')

        await $component.click({
          clickCount: 2
        })

        await expect(getButtonTracking()).resolves.toMatchObject({
          clicked: 2,
          prevented: 1
        })
      })

      test('configures `preventDoubleClick: true` but allows multiple intentional clicks', async ({
        page
      }) => {
        await initExample(page, 'with double click prevented')

        await $component.click({
          clickCount: 2,
          delay: debouncedWaitTime
        })

        await expect(getButtonTracking()).resolves.toMatchObject({
          clicked: 2,
          prevented: 0
        })
      })

      test('uses `preventDoubleClick` data attribute instead of JavaScript `preventDoubleClick`', async ({
        page
      }) => {
        await initExample(page, 'with double click not prevented', {
          config: {
            preventDoubleClick: true
          }
        })

        await $component.click({
          clickCount: 2
        })

        await expect(getButtonTracking()).resolves.toMatchObject({
          clicked: 2,
          prevented: 0
        })
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
            const { Button } = await import('nhsuk-frontend')
            new Button($root)
          }
        })
      ).rejects.toThrow(
        'InitError: nhsuk-button: Root element (`$root`) already initialised'
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
        'ElementError: nhsuk-button: Root element (`$root`) not found'
      )
    })

    test('throws when receiving the wrong type for $root', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root) {
            const $svg = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'svg'
            )

            $svg.setAttribute('data-module', 'nhsuk-button')

            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.replaceWith($svg)
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-button: Root element (`$root`) is not of type HTMLElement'
      )
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
