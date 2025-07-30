import { isSupported } from './common/index.mjs'
import {
  Button,
  CharacterCount,
  Checkboxes,
  ErrorSummary,
  Header,
  NotificationBanner,
  Radios,
  SkipLink,
  Tabs
} from './components/index.mjs'
import { SupportError } from './errors/index.mjs'

/**
 * Initialise all components
 *
 * Use the `data-module` attributes to find and initialise all of the
 * components provided as part of NHS.UK frontend.
 *
 * @overload
 * @param {Config} [config] - Config for all components (with optional scope)
 * @returns {void}
 */

/**
 * @overload
 * @param {Element | null} [$scope] - Scope of the document to search within
 * @returns {void}
 */

/**
 * @param {Config | Element | null} [configOrScope]
 */
export function initAll(configOrScope = {}) {
  const config =
    configOrScope instanceof Element
      ? { scope: configOrScope } // Compatibility with `initAll($scope)`
      : (configOrScope ?? {}) // Default support for `initAll(config)`

  // Skip initialisation when NHS.UK frontend is not supported
  if (!isSupported()) {
    console.log(new SupportError())
    return
  }

  // Allow the user to initialise NHS.UK frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  const { scope: $scope } = config

  createAll(Header, undefined, $scope)
  createAll(SkipLink, undefined, $scope)
  createAll(Button, config.button, $scope)
  createAll(CharacterCount, config.characterCount, $scope)
  createAll(Checkboxes, undefined, $scope)
  createAll(ErrorSummary, config.errorSummary, $scope)
  createAll(NotificationBanner, config.notificationBanner, $scope)
  createAll(Radios, undefined, $scope)
  createAll(Tabs, undefined, $scope)
}

/**
 * Create all instances of a specific component on the page
 *
 * Uses the `data-module` attribute to find all elements matching the specified
 * component on the page, creating instances of the component object for each
 * of them.
 *
 * Any component errors will be caught and logged to the console.
 *
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @param {ComponentClass} Component - class of the component to create
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {Element | null} [$scope] - Scope of the document to search within
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */
export function createAll(Component, config, $scope) {
  const $elements = ($scope ?? document).querySelectorAll(
    `[data-module="${Component.moduleName}"]`
  )

  // Skip initialisation when NHS.UK frontend is not supported
  if (!isSupported()) {
    console.log(new SupportError())
    return []
  }

  return Array.from($elements)
    .map(($root) => {
      try {
        return /** @type {InstanceType<ComponentClass>} */ (
          // Only pass config to components that accept it
          'defaults' in Component
            ? new Component($root, config)
            : new Component($root)
        )
      } catch (error) {
        console.log(error)
        return null
      }
    })
    .filter((instance) => !!instance)
}

export { isSupported, version } from './common/index.mjs'
export * from './components/index.mjs'
export * from './errors/index.mjs'

/**
 * NHS.UK frontend config for all components via `initAll()`
 *
 * @typedef {object} Config
 * @property {Element | null} [scope] - Scope of the document to search within
 * @property {ComponentConfig<typeof Button>} [button] - Button config
 * @property {ComponentConfig<typeof CharacterCount>} [characterCount] - Character Count config
 * @property {ComponentConfig<typeof ErrorSummary>} [errorSummary] - Error Summary config
 * @property {ComponentConfig<typeof NotificationBanner>} [notificationBanner] - Notification Banner config
 */

/**
 * Component config
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {ConstructorParameters<ComponentClass>[1]} ComponentConfig
 */

/**
 * @import { CompatibleClass } from './component.mjs'
 * @import { ConfigurableComponent } from './configurable-component.mjs'
 */
