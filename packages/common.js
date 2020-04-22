/**
 * Get an array of an HTML elements classes
 * @param {HTMLElement} element
 * @returns {string[]} string array of class names
*/
export const getClasses = (element) => {
  // Return without error if element or class are missing
  if (!element) return [];
  return element.className.split(' ').filter(Boolean);
};

/**
 * Does a class exist on an element
 * @param {HTMLElement} element
 * @returns {Boolean} true if element has class
*/
export const hasClass = (element, className) => {
  // Return without error if element or class are missing
  if (!element || !className) return false;
  return getClasses(element).includes(className);
};

/**
 * Remove a class on a HTML element
 * @param {HTMLElement} element
 * @param {string} className
*/
export const removeClass = (element, className) => {
  // Return without error if element or class are missing
  if (!element || !className) return;
  if (hasClass(element, className)) {
    // Array of all existing classes
    const existingClasses = getClasses(element, className);
    // String of existing classes minus the class to remove
    const newClasses = existingClasses.filter((existingClass) => existingClass !== className).join(' ');
    // Set class attribute to the new classes
    element.setAttribute('class', newClasses);
  }
};

/**
 * Add a class on a HTML element
 * @param {HTMLElement} element
 * @param {string} className
*/
export const addClass = (element, className) => {
  // Return without error if element or class are missing
  if (!element || !className) return;
  if (!hasClass(element, className)) {
    // Set class attribute to the new classes
    element.setAttribute('class', `${element.className} ${className}`.trim());
  }
};

/**
 * Toggle a class on a HTML element
 * @param {HTMLElement} element
 * @param {string} className
*/
export const toggleClass = (element, className) => {
  if (!element || !className) return;
  if (hasClass(element, className)) {
    removeClass(element, className);
  } else {
    addClass(element, className);
  }
};

/**
 * Toggle a boolean attribute on a HTML element
 * @param {HTMLElement} element
 * @param {string} attr
*/
export const toggleAttribute = (element, attr) => {
  // Return without error if element or attr are missing
  if (!element || !attr) return;
  // Toggle attribute value. Treat no existing attr same as when set to false
  const value = (element.getAttribute(attr) === 'true') ? 'false' : 'true';
  element.setAttribute(attr, value);
};

/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 * @param {HTMLElement} input input element
 * @param {string} className class to toggle
*/
export const toggleConditionalInput = (input, className) => {
  // Return without error if input or class are missing
  if (!input || !className) return;
  // If the input has conditional content it had a data-aria-controls attribute
  const conditionalId = input.getAttribute('aria-controls');
  if (conditionalId) {
    // Get the conditional element from the input data-aria-controls attribute
    const conditionalElement = document.getElementById(conditionalId);
    if (conditionalElement) {
      toggleClass(conditionalElement, className);
      toggleAttribute(input, 'aria-expanded');
    }
  }
};
