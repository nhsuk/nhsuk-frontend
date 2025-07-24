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
 * @param {ComponentInitOptions['scope']} [$scope] - Scope of the document to search within
 * @param {Config} [config] - Config for all components (with optional scope)
 */
export function initAll($scope, config = {}) {
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
  initButtons(Object.assign({}, options, config.button))
  initCharacterCounts(Object.assign({}, options, config.characterCount))
  initCheckboxes(options)
  initErrorSummary(Object.assign({}, options, config.errorSummary))
  initNotificationBanners(Object.assign({}, options, config.notificationBanner))
  initRadios(options)
  initTabs(options)
}

export { isSupported, version } from './common/index.mjs'
export * from './components/index.mjs'
export * from './component.mjs'
export * from './configurable-component.mjs'

/**
 * Config for all components via `initAll()`
 *
 * @typedef {object} Config
 * @property {ButtonConfig} [button] - Button config
 * @property {CharacterCountConfig} [characterCount] - Character Count config
 * @property {ErrorSummaryConfig} [errorSummary] - Error Summary config
 * @property {NotificationBannerConfig} [notificationBanner] - Notification Banner config
 */

/**
 * Config for individual components
 *
 * @import { ButtonConfig } from './components/button/button.mjs'
 * @import { CharacterCountConfig } from './components/character-count/character-count.mjs'
 * @import { ErrorSummaryConfig } from './components/error-summary/error-summary.mjs'
 * @import { NotificationBannerConfig } from './components/notification-banner/notification-banner.mjs'
 */

/**
 * Component initialisation options
 *
 * @typedef {object} ComponentInitOptions
 * @property {Element | Document | null} [scope] - Scope of the document to search within
 */
