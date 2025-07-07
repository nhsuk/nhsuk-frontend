import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { SkipLink, initSkipLinks } from './skip-link.mjs'

const user = userEvent.setup()

describe('Skip link', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $main

  beforeEach(() => {
    document.body.innerHTML = `
      ${components.render('skip-link', {
        context: {
          href: '#maincontent',
          text: 'Skip to main content'
        }
      })}

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

    $main = document.querySelector('main')

    $root = getByRole(document.body, 'link', {
      name: 'Skip to main content'
    })

    jest.spyOn($root, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initSkipLinks()

      expect($root.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing skip link', () => {
      $root.remove()
      expect(() => initSkipLinks()).not.toThrow()
    })

    it('should not throw with missing main content', () => {
      $main.remove()
      expect(() => initSkipLinks()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initSkipLinks()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initSkipLinks({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new SkipLink($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new SkipLink($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      expect(() => new SkipLink()).toThrow(
        'SkipLink: Root element (`$root`) not found'
      )
    })

    it('should throw with wrong $root element type', () => {
      $root = document.createElement('div')

      expect(() => new SkipLink($root)).toThrow(
        'SkipLink: Root element (`$root`) is not of type HTMLAnchorElement'
      )
    })
  })

  describe('Focus handling', () => {
    beforeEach(async () => {
      initSkipLinks()

      await user.tab()
      await user.keyboard('[Enter]')
    })

    it('moves focus to the linked element', () => {
      expect($main).toHaveFocus()
      expect($main).toHaveAttribute('tabIndex', '-1')
      expect($main).toHaveClass('nhsuk-skip-link-focused-element')
    })

    it('adds the tabindex attribute to the linked element', () => {
      expect($main).toHaveAttribute('tabIndex', '-1')
    })

    it('adds the class for removing the native focus style to the linked element', async () => {
      expect($main).toHaveClass('nhsuk-skip-link-focused-element')
    })

    it('removes the tabindex attribute from the linked element on blur', async () => {
      $main.blur()

      expect($main).not.toHaveAttribute('tabIndex')
    })

    it('removes the class for removing the native focus style from the linked element on blur', async () => {
      $main.blur()

      expect($main).not.toHaveClass('nhsuk-skip-link-focused-element')
    })
  })
})
