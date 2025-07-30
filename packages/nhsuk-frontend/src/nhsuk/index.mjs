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
 * Component config
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {ConstructorParameters<ComponentClass>[1]} ComponentConfig
 */

/**
 * @import { CompatibleClass } from './component.mjs'
 * @import { ConfigurableComponent } from './configurable-component.mjs'
 */
