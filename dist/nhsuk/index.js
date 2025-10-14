'use strict';

var index = require('./common/index.js');
var index$1 = require('./errors/index.js');
var i18n = require('./i18n.js');
var button = require('./components/button/button.js');
var characterCount = require('./components/character-count/character-count.js');
var checkboxes = require('./components/checkboxes/checkboxes.js');
var errorSummary = require('./components/error-summary/error-summary.js');
var header = require('./components/header/header.js');
var notificationBanner = require('./components/notification-banner/notification-banner.js');
var radios = require('./components/radios/radios.js');
var skipLink = require('./components/skip-link/skip-link.js');
var tabs = require('./components/tabs/tabs.js');
var normaliseOptions = require('./common/configuration/normalise-options.js');
var closestAttributeValue = require('./common/closest-attribute-value.js');
var nhsukFrontendVersion = require('./common/nhsuk-frontend-version.js');
var component = require('./component.js');
var configurableComponent = require('./configurable-component.js');

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
  const config = index.isObject(scopeOrConfig) ? scopeOrConfig : {};

  // Extract initialisation options
  const options = normaliseOptions.normaliseOptions(scopeOrConfig);
  try {
    // Skip initialisation when NHS.UK frontend is not supported
    if (!index.isSupported()) {
      throw new index$1.SupportError();
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    if (options.scope === null) {
      throw new index$1.ElementError({
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
  const components = /** @type {const} */[[button.Button, config.button], [characterCount.CharacterCount, config.characterCount], [checkboxes.Checkboxes], [errorSummary.ErrorSummary, config.errorSummary], [header.Header], [notificationBanner.NotificationBanner, config.notificationBanner], [radios.Radios], [skipLink.SkipLink], [tabs.Tabs]];
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
  const options = normaliseOptions.normaliseOptions(scopeOrOptions);
  try {
    var _options$scope;
    // Skip initialisation when NHS.UK frontend is not supported
    if (!index.isSupported()) {
      throw new index$1.SupportError();
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    if (options.scope === null) {
      throw new index$1.ElementError({
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

exports.formatErrorMessage = index.formatErrorMessage;
exports.getBreakpoint = index.getBreakpoint;
exports.isInitialised = index.isInitialised;
exports.isObject = index.isObject;
exports.isScope = index.isScope;
exports.isSupported = index.isSupported;
exports.setFocus = index.setFocus;
exports.toggleConditionalInput = index.toggleConditionalInput;
exports.ConfigError = index$1.ConfigError;
exports.ElementError = index$1.ElementError;
exports.InitError = index$1.InitError;
exports.NHSUKFrontendError = index$1.NHSUKFrontendError;
exports.SupportError = index$1.SupportError;
exports.I18n = i18n.I18n;
exports.Button = button.Button;
exports.initButtons = button.initButtons;
exports.CharacterCount = characterCount.CharacterCount;
exports.initCharacterCounts = characterCount.initCharacterCounts;
exports.Checkboxes = checkboxes.Checkboxes;
exports.initCheckboxes = checkboxes.initCheckboxes;
exports.ErrorSummary = errorSummary.ErrorSummary;
exports.initErrorSummary = errorSummary.initErrorSummary;
exports.Header = header.Header;
exports.initHeader = header.initHeader;
exports.NotificationBanner = notificationBanner.NotificationBanner;
exports.initNotificationBanners = notificationBanner.initNotificationBanners;
exports.Radios = radios.Radios;
exports.initRadios = radios.initRadios;
exports.SkipLink = skipLink.SkipLink;
exports.initSkipLinks = skipLink.initSkipLinks;
exports.Tabs = tabs.Tabs;
exports.initTabs = tabs.initTabs;
exports.closestAttributeValue = closestAttributeValue.closestAttributeValue;
exports.version = nhsukFrontendVersion.version;
exports.Component = component.Component;
exports.ConfigurableComponent = configurableComponent.ConfigurableComponent;
exports.createAll = createAll;
exports.initAll = initAll;
//# sourceMappingURL=index.js.map
