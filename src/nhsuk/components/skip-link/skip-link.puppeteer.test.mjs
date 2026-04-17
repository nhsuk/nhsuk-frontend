import { getAttribute, render } from '@nhsuk/frontend-helpers/puppeteer.mjs'

import { examples } from './fixtures.mjs'

describe('Skip link', () => {
  /** @type {ElementHandle<HTMLElement>} */
  let $main

  /**
   * @template {object} HandlerContext
   * @param {keyof typeof examples} example
   * @param {BrowserRenderOptions<HandlerContext>} [browserOptions] - Puppeteer browser render options
   */
  async function initExample(example, browserOptions) {
    await render(page, 'skip-link', examples[example], browserOptions)

    $main = /** @type {ElementHandle<HTMLElement>} */ (
      await page.$('#maincontent')
    )
  }

  describe('Focus handling', () => {
    beforeAll(async () => {
      await initExample('default')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
    })

    it('focuses the linked element', async () => {
      const activeElementId = await page.evaluate(
        () => document.activeElement?.id
      )

      expect(activeElementId).toBe(await getAttribute($main, 'id'))
    })

    it('adds the tabindex attribute to the linked element', async () => {
      expect(await getAttribute($main, 'tabindex')).toBe('-1')
    })

    it('adds the class for removing the native focus style to the linked element', async () => {
      expect(await getAttribute($main, 'class')).toContain(
        'nhsuk-skip-link-focused-element'
      )
    })

    it('removes the tabindex attribute from the linked element on blur', async () => {
      await $main.evaluate(($el) => $el.blur())

      expect(await getAttribute($main, 'tabindex')).toBeNull()
    })

    it('removes the class for removing the native focus style from the linked element on blur', async () => {
      await $main.evaluate(($el) => $el.blur())

      expect(await getAttribute($main, 'class')).not.toContain(
        'nhsuk-skip-link-focused-element'
      )
    })
  })

  describe('errors at instantiation', () => {
    it('can return early without errors for external href', () => {
      return expect(
        initExample('default', {
          context: {
            text: 'Exit this page',
            href: 'https://www.bbc.co.uk/weather'
          }
        })
      ).resolves.not.toThrow()
    })

    it('can return early without errors when linking to another page (without hash fragment)', () => {
      return expect(
        initExample('default', {
          context: {
            text: 'Exit this page',
            href: '/clear-session-data'
          }
        })
      ).resolves.not.toThrow()
    })

    it('can return early without errors when linking to another page (with hash fragment)', () => {
      return expect(
        initExample('default', {
          context: {
            text: 'Skip to main content',
            href: '/somewhere-else#main-content'
          }
        })
      ).resolves.not.toThrow()
    })

    it('can return early without errors when linking to the current page (with hash fragment)', () => {
      return expect(
        initExample('default', {
          context: {
            text: 'Skip to main content',
            href: '#maincontent'
          }
        })
      ).resolves.not.toThrow()
    })

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
            const { SkipLink } = await import('nhsuk-frontend')
            new SkipLink($root)
          }
        })
      ).rejects.toMatchObject({
        name: 'InitError',
        message: 'nhsuk-skip-link: Root element (`$root`) already initialised'
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
          message: 'nhsuk-skip-link: Root element (`$root`) not found'
        }
      })
    })

    it('throws when receiving the wrong type for $root', () => {
      return expect(
        initExample('default', {
          beforeInitialisation($root) {
            // Replace with an `<svg>` element which is not an `HTMLElement` in the DOM (but an `SVGElement`)
            $root.outerHTML = `<svg data-module="nhsuk-skip-link"></svg>`
          }
        })
      ).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-skip-link: Root element (`$root`) is not of type HTMLAnchorElement'
        }
      })
    })

    it('throws when the linked element is missing', () => {
      return expect(initExample('without link target')).rejects.toMatchObject({
        cause: {
          name: 'ElementError',
          message:
            'nhsuk-skip-link: Target content (`id="this-element-does-not-exist"`) not found'
        }
      })
    })

    it('throws when the href does not contain a hash', () => {
      return expect(initExample('without hash fragment')).rejects.toMatchObject(
        {
          cause: {
            name: 'ElementError',
            message:
              'nhsuk-skip-link: Target link (`href="/nhsuk-frontend/components/boilerplate/"`) hash fragment not found'
          }
        }
      )
    })
  })
})

/**
 * @import { BrowserRenderOptions } from '@nhsuk/frontend-helpers/puppeteer.mjs'
 * @import { ElementHandle } from 'puppeteer'
 */
