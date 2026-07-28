import { within } from '@testing-library/dom'

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

    $root = /** @type {HTMLElement} */ (document.querySelector('table'))
    $caption = document.querySelector('caption')
    $head = document.querySelector('thead')
    $body = document.querySelector('tbody')

    $headers = Array.from(document.querySelectorAll('thead th'))
    $rows = Array.from(document.querySelectorAll('tbody tr'))

    if ($head) {
      jest.spyOn($head, 'addEventListener')
    }
  }

  describe('Initialisation via init function', () => {
    beforeEach(() => {
      initExample('sortable with numeric format and sort values')
    })

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
    beforeEach(() => {
      initExample('sortable with numeric format and sort values')
    })

    it('should not throw with $root element', () => {
      expect(() => new Table($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Table($root)).toThrow(
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
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

  describe('Accessibility', () => {
    beforeEach(() => {
      initExample('default')
    })

    it('should have accessible name and role', () => {
      expect($root).toHaveAccessibleName(
        'Impetigo can look similar to other skin conditions'
      )

      expect($root).toHaveRole('table')
    })

    it('should not create status message by default', () => {
      const $screenReaderStatusMessage = document.querySelector('[role=status]')
      expect($screenReaderStatusMessage).toBeNull()
    })
  })

  describe('Accessibility (sortable)', () => {
    beforeEach(() => {
      initExample('sortable')
      new Table($root)
    })

    it('should have accessible name and role', () => {
      expect($root).toHaveAccessibleName(
        'Appointments (Column headers are sortable)'
      )

      expect($root).toHaveRole('table')
    })

    it('should create status message', () => {
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

  describe('Sort buttons', () => {
    /** @type {(HTMLButtonElement | null)[]} */
    let $buttons = []

    beforeEach(() => {
      initExample('sortable')
      new Table($root)

      $buttons = $headers.map(($header) => $header.querySelector('button'))
    })

    it('should create sort buttons for sortable columns', () => {
      expect($headers).toHaveLength(3)
      expect($headers).toHaveLength(3)
      expect($buttons.filter(($button) => !!$button)).toHaveLength(2)
    })

    it('should copy the column header text into the sort button', () => {
      let headersText = $headers.map(($header) => $header.textContent.trim())
      let buttonsText = $buttons.map(($button) => $button?.textContent.trim())

      expect(headersText).toEqual(['Time', 'Name', 'Date of birth'])
      expect(buttonsText).toEqual(['Time', 'Name', undefined])
    })
  })

  describe('Sorting', () => {
    let /** @type {HTMLElement} */ $header1
    let /** @type {HTMLElement} */ $header2
    let /** @type {HTMLElement} */ $header3

    let /** @type {HTMLElement} */ $button1
    let /** @type {HTMLElement} */ $button2
    let /** @type {HTMLElement} */ $button3

    beforeEach(() => {
      initExample('sortable with sort values')
      new Table($root)

      $header1 = $headers[0]
      $header2 = $headers[1]
      $header3 = $headers[2]

      $button1 = within($header1).getByRole('button')
      $button2 = within($header2).getByRole('button')
      $button3 = within($header3).getByRole('button')
    })

    it('should sort in ascending order by default', () => {
      expect($button2).toHaveTextContent('Name')
      expect($button2).not.toHaveAttribute('aria-pressed')

      // Column 2 not sorted
      expect($header2).not.toHaveAttribute('aria-sort')
      expect($header2).not.toHaveAttribute('data-sort-next')

      $button2.click()

      // Column 2 sorted ascending
      expect($button2).toHaveAttribute('aria-pressed', 'true')
      expect($header2).toHaveAttribute('aria-sort', 'ascending')
      expect($header2).toHaveAttribute('data-sort-next', 'descending')

      $button2.click()

      // Column 2 sorted descending
      expect($button2).toHaveAttribute('aria-pressed', 'true')
      expect($header2).toHaveAttribute('aria-sort', 'descending')
      expect($header2).toHaveAttribute('data-sort-next', 'ascending')
    })

    it('should sort in descending order when already sorted', () => {
      expect($button1).toHaveTextContent('Time')
      expect($button1).not.toHaveAttribute('aria-pressed')

      // Column 1 sorted ascending
      expect($header1).toHaveAttribute('aria-sort', 'ascending')
      expect($header1).not.toHaveAttribute('data-sort-next')

      $button1.click()

      // Column 1 sorted descending
      expect($button1).toHaveAttribute('aria-pressed', 'true')
      expect($header1).toHaveAttribute('aria-sort', 'descending')
      expect($header1).toHaveAttribute('data-sort-next', 'ascending')

      $button1.click()

      // Column 1 sorted ascending
      expect($button1).toHaveAttribute('aria-pressed', 'true')
      expect($header1).toHaveAttribute('aria-sort', 'ascending')
      expect($header1).toHaveAttribute('data-sort-next', 'descending')
    })

    it('should remember sort order when switching columns', () => {
      // Column 1 sorted descending
      $button1.click()

      // Column 2 sorted ascending, descending
      $button2.click()
      $button2.click()

      // Column 3 sorted descending, ascending
      $button3.click()
      $button3.click()

      // Column next sort updated
      expect($header1).toHaveAttribute('data-sort-next', 'descending')
      expect($header2).toHaveAttribute('data-sort-next', 'descending')
      expect($header3).toHaveAttribute('data-sort-next', 'descending')

      $button1.click()
      expect($header1).toHaveAttribute('aria-sort', 'descending')

      // Column next sort updated
      expect($header1).toHaveAttribute('data-sort-next', 'ascending')
      expect($header2).toHaveAttribute('data-sort-next', 'descending')
      expect($header3).toHaveAttribute('data-sort-next', 'ascending')

      $button2.click()
      expect($header2).toHaveAttribute('aria-sort', 'descending')

      // Column next sort updated
      expect($header1).toHaveAttribute('data-sort-next', 'descending')
      expect($header2).toHaveAttribute('data-sort-next', 'ascending')
      expect($header3).toHaveAttribute('data-sort-next', 'ascending')

      $button3.click()
      expect($header3).toHaveAttribute('aria-sort', 'ascending')

      // Column next sort updated
      expect($header1).toHaveAttribute('data-sort-next', 'descending')
      expect($header2).toHaveAttribute('data-sort-next', 'descending')
      expect($header3).toHaveAttribute('data-sort-next', 'descending')
    })

    it('should sort in configured next sort order', () => {
      expect($button3).toHaveTextContent('Date of birth')
      expect($button3).not.toHaveAttribute('aria-pressed')

      // Column 3 not sorted
      expect($header3).not.toHaveAttribute('aria-sort')
      expect($header3).toHaveAttribute('data-sort-next', 'descending')

      $button3.click()

      // Column 3 sorted descending
      expect($button3).toHaveAttribute('aria-pressed', 'true')
      expect($header3).toHaveAttribute('aria-sort', 'descending')
      expect($header3).toHaveAttribute('data-sort-next', 'ascending')

      $button3.click()

      // Column 3 sorted ascending
      expect($button3).toHaveAttribute('aria-pressed', 'true')
      expect($header3).toHaveAttribute('aria-sort', 'ascending')
      expect($header3).toHaveAttribute('data-sort-next', 'descending')
    })

    it('should not sort in configured next sort order when invalid', () => {
      $header3.setAttribute('aria-sort', 'descending')
      $header3.setAttribute('data-sort-next', 'descending')

      $button3.click()

      // Column 3 sorted ascending not descending
      expect($button3).toHaveAttribute('aria-pressed', 'true')
      expect($header3).toHaveAttribute('aria-sort', 'ascending')
      expect($header3).toHaveAttribute('data-sort-next', 'descending')
    })

    it('should not sort in configured next sort order when "none"', () => {
      $header3.setAttribute('aria-sort', 'descending')
      $header3.setAttribute('data-sort-next', 'none')

      $button3.click()

      // Column 3 sorted ascending not none
      expect($button3).toHaveAttribute('aria-pressed', 'true')
      expect($header3).toHaveAttribute('aria-sort', 'ascending')
      expect($header3).toHaveAttribute('data-sort-next', 'descending')
    })

    it('should reset other columns when sorting a column', () => {
      $button1.click()

      // Column 1 sorted descending
      expect($header1).toHaveAttribute('aria-sort', 'descending')

      // Columns 2 and 3 not sorted
      expect($header2).not.toHaveAttribute('aria-sort', 'none')
      expect($header3).not.toHaveAttribute('aria-sort', 'none')

      $button2.click()

      // Column 2 sorted ascending
      expect($header2).toHaveAttribute('aria-sort', 'ascending')

      // Columns 1 and 3 not sorted
      expect($header1).not.toHaveAttribute('aria-sort', 'none')
      expect($header3).not.toHaveAttribute('aria-sort', 'none')

      $button3.click()

      // Column 3 sorted descending
      expect($header3).toHaveAttribute('aria-sort', 'descending')

      // Columns 1 and 2 not sorted
      expect($header1).not.toHaveAttribute('aria-sort', 'none')
      expect($header2).not.toHaveAttribute('aria-sort', 'none')
    })

    it('should update status message when sorting', () => {
      const $screenReaderStatusMessage = document.querySelector('[role=status]')

      expect($screenReaderStatusMessage).toBe($root?.nextElementSibling)
      expect($screenReaderStatusMessage).toBeEmptyDOMElement()

      $button1.click()

      expect($screenReaderStatusMessage).toHaveTextContent(
        'Sorted by Time (descending)'
      )

      $button1.click()

      expect($screenReaderStatusMessage).toHaveTextContent(
        'Sorted by Time (ascending)'
      )
    })

    it('should reorder column', () => {
      function getColumnText(number = 1) {
        const $cells = $root.querySelectorAll(`tr > :nth-child(${number})`)
        return Array.from($cells).map(($cell) => $cell.textContent.trim())
      }

      expect(getColumnText()).toEqual([
        'Time',
        '11:00am',
        '11:30am',
        '1:10pm',
        '1:40pm',
        '2:20pm'
      ])

      $button1.click()

      expect(getColumnText()).toEqual([
        'Time',
        '2:20pm',
        '1:40pm',
        '1:10pm',
        '11:30am',
        '11:00am'
      ])

      $button1.click()

      expect(getColumnText()).toEqual([
        'Time',
        '11:00am',
        '11:30am',
        '1:10pm',
        '1:40pm',
        '2:20pm'
      ])
    })
  })

  describe('Nunjucks configuration', () => {
    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('tables', {
        context: {
          ...examples['sortable'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const component = new Table(
        document.querySelector(`[data-module="${Table.moduleName}"]`)
      )

      expect(component.config).toEqual(Table.defaults)
    })

    it('configures default text', () => {
      initExample('sortable')

      const component = new Table(
        document.querySelector(`[data-module="${Table.moduleName}"]`)
      )

      expect(component.config).toEqual(Table.defaults)
    })
  })

  describe('JavaScript configuration', () => {
    beforeEach(() => {
      initExample('sortable')
    })

    describe('during initialisation', () => {
      it('overrides the default translation keys', () => {
        const component = new Table($root, {
          i18n: {
            sortAnnouncement: 'Ordered by %{header} in %{direction} order',
            ascending: 'A-Z',
            descending: 'Z-A'
          }
        })

        expect(component.config).toEqual({
          ...Table.defaults,
          i18n: {
            sortAnnouncement: 'Ordered by %{header} in %{direction} order',
            ascending: 'A-Z',
            descending: 'Z-A'
          }
        })

        expect(component.formatStatusMessage(1, 'ascending')).toBe(
          'Ordered by Name in A-Z order'
        )

        expect(component.formatStatusMessage(1, 'descending')).toBe(
          'Ordered by Name in Z-A order'
        )
      })
    })

    describe('with HTML data attributes', () => {
      it('overrides the default translation keys', () => {
        $root.setAttribute(
          'data-i18n.sort-announcement',
          'Ordered by %{header} in %{direction} order'
        )

        $root.setAttribute('data-i18n.ascending', 'A-Z')
        $root.setAttribute('data-i18n.descending', 'Z-A')

        const component = new Table($root)

        expect(component.config).toEqual({
          ...Table.defaults,
          i18n: {
            sortAnnouncement: 'Ordered by %{header} in %{direction} order',
            ascending: 'A-Z',
            descending: 'Z-A'
          }
        })

        expect(component.formatStatusMessage(1, 'ascending')).toBe(
          'Ordered by Name in A-Z order'
        )

        expect(component.formatStatusMessage(1, 'descending')).toBe(
          'Ordered by Name in Z-A order'
        )
      })
    })
  })
})
