import { normaliseOptions } from './common/configuration/index.mjs'
import { isObject, isSupported } from './common/index.mjs'
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
import { ElementError, SupportError } from './errors/index.mjs'

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
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 * @returns {void}
 */

/**
 * @param {Config | Element | Document | null} [scopeOrConfig]
 */
export function initAll(scopeOrConfig = {}) {
  const config = isObject(scopeOrConfig) ? scopeOrConfig : {}

  // Extract initialisation options
  const options = normaliseOptions(scopeOrConfig)

  try {
    // Skip initialisation when NHS.UK frontend is not supported
    if (!isSupported()) {
      throw new SupportError()
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    if (options.scope === null) {
      throw new ElementError({
        element: options.scope,
        identifier: 'NHS.UK frontend scope element (`$scope`)'
      })
    }
  } catch (error) {
    if (options.onError) {
      options.onError(error, {
        config
      })
    } else {
      console.log(error)
    }

    return
  }

  const components = /** @type {const} */ ([
    [Button, config.button],
    [CharacterCount, config.characterCount],
    [Checkboxes],
    [ErrorSummary, config.errorSummary],
    [Header],
    [NotificationBanner, config.notificationBanner],
    [Radios],
    [SkipLink],
    [Tabs]
  ])

  components.forEach(([Component, componentConfig]) => {
    createAll(Component, componentConfig, options)
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
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */

/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null} [scopeOrOptions]
 */
export function createAll(Component, config, scopeOrOptions) {
  let /** @type {NodeListOf<Element> | undefined} */ $elements

  // Extract initialisation options
  const options = normaliseOptions(scopeOrOptions)

  try {
    // Skip initialisation when NHS.UK frontend is not supported
    if (!isSupported()) {
      throw new SupportError()
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    if (options.scope === null) {
      throw new ElementError({
        element: options.scope,
        component: Component,
        identifier: 'Scope element (`$scope`)'
      })
    }

    $elements = options.scope?.querySelectorAll(
      `[data-module="${Component.moduleName}"]`
    )
  } catch (error) {
    if (options.onError) {
      options.onError(error, {
        component: Component,
        config
      })
    } else {
      console.log(error)
    }

    return []
  }

  return Array.from($elements ?? [])
    .map(($element) => {
      try {
        return /** @type {InstanceType<ComponentClass>} */ (
          // Only pass config to components that accept it
          !!config && 'defaults' in Component
            ? new Component($element, config)
            : new Component($element)
        )
      } catch (error) {
        if (options.onError) {
          options.onError(error, {
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

export * from './i18n.mjs'
export * from './common/index.mjs'
export * from './components/index.mjs'
export * from './errors/index.mjs'

/**
 * NHS.UK frontend config for all components via `initAll()`
 *
 * @typedef {object} Config
 * @property {Element | Document | null} [scope] - Scope of the document to search within
 * @property {OnErrorCallback<CompatibleClass>} [onError] - Initialisation error callback
 * @property {ComponentConfig<typeof Button>} [button] - Button config
 * @property {ComponentConfig<typeof CharacterCount>} [characterCount] - Character count config
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
 * Initialisation error context
 *
 * Contains the element, component class and configuration
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {object} ErrorContext
 * @property {Element} [element] - Element used for component module initialisation
 * @property {ComponentClass} [component] - Class of component
 * @property {Config | ComponentConfig<ComponentClass>} config - Config supplied to components
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
