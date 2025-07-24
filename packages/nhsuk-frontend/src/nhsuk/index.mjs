import { isSupported } from './common/index.mjs'
import {
  initRadios,
  initHeader,
  initButtons,
  initCharacterCounts,
  initCheckboxes,
  initErrorSummary,
  initNotificationBanners,
  initSkipLinks,
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
  const options = {
    scope: $scope ?? document
  }

  // Skip initialisation when NHS.UK frontend is not supported
  if (!isSupported()) {
    console.log(new SupportError())
    return
  }

  initHeader(options)
  initSkipLinks(options)
  initButtons(options)
  initCharacterCounts(options)
  initCheckboxes(options)
  initErrorSummary(options)
  initNotificationBanners(options)
  initRadios(options)
  initTabs(options)
}

export { isSupported, version } from './common/index.mjs'
export * from './components/index.mjs'
export * from './component.mjs'
