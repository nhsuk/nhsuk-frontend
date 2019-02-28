/*
 * Header
 *
 * Functionality to toggle the search and menu dropdowns
 * on tablet and mobile devices.
 */

/* Shared function to toggle class names */

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

/* Search toggle */
function toggleSearch(e) {
  const searchToggleButton = document.querySelector('#toggle-search');
  const searchContainer = document.querySelector('#wrap-search');
  const menuSearchContainer = document.querySelector('#content-header');

  e.preventDefault();

  if (searchToggleButton.hasAttribute('aria-expanded')) {
    searchToggleButton.removeAttribute('aria-expanded');
  } else {
    searchToggleButton.setAttribute('aria-expanded', 'true');
  }

  toggleClass(searchToggleButton, 'is-active');
  toggleClass(searchContainer, 'js-show');
  toggleClass(menuSearchContainer, 'js-show');
}

function handleSearchToggle() {
  const searchToggleButton = document.querySelector('#toggle-search');
  const searchClose = document.querySelector('#close-search');

  if (searchToggleButton) {
    searchToggleButton.addEventListener('click', toggleSearch);
  }
  if (searchClose) {
    searchClose.addEventListener('click', toggleSearch);
  }
}

/* Menu toggle */

function toggleMenu(e) {
  const menuToggleButton = document.querySelector('#toggle-menu');
  const nav = document.querySelector('#header-navigation');

  e.preventDefault();

  if (menuToggleButton.hasAttribute('aria-expanded')) {
    menuToggleButton.removeAttribute('aria-expanded');
  } else {
    menuToggleButton.setAttribute('aria-expanded', 'true');
  }

  toggleClass(menuToggleButton, 'is-active');
  toggleClass(nav, 'js-show');
}

function handleMenuToggle() {
  const menuToggleButton = document.querySelector('#toggle-menu');
  const menuClose = document.querySelector('#close-menu');

  if (menuToggleButton) {
    menuToggleButton.addEventListener('click', toggleMenu);
  }
  if (menuClose) {
    menuClose.addEventListener('click', toggleMenu);
  }
}

/* Header */

function nhsuk_header() { /* eslint-disable-line camelcase */
  handleSearchToggle();
  handleMenuToggle();
}

export default nhsuk_header; /* eslint-disable-line camelcase */
