import { getBreakpoint, getFragmentFromUrl } from '../../common/index.mjs'
import { Component } from '../../component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Tabs component
 */
export class Tabs extends Component {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const $tabs = this.$root.querySelectorAll('a.nhsuk-tabs__tab')
    if (!$tabs.length) {
      throw new ElementError({
        component: Tabs,
        identifier: 'Links (`<a class="nhsuk-tabs__tab">`)'
      })
    }

    this.$tabs = $tabs

    // Save bound functions so we can remove event listeners during teardown
    this.boundTabClick = this.onTabClick.bind(this)
    this.boundTabKeydown = this.onTabKeydown.bind(this)
    this.boundOnHashChange = this.onHashChange.bind(this)

    const $tabList = this.$root.querySelector('.nhsuk-tabs__list')
    const $tabListItems = this.$root.querySelectorAll('.nhsuk-tabs__list-item')

    if (!$tabList) {
      throw new ElementError({
        component: Tabs,
        identifier: 'List (`<ul class="nhsuk-tabs__list">`)'
      })
    }

    if (!$tabListItems.length) {
      throw new ElementError({
        component: Tabs,
        identifier: 'List items (`<li class="nhsuk-tabs__list-item">`)'
      })
    }

    this.$tabList = $tabList
    this.$tabListItems = $tabListItems

    this.jsHiddenClass = 'nhsuk-tabs__panel--hidden'

    this.setupResponsiveChecks()
  }

  setupResponsiveChecks() {
    const breakpoint = getBreakpoint('tablet')

    if (!breakpoint.value) {
      throw new ElementError({
        component: Tabs,
        identifier: `CSS custom property (\`${breakpoint.property}\`) on pseudo-class \`:root\``
      })
    }

    // Media query list for NHS.UK frontend tablet breakpoint
    this.mql = window.matchMedia(`(min-width: ${breakpoint.value})`)

    // MediaQueryList.addEventListener isn't supported by Safari < 14 so we need
    // to be able to fall back to the deprecated MediaQueryList.addListener
    if ('addEventListener' in this.mql) {
      this.mql.addEventListener('change', () => this.checkMode())
    } else {
      // @ts-expect-error Property 'addListener' does not exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.mql.addListener(() => this.checkMode())
    }

    this.checkMode()
  }

  checkMode() {
    if (this.mql?.matches) {
      this.setup()
    } else {
      this.teardown()
    }
  }

  setup() {
    this.$tabList.setAttribute('role', 'tablist')

    this.$tabListItems.forEach(($item) => {
      $item.setAttribute('role', 'presentation')
    })

    this.$tabs.forEach(($tab) => {
      // Set HTML attributes
      this.setAttributes($tab)

      // Handle events
      $tab.addEventListener('click', this.boundTabClick, true)
      $tab.addEventListener('keydown', this.boundTabKeydown, true)

      // Remove old active panels
      this.hideTab($tab)
    })

    // Show either the active tab according to the URL's hash or the first tab
    const $activeTab = this.getTab(window.location.hash) || this.$tabs[0]
    this.showTab($activeTab)

    // Handle hashchange events
    window.addEventListener('hashchange', this.boundOnHashChange, true)
  }

  teardown() {
    this.$tabList.removeAttribute('role')

    this.$tabListItems.forEach(($item) => {
      $item.removeAttribute('role')
    })

    this.$tabs.forEach(($tab) => {
      // Remove events
      $tab.removeEventListener('click', this.boundTabClick, true)
      $tab.removeEventListener('keydown', this.boundTabKeydown, true)

      // Unset HTML attributes
      this.unsetAttributes($tab)
    })

    // Remove hashchange event handler
    window.removeEventListener('hashchange', this.boundOnHashChange, true)
  }

  onHashChange() {
    const { hash } = window.location
    const $tabWithHash = this.getTab(hash)
    if (!$tabWithHash) {
      return
    }

    // Prevent changing the hash
    if (this.changingHash) {
      this.changingHash = false
      return
    }

    // Show either the active tab according to the URL's hash or the first tab
    const $previousTab = this.getCurrentTab()

    this.hideTab($previousTab)
    this.showTab($tabWithHash)
    $tabWithHash.focus()
  }

  hideTab($tab) {
    this.unhighlightTab($tab)
    this.hidePanel($tab)
  }

  showTab($tab) {
    this.highlightTab($tab)
    this.showPanel($tab)
  }

  getTab(hash) {
    return this.$root.querySelector(`.nhsuk-tabs__tab[href="${hash}"]`)
  }

  setAttributes($tab) {
    // set tab attributes
    const panelId = getFragmentFromUrl($tab.href)
    $tab.setAttribute('id', `tab_${panelId}`)
    $tab.setAttribute('role', 'tab')
    $tab.setAttribute('aria-controls', panelId)
    $tab.setAttribute('aria-selected', 'false')
    $tab.setAttribute('tabindex', '-1')

    // set panel attributes
    const $panel = this.getPanel($tab)
    $panel.setAttribute('role', 'tabpanel')
    $panel.setAttribute('aria-labelledby', $tab.id)
    $panel.classList.add(this.jsHiddenClass)
  }

  unsetAttributes($tab) {
    // unset tab attributes
    $tab.removeAttribute('id')
    $tab.removeAttribute('role')
    $tab.removeAttribute('aria-controls')
    $tab.removeAttribute('aria-selected')
    $tab.removeAttribute('tabindex')

    // unset panel attributes
    const $panel = this.getPanel($tab)
    $panel.removeAttribute('role')
    $panel.removeAttribute('aria-labelledby')
    $panel.removeAttribute('tabindex')
    $panel.classList.remove(this.jsHiddenClass)
  }

  onTabClick(e) {
    const $currentTab = this.getCurrentTab()
    const $newTab = e.currentTarget

    if (!$currentTab || !($newTab instanceof HTMLAnchorElement)) {
      return
    }

    e.preventDefault()

    this.hideTab($currentTab)
    this.showTab($newTab)
    this.createHistoryEntry($newTab)
  }

  createHistoryEntry($tab) {
    const $panel = this.getPanel($tab)

    // Save and restore the id
    // so the page doesn't jump when a user clicks a tab (which changes the hash)
    const { id } = $panel
    $panel.id = ''
    this.changingHash = true
    window.location.hash = id
    $panel.id = id
  }

  onTabKeydown(event) {
    switch (event.key) {
      // 'Left', 'Right', 'Up' and 'Down' required for Edge 16 support.
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'Left':
      case 'Up':
        this.activatePreviousTab()
        event.preventDefault()
        break
      case 'ArrowRight':
      case 'ArrowDown':
      case 'Right':
      case 'Down':
        this.activateNextTab()
        event.preventDefault()
        break
    }
  }

  activateNextTab() {
    const currentTab = this.getCurrentTab()
    const nextTabListItem = currentTab.parentNode.nextElementSibling
    let nextTab

    if (nextTabListItem) {
      nextTab = nextTabListItem.querySelector('.nhsuk-tabs__tab')
    }
    if (nextTab) {
      this.hideTab(currentTab)
      this.showTab(nextTab)
      nextTab.focus()
      this.createHistoryEntry(nextTab)
    }
  }

  activatePreviousTab() {
    const currentTab = this.getCurrentTab()
    const previousTabListItem = currentTab.parentNode.previousElementSibling
    let previousTab

    if (previousTabListItem) {
      previousTab = previousTabListItem.querySelector('.nhsuk-tabs__tab')
    }
    if (previousTab) {
      this.hideTab(currentTab)
      this.showTab(previousTab)
      previousTab.focus()
      this.createHistoryEntry(previousTab)
    }
  }

  getPanel($tab) {
    const panelId = getFragmentFromUrl($tab.href)
    return this.$root.querySelector(`#${panelId}`)
  }

  showPanel($tab) {
    const $panel = this.getPanel($tab)
    $panel.classList.remove(this.jsHiddenClass)
  }

  hidePanel(tab) {
    const $panel = this.getPanel(tab)
    $panel.classList.add(this.jsHiddenClass)
  }

  unhighlightTab($tab) {
    $tab.setAttribute('aria-selected', 'false')
    $tab.parentElement.classList.remove('nhsuk-tabs__list-item--selected')
    $tab.setAttribute('tabindex', '-1')
  }

  highlightTab($tab) {
    $tab.setAttribute('aria-selected', 'true')
    $tab.parentElement.classList.add('nhsuk-tabs__list-item--selected')
    $tab.setAttribute('tabindex', '0')
  }

  getCurrentTab() {
    return this.$root.querySelector(
      '.nhsuk-tabs__list-item--selected .nhsuk-tabs__tab'
    )
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-tabs'
}

/**
 * Initialise tabs component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initTabs(options = {}) {
  const $scope = options.scope || document
  const $tabs = $scope.querySelectorAll(`[data-module="${Tabs.moduleName}"]`)

  $tabs.forEach(($root) => {
    new Tabs($root)
  })
}
