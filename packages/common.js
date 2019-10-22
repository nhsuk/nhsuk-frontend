/**
 * Toggle a class on a HTML element
 * @param {HTMLElement} element
 * @param {string} className
*/
export const toggleClass = (element, className) => {
  // Return without error if element or class are missing
  if (!element || !className) return;
  // Set a ref to the passed element and its classes
  const elemRef = element;
  const classes = element.className;
  // Regex to check if class already exists on element
  const regex = new RegExp(`\\b ${className}\\b`);
  if (classes.match(regex)) {
    // Remove class if it already exists
    elemRef.className = classes.replace(regex, '');
  } else {
    // Add class if it doesnt already exist
    elemRef.className = `${classes} ${className.trim()}`;
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
