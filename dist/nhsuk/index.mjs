import { isSupported, isObject } from './common/index.mjs';
export { formatErrorMessage, getBreakpoint, isInitialised, isScope, setFocus, toggleConditionalInput } from './common/index.mjs';
import { SupportError, ElementError } from './errors/index.mjs';
export { ConfigError, InitError, NHSUKFrontendError } from './errors/index.mjs';
export { I18n } from './i18n.mjs';
import { Button } from './components/button/button.mjs';
export { initButtons } from './components/button/button.mjs';
import { CharacterCount } from './components/character-count/character-count.mjs';
export { initCharacterCounts } from './components/character-count/character-count.mjs';
import { Checkboxes } from './components/checkboxes/checkboxes.mjs';
export { initCheckboxes } from './components/checkboxes/checkboxes.mjs';
import { ErrorSummary } from './components/error-summary/error-summary.mjs';
export { initErrorSummary } from './components/error-summary/error-summary.mjs';
import { Header } from './components/header/header.mjs';
export { initHeader } from './components/header/header.mjs';
import { NotificationBanner } from './components/notification-banner/notification-banner.mjs';
export { initNotificationBanners } from './components/notification-banner/notification-banner.mjs';
import { Radios } from './components/radios/radios.mjs';
export { initRadios } from './components/radios/radios.mjs';
import { SkipLink } from './components/skip-link/skip-link.mjs';
export { initSkipLinks } from './components/skip-link/skip-link.mjs';
import { Tabs } from './components/tabs/tabs.mjs';
export { initTabs } from './components/tabs/tabs.mjs';
import { normaliseOptions } from './common/configuration/normalise-options.mjs';
export { closestAttributeValue } from './common/closest-attribute-value.mjs';
export { version } from './common/nhsuk-frontend-version.mjs';
export { Component } from './component.mjs';
export { ConfigurableComponent } from './configurable-component.mjs';

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
function initAll(scopeOrConfig = {}) {
  const config = isObject(scopeOrConfig) ? scopeOrConfig : {};

  // Extract initialisation options
  const options = normaliseOptions(scopeOrConfig);
  try {
    // Skip initialisation when NHS.UK frontend is not supported
    if (!isSupported()) {
      throw new SupportError();
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    if (options.scope === null) {
      throw new ElementError({
        element: options.scope,
        identifier: 'NHS.UK frontend scope element (`$scope`)'
      });
    }
  } catch (error) {
    if (options.onError) {
      options.onError(error, {
        config
      });
    } else {
      console.log(error);
    }
    return;
  }
  const components = /** @type {const} */[[Button, config.button], [CharacterCount, config.characterCount], [Checkboxes], [ErrorSummary, config.errorSummary], [Header], [NotificationBanner, config.notificationBanner], [Radios], [SkipLink], [Tabs]];
  components.forEach(([Component, componentConfig]) => {
    createAll(Component, componentConfig, options);
  });
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
function createAll(Component, config, scopeOrOptions) {
  let /** @type {NodeListOf<Element> | undefined} */$elements;

  // Extract initialisation options
  const options = normaliseOptions(scopeOrOptions);
  try {
    var _options$scope;
    // Skip initialisation when NHS.UK frontend is not supported
    if (!isSupported()) {
      throw new SupportError();
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    if (options.scope === null) {
      throw new ElementError({
        element: options.scope,
        component: Component,
        identifier: 'Scope element (`$scope`)'
      });
    }
    $elements = (_options$scope = options.scope) == null ? void 0 : _options$scope.querySelectorAll(`[data-module="${Component.moduleName}"]`);
  } catch (error) {
    if (options.onError) {
      options.onError(error, {
        component: Component,
        config
      });
    } else {
      console.log(error);
    }
    return [];
  }
  return Array.from($elements != null ? $elements : []).map($element => {
    try {
      return (/** @type {InstanceType<ComponentClass>} */
        // Only pass config to components that accept it
        !!config && 'defaults' in Component ? new Component($element, config) : new Component($element)
      );
    } catch (error) {
      if (options.onError) {
        options.onError(error, {
          element: $element,
          component: Component,
          config
        });
      } else {
        console.log(error);
      }
      return null;
    }
  }).filter(instance => !!instance); // Exclude components that errored
}

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

export { Button, CharacterCount, Checkboxes, ElementError, ErrorSummary, Header, NotificationBanner, Radios, SkipLink, SupportError, Tabs, createAll, initAll, isObject, isSupported };
//# sourceMappingURL=index.mjs.map
