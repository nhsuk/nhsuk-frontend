/*
 * Header
 *
 * Functionality to toggle the search and menu dropdowns
 * on tablet and mobile devices.
 */

/* Toggle a class on a given element */
function toggleClass(ele, class1) {
  /* eslint-disable prefer-template, no-useless-concat, no-param-reassign */
  const classes = ele.className;
  const regex = new RegExp('\\b' + ' ' + class1 + '\\b');
  const hasOne = classes.match(regex);
  class1 = class1.replace(/\s+/g, '');
  if (hasOne) {
    ele.className = classes.replace(regex, '');
  } else {
    ele.className = classes + ' ' + class1;
  }
}

/* Toggle the "aria-expanded" attribute on a given element */
function toggleAriaExpanded(element) {
  if (element.hasAttribute('aria-expanded')) {
    element.removeAttribute('aria-expanded');
  } else {
    element.setAttribute('aria-expanded', 'true');
  }
}
class Search {
  constructor() {
    this.searchToggleButton = document.querySelector('#toggle-search');
    this.searchClose = document.querySelector('#close-search');
    this.searchContainer = document.querySelector('#wrap-search');
    this.menuSearchContainer = document.querySelector('#content-header');

    this.attachListeners();
  }

  attachListeners() {
    if (this.searchToggleButton) {
      this.searchToggleButton.addEventListener('click', this.toggle.bind(this));
    }
    if (this.searchClose) {
      this.searchClose.addEventListener('click', this.toggle.bind(this));
    }
  }

  toggle(e) {
    e.preventDefault();
    toggleAriaExpanded(this.searchToggleButton);
    toggleClass(this.searchToggleButton, 'is-active');
    toggleClass(this.searchContainer, 'js-show');
    toggleClass(this.menuSearchContainer, 'js-show');
  }
}

class Menu {
  constructor() {
    this.menuToggleButton = document.querySelector('#toggle-menu');
    this.menuClose = document.querySelector('#close-menu');
    this.nav = document.querySelector('#header-navigation');

    this.attachListeners();
  }

  attachListeners() {
    if (this.menuToggleButton) {
      this.menuToggleButton.addEventListener('click', this.toggle.bind(this));
    }
    if (this.menuClose) {
      this.menuClose.addEventListener('click', this.toggle.bind(this));
    }
  }

  toggle() {
    toggleAriaExpanded(this.menuToggleButton);
    toggleClass(this.menuToggleButton, 'is-active');
    toggleClass(this.nav, 'js-show');
  }
}

/*
 * Initialize the search and menu toggles in the menu.
 * Return an object containing the search and menu objects.
 */
function nhsuk_header() { /* eslint-disable-line camelcase */
  return {
    menu: new Menu(),
    search: new Search(),
  };
}

export default nhsuk_header; /* eslint-disable-line camelcase */
