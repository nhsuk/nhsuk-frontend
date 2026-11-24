import { goToExample, render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { Checkboxes } from './checkboxes.mjs'
import { examples } from './fixtures.mjs'

test.describe('Checkboxes', () => {
  /** @type {Locator} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'checkboxes', examples[example], browserOptions)

    $component = page.locator(`[data-module="${Checkboxes.moduleName}"]`)
  }

  test.describe('input position', () => {
    // Check that the input sits above the label, enabling its proper detection
    // when exploring by touch or using automation tools like Selenium
    test('displays the input above the label', async ({ page }) => {
      await initExample(page, 'default')

      const $firstInput = page.locator('.nhsuk-checkboxes__input').first()

      const { x, y, width, height } =
        /** @type {{ x: number, y: number, width: number, height: number }} */ (
          await $firstInput.boundingBox()
        )

      // Find elements at the centre of the input
      const clickPosition = { x: x + width / 2, y: y + height / 2 }

      const elementTagNames = await page.evaluate(({ x, y }) => {
        return document.elementsFromPoint(x, y).map(($el) => $el.tagName)
      }, clickPosition)

      expect(elementTagNames[0]).toBe('INPUT')
      expect(elementTagNames[1]).toBe('LABEL')
    })
  })

  test.describe('with conditional content', () => {
    test.describe('when JavaScript is unavailable or fails', () => {
      test.use({ javaScriptEnabled: false })

      test.describe('with conditional content', () => {
        /** @type {Locator} */
        let $inputs

        /** @type {Locator} */
        let $conditionals

        test.beforeEach(async ({ page }) => {
          await initExample(page, 'with conditional content')

          $inputs = $component.locator('.nhsuk-checkboxes__input')
          $conditionals = $component.locator('.nhsuk-checkboxes__conditional')
        })

        test('includes the expected number of inputs and conditionals', async () => {
          await expect($inputs).toHaveCount(3)
          await expect($conditionals).toHaveCount(3)
        })

        test('has no ARIA attributes applied', async () => {
          const $inputsWithAriaExpanded = $component.locator(
            '.nhsuk-checkboxes__input[aria-expanded]'
          )

          const $inputsWithAriaControls = $component.locator(
            '.nhsuk-checkboxes__input[aria-controls]'
          )

          await expect($inputsWithAriaExpanded).toHaveCount(0)
          await expect($inputsWithAriaControls).toHaveCount(0)
        })

        test('falls back to making all conditional content visible', async () => {
          for (const $conditional of await $conditionals.all()) {
            await expect($conditional).toBeVisible()
          }
        })
      })
    })

    test.describe('when JavaScript is available', () => {
      test.describe('with conditional item checked', () => {
        /** @type {Locator} */
        let $inputs

        test.beforeEach(async ({ page }) => {
          await initExample(page, 'with pre-checked values')

          $inputs = $component.locator('.nhsuk-checkboxes__input')
        })

        test('has conditional content revealed that is associated with a checked input', async () => {
          const $input = $inputs.nth(0) // First input, checked
          const $conditional = $component.locator(
            `[id="${await $input.getAttribute('aria-controls')}"]`
          )

          await expect($input).toBeChecked()
          await expect($conditional).toBeVisible()
        })

        test('has no conditional content revealed that is associated with an unchecked input', async () => {
          const $input = $inputs.nth(1) // second input, unchecked
          const $conditional = $component.locator(
            `[id="${await $input.getAttribute('aria-controls')}"]`
          )

          await expect($input).not.toBeChecked()
          await expect($conditional).toBeHidden()
        })
      })

      test.describe('with conditional content', () => {
        /** @type {Locator} */
        let $inputs

        test.beforeEach(async ({ page }) => {
          await initExample(page, 'with conditional content')

          $inputs = $component.locator('.nhsuk-checkboxes__input')
        })

        test('indicates when conditional content is collapsed or revealed', async () => {
          const $input = $inputs.nth(0) // First input, with conditional content

          // Initially collapsed
          await expect($input).not.toBeChecked()
          await expect($input).toHaveAttribute('aria-expanded', 'false')

          // Toggle revealed
          await $input.click()

          await expect($input).toBeChecked()
          await expect($input).toHaveAttribute('aria-expanded', 'true')

          // Toggle collapsed
          await $input.click()

          await expect($input).not.toBeChecked()
          await expect($input).toHaveAttribute('aria-expanded', 'false')
        })

        test('toggles the conditional content when clicking an input', async () => {
          const $input = $inputs.nth(0) // First input, with conditional content
          const $conditional = $component.locator(
            `[id="${await $input.getAttribute('aria-controls')}"]`
          )

          // Initially collapsed
          await expect($input).not.toBeChecked()
          await expect($conditional).toBeHidden()

          // Toggle revealed
          await $input.click()

          await expect($input).toBeChecked()
          await expect($conditional).toBeVisible()

          // Toggle collapsed
          await $input.click()

          await expect($input).not.toBeChecked()
          await expect($conditional).toBeHidden()
        })

        test('toggles the conditional content when using an input with a keyboard', async ({
          page
        }) => {
          const $input = $inputs.nth(0) // First input, with conditional content
          const $conditional = $component.locator(
            `[id="${await $input.getAttribute('aria-controls')}"]`
          )

          // Initially collapsed
          await expect($input).not.toBeChecked()
          await expect($conditional).toBeHidden()

          // Toggle revealed
          await $input.focus()
          await page.keyboard.press('Space')

          await expect($input).toBeChecked()
          await expect($conditional).toBeVisible()

          // Toggle collapsed
          await page.keyboard.press('Space')

          await expect($input).not.toBeChecked()
          await expect($conditional).toBeHidden()
        })
      })

      test.describe('with conditional content, special characters', () => {
        test('does not error when ID of revealed content contains special characters', async ({
          page
        }) => {
          await expect(
            initExample(page, 'with conditional content, special characters')
          ).resolves.not.toThrow()
        })
      })
    })
  })

  test.describe('with "none" option', () => {
    test.describe('when JavaScript is available', () => {
      /** @type {Locator} */
      let $inputs

      test.beforeEach(async ({ page }) => {
        await initExample(page, 'with "none" option')

        $inputs = $component.locator('.nhsuk-checkboxes__input')
      })

      test('unchecks other checkboxes when the "none" option is checked', async () => {
        // Check the first 3 checkboxes
        await $inputs.nth(0).click()
        await $inputs.nth(1).click()
        await $inputs.nth(2).click()

        // Check the "none" option
        await $inputs.nth(3).click()

        // Expect first 3 checkboxes to have been unchecked
        await expect($inputs.nth(0)).not.toBeChecked()
        await expect($inputs.nth(1)).not.toBeChecked()
        await expect($inputs.nth(2)).not.toBeChecked()
      })

      test('unchecks the "none" option when any other checkbox is checked', async () => {
        // Check the "none" option
        await $inputs.nth(3).click()

        // Check the first checkbox
        await $inputs.nth(0).click()

        // Expect the "none" option to have been unchecked
        await expect($inputs.nth(3)).not.toBeChecked()
      })
    })
  })

  test.describe('with "none" option and conditional content', () => {
    test.describe('when JavaScript is available', () => {
      /** @type {Locator} */
      let $inputs

      test.beforeEach(async ({ page }) => {
        await initExample(page, 'with "none" option, conditional content')

        $inputs = $component.locator('.nhsuk-checkboxes__input')
      })

      test('unchecks other checkboxes and hides conditional content when the "none" option is checked', async () => {
        const $input = $inputs.nth(2)
        const $conditional = $component.locator(
          `[id="${await $input.getAttribute('aria-controls')}"]`
        )

        // Check the "Text message" checkbox
        await $inputs.nth(2).click()

        // Expect conditional content to have been revealed
        await expect($conditional).toBeVisible()

        // Check the "none" option
        await $inputs.nth(3).click()

        // Expect the "Text message" checkbox to have been unchecked
        await expect($inputs.nth(2)).not.toBeChecked()

        // Expect conditional content to have been collapsed
        await expect($conditional).toBeHidden()
      })
    })
  })

  test.describe('with multiple groups, "none" option and conditional content', () => {
    test.describe('when JavaScript is available', () => {
      /** @type {Locator} */
      let $inputsPrimary

      /** @type {Locator} */
      let $inputsSecondary

      /** @type {Locator} */
      let $inputsOther

      test.beforeEach(async ({ page }) => {
        await goToExample(page, 'conditional-reveals')

        $inputsPrimary = page.locator(
          '.nhsuk-checkboxes__input[id^="colour-primary"]'
        )

        $inputsSecondary = page.locator(
          '.nhsuk-checkboxes__input[id^="colour-secondary"]'
        )

        $inputsOther = page.locator(
          '.nhsuk-checkboxes__input[id^="colour-other"]'
        )
      })

      test('none checkbox unchecks other checkboxes in other groups', async () => {
        // Check some checkboxes in the first and second groups
        await $inputsPrimary.nth(2).click()
        await $inputsSecondary.nth(1).click()

        // Check the "none" option in the third group
        await $inputsOther.nth(1).click()

        // Expect the checkboxes in the first and second groups to be unchecked
        await expect($inputsPrimary.nth(2)).not.toBeChecked()
        await expect($inputsSecondary.nth(1)).not.toBeChecked()
      })

      test('hides conditional content in other groups', async ({ page }) => {
        const $conditionalPrimary = page.locator(
          `[id="${await $inputsPrimary.nth(1).getAttribute('aria-controls')}"]`
        )

        // Check the second checkbox in the first group, which reveals additional content
        await $inputsPrimary.nth(1).click()

        // Assert that conditional content is revealed
        await expect($conditionalPrimary).toBeVisible()

        // Check the "none" option in the third group
        await $inputsOther.nth(1).click()

        // Assert that the second checkbox in the first group is unchecked
        await expect($inputsPrimary.nth(1)).not.toBeChecked()

        // Expect conditional content to have been collapsed
        await expect($conditionalPrimary).toBeHidden()
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
                const { Checkboxes } = await import('nhsuk-frontend')
                new Checkboxes($root)
              }
            })
          ).rejects.toThrow(
            'InitError: nhsuk-checkboxes: Root element (`$root`) already initialised'
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
            'ElementError: nhsuk-checkboxes: Root element (`$root`) not found'
          )
        })

        test('throws when receiving the wrong type for $root', async ({
          page
        }) => {
          await expect(
            initExample(page, 'default', {
              beforeInitialisation($root) {
                // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
                $root.outerHTML = `<svg data-module="nhsuk-checkboxes"></svg>`
              }
            })
          ).rejects.toThrow(
            'ElementError: nhsuk-checkboxes: Root element (`$root`) is not of type HTMLElement'
          )
        })

        test('throws when the input list is empty', async ({ page }) => {
          await expect(
            initExample(page, 'default', {
              beforeInitialisation($root, { selector }) {
                $root
                  .querySelectorAll(selector)
                  .forEach((item) => item.remove())
              },
              context: {
                selector: '.nhsuk-checkboxes__item'
              }
            })
          ).rejects.toThrow(
            'ElementError: nhsuk-checkboxes: Form inputs (`<input type="checkbox">`) not found'
          )
        })

        test('throws when a conditional target element is not found', async ({
          page
        }) => {
          await expect(
            initExample(page, 'with conditional content', {
              beforeInitialisation($root, { selector }) {
                $root.querySelector(selector)?.remove()
              },
              context: {
                selector: '.nhsuk-checkboxes__conditional'
              }
            })
          ).rejects.toThrow(
            'ElementError: nhsuk-checkboxes: Conditional reveal (`id="conditional-conditional"`) not found'
          )
        })
      })
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
