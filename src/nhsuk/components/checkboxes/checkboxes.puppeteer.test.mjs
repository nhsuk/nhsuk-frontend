import {
  goToExample,
  getAttribute,
  getProperty,
  isVisible,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Checkboxes', () => {
  describe('input position', () => {
    // Check that the input sits above the label, enabling its proper detection
    // when exploring by touch or using automation tools like Selenium
    it('displays the input above the label', async () => {
      await render(page, 'checkboxes', examples.default)

      const $firstInput = await page.$('.nhsuk-checkboxes__input')

      const clickPosition = await $firstInput.clickablePoint()
      const elementTagNames = await page.evaluate(
        ({ x, y }) => document.elementsFromPoint(x, y).map((el) => el.tagName),
        clickPosition
      )
      expect(elementTagNames[0]).toBe('INPUT')
      expect(elementTagNames[1]).toBe('LABEL')
    })
  })

  describe('with conditional content', () => {
    describe('when JavaScript is unavailable or fails', () => {
      beforeAll(async () => {
        await page.setJavaScriptEnabled(false)
      })

      afterAll(async () => {
        await page.setJavaScriptEnabled(true)
      })

      describe('with conditional content', () => {
        /** @type {ElementHandle} */
        let $component

        /** @type {ElementHandle[]} */
        let $inputs

        /** @type {ElementHandle[]} */
        let $conditionals

        beforeEach(async () => {
          await render(page, 'checkboxes', examples['with conditional content'])

          $component = await page.$('.nhsuk-checkboxes')
          $inputs = await $component.$$('.nhsuk-checkboxes__input')
          $conditionals = await $component.$$('.nhsuk-checkboxes__conditional')
        })

        it('includes the expected number of inputs and conditionals', () => {
          expect($inputs).toHaveLength(3)
          expect($conditionals).toHaveLength(3)
        })

        it('has no ARIA attributes applied', async () => {
          const $inputsWithAriaExpanded = await $component.$$(
            '.nhsuk-checkboxes__input[aria-expanded]'
          )
          const $inputsWithAriaControls = await $component.$$(
            '.nhsuk-checkboxes__input[aria-controls]'
          )

          expect($inputsWithAriaExpanded).toHaveLength(0)
          expect($inputsWithAriaControls).toHaveLength(0)
        })

        it('falls back to making all conditional content visible', async () => {
          return Promise.all(
            $conditionals.map(async ($conditional) => {
              return expect(await isVisible($conditional)).toBe(true)
            })
          )
        })
      })
    })

    describe('when JavaScript is available', () => {
      describe('with conditional item checked', () => {
        /** @type {ElementHandle} */
        let $component

        /** @type {ElementHandle[]} */
        let $inputs

        beforeAll(async () => {
          await render(page, 'checkboxes', examples['with pre-checked values'])

          $component = await page.$('.nhsuk-checkboxes')
          $inputs = await $component.$$('.nhsuk-checkboxes__input')
        })

        it('has conditional content revealed that is associated with a checked input', async () => {
          const $input = $inputs[0] // First input, checked
          const $conditional = await $component.$(
            `[id="${await getAttribute($input, 'aria-controls')}"]`
          )

          expect(await getProperty($input, 'checked')).toBe(true)
          expect(await isVisible($conditional)).toBe(true)
        })

        it('has no conditional content revealed that is associated with an unchecked input', async () => {
          const $input = $inputs[1] // second input, unchecked
          const $conditional = await $component.$(
            `[id="${await getAttribute($input, 'aria-controls')}"]`
          )

          expect(await getProperty($input, 'checked')).toBe(false)
          expect(await isVisible($conditional)).toBe(false)
        })
      })

      describe('with conditional content', () => {
        /** @type {ElementHandle} */
        let $component

        /** @type {ElementHandle[]} */
        let $inputs

        beforeEach(async () => {
          await render(page, 'checkboxes', examples['with conditional content'])

          $component = await page.$('.nhsuk-checkboxes')
          $inputs = await $component.$$('.nhsuk-checkboxes__input')
        })

        it('indicates when conditional content is collapsed or revealed', async () => {
          const $input = $inputs[0] // First input, with conditional content

          // Initially collapsed
          expect(await getProperty($input, 'checked')).toBe(false)
          expect(await getAttribute($input, 'aria-expanded')).toBe('false')

          // Toggle revealed
          await $input.click()

          expect(await getProperty($input, 'checked')).toBe(true)
          expect(await getAttribute($input, 'aria-expanded')).toBe('true')

          // Toggle collapsed
          await $input.click()

          expect(await getProperty($input, 'checked')).toBe(false)
          expect(await getAttribute($input, 'aria-expanded')).toBe('false')
        })

        it('toggles the conditional content when clicking an input', async () => {
          const $input = $inputs[0] // First input, with conditional content
          const $conditional = await $component.$(
            `[id="${await getAttribute($input, 'aria-controls')}"]`
          )

          // Initially collapsed
          expect(await getProperty($input, 'checked')).toBe(false)
          expect(await isVisible($conditional)).toBe(false)

          // Toggle revealed
          await $input.click()

          expect(await getProperty($input, 'checked')).toBe(true)
          expect(await isVisible($conditional)).toBe(true)

          // Toggle collapsed
          await $input.click()

          expect(await getProperty($input, 'checked')).toBe(false)
          expect(await isVisible($conditional)).toBe(false)
        })

        it('toggles the conditional content when using an input with a keyboard', async () => {
          const $input = $inputs[0] // First input, with conditional content
          const $conditional = await $component.$(
            `[id="${await getAttribute($input, 'aria-controls')}"]`
          )

          // Initially collapsed
          expect(await getProperty($input, 'checked')).toBe(false)
          expect(await isVisible($conditional)).toBe(false)

          // Toggle revealed
          await $input.focus()
          await page.keyboard.press('Space')

          expect(await getProperty($input, 'checked')).toBe(true)
          expect(await isVisible($conditional)).toBe(true)

          // Toggle collapsed
          await page.keyboard.press('Space')

          expect(await getProperty($input, 'checked')).toBe(false)
          expect(await isVisible($conditional)).toBe(false)
        })
      })

      describe('with conditional content, special characters', () => {
        it('does not error when ID of revealed content contains special characters', async () => {
          return expect(
            render(
              page,
              'checkboxes',
              examples['with conditional content, special characters']
            )
          ).resolves.not.toThrow()
        })
      })
    })
  })

  describe('with a "none of the above" option', () => {
    describe('when JavaScript is available', () => {
      /** @type {ElementHandle} */
      let $component

      /** @type {ElementHandle[]} */
      let $inputs

      beforeEach(async () => {
        await render(
          page,
          'checkboxes',
          examples['with "none of the above" option']
        )

        $component = await page.$('.nhsuk-checkboxes')
        $inputs = await $component.$$('.nhsuk-checkboxes__input')
      })

      it('unchecks other checkboxes when the "none of the above" option is checked', async () => {
        // Check the first 3 checkboxes
        await $inputs[0].click()
        await $inputs[1].click()
        await $inputs[2].click()

        // Check the "none of the above" option
        await $inputs[3].click()

        // Expect first 3 checkboxes to have been unchecked
        expect(await getProperty($inputs[0], 'checked')).toBe(false)
        expect(await getProperty($inputs[1], 'checked')).toBe(false)
        expect(await getProperty($inputs[2], 'checked')).toBe(false)
      })

      it('unchecks the "none of the above" option when any other checkbox is checked', async () => {
        // Check the "none of the above" option
        await $inputs[3].click()

        // Check the first checkbox
        await $inputs[0].click()

        // Expect the "none of the above" option to have been unchecked
        expect(await getProperty($inputs[3], 'checked')).toBe(false)
      })
    })
  })

  describe('with a "none of the above" option and conditional content', () => {
    describe('when JavaScript is available', () => {
      /** @type {ElementHandle} */
      let $component

      /** @type {ElementHandle[]} */
      let $inputs

      beforeEach(async () => {
        await render(
          page,
          'checkboxes',
          examples['with "none of the above" option, conditional content']
        )

        $component = await page.$('.nhsuk-checkboxes')
        $inputs = await $component.$$('.nhsuk-checkboxes__input')
      })

      it('unchecks other checkboxes and hides conditional content when the "none of the above" option is checked', async () => {
        const $input = $inputs[2]
        const $conditional = await $component.$(
          `[id="${await getAttribute($input, 'aria-controls')}"]`
        )

        // Check the "Text message" checkbox
        await $inputs[2].click()

        // Expect conditional content to have been revealed
        expect(await isVisible($conditional)).toBe(true)

        // Check the "none of the above" option
        await $inputs[3].click()

        // Expect the "Text message" checkbox to have been unchecked
        expect(await getProperty($inputs[2], 'checked')).toBe(false)

        // Expect conditional content to have been collapsed
        expect(await isVisible($conditional)).toBe(false)
      })
    })
  })

  describe('with multiple groups and a "none of the above" option and conditional content', () => {
    describe('when JavaScript is available', () => {
      /** @type {ElementHandle[]} */
      let $inputsPrimary

      /** @type {ElementHandle[]} */
      let $inputsSecondary

      /** @type {ElementHandle[]} */
      let $inputsOther

      beforeEach(async () => {
        await goToExample(page, 'conditional-reveals')

        $inputsPrimary = await page.$$(
          '.nhsuk-checkboxes__input[id^="colour-primary"]'
        )
        $inputsSecondary = await page.$$(
          '.nhsuk-checkboxes__input[id^="colour-secondary"]'
        )
        $inputsOther = await page.$$(
          '.nhsuk-checkboxes__input[id^="colour-other"]'
        )
      })

      it('none checkbox unchecks other checkboxes in other groups', async () => {
        // Check some checkboxes in the first and second groups
        await $inputsPrimary[2].click()
        await $inputsSecondary[1].click()

        // Check the "none of the above" option in the third group
        await $inputsOther[1].click()

        // Expect the checkboxes in the first and second groups to be unchecked
        expect(await getProperty($inputsPrimary[2], 'checked')).toBe(false)
        expect(await getProperty($inputsSecondary[1], 'checked')).toBe(false)
      })

      it('hides conditional content in other groups', async () => {
        const $conditionalPrimary = await page.$(
          `[id="${await getAttribute($inputsPrimary[1], 'aria-controls')}"]`
        )

        // Check the second checkbox in the first group, which reveals additional content
        await $inputsPrimary[1].click()

        // Assert that conditional content is revealed
        expect(await isVisible($conditionalPrimary)).toBe(true)

        // Check the "none of the above" option in the third group
        await $inputsOther[1].click()

        // Assert that the second checkbox in the first group is unchecked
        expect(await getProperty($inputsPrimary[1], 'checked')).toBe(false)

        // Expect conditional content to have been collapsed
        expect(await isVisible($conditionalPrimary)).toBe(false)
      })

      describe('errors at instantiation', () => {
        it('can throw a SupportError if appropriate', async () => {
          await expect(
            render(page, 'checkboxes', examples.default, {
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

        it('throws when initialised twice', async () => {
          await expect(
            render(page, 'checkboxes', examples.default, {
              async afterInitialisation($root) {
                const { Checkboxes } = await import('nhsuk-frontend')
                new Checkboxes($root)
              }
            })
          ).rejects.toMatchObject({
            name: 'InitError',
            message:
              'nhsuk-checkboxes: Root element (`$root`) already initialised'
          })
        })

        it('throws when $root is not set', async () => {
          await expect(
            render(page, 'checkboxes', examples.default, {
              beforeInitialisation($root) {
                $root.remove()
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message: 'nhsuk-checkboxes: Root element (`$root`) not found'
            }
          })
        })

        it('throws when receiving the wrong type for $root', async () => {
          await expect(
            render(page, 'checkboxes', examples.default, {
              beforeInitialisation($root) {
                // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
                $root.outerHTML = `<svg data-module="nhsuk-checkboxes"></svg>`
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message:
                'nhsuk-checkboxes: Root element (`$root`) is not of type HTMLElement'
            }
          })
        })

        it('throws when the input list is empty', async () => {
          await expect(
            render(page, 'checkboxes', examples.default, {
              beforeInitialisation($root, { selector }) {
                $root
                  .querySelectorAll(selector)
                  .forEach((item) => item.remove())
              },
              context: {
                selector: '.nhsuk-checkboxes__item'
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message:
                'nhsuk-checkboxes: Form inputs (`<input type="checkbox">`) not found'
            }
          })
        })

        it('throws when a conditional target element is not found', async () => {
          await expect(
            render(page, 'checkboxes', examples['with conditional content'], {
              beforeInitialisation($root, { selector }) {
                $root.querySelector(selector).remove()
              },
              context: {
                selector: '.nhsuk-checkboxes__conditional'
              }
            })
          ).rejects.toMatchObject({
            cause: {
              name: 'ElementError',
              message:
                'nhsuk-checkboxes: Conditional reveal (`id="conditional-conditional"`) not found'
            }
          })
        })
      })
    })
  })
})

/**
 * @import { ElementHandle } from 'puppeteer'
 */
