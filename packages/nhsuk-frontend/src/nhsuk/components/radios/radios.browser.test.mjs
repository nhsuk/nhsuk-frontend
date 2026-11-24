import { goToExample, render } from '@nhsuk/frontend-helpers/playwright.mjs'
import { expect, test } from '@playwright/test'

import { examples } from './fixtures.mjs'
import { Radios } from './radios.mjs'

test.describe('Radios', () => {
  /** @type {Locator} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {Page} page - Playwright page object
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Playwright browser render options
   */
  async function initExample(page, example, browserOptions) {
    await render(page, 'radios', examples[example], browserOptions)

    $component = page.locator(`[data-module="${Radios.moduleName}"]`)
  }

  test.describe('input position', () => {
    // Check that the input sits above the label, enabling its proper detection
    // when exploring by touch or using automation tools like Selenium
    test('displays the input above the label', async ({ page }) => {
      await initExample(page, 'default')

      const $firstInput = page.locator('.nhsuk-radios__input').first()

      const { x, y, width, height } =
        /** @type {{ x: number, y: number, width: number, height: number }} */ (
          await $firstInput.boundingBox()
        )

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

          $inputs = $component.locator('.nhsuk-radios__input')
          $conditionals = $component.locator('.nhsuk-radios__conditional')
        })

        test('includes the expected number of inputs and conditionals', async () => {
          await expect($inputs).toHaveCount(3)
          await expect($conditionals).toHaveCount(3)
        })

        test('has no ARIA attributes applied', async () => {
          const $inputsWithAriaExpanded = $component.locator(
            '.nhsuk-radios__input[aria-expanded]'
          )

          const $inputsWithAriaControls = $component.locator(
            '.nhsuk-radios__input[aria-controls]'
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
          await initExample(page, 'with pre-checked value')

          $inputs = $component.locator('.nhsuk-radios__input')
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
          const $input = $inputs.last() // Last input, unchecked
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

          $inputs = $component.locator('.nhsuk-radios__input')
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

          // Stays revealed (unlike checkboxes)
          await $input.click()

          await expect($input).toBeChecked()
          await expect($input).toHaveAttribute('aria-expanded', 'true')
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

          // Stays revealed (unlike checkboxes)
          await $input.click()

          await expect($input).toBeChecked()
          await expect($conditional).toBeVisible()
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

          // Stays revealed (unlike checkboxes)
          await page.keyboard.press('Space')

          await expect($input).toBeChecked()
          await expect($conditional).toBeVisible()
        })
      })

      test.describe('with conditional content with special characters', () => {
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

  test.describe('with multiple groups', () => {
    test.describe('when JavaScript is available', () => {
      /** @type {Locator} */
      let $inputsWarm

      /** @type {Locator} */
      let $inputsCool

      /** @type {Locator} */
      let $inputsNotInForm

      test.beforeEach(async ({ page }) => {
        await goToExample(page, 'multiple-radio-groups')

        $inputsWarm = page.locator('.nhsuk-radios__input[id^="warm"]')
        $inputsCool = page.locator('.nhsuk-radios__input[id^="cool"]')

        $inputsNotInForm = page.locator(
          '.nhsuk-radios__input[id^="question-not-in-form"]'
        )
      })

      test('toggles conditional content in other groups', async ({ page }) => {
        const $conditionalWarm = page.locator(
          `[id="${await $inputsWarm.nth(0).getAttribute('aria-controls')}"]`
        )

        const $conditionalCool = page.locator(
          `[id="${await $inputsCool.nth(0).getAttribute('aria-controls')}"]`
        )

        // Select red in warm colours
        await $inputsWarm.nth(0).click()

        await expect($conditionalWarm).toBeVisible()
        await expect($conditionalCool).toBeHidden()

        // Select blue in cool colours
        await $inputsCool.nth(0).click()

        await expect($conditionalWarm).toBeHidden()
        await expect($conditionalCool).toBeVisible()
      })

      test('toggles conditional content when not in a form', async ({
        page
      }) => {
        const $conditionalWarm = page.locator(
          `[id="${await $inputsWarm.nth(0).getAttribute('aria-controls')}"]`
        )

        // Select first input in radios not in a form
        await $inputsNotInForm.nth(0).click()

        await expect($conditionalWarm).toBeHidden()
      })
    })
  })

  test.describe('with multiple groups and conditional content', () => {
    test.describe('when JavaScript is available', () => {
      /** @type {Locator} */
      let $inputsPrimary

      /** @type {Locator} */
      let $inputsOther

      test.beforeEach(async ({ page }) => {
        await goToExample(page, 'conditional-reveals')

        $inputsPrimary = page.locator(
          '.nhsuk-radios__input[id^="fave-primary"]'
        )

        $inputsOther = page.locator('.nhsuk-radios__input[id^="fave-other"]')
      })

      test('hides conditional content in other groups', async ({ page }) => {
        const $conditionalPrimary = page.locator(
          `[id="${await $inputsPrimary.nth(1).getAttribute('aria-controls')}"]`
        )

        // Choose the second radio in the first group, which reveals additional content
        await $inputsPrimary.nth(1).click()

        // Assert that conditional content is revealed
        await expect($conditionalPrimary).toBeVisible()

        // Choose a different radio with the same name, but in a different group
        await $inputsOther.nth(1).click()

        // Expect conditional content to have been collapsed
        await expect($conditionalPrimary).toBeHidden()
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
            const { Radios } = await import('nhsuk-frontend')
            new Radios($root)
          }
        })
      ).rejects.toThrow(
        'InitError: nhsuk-radios: Root element (`$root`) already initialised'
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
        'ElementError: nhsuk-radios: Root element (`$root`) not found'
      )
    })

    test('throws when receiving the wrong type for $root', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-radios"></svg>`
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-radios: Root element (`$root`) is not of type HTMLElement'
      )
    })

    test('throws when the input list is empty', async ({ page }) => {
      await expect(
        initExample(page, 'default', {
          beforeInitialisation($root, { selector }) {
            $root.querySelectorAll(selector).forEach((item) => item.remove())
          },
          context: {
            selector: '.nhsuk-radios__item'
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-radios: Form inputs (`<input type="radio">`) not found'
      )
    })

    test('throws when a conditional target element is not found', async ({
      page
    }) => {
      await expect(
        initExample(page, 'with conditional content', {
          beforeInitialisation($root) {
            $root.querySelector('.nhsuk-radios__conditional')?.remove()
          }
        })
      ).rejects.toThrow(
        'ElementError: nhsuk-radios: Conditional reveal (`id="conditional-conditional"`) not found'
      )
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/playwright.mjs'
 * @import { Locator, Page } from '@playwright/test'
 */
