/* eslint-disable import/prefer-default-export */

// Components
import initButton from './components/button/button.js'
import initCharacterCount from './components/character-count/character-count.js'
import initCheckboxes from './components/checkboxes/checkboxes.js'
import initDetails from './components/details/details.js'
import initErrorSummary from './components/error-summary/error-summary.js'
import initHeader from './components/header/header.js'
import initRadios from './components/radios/radios.js'
import initSkipLink from './components/skip-link/skip-link.js'
import initTabs from './components/tabs/tabs.js'

import './polyfills.js'

/**
 * Use this function to initialise nhsuk-frontend components within a
 * given scope. This function is called by default with the document
 * element, but you can call it again later with a new DOM element
 * containing nhsuk-frontend components which you wish to initialise.
 *
 * @param {HTMLElement} scope
 */
export function initAll(scope) {
  initButton({ scope })
  initCharacterCount({ scope })
  initCheckboxes({ scope })
  initDetails({ scope })
  initErrorSummary({ scope })
  initRadios({ scope })
  initTabs({ scope })
}

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  initHeader()
  initSkipLink()

  initAll(document)
})
