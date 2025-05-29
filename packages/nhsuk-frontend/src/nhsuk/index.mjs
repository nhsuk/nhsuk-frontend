import { isSupported } from './common.mjs'
import {
  initRadios,
  initHeader,
  initButton,
  initCharacterCount,
  initCheckboxes,
  initDetails,
  initErrorSummary,
  initSkipLink,
  initTabs
} from './components/index.mjs'
import { SupportError } from './errors/index.mjs'

/**
 * Use this function to initialise nhsuk-frontend components within a
 * given scope. This function is called by default with the document
 * element, but you can call it again later with a new DOM element
 * containing nhsuk-frontend components which you wish to initialise.
 *
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 */
export function initAll($scope) {
  // Skip initialisation when NHS.UK frontend is not supported
  if (!isSupported()) {
    console.log(new SupportError())
    return
  }

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

export * from './components/index.mjs'
