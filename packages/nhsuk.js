// Components
import initButton from './components/button/button'
import initCharacterCount from './components/character-count/character-count'
import initCheckboxes from './components/checkboxes/checkboxes'
import initDetails from './components/details/details'
import initErrorSummary from './components/error-summary/error-summary'
import initHeader from './components/header/header'
import initRadios from './components/radios/radios'
import initSkipLink from './components/skip-link/skip-link'
import initTabs from './components/tabs/tabs'

import './polyfills'

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
