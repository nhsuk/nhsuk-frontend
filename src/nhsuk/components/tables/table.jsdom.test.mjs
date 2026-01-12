import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

import { examples } from './fixtures.mjs'
import { Table, initTables } from './table.mjs'

describe('Table', () => {
  /** @type {HTMLElement} */
  let $root, $head

  /** @type {HTMLElement[]} */
  let $sortButtons

  beforeEach(() => {
    document.body.innerHTML = outdent`
      <div>
        ${components.render('tables', examples['with numeric data, sortable'])}
      </div>
    `

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Table.moduleName}"]`)
    )
    $head = /** @type {HTMLElement} */ (document.querySelector(`thead`))

    jest.spyOn($root, 'addEventListener')
    jest.spyOn($head, 'addEventListener')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initTables()

      expect(
        $root.querySelector('thead')?.addEventListener
      ).toHaveBeenCalledWith('click', expect.any(Function))
    })

    it('should throw with missing table head', () => {
      $root.querySelector('thead')?.remove()

      expect(() => initTables()).toThrow(
        `${Table.moduleName}: Table head (\`<thead>\`) not found`
      )
    })

    it('should throw with missing table body', () => {
      $root.querySelector('tbody')?.remove()

      expect(() => initTables()).toThrow(
        `${Table.moduleName}: Table body (\`<tbody>\`) not found`
      )
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initTables()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initTables({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Table($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Table($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new Table()).toThrow(
        `${Table.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Table($svg)).toThrow(
        `${Table.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Table($root)
        new Table($root)
      }).toThrow(
        `${Table.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Heading buttons', () => {
    beforeEach(() => {
      initTables()

      $sortButtons = /** @type {HTMLElement[]} */ ([
        ...$root.querySelectorAll('thead th[aria-sort] button')
      ])
    })

    it('should create sort buttons for sortable columns', () => {
      expect($sortButtons).toHaveLength(4)
    })

    it('should copy the heading text into the sort button', () => {
      let $sortButtonsText = $sortButtons.map((button) =>
        button.textContent.trim()
      )

      expect($sortButtonsText).toEqual(['Nation', 'MMR', '6-in-1', 'Rotavirus'])
    })

    it('should add direction indicator SVG to buttons', () => {
      for (const $button of $sortButtons) {
        expect($button.querySelector('svg')).not.toBeNull()
      }
    })
  })

  describe('Caption', () => {
    it('should add assistive text to caption', () => {
      initTables()

      const $caption = $root.querySelector('caption')
      const $assistiveText = $caption?.querySelector('.nhsuk-u-visually-hidden')

      expect($assistiveText).not.toBeNull()
      expect($assistiveText?.textContent).toBe(
        ' (column headers with buttons are sortable).'
      )
    })
  })

  describe('Status box', () => {
    it('should create a status element after the table', () => {
      initTables()

      const $status = $root.nextElementSibling

      expect($status).not.toBeNull()
      expect($status?.getAttribute('role')).toBe('status')
      expect($status?.getAttribute('aria-live')).toBe('polite')
      expect($status?.getAttribute('aria-atomic')).toBe('true')
      expect($status?.classList.contains('nhsuk-u-visually-hidden')).toBe(true)
    })
  })

  describe('Sorting', () => {
    beforeEach(() => {
      initTables()

      $sortButtons = /** @type {HTMLElement[]} */ ([
        ...$root.querySelectorAll('thead th[aria-sort] button')
      ])
    })

    it('should set aria-sort to ascending when clicking a button on a currently unsorted column', () => {
      const $mmrButton = $sortButtons[1]
      const $mmrHeading = $mmrButton.closest('th')

      $mmrButton.click()

      expect($mmrHeading?.getAttribute('aria-sort')).toBe('ascending')
    })

    it('should set aria-sort to descending when clicking a button on a column currently in ascending order', () => {
      const $nationButton = $sortButtons[0]
      const $nationHeading = $nationButton.closest('th')

      expect($nationHeading?.getAttribute('aria-sort')).toBe('ascending')

      $nationButton.click()

      expect($nationHeading?.getAttribute('aria-sort')).toBe('descending')
    })

    it('should set aria-sort to ascending when clicking a button on a column currently in descending order', () => {
      const $nationButton = $sortButtons[0]
      const $nationHeading = $nationButton.closest('th')

      // First click to make it descending
      $nationButton.click()
      expect($nationHeading?.getAttribute('aria-sort')).toBe('descending')

      // Second click to make it ascending again
      $nationButton.click()
      expect($nationHeading?.getAttribute('aria-sort')).toBe('ascending')
    })

    it('should reset other columns to "none" when sorting a column', () => {
      const $nationButton = $sortButtons[0]
      const $mmrButton = $sortButtons[1]
      const $nationHeading = $nationButton.closest('th')
      const $mmrHeading = $mmrButton.closest('th')

      expect($nationHeading?.getAttribute('aria-sort')).toBe('ascending')

      $mmrButton.click()

      expect($nationHeading?.getAttribute('aria-sort')).toBe('none')
      expect($mmrHeading?.getAttribute('aria-sort')).toBe('ascending')
    })

    it('should update status message when sorting', () => {
      const $mmrButton = $sortButtons[1]
      const $status = $root.nextElementSibling

      $mmrButton.click()

      expect($status?.textContent).toBe('Sort by MMR (ascending)')
    })

    it('should reorder rows when sorting', () => {
      const $tbody = $root.querySelector('tbody')
      const $mmrButton = $sortButtons[1]

      // Get initial first row nation
      const getFirstRowNation = () =>
        $tbody?.querySelector('tr td')?.textContent

      expect(getFirstRowNation().trim()).toBe('England')

      // Sort by MMR ascending (England has lowest at 83.7%)
      $mmrButton.click()

      expect(getFirstRowNation().trim()).toBe('England')

      // Sort by MMR descending (Wales has highest at 89.5%)
      $mmrButton.click()

      expect(getFirstRowNation().trim()).toBe('Wales')
    })
  })

  describe('Configuration', () => {
    it('should have default configuration values', () => {
      expect(Table.defaults.statusMessage).toBe(
        'Sort by %heading% (%direction%)'
      )
      expect(Table.defaults.ascendingText).toBe('ascending')
      expect(Table.defaults.descendingText).toBe('descending')
    })

    it('should accept custom configuration', () => {
      new Table($root, {
        statusMessage: 'Ordered by %heading% in %direction% order',
        ascendingText: 'A-Z',
        descendingText: 'Z-A'
      })

      const $sortButtons = /** @type {HTMLElement[]} */ ([
        ...$root.querySelectorAll('thead th[aria-sort] button')
      ])

      const $mmrButton = $sortButtons[1]
      const $status = $root.nextElementSibling

      $mmrButton.click()

      expect($status?.textContent).toBe('Ordered by MMR in A-Z order')
    })
  })

  describe('Non-sortable table', () => {
    beforeEach(() => {
      document.body.innerHTML = outdent`
        <div>
          ${components.render('tables', examples['default'])}
        </div>
      `
    })

    it('should not have data-module attribute', () => {
      const $table = document.querySelector('table')
      expect($table?.hasAttribute('data-module')).toBe(false)
    })

    it('should not be initialised by initTables', () => {
      expect(() => initTables()).not.toThrow()
    })
  })
})
