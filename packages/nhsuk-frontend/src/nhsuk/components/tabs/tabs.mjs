/* eslint-disable @typescript-eslint/no-deprecated */

import { normaliseOptions } from '../../common/configuration/index.mjs'
import { getBreakpoint } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Tabs component
 *
 * @augments {ConfigurableComponent<TabsConfig>}
 */
export class Tabs extends ConfigurableComponent {
  changingHash = false

  /**
   * @type {string | undefined}
   * @deprecated Use {@link Tabs.panelClass} instead.
   */
  jsHiddenClass

  /**
   * @type {MediaQueryList | null}
   */
  mql = null

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<TabsConfig>} [config] - Tabs config
   */
  constructor($root, config = {}) {
    super($root, config)

    const { listClass, listItemClass, tabClass } = this.config

    const $tabs = this.$root.querySelectorAll(`a.${tabClass}`)
    if (!$tabs.length) {
      throw new ElementError({
        component: Tabs,
        identifier: `Links (\`<a class="${tabClass}">\`)`
      })
    }

    this.$tabs = $tabs

    // Save bound functions so we can remove event listeners during teardown
    this.boundTabClick = this.onTabClick.bind(this)
    this.boundTabKeydown = this.onTabKeydown.bind(this)
    this.boundOnHashChange = this.onHashChange.bind(this)

    const $tabList = this.$root.querySelector(`ul.${listClass}`)
    const $tabListItems = this.$root.querySelectorAll(`li.${listItemClass}`)

    if (!$tabList) {
      throw new ElementError({
        component: Tabs,
        identifier: `List (\`<ul class="${listClass}">\`)`
      })
    }

    if (!$tabListItems.length) {
      throw new ElementError({
        component: Tabs,
        identifier: `List items (\`<li class="${listItemClass}">\`)`
      })
    }

    this.$tabList = $tabList
    this.$tabListItems = $tabListItems

    this.setupResponsiveChecks()
  }

  /**
   * Setup viewport resize check
   */
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

  /**
   * Setup or teardown handler for viewport resize check
   */
  checkMode() {
    if (this.mql?.matches) {
      this.setup()
    } else {
      this.teardown()
    }
  }

  /**
   * Setup tab component
   */
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
    const $activeTab = this.getTab(window.location.hash) ?? this.$tabs[0]

    this.showTab($activeTab)

    // Handle hashchange events
    window.addEventListener('hashchange', this.boundOnHashChange, true)
  }

  /**
   * Teardown tab component
   */
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

  /**
   * Handle hashchange event
   *
   * @returns {void} Returns void when prevented
   */
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
    if (!$previousTab) {
      return
    }

    this.hideTab($previousTab)
    this.showTab($tabWithHash)
    $tabWithHash.focus()
  }

  /**
   * Hide panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hideTab($tab) {
    this.unhighlightTab($tab)
    this.hidePanel($tab)
  }

  /**
   * Show panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showTab($tab) {
    this.highlightTab($tab)
    this.showPanel($tab)
  }

  /**
   * Get tab link by hash
   *
   * @param {string} hash - Hash fragment including #
   * @returns {HTMLAnchorElement | null} Tab link
   */
  getTab(hash) {
    const { tabClass } = this.config
    return this.$root.querySelector(`a.${tabClass}[href="${hash}"]`)
  }

  /**
   * Set tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  setAttributes($tab) {
    const panelId = $tab.hash.replace('#', '')
    if (!panelId) {
      return
    }

    // Set tab attributes
    $tab.setAttribute('id', `tab_${panelId}`)
    $tab.setAttribute('role', 'tab')
    $tab.setAttribute('aria-controls', panelId)
    $tab.setAttribute('aria-selected', 'false')
    $tab.setAttribute('tabindex', '-1')

    // Set panel attributes
    const $panel = this.getPanel($tab)
    if (!$panel) {
      return
    }

    const { panelClass } = this.config

    $panel.setAttribute('role', 'tabpanel')
    $panel.setAttribute('aria-labelledby', $tab.id)
    $panel.classList.add(this.jsHiddenClass ?? `${panelClass}--hidden`)
  }

  /**
   * Unset tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unsetAttributes($tab) {
    // unset tab attributes
    $tab.removeAttribute('id')
    $tab.removeAttribute('role')
    $tab.removeAttribute('aria-controls')
    $tab.removeAttribute('aria-selected')
    $tab.removeAttribute('tabindex')

    // unset panel attributes
    const $panel = this.getPanel($tab)
    if (!$panel) {
      return
    }

    const { panelClass } = this.config

    $panel.removeAttribute('role')
    $panel.removeAttribute('aria-labelledby')
    $panel.classList.remove(this.jsHiddenClass ?? `${panelClass}--hidden`)
  }

  /**
   * Handle tab link clicks
   *
   * @param {MouseEvent} event - Mouse click event
   * @returns {void} Returns void
   */
  onTabClick(event) {
    const $currentTab = this.getCurrentTab()
    const $nextTab = event.currentTarget

    if (!$currentTab || !($nextTab instanceof HTMLAnchorElement)) {
      return
    }

    event.preventDefault()

    this.hideTab($currentTab)
    this.showTab($nextTab)
    this.createHistoryEntry($nextTab)
  }

  /**
   * Update browser URL hash fragment for tab
   *
   * - Allows back/forward to navigate tabs
   * - Avoids page jump when hash changes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  createHistoryEntry($tab) {
    const $panel = this.getPanel($tab)
    if (!$panel) {
      return
    }

    // Save and restore the id so the page doesn't jump when a user clicks a tab
    // (which changes the hash)
    const panelId = $panel.id
    $panel.id = ''
    this.changingHash = true
    window.location.hash = panelId
    $panel.id = panelId
  }

  /**
   * Handle tab keydown event
   *
   * - Press right arrow for next tab
   * - Press left arrow for previous tab
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  onTabKeydown(event) {
    switch (event.key) {
      // 'Left' and 'Right' required for Edge 16 support.
      case 'ArrowLeft':
      case 'Left':
        this.activatePreviousTab()
        event.preventDefault()
        break
      case 'ArrowRight':
      case 'Right':
        this.activateNextTab()
        event.preventDefault()
        break
    }
  }

  /**
   * Activate next tab
   */
  activateNextTab() {
    const $currentTab = this.getCurrentTab()
    if (!$currentTab?.parentElement) {
      return
    }

    const $nextTabListItem = $currentTab.parentElement.nextElementSibling
    if (!$nextTabListItem) {
      return
    }

    const { tabClass } = this.config

    const $nextTab = $nextTabListItem.querySelector(`a.${tabClass}`)
    if (!$nextTab) {
      return
    }

    this.hideTab($currentTab)
    this.showTab($nextTab)
    $nextTab.focus()
    this.createHistoryEntry($nextTab)
  }

  /**
   * Activate previous tab
   */
  activatePreviousTab() {
    const $currentTab = this.getCurrentTab()
    if (!$currentTab?.parentElement) {
      return
    }

    const $previousTabListItem =
      $currentTab.parentElement.previousElementSibling
    if (!$previousTabListItem) {
      return
    }

    const { tabClass } = this.config

    const $previousTab = $previousTabListItem.querySelector(`a.${tabClass}`)
    if (!$previousTab) {
      return
    }

    this.hideTab($currentTab)
    this.showTab($previousTab)
    $previousTab.focus()
    this.createHistoryEntry($previousTab)
  }

  /**
   * Get tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   * @returns {Element | null} Tab panel
   */
  getPanel($tab) {
    const panelId = $tab.hash.replace('#', '')
    if (!panelId) {
      return null
    }

    return this.$root.querySelector(`#${panelId}`)
  }

  /**
   * Show tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showPanel($tab) {
    const $panel = this.getPanel($tab)
    if (!$panel) {
      return
    }

    const { panelClass } = this.config

    $panel.classList.remove(this.jsHiddenClass ?? `${panelClass}--hidden`)
  }

  /**
   * Hide tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hidePanel($tab) {
    const $panel = this.getPanel($tab)
    if (!$panel) {
      return
    }

    const { panelClass } = this.config

    $panel.classList.add(this.jsHiddenClass ?? `${panelClass}--hidden`)
  }

  /**
   * Unset 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unhighlightTab($tab) {
    if (!$tab.parentElement) {
      return
    }

    const { listItemClass } = this.config

    $tab.setAttribute('aria-selected', 'false')
    $tab.parentElement.classList.remove(`${listItemClass}--selected`)
    $tab.setAttribute('tabindex', '-1')
  }

  /**
   * Set 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  highlightTab($tab) {
    if (!$tab.parentElement) {
      return
    }

    const { listItemClass } = this.config

    $tab.setAttribute('aria-selected', 'true')
    $tab.parentElement.classList.add(`${listItemClass}--selected`)
    $tab.setAttribute('tabindex', '0')
  }

  /**
   * Get current tab link
   *
   * @returns {HTMLAnchorElement | null} Tab link
   */
  getCurrentTab() {
    const { listItemClass, tabClass } = this.config
    return this.$root.querySelector(`.${listItemClass}--selected a.${tabClass}`)
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-tabs'

  /**
   * Tabs default config
   *
   * @see {@link TabsConfig}
   * @constant
   * @type {TabsConfig}
   */
  static defaults = Object.freeze({
    panelClass: 'nhsuk-tabs__panel',
    listClass: 'nhsuk-tabs__list',
    listItemClass: 'nhsuk-tabs__list-item',
    tabClass: 'nhsuk-tabs__tab'
  })

  /**
   * Tabs config schema
   *
   * @constant
   * @satisfies {Schema<TabsConfig>}
   */
  static schema = Object.freeze({
    properties: {
      panelClass: { type: 'string' },
      listClass: { type: 'string' },
      listItemClass: { type: 'string' },
      tabClass: { type: 'string' }
    }
  })
}

/**
 * Initialise tabs component
 *
 * @deprecated Use {@link createAll | `createAll(Tabs, options)`} instead.
 * @param {InitOptions & Partial<TabsConfig>} [options]
 */
export function initTabs(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $tabs = $scope?.querySelectorAll(`[data-module="${Tabs.moduleName}"]`)

  $tabs?.forEach(($root) => {
    new Tabs($root, options)
  })
}

/**
 * Tabs config
 *
 * @typedef {object} TabsConfig
 * @property {string} panelClass - Tabs panel class
 * @property {string} listClass - Tabs list class
 * @property {string} listItemClass - Tabs list item class
 * @property {string} tabClass - Tabs link class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
