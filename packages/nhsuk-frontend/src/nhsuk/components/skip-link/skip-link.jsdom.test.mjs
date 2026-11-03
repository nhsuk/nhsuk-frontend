import { userEvent } from '@testing-library/user-event'

import { components } from '#lib'

import { examples } from './fixtures.mjs'
import { SkipLink } from './skip-link.mjs'

const user = userEvent.setup()

describe('Skip link', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $main

  beforeEach(() => {
    document.body.innerHTML = `
      ${components.render('skip-link', examples.default)}

      <div class="nhsuk-width-container">
        <main class="nhsuk-main-wrapper" id="maincontent">
          <div class="nhsuk-grid-row">
            <div class="nhsuk-grid-column-two-thirds">
              <p>To view the skip link component, press tab or navigate to the next element.</p>
            </div>
          </div>
        </main>
      </div>
    `

    $main = /** @type {HTMLElement} */ (document.querySelector('main'))

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${SkipLink.moduleName}"]`)
    )

    jest.spyOn($root, 'addEventListener')
  })

  describe('Initialisation via class', () => {
    it('should add event listeners', () => {
      new SkipLink($root)

      expect($root.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with $root element', () => {
      expect(() => new SkipLink($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new SkipLink($root)).toThrow(
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new SkipLink()).toThrow(
        `${SkipLink.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      $root = document.createElement('div')

      expect(() => new SkipLink($root)).toThrow(
        `${SkipLink.moduleName}: Root element (\`$root\`) is not of type HTMLAnchorElement`
      )
    })

    it('should not throw with missing skip link', () => {
      $root.remove()
      expect(() => new SkipLink($root)).not.toThrow()
    })

    it('should not throw with external URL', () => {
      $root.setAttribute('href', 'https://example.com')

      expect(() => new SkipLink($root)).not.toThrow(
        `${SkipLink.moduleName}: Target link (\`href="https://example.com"\`) hash fragment not found`
      )
    })

    it('should throw with empty hash fragment', () => {
      $root.setAttribute('href', '#')

      expect(() => new SkipLink($root)).toThrow(
        `${SkipLink.moduleName}: Target link (\`href="#"\`) hash fragment not found`
      )
    })

    it('should throw with missing main content', () => {
      $main.remove()

      expect(() => new SkipLink($root)).toThrow(
        `${SkipLink.moduleName}: Target content (\`id="maincontent"\`) not found`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new SkipLink($root)
        new SkipLink($root)
      }).toThrow(
        `${SkipLink.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Focus behaviour', () => {
    it('should focus the linked element on click', async () => {
      new SkipLink($root)

      await user.click($root)

      expect($main).toHaveFocus()
    })

    it('should add a focused-element class on click, and remove it on blur', async () => {
      new SkipLink($root)

      await user.click($root)
      expect($main).toHaveClass('nhsuk-skip-link-focused-element')

      $main.blur()
      expect($main).not.toHaveClass('nhsuk-skip-link-focused-element')
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      new SkipLink($root)
    })

    it('should add accessible name and role', () => {
      expect($root).toHaveAccessibleName('Skip to main content')
      expect($root).toHaveRole('link')
    })
  })
})
