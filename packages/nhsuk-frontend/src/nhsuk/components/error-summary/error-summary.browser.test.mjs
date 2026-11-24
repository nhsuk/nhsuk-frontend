import { goToExample, render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { ErrorSummary } from './error-summary.mjs'
import { examples } from './fixtures.mjs'

test.describe('Error summary', () => {
  /** @type {Locator} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'error-summary', examples[example], browserOptions)

    $component = page.locator(`[data-module="${ErrorSummary.moduleName}"]`)
  }

  test('adds the tabindex attribute on page load', async ({ page }) => {
    await initExample(page, 'default')

    await expect($component).toHaveAttribute('tabindex', '-1')
  })

  test('is automatically focused when the page loads', async ({ page }) => {
    await initExample(page, 'default')

    await expect($component).toBeFocused()
  })

  test('removes the tabindex attribute on blur', async ({ page }) => {
    await initExample(page, 'default')

    await $component.blur()

    await expect($component).not.toHaveAttribute('tabindex')
  })

  for (const { name, inputId, legendOrLabelSelector } of [
    {
      name: 'an input',
      inputId: 'input',
      legendOrLabelSelector: 'label[for="input"]'
    },
    {
      name: 'a textarea',
      inputId: 'textarea',
      legendOrLabelSelector: 'label[for="textarea"]'
    },
    {
      name: 'a select',
      inputId: 'select',
      legendOrLabelSelector: 'label[for="select"]'
    },
    {
      name: 'a date input',
      inputId: 'dateinput-day',
      legendOrLabelSelector: '#test-date-input legend'
    },
    {
      name: 'a specific field in a date input',
      inputId: 'dateinput2-year',
      legendOrLabelSelector: '#test-date-input2 legend'
    },
    {
      name: 'a file upload',
      inputId: 'file',
      legendOrLabelSelector: 'label[for="file"]'
    },
    {
      name: 'a group of radio buttons',
      inputId: 'radios',
      legendOrLabelSelector: '#test-radios legend'
    },
    {
      name: 'a group of checkboxes',
      inputId: 'checkboxes',
      legendOrLabelSelector: '#test-checkboxes legend'
    },
    {
      name: 'a single checkbox',
      inputId: 'single-checkbox',
      legendOrLabelSelector: 'label[for="single-checkbox"]'
    },
    {
      name: 'a conditionally revealed input',
      inputId: 'yes-input',
      legendOrLabelSelector: '#test-conditional-reveal legend'
    },
    {
      name: 'a group of radio buttons after a particularly long heading',
      inputId: 'radios-big-heading',
      legendOrLabelSelector: '#test-radios-big-heading legend'
    },
    {
      // Rather than scrolling to the fieldset, we expect to scroll to the label
      // because of the distance between the input and the fieldset
      name: 'an input within a large fieldset',
      inputId: 'address-postcode',
      legendOrLabelSelector: 'label[for="address-postcode"]'
    }
  ]) {
    test.describe(`Linking to ${name}`, () => {
      test.beforeEach(async ({ page }) => {
        await goToExample(page, 'error-summary')
        await page.locator(`.nhsuk-error-summary a[href="#${inputId}"]`).click()
      })

      test('focuses the target input', async ({ page }) => {
        await expect(page.locator(`#${inputId}`)).toBeFocused()
      })

      test('scrolls the label or legend to the top of the screen', async ({
        page
      }) => {
        const legendOrLabelOffsetFromTop = await page
          .locator(legendOrLabelSelector)
          .evaluate(($) => $.getBoundingClientRect().top)

        // Allow for high DPI displays (device pixel ratio)
        expect(Math.abs(legendOrLabelOffsetFromTop)).toBeLessThanOrEqual(0.5)
      })

      test('does not include a hash in the URL', async ({ page }) => {
        const hash = await page.evaluate(() => window.location.hash)
        expect(hash).toBe('')
      })
    })
  }

  test.describe('JavaScript configuration', () => {
    test.describe('during initialisation', () => {
      test('configures `disableAutoFocus: true` to prevent auto-focus', async ({
        page
      }) => {
        await initExample(page, 'default', {
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
        await initExample(page, 'default', {
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
        await initExample(page, 'auto-focus disabled')

        // Does not add the tabindex attribute on page load
        await expect($component).not.toHaveAttribute('tabindex')

        // Does not automatically focus on page load
        await expect($component).not.toBeFocused()
      })

      test('configures `disableAutoFocus: false` to explicitly enable auto-focus', async ({
        page
      }) => {
        await initExample(page, 'auto-focus explicitly enabled')

        // Adds the tabindex attribute on page load
        await expect($component).toHaveAttribute('tabindex', '-1')

        // Automatically focused on page load
        await expect($component).toBeFocused()
      })

      test('uses `disableAutoFocus` data attribute instead of JavaScript `disableAutoFocus`', async ({
        page
      }) => {
        await initExample(page, 'auto-focus explicitly enabled', {
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
            const { ErrorSummary } = await import('nhsuk-frontend')
            new ErrorSummary($root)
          }
        })
      ).rejects.toThrow(
        'InitError: nhsuk-error-summary: Root element (`$root`) already initialised'
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
        'ElementError: nhsuk-error-summary: Root element (`$root`) not found'
      )
    })

    test('throws when receiving the wrong type for $root', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-error-summary"></svg>`
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-error-summary: Root element (`$root`) is not of type HTMLElement'
      )
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
