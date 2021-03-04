import { toggleAttribute } from '../../common';

/**
 * Handle search show and hide for mobile
*/
export default () => {
  // HTMLElements
  const toggleButton = document.querySelector('#toggle-search');
  const closeButton = document.querySelector('#close-search');
  const searchContainer = document.querySelector('#wrap-search');
  const menuSearchContainer = document.querySelector('#content-header');

  /**
   * Toggle classes and attributes
   * @param {Object} event click event object
  */
  const toggleSearch = (event) => {
    event.preventDefault();
    // Toggle aria-expanded for accessibility
    toggleAttribute(toggleButton, 'aria-expanded');
    // Toggle classes to apply CSS
    toggleButton.classList.toggle('is-active');
    searchContainer.classList.toggle('js-show');
    menuSearchContainer.classList.toggle('js-show');
  };

  // Check all necessary HTMLElements exist
  if (toggleButton && closeButton) {
    // Attach toggleSearch as click to any elements which need it
    [toggleButton, closeButton].forEach((elem) => {
      elem.addEventListener('click', toggleSearch);
    });
  }
};
