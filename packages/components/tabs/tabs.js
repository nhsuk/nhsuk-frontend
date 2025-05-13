class Tabs {
  constructor($module) {
    this.$module = $module
    this.$tabs = $module.querySelectorAll('.nhsuk-tabs__tab')

    this.keys = {
      down: 40,
      left: 37,
      right: 39,
      up: 38
    }
    this.jsHiddenClass = 'nhsuk-tabs__panel--hidden'

    this.showEvent = new CustomEvent('tab.show')
    this.hideEvent = new CustomEvent('tab.hide')

    if (typeof window.matchMedia === 'function') {
      this.setupResponsiveChecks()
    } else {
      this.setup()
    }
  }

  setupResponsiveChecks() {
    // $nhsuk-breakpoints: (
    // mobile: 320px,
    // tablet: 641px,
    // desktop: 769px,
    // large-desktop: 990px
    // );
    this.mql = window.matchMedia('(min-width: 641px)')

    // MediaQueryList.addEventListener isn't supported by Safari < 14 so we need
    // to be able to fall back to the deprecated MediaQueryList.addListener
    if ('addEventListener' in this.mql) {
      this.mql.addEventListener('change', this.checkMode.bind(this))
    } else {
      // addListener is a deprecated function, however addEventListener
      // isn't supported by Safari < 14. We therefore add this in as
      // a fallback for those browsers
      this.mql.addListener(this.checkMode.bind(this))
    }

    this.checkMode()
  }

  checkMode() {
    if (this.mql.matches) {
      this.setup()
    } else {
      this.teardown()
    }
  }

  setup() {
    const { $module } = this
    const { $tabs } = this
    const $tabList = $module.querySelector('.nhsuk-tabs__list')
    const $tabListItems = $module.querySelectorAll('.nhsuk-tabs__list-item')

    if (!$tabs || !$tabList || !$tabListItems) {
      return
    }

    $tabList.setAttribute('role', 'tablist')

    $tabListItems.forEach(($item) => {
      $item.setAttribute('role', 'presentation')
    })

    $tabs.forEach(($tab) => {
      // Set HTML attributes
      this.setAttributes($tab)

      // Save bounded functions to use when removing event listeners during teardown
      // eslint-disable-next-line no-param-reassign
      $tab.boundTabClick = this.onTabClick.bind(this)
      // eslint-disable-next-line no-param-reassign
      $tab.boundTabKeydown = this.onTabKeydown.bind(this)

      // Handle events
      $tab.addEventListener('click', $tab.boundTabClick, true)
      $tab.addEventListener('keydown', $tab.boundTabKeydown, true)

      // Remove old active panels
      this.hideTab($tab)
    })

    // Show either the active tab according to the URL's hash or the first tab
    const $activeTab = this.getTab(window.location.hash) || this.$tabs[0]
    this.showTab($activeTab)

    // Handle hashchange events
    $module.boundOnHashChange = this.onHashChange.bind(this)
    window.addEventListener('hashchange', $module.boundOnHashChange, true)
  }

  teardown() {
    const { $module } = this
    const { $tabs } = this
    const $tabList = $module.querySelector('.nhsuk-tabs__list')
    const $tabListItems = $module.querySelectorAll('.nhsuk-tabs__list-item')

    if (!$tabs || !$tabList || !$tabListItems) {
      return
    }

    $tabList.removeAttribute('role')

    $tabListItems.forEach(($item) => {
      $item.removeAttribute('role', 'presentation')
    })

    $tabs.forEach(($tab) => {
      // Remove events
      $tab.removeEventListener('click', $tab.boundTabClick, true)
      $tab.removeEventListener('keydown', $tab.boundTabKeydown, true)

      // Unset HTML attributes
      this.unsetAttributes($tab)
    })

    // Remove hashchange event handler
    window.removeEventListener('hashchange', $module.boundOnHashChange, true)
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
    return this.$module.querySelector(`.nhsuk-tabs__tab[href="${hash}"]`)
  }

  setAttributes($tab) {
    // set tab attributes
    const panelId = Tabs.getHref($tab).slice(1)
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
    if (!e.target.classList.contains('nhsuk-tabs__tab')) {
      e.stopPropagation()
      e.preventDefault()
    }
    e.preventDefault()
    const $newTab = e.target
    const $currentTab = this.getCurrentTab()
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
    window.location.hash = Tabs.getHref($tab).slice(1)
    $panel.id = id
  }

  onTabKeydown(e) {
    switch (e.keyCode) {
      case this.keys.left:
      case this.keys.up:
        this.activatePreviousTab()
        e.preventDefault()
        break
      case this.keys.right:
      case this.keys.down:
        this.activateNextTab()
        e.preventDefault()
        break

      default:
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
    const $panel = this.$module.querySelector(Tabs.getHref($tab))
    return $panel
  }

  showPanel($tab) {
    const $panel = this.getPanel($tab)
    $panel.classList.remove(this.jsHiddenClass)
    $panel.dispatchEvent(this.showEvent)
  }

  hidePanel(tab) {
    const $panel = this.getPanel(tab)
    $panel.classList.add(this.jsHiddenClass)
    $panel.dispatchEvent(this.hideEvent)
  }

  unhighlightTab($tab) {
    $tab.setAttribute('aria-selected', 'false')
    $tab.parentNode.classList.remove('nhsuk-tabs__list-item--selected')
    $tab.setAttribute('tabindex', '-1')
  }

  highlightTab($tab) {
    $tab.setAttribute('aria-selected', 'true')
    $tab.parentNode.classList.add('nhsuk-tabs__list-item--selected')
    $tab.setAttribute('tabindex', '0')
  }

  getCurrentTab() {
    return this.$module.querySelector(
      '.nhsuk-tabs__list-item--selected .nhsuk-tabs__tab'
    )
  }

  // this is because IE doesn't always return the actual value but a relative full path
  // should be a utility function most prob
  // http://labs.thesedays.com/blog/2010/01/08/getting-the-href-value-with-jquery-in-ie/
  static getHref($tab) {
    const href = $tab.getAttribute('href')
    const hash = href.slice(href.indexOf('#'), href.length)
    return hash
  }
}

/**
 * Initialise tabs component
 */
module.exports = ({ scope = document } = {}) => {
  const tabs = scope.querySelectorAll('[data-module="nhsuk-tabs"]')
  tabs.forEach((el) => {
    new Tabs(el)
  })
}
