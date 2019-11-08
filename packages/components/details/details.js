import { toggleAttribute } from '../../common';

export default () => {
  // Does the browser support details component
  const nativeSupport = typeof document.createElement('details').open === 'boolean';
  // Nodelist of all details elements
  const allDetails = document.querySelectorAll('details');

  /**
   * Adds all necessary functionality to a details element
   * @param {HTMLElement} element details element to initialise
   * @param {number} index number to be appended to dynamic IDs
  */
  const initDetails = (element, index) => {
    // Set details element as polyfilled to prevent duplicate events being added
    element.setAttribute('nhsuk-polyfilled', 'true');

    // Give details element an ID if it doesn't already have one
    if (!element.id) element.setAttribute('id', `nhsuk-details${index}`);

    // Set content element and give it an ID if it doesn't already have one
    const content = document.querySelector(`#${element.id} .nhsuk-details__text`);
    if (!content.id) content.setAttribute('id', `nhsuk-details__text${index}`);

    // Set summary element
    const summary = document.querySelector(`#${element.id} .nhsuk-details__summary`);

    // Set initial summary aria attributes
    summary.setAttribute('role', 'button');
    summary.setAttribute('aria-controls', content.id);
    summary.setAttribute('tabIndex', '0');
    const openAttr = element.getAttribute('open') !== null;
    if (openAttr === true) {
      summary.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    } else {
      summary.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
      // Hide content on browsers without native details support
      if (!nativeSupport) content.style.display = 'none';
    }

    const toggleDetails = () => {
      toggleAttribute(summary, 'aria-expanded');
      toggleAttribute(content, 'aria-hidden');

      if (!nativeSupport) {
        content.style.display = content.getAttribute('aria-hidden') === 'true' ? 'none' : '';
        if (element.hasAttribute('open')) {
          element.removeAttribute('open');
        } else {
          element.setAttribute('open', 'open');
        }
      }
    };

    // Toggle details onclick
    summary.addEventListener('click', () => toggleDetails());

    // Call toggle details on enter and space key events
    summary.addEventListener('keydown', (event) => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        summary.click();
      }
    });
  };

  // Initialise details for any new details element
  if (allDetails.length) {
    Array.prototype.slice.call(allDetails).forEach((element, index) => {
      if (!element.hasAttribute('nhsuk-polyfilled')) initDetails(element, index);
    });
  }
};
