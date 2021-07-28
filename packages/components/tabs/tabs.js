// import "../../vendor/polyfills/Function/prototype/bind";
// import "../../vendor/polyfills/Element/prototype/classList";
// import "../../vendor/polyfills/Element/prototype/nextElementSibling";
// import "../../vendor/polyfills/Element/prototype/previousElementSibling";
// import "../../vendor/polyfills/Event"; // addEventListener and event.target normaliziation

function Tabs($module, namespace, responsive, historyEnabled) {
  this.$module = $module;
  this.namespace = namespace;
  this.responsive = responsive;
  this.historyEnabled = historyEnabled;
  this.$tabs = $module.querySelectorAll(`.${this.namespace}__tab`);

  this.keys = {
    down: 40, left: 37, right: 39, up: 38,
  };
  this.jsHiddenClass = `${this.namespace}__panel--hidden`;
}

Tabs.prototype.init = function init() {
  if (typeof window.matchMedia === 'function' && this.responsive) {
    this.setupResponsiveChecks();
  } else {
    this.setup();
  }
};

Tabs.prototype.setupResponsiveChecks = function setupResponsiveChecks() {
  this.mql = window.matchMedia('(min-width: 40.0625em)');
  this.mql.addListener(this.checkMode.bind(this));
  this.checkMode();
};

Tabs.prototype.checkMode = function checkMode() {
  if (this.mql.matches) {
    this.setup();
  } else {
    this.teardown();
  }
};

Tabs.prototype.setup = function setup() {
  const { $module } = this;
  const { $tabs } = this;
  const $tabList = $module.querySelector(`.${this.namespace}__list`);
  const $tabListItems = $module.querySelectorAll(`.${this.namespace}__list-item`);

  if (!$tabs || !$tabList || !$tabListItems) {
    return;
  }

  $tabList.setAttribute('role', 'tablist');

  $tabListItems.forEach(($item) => {
    $item.setAttribute('role', 'presentation');
  });

  $tabs.forEach(
    ($tab) => {
      // Set HTML attributes
      this.setAttributes($tab);

      // Save bounded functions to use when removing event listeners during teardown
      $tab.boundTabClick = this.onTabClick.bind(this); // eslint-disable-line no-param-reassign
      $tab.boundTabKeydown = this.onTabKeydown.bind(this); // eslint-disable-line no-param-reassign

      // Handle events
      $tab.addEventListener('click', $tab.boundTabClick, true);
      $tab.addEventListener('keydown', $tab.boundTabKeydown, true);

      // Remove old active panels
      this.hideTab($tab);
    }
  );

  // Show either the active tab according to the URL's hash or the first tab
  const $activeTab = this.getTab(window.location.hash) || this.$tabs[0];
  this.showTab($activeTab);

  // Handle hashchange events
  if (this.historyEnabled) {
    $module.boundOnHashChange = this.onHashChange.bind(this);
    window.addEventListener('hashchange', $module.boundOnHashChange, true);
  }
};

Tabs.prototype.teardown = function teardown() {
  const { $module } = this;
  const { $tabs } = this;
  const $tabList = $module.querySelector(`.${this.namespace}__list`);
  const $tabListItems = $module.querySelectorAll(`.${this.namespace}__list-item`);

  if (!$tabs || !$tabList || !$tabListItems) {
    return;
  }

  $tabList.removeAttribute('role');

  $tabListItems.forEach(($item) => {
    $item.removeAttribute('role', 'presentation');
  });

  $tabs.forEach(
    ($tab) => {
      // Remove events
      $tab.removeEventListener('click', $tab.boundTabClick, true);
      $tab.removeEventListener('keydown', $tab.boundTabKeydown, true);

      // Unset HTML attributes
      this.unsetAttributes($tab);
    }
  );

  if (this.historyEnabled) {
    // Remove hashchange event handler
    window.removeEventListener('hashchange', $module.boundOnHashChange, true);
  }
};

Tabs.prototype.onHashChange = function onHashChange() {
  const { hash } = window.location;
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

  this.hideTab($previousTab);
  this.showTab($tabWithHash);
  $tabWithHash.focus();
};

Tabs.prototype.hideTab = function hideTab($tab) {
  this.unhighlightTab($tab);
  this.hidePanel($tab);
};

Tabs.prototype.showTab = function showTab($tab) {
  this.highlightTab($tab);
  this.showPanel($tab);
};

Tabs.prototype.getTab = function getTab(hash) {
  return this.$module.querySelector(`.${this.namespace}__tab[href="${hash}"]`);
};

Tabs.prototype.setAttributes = function setAttributes($tab) {
  // set tab attributes
  const panelId = this.getHref($tab).slice(1);
  $tab.setAttribute('id', `tab_${panelId}`);
  $tab.setAttribute('role', 'tab');
  $tab.setAttribute('aria-controls', panelId);
  $tab.setAttribute('aria-selected', 'false');
  $tab.setAttribute('tabindex', '-1');

  // set panel attributes
  const $panel = this.getPanel($tab);
  $panel.setAttribute('role', 'tabpanel');
  $panel.setAttribute('aria-labelledby', $tab.id);
  $panel.classList.add(this.jsHiddenClass);
};

Tabs.prototype.unsetAttributes = function unsetAttributes($tab) {
  // unset tab attributes
  $tab.removeAttribute('id');
  $tab.removeAttribute('role');
  $tab.removeAttribute('aria-controls');
  $tab.removeAttribute('aria-selected');
  $tab.removeAttribute('tabindex');

  // unset panel attributes
  const $panel = this.getPanel($tab);
  $panel.removeAttribute('role');
  $panel.removeAttribute('aria-labelledby');
  $panel.removeAttribute('tabindex');
  $panel.classList.remove(this.jsHiddenClass);
};

Tabs.prototype.onTabClick = function onTabClick(e) { // eslint-disable-line consistent-return
  if (!e.target.classList.contains(`${this.namespace}__tab`)) {
    // Allow events on child DOM elements to bubble up to tab parent
    return false;
  }
  e.preventDefault();
  const $newTab = e.target;
  const $currentTab = this.getCurrentTab();
  this.hideTab($currentTab);
  this.showTab($newTab);
  this.createHistoryEntry($newTab);
};

Tabs.prototype.createHistoryEntry = function createHistoryEntry($tab) {
  if (this.historyEnabled) {
    const $panel = this.getPanel($tab);

    // Save and restore the id
    // so the page doesn't jump when a user clicks a tab (which changes the hash)
    const { id } = $panel;
    $panel.id = '';
    this.changingHash = true;
    window.location.hash = this.getHref($tab).slice(1);
    $panel.id = id;
  }
};

Tabs.prototype.onTabKeydown = function onTabKeydown(e) {
  switch (e.keyCode) {
    case this.keys.left:
    case this.keys.up:
      this.activatePreviousTab();
      e.preventDefault();
      break;
    case this.keys.right:
    case this.keys.down:
      this.activateNextTab();
      e.preventDefault();
      break;

    default:
  }
};

Tabs.prototype.activateNextTab = function activateNextTab() {
  const currentTab = this.getCurrentTab();
  const nextTabListItem = currentTab.parentNode.nextElementSibling;
  let nextTab;

  if (nextTabListItem) {
    nextTab = nextTabListItem.querySelector(`.${this.namespace}__tab`);
  }
  if (nextTab) {
    this.hideTab(currentTab);
    this.showTab(nextTab);
    nextTab.focus();
    this.createHistoryEntry(nextTab);
  }
};

Tabs.prototype.activatePreviousTab = function activatePreviousTab() {
  const currentTab = this.getCurrentTab();
  const previousTabListItem = currentTab.parentNode.previousElementSibling;
  let previousTab;

  if (previousTabListItem) {
    previousTab = previousTabListItem.querySelector(
      `.${this.namespace}__tab`
    );
  }
  if (previousTab) {
    this.hideTab(currentTab);
    this.showTab(previousTab);
    previousTab.focus();
    this.createHistoryEntry(previousTab);
  }
};

Tabs.prototype.getPanel = function getPanel($tab) {
  const $panel = this.$module.querySelector(this.getHref($tab));
  return $panel;
};

Tabs.prototype.showPanel = function showPanel($tab) {
  const $panel = this.getPanel($tab);
  $panel.classList.remove(this.jsHiddenClass);
};

Tabs.prototype.hidePanel = function hidePanel(tab) {
  const $panel = this.getPanel(tab);
  $panel.classList.add(this.jsHiddenClass);
};

Tabs.prototype.unhighlightTab = function unhighlightTab($tab) {
  $tab.setAttribute('aria-selected', 'false');
  $tab.parentNode.classList.remove(`${this.namespace}__list-item--selected`);
  $tab.setAttribute('tabindex', '-1');
};

Tabs.prototype.highlightTab = function highlightTab($tab) {
  $tab.setAttribute('aria-selected', 'true');
  $tab.parentNode.classList.add(`${this.namespace}__list-item--selected`);
  $tab.setAttribute('tabindex', '0');
};

Tabs.prototype.getCurrentTab = function getCurrentTab() {
  return this.$module.querySelector(
    `.${this.namespace}__list-item--selected .${this.namespace}__tab`
  );
};

// this is because IE doesn't always return the actual value but a relative full path
// should be a utility function most prob
// http://labs.thesedays.com/blog/2010/01/08/getting-the-href-value-with-jquery-in-ie/
Tabs.prototype.getHref = function getHref($tab) {
  const href = $tab.getAttribute('href');
  const hash = href.slice(href.indexOf('#'), href.length);
  return hash;
};

/**
 * Main function to invoke tabs. Can be called as follows to alter various features
 *
 * Tabs({historyEnabled: false});
 * Tabs({responsive: false});
 * Tabs({namespace: 'my-custom-namespace'});  // Alters classes allowing alternative css
 */
export default ({ namespace = 'nhsuk-tabs', responsive = true, historyEnabled = true } = {}) => {
  const tabs = document.querySelectorAll(`[data-module="${namespace}"]`);
  tabs.forEach((el) => {
    new Tabs(el, namespace, responsive, historyEnabled).init();
  });
};
