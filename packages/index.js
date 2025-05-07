/* eslint-disable import/prefer-default-export */

// Components
const initButton = require('./components/button/button')
const initCharacterCount = require('./components/character-count/character-count')
const initCheckboxes = require('./components/checkboxes/checkboxes')
const initDetails = require('./components/details/details')
const initErrorSummary = require('./components/error-summary/error-summary')
const initHeader = require('./components/header/header')
const initRadios = require('./components/radios/radios')
const initSkipLink = require('./components/skip-link/skip-link')
const initTabs = require('./components/tabs/tabs')

require('./polyfills.js')

/**
 * Use this function to initialise nhsuk-frontend components within a
 * given scope. This function is called by default with the document
 * element, but you can call it again later with a new DOM element
 * containing nhsuk-frontend components which you wish to initialise.
 *
 * @param {HTMLElement} scope
 */
function initAll(scope) {
  initHeader({ scope })
  initSkipLink({ scope })
  initButton({ scope })
  initCharacterCount({ scope })
  initCheckboxes({ scope })
  initDetails({ scope })
  initErrorSummary({ scope })
  initRadios({ scope })
  initTabs({ scope })
}

module.exports = {
  initButton,
  initCharacterCount,
  initCheckboxes,
  initDetails,
  initErrorSummary,
  initHeader,
  initRadios,
  initSkipLink,
  initTabs,
  initAll
}
