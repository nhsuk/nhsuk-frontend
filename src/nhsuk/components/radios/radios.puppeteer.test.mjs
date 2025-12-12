import {
  goToExample,
  getAttribute,
  getProperty,
  isVisible,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Radios', () => {
  describe('input position', () => {
    // Check that the input sits above the label, enabling its proper detection
    // when exploring by touch or using automation tools like Selenium
    it('displays the input above the label', async () => {
      await render(page, 'radios', examples.default)

      const $firstInput = await page.$('.nhsuk-radios__input')

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

        beforeAll(async () => {
          await render(page, 'radios', examples['with conditional content'])

          $component = await page.$('.nhsuk-radios')
          $inputs = await $component.$$('.nhsuk-radios__input')
          $conditionals = await $component.$$('.nhsuk-radios__conditional')
        })

        it('includes the expected number of inputs and conditionals', () => {
          expect($inputs).toHaveLength(3)
          expect($conditionals).toHaveLength(3)
        })

        it('has ARIA attributes applied', async () => {
          const $inputsWithAriaExpanded = await $component.$$(
            '.nhsuk-radios__input[aria-expanded]'
          )
          const $inputsWithAriaControls = await $component.$$(
            '.nhsuk-radios__input[aria-controls]'
          )

          expect($inputsWithAriaExpanded).toHaveLength(0)
          expect($inputsWithAriaControls).toHaveLength(3)
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

        beforeEach(async () => {
          await render(page, 'radios', examples['with pre-checked value'])

          $component = await page.$('.nhsuk-radios')
          $inputs = await $component.$$('.nhsuk-radios__input')
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
          const $input = $inputs[$inputs.length - 1] // Last input, unchecked
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
          await render(page, 'radios', examples['with conditional content'])

          $component = await page.$('.nhsuk-radios')
          $inputs = await $component.$$('.nhsuk-radios__input')
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

          // Stays revealed (unlike checkboxes)
          await $input.click()

          expect(await getProperty($input, 'checked')).toBe(true)
          expect(await getAttribute($input, 'aria-expanded')).toBe('true')
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

          // Stays revealed (unlike checkboxes)
          await $input.click()

          expect(await getProperty($input, 'checked')).toBe(true)
          expect(await isVisible($conditional)).toBe(true)
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

          // Stays revealed (unlike checkboxes)
          await page.keyboard.press('Space')

          expect(await getProperty($input, 'checked')).toBe(true)
          expect(await isVisible($conditional)).toBe(true)
        })
      })

      describe('with conditional content with special characters', () => {
        it('does not error when ID of revealed content contains special characters', async () => {
          return expect(
            render(
              page,
              'radios',
              examples['with conditional content, special characters']
            )
          ).resolves.not.toThrow()
        })
      })
    })
  })

  describe('with multiple groups', () => {
    describe('when JavaScript is available', () => {
      /** @type {ElementHandle[]} */
      let $inputsWarm

      /** @type {ElementHandle[]} */
      let $inputsCool

      /** @type {ElementHandle[]} */
      let $inputsNotInForm

      beforeEach(async () => {
        await goToExample(page, 'multiple-radio-groups')

        $inputsWarm = await page.$$('.nhsuk-radios__input[id^="warm"]')
        $inputsCool = await page.$$('.nhsuk-radios__input[id^="cool"]')
        $inputsNotInForm = await page.$$(
          '.nhsuk-radios__input[id^="question-not-in-form"]'
        )
      })

      it('toggles conditional content in other groups', async () => {
        const $conditionalWarm = await page.$(
          `[id="${await getAttribute($inputsWarm[0], 'aria-controls')}"]`
        )
        const $conditionalCool = await page.$(
          `[id="${await getAttribute($inputsCool[0], 'aria-controls')}"]`
        )

        // Select red in warm colours
        await $inputsWarm[0].click()

        expect(await isVisible($conditionalWarm)).toBe(true)
        expect(await isVisible($conditionalCool)).toBe(false)

        // Select blue in cool colours
        await $inputsCool[0].click()

        expect(await isVisible($conditionalWarm)).toBe(false)
        expect(await isVisible($conditionalCool)).toBe(true)
      })

      it('toggles conditional content when not in a form', async () => {
        const $conditionalWarm = await page.$(
          `[id="${await getAttribute($inputsWarm[0], 'aria-controls')}"]`
        )

        // Select first input in radios not in a form
        await $inputsNotInForm[0].click()

        expect(await isVisible($conditionalWarm)).toBe(false)
      })
    })
  })

  describe('with multiple groups and conditional content', () => {
    describe('when JavaScript is available', () => {
      /** @type {ElementHandle[]} */
      let $inputsPrimary

      /** @type {ElementHandle[]} */
      let $inputsOther

      beforeEach(async () => {
        await goToExample(page, 'conditional-reveals')

        $inputsPrimary = await page.$$(
          '.nhsuk-radios__input[id^="fave-primary"]'
        )
        $inputsOther = await page.$$('.nhsuk-radios__input[id^="fave-other"]')
      })

      it('hides conditional content in other groups', async () => {
        const $conditionalPrimary = await page.$(
          `[id="${await getAttribute($inputsPrimary[1], 'aria-controls')}"]`
        )

        // Choose the second radio in the first group, which reveals additional content
        await $inputsPrimary[1].click()

        // Assert that conditional content is revealed
        expect(await isVisible($conditionalPrimary)).toBe(true)

        // Choose a different radio with the same name, but in a different group
        await $inputsOther[1].click()

        // Expect conditional content to have been collapsed
        expect(await isVisible($conditionalPrimary)).toBe(false)
      })
    })
  })

  describe('errors at instantiation', () => {
    it('can throw a SupportError if appropriate', async () => {
      await expect(
        render(page, 'radios', examples.default, {
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
        render(page, 'radios', examples.default, {
          async afterInitialisation($root) {
            const { Radios } = await import('nhsuk-frontend')
            new Radios($root)
          }
        })
      ).rejects.toMatchObject({
        name: 'InitError',
        message: 'nhsuk-radios: Root element (`$root`) already initialised'
      })
    })

    it('throws when $root is not set', async () => {
      await expect(
        render(page, 'radios', examples.default, {
          beforeInitialisation($root) {
            $root.remove()
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message: 'nhsuk-radios: Root element (`$root`) not found'
        }
      })
    })

    it('throws when receiving the wrong type for $root', async () => {
      await expect(
        render(page, 'radios', examples.default, {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-radios"></svg>`
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-radios: Root element (`$root`) is not of type HTMLElement'
        }
      })
    })

    it('throws when the input list is empty', async () => {
      await expect(
        render(page, 'radios', examples.default, {
          beforeInitialisation($root, { selector }) {
            $root.querySelectorAll(selector).forEach((item) => item.remove())
          },
          context: {
            selector: '.nhsuk-radios__item'
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-radios: Form inputs (`<input type="radio">`) not found'
        }
      })
    })

    it('throws when a conditional target element is not found', async () => {
      await expect(
        render(page, 'radios', examples['with conditional content'], {
          beforeInitialisation($root) {
            $root.querySelector('.nhsuk-radios__conditional').remove()
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-radios: Conditional reveal (`id="conditional-conditional"`) not found'
        }
      })
    })
  })
})

/**
 * @import { ElementHandle } from 'puppeteer'
 */
