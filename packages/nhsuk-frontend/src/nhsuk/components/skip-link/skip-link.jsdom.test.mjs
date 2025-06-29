import { components } from '@nhsuk/frontend-lib'
import { getByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { initSkipLinks } from './skip-link.mjs'

const user = userEvent.setup()

describe('Skip link', () => {
  /** @type {HTMLElement} */
  let $main

  /** @type {HTMLAnchorElement} */
  let $skipLink

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

    $skipLink = getByRole(document.body, 'link', {
      name: 'Skip to main content'
    })

    jest.spyOn($skipLink, 'addEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initSkipLinks()

      expect($skipLink.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing skip link', () => {
      $skipLink.remove()
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
