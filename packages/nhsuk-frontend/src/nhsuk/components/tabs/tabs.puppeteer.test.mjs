import { render } from '@nhsuk/frontend-helpers/puppeteer.mjs'
import { KnownDevices } from 'puppeteer'

import { examples } from './fixtures.mjs'

const iPhone = KnownDevices['iPhone 6']

describe('Tabs', () => {
  describe('when JavaScript is unavailable or fails', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
      await render(page, 'tabs', examples.default)
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('falls back to making all tab containers visible', async () => {
      const isContentVisible = await page.waitForSelector(
        '.nhsuk-tabs__panel',
        { visible: true, timeout: 1000 }
      )
      expect(isContentVisible).toBeTruthy()
    })
  })

  describe('when JavaScript is available', () => {
    beforeAll(async () => {
      await render(page, 'tabs', examples.default)
    })

    it('should indicate the open state of the first tab', async () => {
      const firstTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab')
          .getAttribute('aria-selected')
      )
      expect(firstTabAriaSelected).toBe('true')

      const firstTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__list-item:first-child')
            .className
      )
      expect(firstTabClasses).toContain('nhsuk-tabs__list-item--selected')
    })

    it('should display the first tab panel', async () => {
      const tabPanelIsHidden = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs > .nhsuk-tabs__panel')
          .classList.contains('nhsuk-tabs__panel--hidden')
      )
      expect(tabPanelIsHidden).toBeFalsy()
    })

    it('should hide all the tab panels except for the first one', async () => {
      const tabPanelIsHidden = await page.evaluate(() =>
        document.body
          .querySelector(
            '.nhsuk-tabs > .nhsuk-tabs__panel ~ .nhsuk-tabs__panel'
          )
          .classList.contains('nhsuk-tabs__panel--hidden')
      )
      expect(tabPanelIsHidden).toBeTruthy()
    })
  })

  describe('when a tab is pressed', () => {
    beforeEach(async () => {
      await render(page, 'tabs', examples.default)
    })

    it('should indicate the open state of the pressed tab', async () => {
      // Click the second tab
      await page.click('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')

      const secondTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-selected')
      )
      expect(secondTabAriaSelected).toBe('true')

      const secondTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__list-item:nth-child(2)')
            .className
      )
      expect(secondTabClasses).toContain('nhsuk-tabs__list-item--selected')
    })

    it('should display the tab panel associated with the selected tab', async () => {
      // Click the second tab
      await page.click('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')

      const secondTabPanelIsHidden = await page.evaluate(() => {
        const secondTabAriaControls = document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-controls')
        return document.body
          .querySelector(`[id="${secondTabAriaControls}"]`)
          .classList.contains('nhsuk-tabs__panel--hidden')
      })
      expect(secondTabPanelIsHidden).toBeFalsy()
    })

    describe('when the tab contains a DOM element', () => {
      beforeAll(async () => {
        await render(page, 'tabs', examples.default)
      })

      it('should display the tab panel associated with the selected tab', async () => {
        await page.evaluate(() => {
          // Replace contents of second tab with a DOM element
          const secondTab = document.body.querySelector(
            '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
          )
          secondTab.innerHTML = '<span>Past week</span>'
        })

        // Click the DOM element inside the second tab
        await page.click(
          '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab span'
        )

        const secondTabPanelIsHidden = await page.evaluate(() => {
          const secondTabAriaControls = document.body
            .querySelector(
              '.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab'
            )
            .getAttribute('aria-controls')
          return document.body
            .querySelector(`[id="${secondTabAriaControls}"]`)
            .classList.contains('nhsuk-tabs__panel--hidden')
        })
        expect(secondTabPanelIsHidden).toBeFalsy()
      })
    })
  })

  describe('when first tab is focused and the right arrow key is pressed', () => {
    beforeEach(async () => {
      await render(page, 'tabs', examples.default)
    })

    it('should indicate the open state of the next tab', async () => {
      // Press right arrow when focused on the first tab
      await page.focus('.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab')
      await page.keyboard.press('ArrowRight')

      const secondTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-selected')
      )
      expect(secondTabAriaSelected).toBe('true')

      const secondTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__list-item:nth-child(2)')
            .className
      )
      expect(secondTabClasses).toContain('nhsuk-tabs__list-item--selected')
    })

    it('should display the tab panel associated with the selected tab', async () => {
      // Press right arrow
      await page.focus('.nhsuk-tabs__list-item:first-child .nhsuk-tabs__tab')
      await page.keyboard.down('ArrowRight')

      const secondTabPanelIsHidden = await page.evaluate(() => {
        const secondTabAriaControls = document.body
          .querySelector('.nhsuk-tabs__list-item:nth-child(2) .nhsuk-tabs__tab')
          .getAttribute('aria-controls')
        return document.body
          .querySelector(`[id="${secondTabAriaControls}"]`)
          .classList.contains('nhsuk-tabs__panel--hidden')
      })
      expect(secondTabPanelIsHidden).toBeFalsy()
    })
  })

  describe('when a hash associated with a tab panel is passed in the URL', () => {
    it('should indicate the open state of the associated tab', async () => {
      await render(page, 'tabs', examples.default)

      await page.evaluate(() => {
        window.location.hash = '#past-week'
      })

      const currentTabAriaSelected = await page.evaluate(() =>
        document.body
          .querySelector('.nhsuk-tabs__tab[href="#past-week"]')
          .getAttribute('aria-selected')
      )
      expect(currentTabAriaSelected).toBe('true')

      const currentTabClasses = await page.evaluate(
        () =>
          document.body.querySelector('.nhsuk-tabs__tab[href="#past-week"]')
            .parentElement.className
      )
      expect(currentTabClasses).toContain('nhsuk-tabs__list-item--selected')

      const currentTabPanelIsHidden = await page.evaluate(() =>
        document
          .getElementById('past-week')
          .classList.contains('nhsuk-tabs__panel--hidden')
      )
      expect(currentTabPanelIsHidden).toBeFalsy()
    })

    it('should only update based on hashes that are tabs', async () => {
      await render(page, 'tabs', examples['with anchor in panel'])

      await page.click('[href="#anchor"]')

      const activeElementId = await page.evaluate(
        () => document.activeElement.id
      )
      expect(activeElementId).toBe('anchor')
    })
  })

  describe('when rendered on a small device', () => {
    it('falls back to making the all tab containers visible', async () => {
      await page.emulate(iPhone)
      await render(page, 'tabs', examples.default)
      const isContentVisible = await page.waitForSelector(
        '.nhsuk-tabs__panel',
        { visible: true, timeout: 1000 }
      )
      expect(isContentVisible).toBeTruthy()
    })
  })

  describe('errors at instantiation', () => {
    it('can throw a SupportError if appropriate', async () => {
      await expect(
        render(page, 'tabs', examples.default, {
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
        render(page, 'tabs', examples.default, {
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

    it('throws when $root is not set', async () => {
      await expect(
        render(page, 'tabs', examples.default, {
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

    it('throws when there are no tabs', async () => {
      await expect(
        render(page, 'tabs', examples.default, {
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

    it('throws when the tab list is missing', async () => {
      await expect(
        render(page, 'tabs', examples.default, {
          beforeInitialisation($root, { selector }) {
            $root
              .querySelector(selector)
              .setAttribute('class', 'nhsuk-tabs__typo')
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

    it('throws when there the tab list is empty', async () => {
      await expect(
        render(page, 'tabs', examples.default, {
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
