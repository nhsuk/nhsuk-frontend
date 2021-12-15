import MenuToggle from './menuToggle';

// Mock HTML
const toggleButtonHtml = '<button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-expanded="false">Menu</button>';
const closeButtonHtml = '<button class="nhsuk-header__navigation-close" id="close-menu"><span class="nhsuk-u-visually-hidden">Close menu</span></button>';
const navHtml = '<nav class="nhsuk-header__navigation" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation"></nav>';

// DOM Elements to be set
let toggleButton;
let closeButton;
let nav;

// Helper to set DOM Elements
const initTest = (html) => {
  document.body.innerHTML = html || toggleButtonHtml + closeButtonHtml + navHtml;
  toggleButton = document.querySelector('.nhsuk-header__menu-toggle');
  closeButton = document.querySelector('.nhsuk-header__navigation-close');
  nav = document.querySelector('.nhsuk-header__navigation');
  MenuToggle();
};

describe('NHS.UK menuToggle()', () => {
  describe('does not throw an error', () => {
    it('if no elements exists', () => {
      MenuToggle();
    });
    it('if no toggleButton exists', () => {
      initTest(closeButtonHtml + navHtml);
      expect(toggleButton).toBeNull();
      expect(closeButton).toBeDefined();
      expect(nav).toBeDefined();
    });

    it('if no closeButton exists', () => {
      initTest(toggleButtonHtml + navHtml);
      expect(toggleButton).toBeDefined();
      expect(closeButton).toBeNull();
      expect(nav).toBeDefined();
    });

    it('if no nav exists', () => {
      initTest(toggleButtonHtml + closeButtonHtml);
      expect(toggleButton).toBeDefined();
      expect(closeButton).toBeDefined();
      expect(nav).toBeNull();
    });
  });

  describe('Adds correct classes to elements', () => {
    it('when toggleButton is clicked for the first time', () => {
      initTest();
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(toggleButton.classList.contains('is-active')).toEqual(true);
      expect(nav.classList.contains('js-show')).toEqual(true);
    });

    it('when toggleButton is clicked twice', () => {
      initTest();
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(toggleButton.classList.contains('is-active')).toEqual(true);
      expect(nav.classList.contains('js-show')).toEqual(true);
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false');
      expect(toggleButton.classList.contains('is-active')).toEqual(false);
      expect(nav.classList.contains('js-show')).toEqual(false);
    });

    it('when toggleButton is clicked then closeButton is clicked', () => {
      initTest();
      toggleButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(toggleButton.classList.contains('is-active')).toEqual(true);
      expect(nav.classList.contains('js-show')).toEqual(true);
      closeButton.click();
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false');
      expect(toggleButton.classList.contains('is-active')).toEqual(false);
      expect(nav.classList.contains('js-show')).toEqual(false);
    });
  });
});
