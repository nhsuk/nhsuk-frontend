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

/**
 * Use this function to initialise nhsuk-frontend components within a
 * given scope. This function is called by default with the document
 * element, but you can call it again later with a new DOM element
 * containing nhsuk-frontend components which you wish to initialise.
 *
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 */
function initAll($scope) {
  const options = {
    scope: $scope || document
  }

  initHeader(options)
  initSkipLink(options)
  initButton(options)
  initCharacterCount(options)
  initCheckboxes(options)
  initDetails(options)
  initErrorSummary(options)
  initRadios(options)
  initTabs(options)
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
