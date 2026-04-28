import {
  getAttribute,
  goToExample,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { ErrorSummary } from './error-summary.mjs'
import { examples } from './fixtures.mjs'

describe('Error summary', () => {
  /** @type {ElementHandle<HTMLElement>} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'error-summary', examples[example], browserOptions)

    $component = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$(`[data-module="${ErrorSummary.moduleName}"]`)
    )
  }

  it('adds the tabindex attribute on page load', async () => {
    await initExample('default')

    expect(await getAttribute($component, 'tabindex')).toBe('-1')
  })

  it('is automatically focused when the page loads', async () => {
    await initExample('default')

    const activeElementModuleName = await page.evaluate(() =>
      document.activeElement?.getAttribute('data-module')
    )

    expect(activeElementModuleName).toBe(ErrorSummary.moduleName)
  })

  it('removes the tabindex attribute on blur', async () => {
    await initExample('default')

    await $component.evaluate(($el) => $el.blur())

    expect(await getAttribute($component, 'tabindex')).toBeNull()
  })

  describe.each([
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
  ])('Linking to $name', ({ inputId, legendOrLabelSelector }) => {
    beforeAll(async () => {
      await goToExample(page, 'error-summary')
      await page.click(`.nhsuk-error-summary a[href="#${inputId}"]`)
    })

    it('focuses the target input', async () => {
      const activeElementId = await page.evaluate(
        () => document.activeElement?.id
      )

      expect(activeElementId).toBe(inputId)
    })

    it('scrolls the label or legend to the top of the screen', async () => {
      const legendOrLabelOffsetFromTop = await page.$eval(
        legendOrLabelSelector,
        ($) => $.getBoundingClientRect().top
      )

      // Allow for high DPI displays (device pixel ratio)
      expect(Math.abs(legendOrLabelOffsetFromTop)).toBeLessThanOrEqual(0.5)
    })

    it('does not include a hash in the URL', async () => {
      const hash = await page.evaluate(() => window.location.hash)
      expect(hash).toBe('')
    })
  })

  describe('JavaScript configuration', () => {
    describe('during initialisation', () => {
      it('configures `disableAutoFocus: true` to prevent auto-focus', async () => {
        await initExample('default', {
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
        expect(activeElementModuleName).not.toBe(ErrorSummary.moduleName)
      })

      it('configures `disableAutoFocus: false` to explicitly enable auto-focus', async () => {
        await initExample('default', {
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
        expect(activeElementModuleName).toBe(ErrorSummary.moduleName)
      })
    })

    describe('with HTML data attributes', () => {
      it('configures `disableAutoFocus: true` to prevent auto-focus', async () => {
        await initExample('auto-focus disabled')

        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        // Does not add the tabindex attribute on page load
        expect(await getAttribute($component, 'tabindex')).toBeNull()

        // Does not automatically focus on page load
        expect(activeElementModuleName).not.toBe(ErrorSummary.moduleName)
      })

      it('configures `disableAutoFocus: false` to explicitly enable auto-focus', async () => {
        await initExample('auto-focus explicitly enabled')

        const activeElementModuleName = await page.evaluate(() =>
          document.activeElement?.getAttribute('data-module')
        )

        // Adds the tabindex attribute on page load
        expect(await getAttribute($component, 'tabindex')).toBe('-1')

        // Automatically focused on page load
        expect(activeElementModuleName).toBe(ErrorSummary.moduleName)
      })

      it('uses `disableAutoFocus` data attribute instead of JavaScript `disableAutoFocus`', async () => {
        await initExample('auto-focus explicitly enabled', {
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
        expect(activeElementModuleName).toBe(ErrorSummary.moduleName)
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
            const { ErrorSummary } = await import('nhsuk-frontend')
            new ErrorSummary($root)
          }
        })
      ).rejects.toMatchObject({
        name: 'InitError',
        message:
          'nhsuk-error-summary: Root element (`$root`) already initialised'
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
          message: 'nhsuk-error-summary: Root element (`$root`) not found'
        }
      })
    })

    it('throws when receiving the wrong type for $root', () => {
      return expect(
        initExample('default', {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-error-summary"></svg>`
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-error-summary: Root element (`$root`) is not of type HTMLElement'
        }
      })
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle } from 'puppeteer'
 */
