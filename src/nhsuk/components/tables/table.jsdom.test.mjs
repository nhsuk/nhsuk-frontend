import { components } from '#lib'

import { examples } from './fixtures.mjs'
import { Table, initTables } from './table.mjs'

describe('Table', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement | null} */
  let $caption = null

  /** @type {HTMLElement | null} */
  let $head = null

  /** @type {HTMLElement | null} */
  let $body = null

  /** @type {HTMLElement[]} */
  let $headers = []

  /** @type {HTMLElement[]} */
  let $rows = []

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render('tables', examples[example])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Table.moduleName}"]`)
    )

    $caption = document.querySelector('caption')
    $head = document.querySelector('thead')
    $body = document.querySelector('tbody')

    $headers = Array.from(document.querySelectorAll('thead th'))
    $rows = Array.from(document.querySelectorAll('tbody tr'))

    if ($head) {
      jest.spyOn($head, 'addEventListener')
    }
  }

  beforeEach(() => {
    initExample('with numeric data, sortable')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initTables()

      expect($head?.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should throw with missing table caption', () => {
      $caption?.remove()

      expect(() => initTables()).toThrow(
        `${Table.moduleName}: Table caption (\`<caption class="nhsuk-table__caption">\`) not found`
      )
    })

    it('should throw with missing table head', () => {
      $head?.remove()

      expect(() => initTables()).toThrow(
        `${Table.moduleName}: Table head (\`<thead class="nhsuk-table__head">\`) not found`
      )
    })

    it('should throw with missing table headers', () => {
      for (const $header of $headers) {
        $header.removeAttribute('data-sort')
      }

      expect(() => initTables()).toThrow(
        `${Table.moduleName}: Table headers (\`<th class="nhsuk-table__header">\`) with attribute (\`data-sort\`) not found`
      )
    })

    it('should throw with missing table body', () => {
      $body?.remove()

      expect(() => initTables()).toThrow(
        `${Table.moduleName}: Table body (\`<tbody class="nhsuk-table__body">\`) not found`
      )
    })

    it('should throw with missing table rows', () => {
      for (const $row of $rows) {
        $row.remove()
      }

      expect(() => initTables()).toThrow(
        `${Table.moduleName}: Table rows (\`<tr class="nhsuk-table__row">\`) not found`
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

  describe('Header buttons', () => {
    /** @type {(HTMLButtonElement | null)[]} */
    let $buttons = []

    beforeEach(() => {
      initTables()

      $buttons = $headers.map(($header) => $header.querySelector('button'))
    })

    it('should create sort buttons for sortable columns', () => {
      expect($headers).toHaveLength(4)
      expect($headers).toHaveLength(4)
    })

    it('should copy the column header text into the sort button', () => {
      let headersText = $headers.map(($header) => $header.textContent.trim())
      let buttonsText = $buttons.map(($button) => $button?.textContent.trim())

      expect(headersText).toEqual(['Nation', 'MMR', '6-in-1', 'Rotavirus'])
      expect(buttonsText).toEqual(['Nation', 'MMR', '6-in-1', 'Rotavirus'])
    })
  })

  describe('Caption', () => {
    it('should add assistive text to caption', () => {
      initTables()

      const $captionDescription = $caption?.querySelector(
        '.nhsuk-u-visually-hidden'
      )

      expect($captionDescription).toHaveTextContent(
        '(Column headers are sortable)'
      )
    })
  })

  describe('Status message', () => {
    it('should create a status message after the table', () => {
      initTables()

      const $screenReaderStatusMessage = document.querySelector('[role=status]')

      expect($screenReaderStatusMessage).toBe($root?.nextElementSibling)
      expect($screenReaderStatusMessage).toHaveAttribute('role', 'status')
      expect($screenReaderStatusMessage).toHaveAttribute('aria-live', 'polite')
      expect($screenReaderStatusMessage).toHaveAttribute('aria-atomic', 'true')
      expect($screenReaderStatusMessage?.classList).toContain(
        'nhsuk-u-visually-hidden'
      )
    })
  })

  describe('Sorting', () => {
    /** @type {HTMLButtonElement[]} */
    let $buttons = []

    beforeEach(() => {
      initTables()

      $buttons = $headers
        .map(($header) => $header.querySelector('button'))
        .filter(($button) => !!$button)
    })

    it('should use data-sort-next direction when clicking a button on a currently unsorted column', () => {
      const $mmrButton = $buttons[1]
      const $mmrHeader = $mmrButton.closest('th')

      // MMR column has data-sort-next="descending" in the fixture
      $mmrButton.click()

      expect($mmrHeader).toHaveAttribute('aria-sort', 'descending')
    })

    it('should default to ascending when data-sort-next is not set', () => {
      // Set up a column without data-sort-next by clicking on it first
      // to make it descending, then resetting via another column
      const $nationButton = $buttons[0]
      const $nationHeader = $nationButton.closest('th')
      const $mmrButton = $buttons[1]

      // Nation column does NOT have data-initial-sort attribute
      // First click another column to reset Nation to 'none'
      $mmrButton.click()
      expect($nationHeader).not.toHaveProperty('aria-sort')

      // Now click Nation - without data-initial-sort it should default to ascending
      $nationButton.click()
      expect($nationHeader).toHaveAttribute('aria-sort', 'ascending')
    })

    it('should set aria-sort to descending when clicking a button on a column currently in ascending order', () => {
      const $nationButton = $buttons[0]
      const $nationHeader = $nationButton.closest('th')

      expect($nationHeader).toHaveAttribute('aria-sort', 'ascending')

      $nationButton.click()

      expect($nationHeader).toHaveAttribute('aria-sort', 'descending')
    })

    it('should set aria-sort to ascending when clicking a button on a column currently in descending order', () => {
      const $nationButton = $buttons[0]
      const $nationHeader = $nationButton.closest('th')

      // First click to make it descending
      $nationButton.click()
      expect($nationHeader).toHaveAttribute('aria-sort', 'descending')

      // Second click to make it ascending again
      $nationButton.click()
      expect($nationHeader).toHaveAttribute('aria-sort', 'ascending')
    })

    it('should reset other columns to "none" when sorting a column', () => {
      const $nationButton = $buttons[0]
      const $mmrButton = $buttons[1]
      const $nationHeader = $nationButton.closest('th')
      const $mmrHeader = $mmrButton.closest('th')

      expect($nationHeader).toHaveAttribute('aria-sort', 'ascending')

      // MMR column has data-sort-next="descending" in the fixture
      $mmrButton.click()

      expect($nationHeader).not.toHaveProperty('aria-sort')
      expect($mmrHeader).toHaveAttribute('aria-sort', 'descending')
    })

    it('should update status message when sorting', () => {
      const $screenReaderStatusMessage = document.querySelector('[role=status]')

      expect($screenReaderStatusMessage).toBe($root?.nextElementSibling)
      expect($screenReaderStatusMessage).toBeEmptyDOMElement()

      const $mmrButton = $buttons[1]

      // MMR column has data-sort-next="descending" in the fixture
      $mmrButton.click()

      expect($screenReaderStatusMessage).toHaveTextContent(
        'Sorted by MMR (descending)'
      )
    })

    it('should reorder rows when sorting', () => {
      const $mmrButton = $buttons[1]

      function getRowHeader() {
        return document.querySelector('tbody tr th')
      }

      expect(getRowHeader()).toHaveTextContent('England')

      // Sort by MMR descending first (Wales has highest at 89.5%)
      // because MMR column has data-sort-next="descending"
      $mmrButton.click()

      expect(getRowHeader()).toHaveTextContent('Wales')

      // Sort by MMR ascending (England has lowest at 83.7%)
      $mmrButton.click()

      expect(getRowHeader()).toHaveTextContent('England')
    })
  })

  describe('Configuration', () => {
    it('should have default configuration values', () => {
      expect(Table.defaults.i18n).toMatchObject({
        sortAnnouncement: 'Sorted by %{header} (%{direction})',
        ascending: 'ascending',
        descending: 'descending'
      })
    })

    it('should accept custom configuration', () => {
      new Table($root, {
        i18n: {
          sortAnnouncement: 'Ordered by %{header} in %{direction} order',
          ascending: 'A-Z',
          descending: 'Z-A'
        }
      })

      const $screenReaderStatusMessage = document.querySelector('[role=status]')

      expect($screenReaderStatusMessage).toBe($root?.nextElementSibling)
      expect($screenReaderStatusMessage).toBeEmptyDOMElement()

      const $buttons = document.querySelectorAll('thead th[data-sort] button')

      // MMR column has data-sort-next="descending" in the fixture
      const $mmrButton = $buttons[1]

      $mmrButton?.click()

      expect($screenReaderStatusMessage).toHaveTextContent(
        'Ordered by MMR in Z-A order'
      )
    })
  })
})
