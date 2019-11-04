import SearchToggle from '../../packages/components/header/searchToggle';

const toggleButtonHtml = '<button class="nhsuk-header__search-toggle" id="toggle-search" aria-controls="search" aria-label="Open search" aria-expanded="false"><span class="nhsuk-u-visually-hidden">Search</span></button>';
const closeButtonHtml = '<button class="nhsuk-search__close" id="close-search"><span class="nhsuk-u-visually-hidden">Close search</span></button>';
const searchContainerHtml = '<div class="nhsuk-header__search-wrap" id="wrap-search"></div>';
const menuSearchContainerHtml = '<div class="nhsuk-header__content" id="content-header"></div>';

// DOM Elements to be set
let toggleButton;
let closeButton;
let searchContainer;
let menuSearchContainer;

// Helper to set DOM Elements
const initTest = (html) => {
  document.body.innerHTML = html
    || toggleButtonHtml + closeButtonHtml + searchContainerHtml + menuSearchContainerHtml;
  toggleButton = document.querySelector('#toggle-search');
  closeButton = document.querySelector('#close-search');
  searchContainer = document.querySelector('#wrap-search');
  menuSearchContainer = document.querySelector('#content-header');
  SearchToggle();
};

describe('NHS.UK menuToggle()', () => {
  describe('Does not throw an error', () => {
    it('if no document exists', () => {
      SearchToggle();
    });
    it('if no toggleButton exists', () => {
      initTest(closeButtonHtml + searchContainerHtml + menuSearchContainerHtml);
      expect(toggleButton).toBeNull();
      expect(closeButton).toBeDefined();
      expect(searchContainerHtml).toBeDefined();
      expect(menuSearchContainerHtml).toBeDefined();
    });

    it('if no closeButton exists', () => {
      initTest(toggleButtonHtml + searchContainerHtml + menuSearchContainerHtml);
      expect(toggleButton).toBeDefined();
      expect(closeButton).toBeNull();
      expect(searchContainerHtml).toBeDefined();
      expect(menuSearchContainerHtml).toBeDefined();
    });

    it('if no searchContainerHtml exists', () => {
      initTest(toggleButtonHtml + closeButtonHtml + menuSearchContainerHtml);
      expect(toggleButton).toBeDefined();
      expect(closeButton).toBeDefined();
      expect(searchContainer).toBeNull();
      expect(menuSearchContainer).toBeDefined();
    });

    it('if no menuSearchContainerHtml exists', () => {
      initTest(toggleButtonHtml + closeButtonHtml + searchContainerHtml);
      expect(toggleButton).toBeDefined();
      expect(closeButton).toBeDefined();
      expect(searchContainer).toBeDefined();
      expect(menuSearchContainer).toBeNull();
    });
  });

  describe('Adds correct classes and attributes to elements', () => {
    it('when toggleButton is clicked for the first time', () => {
      initTest();
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(toggleButton.classList.contains('is-active')).toEqual(true);
      expect(searchContainer.classList.contains('js-show')).toEqual(true);
      expect(menuSearchContainer.classList.contains('js-show')).toEqual(true);
    });

    it('when toggleButton is clicked twice', () => {
      initTest();
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(searchContainer.classList.contains('js-show')).toEqual(true);
      expect(menuSearchContainer.classList.contains('js-show')).toEqual(true);
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false');
      expect(searchContainer.classList.contains('js-show')).toEqual(false);
      expect(menuSearchContainer.classList.contains('js-show')).toEqual(false);
    });

    it('when toggleButton is clicked then closeButton is clicked', () => {
      initTest();
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(searchContainer.classList.contains('js-show')).toEqual(true);
      expect(menuSearchContainer.classList.contains('js-show')).toEqual(true);
      closeButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false');
      expect(searchContainer.classList.contains('js-show')).toEqual(false);
      expect(menuSearchContainer.classList.contains('js-show')).toEqual(false);
    });
  });
});
