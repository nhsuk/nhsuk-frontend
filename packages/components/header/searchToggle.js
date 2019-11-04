import { toggleAttribute, toggleClass } from '../../common';

export default () => {
  const toggleButton = document.querySelector('#toggle-search');
  const closeButton = document.querySelector('#close-search');
  const searchContainer = document.querySelector('#wrap-search');
  const menuSearchContainer = document.querySelector('#content-header');

  const toggleSearch = (event) => {
    event.preventDefault();
    toggleAttribute(toggleButton, 'aria-expanded');
    toggleClass(toggleButton, 'is-active');
    toggleClass(searchContainer, 'js-show');
    toggleClass(menuSearchContainer, 'js-show');
  };

  const addEvents = () => {
    [toggleButton, closeButton].forEach((elem) => {
      elem.addEventListener('click', toggleSearch);
    });
  };

  if (toggleButton && closeButton) addEvents();
};
