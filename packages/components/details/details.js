const { generateUniqueID, toggleAttribute } = require('../../common')

/**
 * Ensure details component is cross browser and accessible
 * Test at http://localhost:3000/nhsuk-frontend/components/details/index.html
 */

module.exports = ({ scope = document } = {}) => {
  // Nodelist of all details elements
  const allDetails = scope.querySelectorAll('details')

  /**
   * Adds all necessary functionality to a details element
   *
   * @param {HTMLElement} element - details element to initialise
   */
  const initDetails = (element) => {
    // Set details element as polyfilled to prevent duplicate events being added
    element.setAttribute('nhsuk-polyfilled', 'true')

    // Set content element and give it an ID if it doesn't already have one
    const content = element.querySelector('.nhsuk-details__text')
    if (!content.id) {
      content.setAttribute('id', `details-content-${generateUniqueID()}`)
    }

    // Set summary element
    const summary = element.querySelector('.nhsuk-details__summary')

    // Set initial summary aria attributes
    summary.setAttribute('role', 'button')
    summary.setAttribute('aria-controls', content.id)
    summary.setAttribute('tabIndex', '0')
    const openAttr = element.getAttribute('open') !== null
    if (openAttr === true) {
      summary.setAttribute('aria-expanded', 'true')
      content.setAttribute('aria-hidden', 'false')
    } else {
      summary.setAttribute('aria-expanded', 'false')
      content.setAttribute('aria-hidden', 'true')
      content.style.display = 'none'
    }

    const toggleDetails = () => {
      toggleAttribute(summary, 'aria-expanded')
      toggleAttribute(content, 'aria-hidden')

      content.style.display =
        content.getAttribute('aria-hidden') === 'true' ? 'none' : ''
      if (element.hasAttribute('open')) {
        element.removeAttribute('open')
      } else {
        element.setAttribute('open', 'open')
      }
    }

    // Toggle details onclick
    summary.addEventListener('click', toggleDetails)

    // Call toggle details on enter and space key events
    summary.addEventListener('keydown', (event) => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault()
        summary.click()
      }
    })
  }

  allDetails.forEach((element) => {
    // If there is native details support, we want to avoid running code to polyfill native behaviour.
    const hasNativeDetails =
      'HTMLDetailsElement' in window && element instanceof HTMLDetailsElement

    if (!hasNativeDetails && !element.hasAttribute('nhsuk-polyfilled')) {
      initDetails(element)
    }
  })
}
