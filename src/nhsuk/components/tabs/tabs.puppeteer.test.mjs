import {
  getAttribute,
  isVisible,
  render
} from '@nhsuk/frontend-helpers/puppeteer.mjs'
import { KnownDevices } from 'puppeteer'

import { examples } from './fixtures.mjs'
import { Tabs } from './tabs.mjs'

const iPhone = KnownDevices['iPhone 6']

describe('Tabs', () => {
  /** @type {ElementHandle<HTMLElement>} */
  let $component

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'tabs', examples[example], browserOptions)

    $component = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$(`[data-module="${Tabs.moduleName}"]`)
    )
  }

  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
      await initExample('default')
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('falls back to making all tab containers visible', async () => {
      const $firstPanel = await $component.$('.nhsuk-tabs__panel')

      expect(await isVisible($firstPanel)).toBe(true)
    })
  })

  describe('when JavaScript is available', () => {
    beforeAll(async () => {
      await initExample('default')
    })

    it('should indicate the open state of the first tab', async () => {
      const $firstItem = await $component.$(
        '.nhsuk-tabs__list-item:first-child'
      )
      const $firstTab = await $firstItem?.$('.nhsuk-tabs__tab')

      expect(await getAttribute($firstTab, 'aria-selected')).toBe('true')
      expect(await getAttribute($firstItem, 'class')).toContain(
        'nhsuk-tabs__list-item--selected'
      )
    })

    it('should display the first tab panel', async () => {
      const $firstPanel = await $component.$('.nhsuk-tabs__panel')

      expect(await getAttribute($firstPanel, 'class')).not.toContain(
        'nhsuk-tabs__panel--hidden'
      )
    })

    it('should hide all the tab panels except for the first one', async () => {
      const $otherPanels = await $component.$$(
        '.nhsuk-tabs__panel ~ .nhsuk-tabs__panel'
      )

      expect($otherPanels).toHaveLength(3)

      for (const $panel of $otherPanels) {
        expect(await getAttribute($panel, 'class')).toContain(
          'nhsuk-tabs__panel--hidden'
        )
      }
    })
  })

  describe('when a tab is pressed', () => {
    beforeEach(async () => {
      await initExample('default')
    })

    it('should indicate the open state of the pressed tab', async () => {
      const $secondListItem = await $component.$(
        '.nhsuk-tabs__list-item:nth-child(2)'
      )

      const $secondTab = await $secondListItem?.$('.nhsuk-tabs__tab')

      // Click the second tab
      await $secondTab?.click()

      expect(await getAttribute($secondTab, 'aria-selected')).toBe('true')
      expect(await getAttribute($secondListItem, 'class')).toContain(
        'nhsuk-tabs__list-item--selected'
      )
    })

    it('should display the tab panel associated with the selected tab', async () => {
      const $secondTab = await $component.$(
        '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
      )

      const $secondPanel = await $component.$(
        '.nhsuk-tabs__panel:nth-of-type(2)'
      )

      // Click the second tab
      await $secondTab?.click()

      expect(await getAttribute($secondPanel, 'id')).toBe(
        await getAttribute($secondTab, 'aria-controls')
      )

      expect(await getAttribute($secondPanel, 'class')).not.toContain(
        'nhsuk-tabs__panel--hidden'
      )
    })

    describe('when the tab contains a DOM element', () => {
      beforeAll(async () => {
        await initExample('default')
      })

      it('should display the tab panel associated with the selected tab', async () => {
        const $secondTab = await $component.$(
          '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
        )

        // Replace contents of second tab with a DOM element
        $secondTab?.evaluate(($el) => {
          $el.innerHTML = '<span>Past week</span>'
        })

        const secondPanelId = await getAttribute($secondTab, 'aria-controls')
        const $secondPanel = await $component.$(`#${secondPanelId}`)

        // Click the DOM element inside the second tab
        await $secondTab?.$('span').then(($el) => $el?.click())

        expect(await getAttribute($secondPanel, 'id')).toBe('past-week')
        expect(await getAttribute($secondPanel, 'class')).not.toContain(
          'nhsuk-tabs__panel--hidden'
        )
      })
    })
  })

  describe('when first tab is focused and the right arrow key is pressed', () => {
    beforeEach(async () => {
      await initExample('default')
    })

    it('should indicate the open state of the next tab', async () => {
      const $firstListItem = await $component.$(
        '.nhsuk-tabs__list-item:first-child'
      )

      const $secondListItem = await $component.$(
        '.nhsuk-tabs__list-item:nth-child(2)'
      )

      const $firstTab = await $firstListItem?.$('.nhsuk-tabs__tab')
      const $secondTab = await $secondListItem?.$('.nhsuk-tabs__tab')

      // Press right arrow when focused on the first tab
      await $firstTab?.focus()
      await page.keyboard.press('ArrowRight')

      expect(await getAttribute($secondTab, 'aria-selected')).toBe('true')
      expect(await getAttribute($secondListItem, 'class')).toContain(
        'nhsuk-tabs__list-item--selected'
      )
    })

    it('should display the tab panel associated with the selected tab', async () => {
      const $firstTab = await $component.$(
        '.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab'
      )

      const $secondTab = await $component.$(
        '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
      )

      const secondPanelId = await getAttribute($secondTab, 'aria-controls')
      const $secondPanel = await $component.$(`#${secondPanelId}`)

      // Press right arrow
      await $firstTab?.focus()
      await page.keyboard.down('ArrowRight')

      expect(await getAttribute($secondPanel, 'id')).toBe('past-week')
      expect(await getAttribute($secondPanel, 'class')).not.toContain(
        'nhsuk-tabs__panel--hidden'
      )
    })
  })

  describe('when a hash associated with a tab panel is passed in the URL', () => {
    it('should indicate the open state of the associated tab', async () => {
      await initExample('default')

      await page.evaluate(() => {
        window.location.hash = '#past-week'
      })

      const $currentTab = await $component.$(
        '.nhsuk-tabs__tab[href="#past-week"]'
      )
      const $currentItem = await $component.$(
        '.nhsuk-tabs__list-item:has(.nhsuk-tabs__tab[href="#past-week"])'
      )

      const currentPanelId = await getAttribute($currentTab, 'aria-controls')
      const $currentPanel = await $component.$(`#${currentPanelId}`)

      expect(await getAttribute($currentTab, 'aria-selected')).toBe('true')
      expect(await getAttribute($currentItem, 'class')).toContain(
        'nhsuk-tabs__list-item--selected'
      )

      expect(await getAttribute($currentPanel, 'id')).toBe('past-week')
      expect(await getAttribute($currentPanel, 'class')).not.toContain(
        'nhsuk-tabs__panel--hidden'
      )
    })

    it('should only update based on hashes that are tabs', async () => {
      await initExample('with anchor in panel')

      await page.click('[href="#anchor"]')

      const activeElementId = await page.evaluate(
        () => document.activeElement?.id
      )

      expect(activeElementId).toBe('anchor')
    })
  })

  describe('when rendered on a small device', () => {
    it('falls back to making the all tab containers visible', async () => {
      await page.emulate(iPhone)

      await initExample('default')

      const $firstPanel = await $component.$('.nhsuk-tabs__panel')

      expect(await isVisible($firstPanel)).toBe(true)
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
            const { Tabs } = await import('nhsuk-frontend')
            new Tabs($root)
          }
        })
      ).rejects.toMatchObject({
        name: 'InitError',
        message: 'nhsuk-tabs: Root element (`$root`) already initialised'
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
          message: 'nhsuk-tabs: Root element (`$root`) not found'
        }
      })
    })

    it('throws when there are no tabs', () => {
      return expect(
        initExample('default', {
          beforeInitialisation($root, { selector }) {
            $root.querySelectorAll(selector).forEach((item) => item.remove())
          },
          context: {
            selector: 'a.nhsuk-tabs__tab'
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message: 'nhsuk-tabs: Links (`<a class="nhsuk-tabs__tab">`) not found'
        }
      })
    })

    it('throws when the tab list is missing', () => {
      return expect(
        initExample('default', {
          beforeInitialisation($root, { selector }) {
            $root
              .querySelector(selector)
              ?.setAttribute('class', 'nhsuk-tabs__typo')
          },
          context: {
            selector: '.nhsuk-tabs__list'
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-tabs: List (`<ul class="nhsuk-tabs__list">`) not found'
        }
      })
    })

    it('throws when there the tab list is empty', () => {
      return expect(
        initExample('default', {
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
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-tabs: List items (`<li class="nhsuk-tabs__list-item">`) not found'
        }
      })
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle } from 'puppeteer'
 */
