import { toggleAttribute, toggleClass } from '../../common';

export default () => {
  const toggleButton = document.querySelector('#toggle-menu');
  const closeButton = document.querySelector('#close-menu');
  const nav = document.querySelector('#header-navigation');

  const toggleMenu = (event) => {
    event.preventDefault();
    toggleAttribute(toggleButton, 'aria-expanded');
    toggleClass(toggleButton, 'is-active');
    toggleClass(nav, 'js-show');
  };

  const addEvents = () => {
    [toggleButton, closeButton].forEach((elem) => {
      elem.addEventListener('click', toggleMenu);
    });
  };

  if (toggleButton && closeButton && nav) addEvents();
};
