import { getProperty, render } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { Button } from './button.mjs'
import { examples } from './fixtures.mjs'

describe('Button', () => {
  /** @type {ElementHandle<HTMLElement>} */
  let $component

  const clickTimeoutTime = 1000 // ms

  // The longest possible time a button will ignore unintentional clicks for
  // until it can be clicked again (+ 100ms to stay outside the total wait time)
  const debouncedWaitTime = clickTimeoutTime + 100

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'button', examples[example], browserOptions)

    $component = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$(`[data-module="${Button.moduleName}"]`)
    )
  }

  describe('Button as a link', () => {
    beforeEach(async () => {
      await initExample('as a link')
    })

    it('triggers the click event when the space key is pressed', async () => {
      const $button = /** @type {ElementHandle<HTMLAnchorElement>} */ (
        await page.$('a.nhsuk-button')
      )

      await $button.focus()

      // we need to start the waitForNavigation() before the keyboard action
      // so we return a promise that is fulfilled when the navigation and the keyboard action are
      // respectively fulfilled
      // this is somewhat counter intuitive, as we humans expect to act and then wait for something.
      await Promise.all([
        page.waitForNavigation(),
        page.keyboard.press('Space')
      ])

      const href = await getProperty($button, 'href')

      expect(href).toBe(page.url())
    })
  })

  describe('preventing double clicks', () => {
    /**
     * Sets the number of times a button was clicked
     *
     * @param {ElementHandle<HTMLElement> | null} [$button] - Puppeteer button element
     * @returns {Promise<ElementHandle<HTMLElement>>} Puppeteer button element
     */
    async function setButtonTracking($button = $component) {
      if (!$button) {
        throw new TypeError('Button is not defined')
      }

      const counts = {
        click: 0,
        debounce: 0
      }

      // Track number of button clicks
      await $button.evaluate(
        ($el, counts) =>
          $el.addEventListener(
            'click',
            (event) => {
              counts.click++
              $el.dataset.clickCount = `${counts.click}`

              // Track number of button clicks that debounced
              event.preventDefault = () => {
                counts.debounce++
                $el.dataset.debounceCount = `${counts.debounce}`
              }

              // Add listener during capture phase to spy on event
            },
            { capture: true }
          ),
        counts
      )

      return $button
    }

    /**
     * Gets the number of times the button was clicked
     *
     * @param {ElementHandle<HTMLElement>} [$button] - Puppeteer button element
     * @returns {Promise<{ click: number; debounce: number; }>} Number of times the button was clicked
     */
    function getButtonTracking($button = $component) {
      return $button.evaluate(($el) => ({
        click: parseInt($el.dataset.clickCount ?? '0'),
        debounce: parseInt($el.dataset.debounceCount ?? '0')
      }))
    }

    describe('not enabled', () => {
      beforeEach(async () => {
        await initExample('default')
        await setButtonTracking()
      })

      it('does not prevent multiple submissions', async () => {
        await $component.click()
        await $component.click()

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(0)
      })
    })

    describe('using data-attributes', () => {
      beforeEach(async () => {
        await initExample('with double click prevented')
        await setButtonTracking()
      })

      it('prevents unintentional clicks', async () => {
        await $component.click({ count: 2 })

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(1)
      })

      it('does not prevent intentional multiple clicks', async () => {
        await $component.click({ count: 2, delay: debouncedWaitTime })

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(0)
      })

      it('does not prevent subsequent clicks on different buttons', async () => {
        $component.evaluate(($el) =>
          $el.parentNode?.appendChild($el.cloneNode(true))
        )

        // Locate original and cloned button
        const $button1 = await setButtonTracking(
          await page.$('button:nth-child(1)')
        )

        const $button2 = await setButtonTracking(
          await page.$('button:nth-child(2)')
        )

        await $button1.click({ count: 2 })
        await $button2.click()

        const button1Counts = await getButtonTracking($button1)
        const button2Counts = await getButtonTracking($button2)

        // 2nd click on button 1 prevented
        expect(button1Counts.click).toBe(2)
        expect(button1Counts.debounce).toBe(1)

        // 3rd click on button 2 not prevented
        expect(button2Counts.click).toBe(1)
        expect(button2Counts.debounce).toBe(0)
      })
    })

    describe('using JavaScript configuration', () => {
      beforeEach(async () => {
        await initExample('default', {
          config: {
            preventDoubleClick: true
          }
        })

        await setButtonTracking()
      })

      it('prevents unintentional clicks', async () => {
        await $component.click({ count: 2 })

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(1)
      })

      it('does not prevent intentional multiple clicks', async () => {
        await $component.click({ count: 2, delay: debouncedWaitTime })

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(0)
      })

      it('does not prevent subsequent clicks on different buttons', async () => {
        $component.evaluate(($el) =>
          $el.parentNode?.appendChild($el.cloneNode(true))
        )

        // Locate original and cloned button
        const $button1 = await setButtonTracking(
          await page.$('button:nth-child(1)')
        )

        const $button2 = await setButtonTracking(
          await page.$('button:nth-child(2)')
        )

        await $button1.click({ count: 2 })
        await $button2.click()

        const button1Counts = await getButtonTracking($button1)
        const button2Counts = await getButtonTracking($button2)

        // 2nd click on button 1 prevented
        expect(button1Counts.click).toBe(2)
        expect(button1Counts.debounce).toBe(1)

        // 3rd click on button 2 not prevented
        expect(button2Counts.click).toBe(1)
        expect(button2Counts.debounce).toBe(0)
      })
    })

    describe('using JavaScript configuration, but cancelled by data-attributes', () => {
      beforeEach(async () => {
        await initExample('with double click not prevented', {
          config: {
            preventDoubleClick: true
          }
        })

        await setButtonTracking()
      })

      it('does not prevent multiple clicks', async () => {
        await $component.click({ count: 2 })

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(0)
      })
    })

    describe('using `initAll`', () => {
      beforeEach(async () => {
        await initExample('default', {
          config: {
            preventDoubleClick: true
          }
        })

        await setButtonTracking()
      })

      it('prevents unintentional clicks', async () => {
        await $component.click({ count: 2 })

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(1)
      })

      it('does not prevent intentional multiple clicks', async () => {
        await $component.click({ count: 2, delay: debouncedWaitTime })

        const counts = await getButtonTracking()

        expect(counts.click).toBe(2)
        expect(counts.debounce).toBe(0)
      })

      it('does not prevent subsequent clicks on different buttons', async () => {
        $component.evaluate(($el) =>
          $el.parentNode?.appendChild($el.cloneNode(true))
        )

        // Locate original and cloned button
        const $button1 = await setButtonTracking(
          await page.$('button:nth-child(1)')
        )

        const $button2 = await setButtonTracking(
          await page.$('button:nth-child(2)')
        )

        await $button1.click({ count: 2 })
        await $button2.click()

        const button1Counts = await getButtonTracking($button1)
        const button2Counts = await getButtonTracking($button2)

        // 2nd click on button 1 prevented
        expect(button1Counts.click).toBe(2)
        expect(button1Counts.debounce).toBe(1)

        // 3rd click on button 2 not prevented
        expect(button2Counts.click).toBe(1)
        expect(button2Counts.debounce).toBe(0)
      })
    })

    describe('errors at instantiation', () => {
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
              const { Button } = await import('nhsuk-frontend')
              new Button($root)
            }
          })
        ).rejects.toMatchObject({
          name: 'InitError',
          message: 'nhsuk-button: Root element (`$root`) already initialised'
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
            message: 'nhsuk-button: Root element (`$root`) not found'
          }
        })
      })

      it('throws when receiving the wrong type for $root', () => {
        return expect(
          initExample('default', {
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
        ).rejects.toMatchObject({
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-button: Root element (`$root`) is not of type HTMLElement'
          }
        })
      })
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle } from 'puppeteer'
 */
