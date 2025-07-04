import { components } from '@nhsuk/frontend-lib'
import { getByRole, getAllByRole } from '@testing-library/dom'
import { outdent } from 'outdent'

import { Tabs, initTabs } from './tabs.mjs'

describe('Tabs', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLUListElement} */
  let $list

  /** @type {HTMLLIElement[]} */
  let $listItems

  /** @type {HTMLAnchorElement[]} */
  let $tabs

  /** @type {HTMLDivElement[]} */
  let $panels

  beforeEach(() => {
    const tabOneContent = outdent`
      <h2>Tab one content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `

    const tabTwoContent = outdent`
      <h2>Tab two content</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `

    const tabThreeContent = outdent`
      <h2>Tab three content</h2>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    `

    document.body.innerHTML = components.render('tabs', {
      context: {
        items: [
          {
            label: 'Tab one',
            id: 'tab-one',
            panel: { html: tabOneContent }
          },
          {
            label: 'Tab two',
            id: 'tab-two',
            panel: { html: tabTwoContent }
          },
          {
            label: 'Tab three',
            id: 'tab-three',
            panel: { html: tabThreeContent }
          }
        ]
      }
    })

    $root = document.querySelector('.nhsuk-tabs')

    $list = getByRole($root, 'list')
    $listItems = getAllByRole($root, 'listitem')
    $tabs = getAllByRole($root, 'link')
    $panels = [...document.querySelectorAll('.nhsuk-tabs__panel')]

    $tabs.forEach(($tab) => jest.spyOn($tab, 'addEventListener'))
    jest.spyOn(window, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initTabs()

      expect(window.addEventListener).toHaveBeenCalledWith(
        'hashchange',
        expect.any(Function),
        true
      )

      for (const $tab of $tabs) {
        expect($tab.addEventListener).toHaveBeenNthCalledWith(
          1,
          'click',
          expect.any(Function),
          true
        )

        expect($tab.addEventListener).toHaveBeenNthCalledWith(
          2,
          'keydown',
          expect.any(Function),
          true
        )
      }
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initTabs()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initTabs({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Tabs($root)).not.toThrow()
    })

    it('should throw with missing $root element', () => {
      expect(() => new Tabs()).toThrow('Tabs: Root element (`$root`) not found')
    })

    it('should throw with wrong $root element type', () => {
      $root = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Tabs($root)).toThrow(
        'Tabs: Root element (`$root`) is not of type HTMLElement'
      )
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      initTabs()
    })

    it('should add to list the tablist role', async () => {
      expect($list).toHaveAttribute('role', 'tablist')

      for (const $listItem of $listItems) {
        expect($listItem).toHaveAttribute('role', 'presentation')
      }
    })

    it('should add to list items the presentation role', async () => {
      for (const $listItem of $listItems) {
        expect($listItem).toHaveAttribute('role', 'presentation')
      }
    })

    it('should add to tab panels the tabpanel role', async () => {
      for (const $panel of $panels) {
        expect($panel).toHaveAttribute('role', 'tabpanel')
      }
    })

    it('should add to tab links the tab role', async () => {
      for (const $tab of $tabs) {
        expect($tab).toHaveAttribute('role', 'tab')
      }
    })

    it('should set the panel controlled by the tab link using aria-controls', async () => {
      for (const $panel of $panels) {
        const index = $panels.indexOf($panel)
        const $tab = $tabs.at(index)

        expect($tab).toHaveAttribute('aria-controls', $panel.id)
        expect($panel).toHaveAttribute('id')
      }
    })

    it('should set the panel labelled by the tab link using aria-labelledby', async () => {
      for (const $panel of $panels) {
        const index = $panels.indexOf($panel)
        const $tab = $tabs.at(index)

        expect($panel).toHaveAttribute('aria-labelledby', $tab.id)
        expect($tab).toHaveAttribute('id')
      }
    })
  })

  describe('Panel content', () => {
    beforeEach(() => {
      window.location.hash = ''

      initTabs()
    })

    it('should be hidden except for first tab', () => {
      const $tab = $tabs.at(0)
      const $panel = $panels.at(0)
      const $panelsHidden = $panels.filter(($panel) => $panel !== $panel)

      // First panel visible
      expect($tab).toHaveAttribute('aria-selected', 'true')
      expect($panel).not.toHaveClass('govuk-tabs__panel--hidden')

      for (const $panelHidden of $panelsHidden) {
        const index = $panels.indexOf($panelHidden)
        const $tabHidden = $tabs.at(index)

        // Other panels hidden
        expect($tabHidden).not.toHaveAttribute('aria-selected', 'true')
        expect($panelHidden).toHaveClass('govuk-tabs__panel--hidden')
      }
    })

    it.each(['#tab-one', '#tab-two', '#tab-three'])(
      'should be visible when %s is active',
      (selector) => {
        window.location.hash = selector

        const $tab = document.querySelector(`a[href="${selector}"]`)
        const $panel = document.querySelector(selector)
        const $panelsHidden = $panels.filter(($panel) => $panel !== $panel)

        $tab.click()

        // Active panel visible
        expect($tab).toHaveAttribute('aria-selected', 'true')
        expect($panel).not.toHaveClass('govuk-tabs__panel--hidden')

        for (const $panelHidden of $panelsHidden) {
          const index = $panels.indexOf($panelHidden)
          const $tabHidden = $tabs.at(index)

          // Other panels hidden
          expect($tabHidden).not.toHaveAttribute('aria-selected', 'true')
          expect($panelHidden).toHaveClass('govuk-tabs__panel--hidden')
        }
      }
    )

    it.each(['#tab-one', '#tab-two', '#tab-three'])(
      'should be visible when %s is clicked',
      (selector) => {
        const $tab = document.querySelector(`a[href="${selector}"]`)
        const $panel = document.querySelector(selector)
        const $panelsHidden = $panels.filter(($panel) => $panel !== $panel)

        $tab.click()

        // Clicked panel visible
        expect($tab).toHaveAttribute('aria-selected', 'true')
        expect($panel).not.toHaveClass('govuk-tabs__panel--hidden')

        for (const $panelHidden of $panelsHidden) {
          const index = $panels.indexOf($panelHidden)
          const $tabHidden = $tabs.at(index)

          // Other panels hidden
          expect($tabHidden).not.toHaveAttribute('aria-selected', 'true')
          expect($panelHidden).toHaveClass('govuk-tabs__panel--hidden')
        }
      }
    )
  })
})
