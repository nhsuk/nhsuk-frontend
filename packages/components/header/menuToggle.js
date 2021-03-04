import { toggleAttribute } from '../../common';

/**
 * Handle menu show and hide for mobile
*/
export default () => {
  // HTMLElements
  const toggleButton = document.querySelector('#toggle-menu');
  const closeButton = document.querySelector('#close-menu');
  const nav = document.querySelector('#header-navigation');

  /**
   * Toggle classes and attributes
   * @param {Object} event click event object
  */
  const toggleMenu = (event) => {
    event.preventDefault();
    // Toggle aria-expanded for accessibility
    toggleAttribute(toggleButton, 'aria-expanded');
    // Toggle classes to apply CSS
    toggleButton.classList.toggle('is-active');
    nav.classList.toggle('js-show');
  };

  // Check all necessary HTMLElements exist
  if (toggleButton && closeButton && nav) {
    // Attach toggleMenu as click to any elements which need it
    [toggleButton, closeButton].forEach((elem) => {
      elem.addEventListener('click', toggleMenu);
    });
  }
};
