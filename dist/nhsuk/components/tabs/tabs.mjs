import { getBreakpoint } from '../../common/index.mjs';
import { Component } from '../../component.mjs';
import { ElementError } from '../../errors/index.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

/**
 * Tabs component
 */
class Tabs extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root);
    this.jsHiddenClass = 'nhsuk-tabs__panel--hidden';
    this.changingHash = false;
    /**
     * @type {MediaQueryList | null}
     */
    this.mql = null;
    const $tabs = this.$root.querySelectorAll('a.nhsuk-tabs__tab');
    if (!$tabs.length) {
      throw new ElementError({
        component: Tabs,
        identifier: 'Links (`<a class="nhsuk-tabs__tab">`)'
      });
    }
    this.$tabs = $tabs;

    // Save bound functions so we can remove event listeners during teardown
    this.boundTabClick = this.onTabClick.bind(this);
    this.boundTabKeydown = this.onTabKeydown.bind(this);
    this.boundOnHashChange = this.onHashChange.bind(this);
    const $tabList = this.$root.querySelector('.nhsuk-tabs__list');
    const $tabListItems = this.$root.querySelectorAll('.nhsuk-tabs__list-item');
    if (!$tabList) {
      throw new ElementError({
        component: Tabs,
        identifier: 'List (`<ul class="nhsuk-tabs__list">`)'
      });
    }
    if (!$tabListItems.length) {
      throw new ElementError({
        component: Tabs,
        identifier: 'List items (`<li class="nhsuk-tabs__list-item">`)'
      });
    }
    this.$tabList = $tabList;
    this.$tabListItems = $tabListItems;
    this.setupResponsiveChecks();
  }

  /**
   * Setup viewport resize check
   */
  setupResponsiveChecks() {
    const breakpoint = getBreakpoint('tablet');
    if (!breakpoint.value) {
      throw new ElementError({
        component: Tabs,
        identifier: `CSS custom property (\`${breakpoint.property}\`) on pseudo-class \`:root\``
      });
    }

    // Media query list for NHS.UK frontend tablet breakpoint
    this.mql = window.matchMedia(`(min-width: ${breakpoint.value})`);

    // MediaQueryList.addEventListener isn't supported by Safari < 14 so we need
    // to be able to fall back to the deprecated MediaQueryList.addListener
    if ('addEventListener' in this.mql) {
      this.mql.addEventListener('change', () => this.checkMode());
    } else {
      // @ts-expect-error Property 'addListener' does not exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.mql.addListener(() => this.checkMode());
    }
    this.checkMode();
  }

  /**
   * Setup or teardown handler for viewport resize check
   */
  checkMode() {
    var _this$mql;
    if ((_this$mql = this.mql) != null && _this$mql.matches) {
      this.setup();
    } else {
      this.teardown();
    }
  }

  /**
   * Setup tab component
   */
  setup() {
    var _this$getTab;
    this.$tabList.setAttribute('role', 'tablist');
    this.$tabListItems.forEach($item => {
      $item.setAttribute('role', 'presentation');
    });
    this.$tabs.forEach($tab => {
      // Set HTML attributes
      this.setAttributes($tab);

      // Handle events
      $tab.addEventListener('click', this.boundTabClick, true);
      $tab.addEventListener('keydown', this.boundTabKeydown, true);

      // Remove old active panels
      this.hideTab($tab);
    });

    // Show either the active tab according to the URL's hash or the first tab
    const $activeTab = (_this$getTab = this.getTab(window.location.hash)) != null ? _this$getTab : this.$tabs[0];
    this.showTab($activeTab);

    // Handle hashchange events
    window.addEventListener('hashchange', this.boundOnHashChange, true);
  }

  /**
   * Teardown tab component
   */
  teardown() {
    this.$tabList.removeAttribute('role');
    this.$tabListItems.forEach($item => {
      $item.removeAttribute('role');
    });
    this.$tabs.forEach($tab => {
      // Remove events
      $tab.removeEventListener('click', this.boundTabClick, true);
      $tab.removeEventListener('keydown', this.boundTabKeydown, true);

      // Unset HTML attributes
      this.unsetAttributes($tab);
    });

    // Remove hashchange event handler
    window.removeEventListener('hashchange', this.boundOnHashChange, true);
  }

  /**
   * Handle hashchange event
   */
  onHashChange() {
    const {
      hash
    } = window.location;
    const $tabWithHash = this.getTab(hash);
    if (!$tabWithHash) {
      return;
    }

    // Prevent changing the hash
    if (this.changingHash) {
      this.changingHash = false;
      return;
    }

    // Show either the active tab according to the URL's hash or the first tab
    const $previousTab = this.getCurrentTab();
    if (!$previousTab) {
      return;
    }
    this.hideTab($previousTab);
    this.showTab($tabWithHash);
    $tabWithHash.focus();
  }

  /**
   * Hide panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hideTab($tab) {
    this.unhighlightTab($tab);
    this.hidePanel($tab);
  }

  /**
   * Show panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showTab($tab) {
    this.highlightTab($tab);
    this.showPanel($tab);
  }

  /**
   * Get tab link by hash
   *
   * @param {string} hash - Hash fragment including #
   */
  getTab(hash) {
    return this.$root.querySelector(`a.nhsuk-tabs__tab[href="${hash}"]`);
  }

  /**
   * Set tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  setAttributes($tab) {
    const panelId = $tab.hash.replace('#', '');
    if (!panelId) {
      return;
    }

    // set tab attributes
    $tab.setAttribute('id', `tab_${panelId}`);
    $tab.setAttribute('role', 'tab');
    $tab.setAttribute('aria-controls', panelId);
    $tab.setAttribute('aria-selected', 'false');
    $tab.setAttribute('tabindex', '-1');

    // set panel attributes
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.setAttribute('role', 'tabpanel');
    $panel.setAttribute('aria-labelledby', $tab.id);
    $panel.classList.add(this.jsHiddenClass);
  }

  /**
   * Unset tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unsetAttributes($tab) {
    // unset tab attributes
    $tab.removeAttribute('id');
    $tab.removeAttribute('role');
    $tab.removeAttribute('aria-controls');
    $tab.removeAttribute('aria-selected');
    $tab.removeAttribute('tabindex');

    // unset panel attributes
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.removeAttribute('role');
    $panel.removeAttribute('aria-labelledby');
    $panel.removeAttribute('tabindex');
    $panel.classList.remove(this.jsHiddenClass);
  }

  /**
   * Handle tab link clicks
   *
   * @param {MouseEvent} event - Mouse click event
   */
  onTabClick(event) {
    const $currentTab = this.getCurrentTab();
    const $newTab = event.currentTarget;
    if (!$currentTab || !($newTab instanceof HTMLAnchorElement)) {
      return;
    }
    event.preventDefault();
    this.hideTab($currentTab);
    this.showTab($newTab);
    this.createHistoryEntry($newTab);
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
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }

    // Save and restore the id
    // so the page doesn't jump when a user clicks a tab (which changes the hash)
    const panelId = $panel.id;
    $panel.id = '';
    this.changingHash = true;
    window.location.hash = panelId;
    $panel.id = panelId;
  }

  /**
   * Handle tab keydown event
   *
   * - Press right/down arrow for next tab
   * - Press left/up arrow for previous tab
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  onTabKeydown(event) {
    switch (event.key) {
      // 'Left', 'Right', 'Up' and 'Down' required for Edge 16 support.
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'Left':
      case 'Up':
        this.activatePreviousTab();
        event.preventDefault();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
      case 'Right':
      case 'Down':
        this.activateNextTab();
        event.preventDefault();
        break;
    }
  }

  /**
   * Activate next tab
   */
  activateNextTab() {
    const $currentTab = this.getCurrentTab();
    if (!($currentTab != null && $currentTab.parentElement)) {
      return;
    }
    const $nextTabListItem = $currentTab.parentElement.nextElementSibling;
    if (!$nextTabListItem) {
      return;
    }
    const $nextTab = $nextTabListItem.querySelector('a.nhsuk-tabs__tab');
    if (!$nextTab) {
      return;
    }
    this.hideTab($currentTab);
    this.showTab($nextTab);
    $nextTab.focus();
    this.createHistoryEntry($nextTab);
  }

  /**
   * Activate previous tab
   */
  activatePreviousTab() {
    const $currentTab = this.getCurrentTab();
    if (!($currentTab != null && $currentTab.parentElement)) {
      return;
    }
    const $previousTabListItem = $currentTab.parentElement.previousElementSibling;
    if (!$previousTabListItem) {
      return;
    }
    const $previousTab = $previousTabListItem.querySelector('a.nhsuk-tabs__tab');
    if (!$previousTab) {
      return;
    }
    this.hideTab($currentTab);
    this.showTab($previousTab);
    $previousTab.focus();
    this.createHistoryEntry($previousTab);
  }

  /**
   * Get tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  getPanel($tab) {
    const panelId = $tab.hash.replace('#', '');
    if (!panelId) {
      return null;
    }
    return this.$root.querySelector(`#${panelId}`);
  }

  /**
   * Show tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showPanel($tab) {
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.classList.remove(this.jsHiddenClass);
  }

  /**
   * Hide tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hidePanel($tab) {
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.classList.add(this.jsHiddenClass);
  }

  /**
   * Unset 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unhighlightTab($tab) {
    if (!$tab.parentElement) {
      return;
    }
    $tab.setAttribute('aria-selected', 'false');
    $tab.parentElement.classList.remove('nhsuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '-1');
  }

  /**
   * Set 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  highlightTab($tab) {
    if (!$tab.parentElement) {
      return;
    }
    $tab.setAttribute('aria-selected', 'true');
    $tab.parentElement.classList.add('nhsuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '0');
  }

  /**
   * Get current tab link
   */
  getCurrentTab() {
    return this.$root.querySelector('.nhsuk-tabs__list-item--selected a.nhsuk-tabs__tab');
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise tabs component
 *
 * @deprecated Use {@link createAll | `createAll(Tabs)`} instead.
 * @param {InitOptions} [options]
 */
Tabs.moduleName = 'nhsuk-tabs';
function initTabs(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $tabs = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Tabs.moduleName}"]`);
  $tabs == null || $tabs.forEach($root => {
    new Tabs($root);
  });
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

export { Tabs, initTabs };
//# sourceMappingURL=tabs.mjs.map
