import { isObject, isScope, isSupported } from './common/index.mjs'
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

  const components = /** @type {const} */ ([
    [Button],
    [CharacterCount],
    [Checkboxes],
    [ErrorSummary],
    [Header],
    [NotificationBanner],
    [Radios],
    [SkipLink],
    [Tabs]
  ])

  components.forEach(([Component]) => {
    createAll(Component, undefined, options)
  })
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
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {CreateAllOptions<ComponentClass>} [options] - Options including scope of the document to search within and callback function if error throw by component on init
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */

/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {OnErrorCallback<ComponentClass>} [onError] - Initialisation error callback
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */

/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {Element | null} [$scope] - Scope of the document to search within
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */

/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null} [scopeOrOptions]
 */
export function createAll(Component, config, scopeOrOptions) {
  let /** @type {Element | Document | null} */ $scope = document
  let /** @type {OnErrorCallback<Component> | undefined} */ onError

  // Handle options object
  if (isObject(scopeOrOptions)) {
    const options = scopeOrOptions

    // Scope must be valid or null
    if (isScope(options.scope) || options.scope === null) {
      $scope = options.scope
    }

    // Error handler must be a function
    if (typeof options.onError === 'function') {
      onError = options.onError
    }
  }

  if (isScope(scopeOrOptions)) {
    $scope = scopeOrOptions
  } else if (scopeOrOptions === null) {
    $scope = null
  } else if (typeof scopeOrOptions === 'function') {
    onError = scopeOrOptions
  }

  const $elements =
    $scope?.querySelectorAll(`[data-module="${Component.moduleName}"]`) ?? []

  // Skip initialisation when NHS.UK frontend is not supported
  if (!isSupported()) {
    if (onError) {
      onError(new SupportError(), {
        component: Component,
        config
      })
    } else {
      console.log(new SupportError())
    }
    return []
  }

  return Array.from($elements)
    .map(($element) => {
      try {
        return /** @type {InstanceType<ComponentClass>} */ (
          // Only pass config to components that accept it
          'defaults' in Component
            ? new Component($element, config)
            : new Component($element)
        )
      } catch (error) {
        if (onError) {
          onError(error, {
            element: $element,
            component: Component,
            config
          })
        } else {
          console.log(error)
        }

        return null
      }
    })
    .filter((instance) => !!instance) // Exclude components that errored
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
 * Initialisation error context
 *
 * Contains the element, component class and configuration
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {object} ErrorContext
 * @property {Element} [element] - Element used for component module initialisation
 * @property {ComponentClass} [component] - Class of component
 * @property {ComponentConfig<ComponentClass>} config - Config supplied to components
 */

/**
 * Initialisation error callback
 *
 * @template {CompatibleClass} ComponentClass
 * @callback OnErrorCallback
 * @param {unknown} error - Thrown error
 * @param {ErrorContext<ComponentClass>} context - Object containing the element, component class and configuration
 */

/**
 * Initialisation options
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {object} CreateAllOptions
 * @property {Element | Document | null} [scope] - Scope of the document to search within
 * @property {OnErrorCallback<ComponentClass>} [onError] - Initialisation error callback
 */

/**
 * @import { CompatibleClass } from './component.mjs'
 * @import { ConfigurableComponent } from './configurable-component.mjs'
 */
