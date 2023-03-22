/**
 * Toggle a boolean attribute on a HTML element
 * @param {HTMLElement} element
 * @param {string} attr
 */
export const toggleAttribute = (element, attr) => {
  // Return without error if element or attr are missing
  if (!element || !attr) return
  // Toggle attribute value. Treat no existing attr same as when set to false
  const value = element.getAttribute(attr) === 'true' ? 'false' : 'true'
  element.setAttribute(attr, value)
}

/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 * @param {HTMLElement} input input element
 * @param {string} className class to toggle
 */
export const toggleConditionalInput = (input, className) => {
  // Return without error if input or class are missing
  if (!input || !className) return
  // If the input has conditional content it had a data-aria-controls attribute
  const conditionalId = input.getAttribute('aria-controls')
  if (conditionalId) {
    // Get the conditional element from the input data-aria-controls attribute
    const conditionalElement = document.getElementById(conditionalId)
    if (conditionalElement) {
      if (input.checked) {
        conditionalElement.classList.remove(className)
        input.setAttribute('aria-expanded', true)
      } else {
        conditionalElement.classList.add(className)
        input.setAttribute('aria-expanded', false)
      }
    }
  }
}
