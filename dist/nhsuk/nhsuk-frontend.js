/**
 * Returns the value of the given attribute closest to the given element (including itself)
 *
 * @param {Element} $element - The element to start walking the DOM tree up
 * @param {string} attributeName - The name of the attribute
 * @returns {string | null} Attribute value
 */
function closestAttributeValue($element, attributeName) {
  const $closestElementWithAttribute = $element.closest(`[${attributeName}]`);
  return $closestElementWithAttribute ? $closestElementWithAttribute.getAttribute(attributeName) : null;
}

/*
 * This variable is automatically overwritten during builds and releases.
 * It doesn't need to be updated manually.
 */

/**
 * NHS.UK frontend release version
 *
 * {@link https://github.com/nhsuk/nhsuk-frontend/releases}
 */
const version = 'development';

/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 *
 * @param {Element | null} $input - input element
 * @param {string} className - class to toggle
 */
function toggleConditionalInput($input, className) {
  if (!$input || !($input instanceof HTMLInputElement) || !className) {
    return;
  }
  const targetId = $input.getAttribute('aria-controls');
  if (!targetId) {
    return;
  }
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }
  $input.setAttribute('aria-expanded', $input.checked.toString());
  target.classList.toggle(className, !$input.checked);
}

/**
 * Get NHS.UK frontend breakpoint value from CSS custom property
 *
 * @param {string} name - Breakpoint name
 */
function getBreakpoint(name) {
  const property = `--nhsuk-breakpoint-${name}`;

  // Get value from `<html>` with breakpoints on CSS :root
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(property);
  return {
    property,
    value: value || undefined
  };
}

/**
 * Move focus to element
 *
 * Sets tabindex to -1 to make the element programmatically focusable,
 * but removes it on blur as the element doesn't need to be focused again.
 *
 * Original code taken from GDS (Government Digital Service)
 * {@link https://github.com/alphagov/govuk-frontend}
 *
 * @template {HTMLElement} FocusElement
 * @param {FocusElement} $element - HTML element
 * @param {object} [options] - Handler options
 * @param {function(this: FocusElement): void} [options.onBeforeFocus] - Callback before focus
 * @param {function(this: FocusElement): void} [options.onBlur] - Callback on blur
 */
function setFocus($element, options = {}) {
  const isFocusable = $element.getAttribute('tabindex');
  if (!isFocusable) {
    $element.setAttribute('tabindex', '-1');
  }

  /**
   * Handle element focus
   */
  function onFocus() {
    $element.removeEventListener('focus', onFocus);
    $element.addEventListener('blur', onBlur);
  }

  /**
   * Handle element blur
   */
  function onBlur() {
    $element.removeEventListener('blur', onBlur);
    if (options.onBlur) {
      options.onBlur.call($element);
    }
    if (!isFocusable) {
      $element.removeAttribute('tabindex');
    }
  }

  // Add listener to reset element on blur, after focus
  $element.addEventListener('focus', onFocus);

  // Focus element
  if (options.onBeforeFocus) {
    options.onBeforeFocus.call($element);
  }
  $element.focus();
}

/**
 * Checks if component is already initialised
 *
 * @param {Element} $root - HTML element to be checked
 * @param {string} moduleName - name of component module
 * @returns {boolean} Whether component is already initialised
 */
function isInitialised($root, moduleName) {
  return $root instanceof HTMLElement && $root.hasAttribute(`data-${moduleName}-init`);
}

/**
 * Checks if NHS.UK frontend is supported on this page
 *
 * Some browsers will load and run our JavaScript but NHS.UK frontend
 * won't be supported.
 *
 * @param {HTMLElement | null} [$scope] - (internal) `<body>` HTML element checked for browser support
 * @returns {boolean} Whether NHS.UK frontend is supported on this page
 */
function isSupported($scope = document.body) {
  if (!$scope) {
    return false;
  }
  return $scope.classList.contains('nhsuk-frontend-supported');
}

/**
 * Check for an object
 *
 * @template {Partial<Record<keyof ObjectType, unknown>>} ObjectType
 * @param {unknown | ObjectType} option - Option to check
 * @returns {option is ObjectType} Whether the option is an object
 */
function isObject(option) {
  return !!option && typeof option === 'object' && !Array.isArray(option);
}

/**
 * Check for valid scope
 *
 * @template {Element | Document} ScopeType
 * @param {unknown | ScopeType} $scope - Scope of the document to search within
 * @returns {$scope is ScopeType} Whether the scope can be queried
 */
function isScope($scope) {
  return !!$scope && ($scope instanceof Element || $scope instanceof Document);
}

/**
 * Format error message
 *
 * @param {CompatibleClass} Component - Component that threw the error
 * @param {string} message - Error message
 * @returns {string} - Formatted error message
 */
function formatErrorMessage(Component, message) {
  return `${Component.moduleName}: ${message}`;
}

/**
 * @import { CompatibleClass } from '../component.mjs'
 */

/**
 * Normalise string
 *
 * 'If it looks like a duck, and it quacks like a duck…' 🦆
 *
 * If the passed value looks like a boolean or a number, convert it to a boolean
 * or number.
 *
 * Designed to be used to convert config passed via data attributes (which are
 * always strings) into something sensible.
 *
 * @param {string | undefined} value - The value to normalise
 * @param {SchemaProperty} [property] - Component schema property
 * @returns Normalised data
 */
function normaliseString(value, property) {
  const trimmedValue = value ? value.trim() : '';
  let output;
  let outputType = property == null ? void 0 : property.type;

  // No schema type set? Determine automatically
  if (!outputType) {
    if (['true', 'false'].includes(trimmedValue)) {
      outputType = 'boolean';
    }

    // Empty / whitespace-only strings are considered finite so we need to check
    // the length of the trimmed string as well
    if (trimmedValue.length > 0 && isFinite(Number(trimmedValue))) {
      outputType = 'number';
    }
  }
  switch (outputType) {
    case 'boolean':
      output = trimmedValue === 'true';
      break;
    case 'number':
      output = Number(trimmedValue);
      break;
    default:
      output = value;
  }
  return output;
}

/**
 * @import { SchemaProperty } from './index.mjs'
 */

/**
 * Extracts keys starting with a particular namespace from dataset ('data-*')
 * object, removing the namespace in the process, normalising all values
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {DOMStringMap} dataset - The object to extract key-value pairs from
 * @param {keyof ConfigurationType} namespace - The namespace to filter keys with
 * @returns {ObjectNested | undefined} Nested object with dot-separated key namespace removed
 */
function extractConfigByNamespace(schema, dataset, namespace) {
  const property = schema.properties[namespace];

  // Only extract configs for object schema properties
  if ((property == null ? void 0 : property.type) !== 'object') {
    return;
  }

  // Add default empty config
  const newObject = /** @type {Record<typeof namespace, ObjectNested>} */{
    [namespace]: {}
  };
  for (const [key, value] of Object.entries(dataset)) {
    /** @type {ObjectNested | ObjectNested[NestedKey]} */
    let current = newObject;

    // Split the key into parts, using . as our namespace separator
    const keyParts = key.split('.');

    /**
     * Create new level per part
     *
     * e.g. 'i18n.textareaDescription.other' becomes
     * `{ i18n: { textareaDescription: { other } } }`
     */
    for (const [index, name] of keyParts.entries()) {
      if (isObject(current)) {
        // Drop down to nested object until the last part
        if (index < keyParts.length - 1) {
          // New nested object (optionally) replaces existing value
          if (!isObject(current[name])) {
            current[name] = {};
          }

          // Drop down into new or existing nested object
          current = current[name];
        } else if (key !== namespace) {
          // Normalised value (optionally) replaces existing value
          current[name] = normaliseString(value);
        }
      }
    }
  }
  return newObject[namespace];
}

/**
 * Schema for component config
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @typedef {object} Schema
 * @property {Record<keyof ConfigurationType, SchemaProperty | undefined>} properties - Schema properties
 * @property {SchemaCondition<ConfigurationType>[]} [anyOf] - List of schema conditions
 */

/**
 * Schema property for component config
 *
 * @typedef {object} SchemaProperty
 * @property {'string' | 'boolean' | 'number' | 'object'} type - Property type
 */

/**
 * Schema condition for component config
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @typedef {object} SchemaCondition
 * @property {(keyof ConfigurationType)[]} required - List of required config fields
 * @property {string} errorMessage - Error message when required config fields not provided
 */

/**
 * @typedef {keyof ObjectNested} NestedKey
 * @typedef {{ [key: string]: string | boolean | number | ObjectNested | undefined }} ObjectNested
 */

/**
 * Config merging function
 *
 * Takes any number of objects and combines them together, with
 * greatest priority on the LAST item passed in.
 *
 * @param {...{ [key: string]: unknown }} configObjects - Config objects to merge
 * @returns A merged config object
 */
function mergeConfigs(...configObjects) {
  // Start with an empty object as our base
  /** @type {{ [key: string]: unknown }} */
  const formattedConfigObject = {};

  // Loop through each of the passed objects
  for (const configObject of configObjects) {
    for (const key of Object.keys(configObject)) {
      const option = formattedConfigObject[key];
      const override = configObject[key];

      // Push their keys one-by-one into formattedConfigObject. Any duplicate
      // keys with object values will be merged, otherwise the new value will
      // override the existing value.
      if (isObject(option) && isObject(override)) {
        formattedConfigObject[key] = mergeConfigs(option, override);
      } else {
        // Apply override
        formattedConfigObject[key] = override;
      }
    }
  }
  return formattedConfigObject;
}

/**
 * NHS.UK frontend error
 *
 * A base class for `Error`s thrown by NHS.UK frontend.
 *
 * It is meant to be extended into specific types of errors
 * to be thrown by our code.
 *
 * @example
 * ```js
 * class MissingRootError extends NHSUKFrontendError {
 *   // Setting an explicit name is important as extending the class will not
 *   // set a new `name` on the subclass. The `name` property is important
 *   // to ensure intelligible error names even if the class name gets
 *   // mangled by a minifier
 *   name = "MissingRootError"
 * }
 * ```
 * @abstract
 */
class NHSUKFrontendError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'NHSUKFrontendError';
  }
}

/**
 * Indicates that NHS.UK frontend is not supported
 */
class SupportError extends NHSUKFrontendError {
  /**
   * Checks if NHS.UK frontend is supported on this page
   *
   * @param {HTMLElement | null} [$scope] - HTML element `<body>` checked for browser support
   */
  constructor($scope = document.body) {
    const supportMessage = 'noModule' in HTMLScriptElement.prototype ? 'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet' : 'NHS.UK frontend is not supported in this browser';
    super($scope ? supportMessage : 'NHS.UK frontend initialised without `<script type="module">`');
    this.name = 'SupportError';
  }
}

/**
 * Indicates that a component has received an illegal configuration
 */
class ConfigError extends NHSUKFrontendError {
  constructor(...args) {
    super(...args);
    this.name = 'ConfigError';
  }
}

/**
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
class ElementError extends NHSUKFrontendError {
  /**
   * @param {ElementErrorOptions} options - Element error options
   */
  constructor(options) {
    const {
      component,
      identifier,
      element,
      expectedType
    } = options;
    let message = identifier;

    // Append reason
    message += element ? ` is not of type ${expectedType != null ? expectedType : 'HTMLElement'}` : ' not found';

    // Prepend with module name (optional)
    if (component) {
      message = formatErrorMessage(component, message);
    }
    super(message);
    this.name = 'ElementError';
  }
}

/**
 * Indicates that a component is already initialised
 */
class InitError extends NHSUKFrontendError {
  /**
   * @param {CompatibleClass | string} componentOrMessage - Component or init error message
   */
  constructor(componentOrMessage) {
    const message = typeof componentOrMessage === 'string' ? componentOrMessage : formatErrorMessage(componentOrMessage, 'Root element (`$root`) already initialised');
    super(message);
    this.name = 'InitError';
  }
}

/**
 * Element error options
 *
 * @typedef {object} ElementErrorOptions
 * @property {Element | Document | null} [element] - The element in error (optional)
 * @property {CompatibleClass} [component] - Component throwing the error (optional)
 * @property {string} identifier - An identifier that'll let the user understand which element has an error. This is whatever makes the most sense
 * @property {string} [expectedType] - The type that was expected for the identifier
 */

/**
 * @import { CompatibleClass } from '../component.mjs'
 */

/**
 * Normalise dataset
 *
 * Loop over an object and normalise each value using {@link normaliseString},
 * optionally expanding `data-i18n.property` nested values
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @template {[keyof ConfigurationType, SchemaProperty | undefined][]} SchemaEntryType
 * @param {CompatibleClass & { schema?: Schema<ConfigurationType> }} Component - Component class
 * @param {DOMStringMap} dataset - HTML element dataset
 * @returns {ObjectNested} Normalised dataset
 */
function normaliseDataset(Component, dataset) {
  if (!isObject(Component.schema)) {
    throw new ConfigError(formatErrorMessage(Component, 'Config passed as parameter into constructor but no schema defined'));
  }
  const out = /** @type {ObjectNested} */{};
  const entries = /** @type {SchemaEntryType} */
  Object.entries(Component.schema.properties);

  // Normalise top-level dataset ('data-*') values using schema types
  for (const entry of entries) {
    const [namespace, property] = entry;

    // Cast the `namespace` to string so it can be used to access the dataset
    const field = namespace.toString();
    if (field in dataset) {
      out[field] = normaliseString(dataset[field], property);
    }

    /**
     * Extract and normalise nested object values automatically using
     * {@link normaliseString} but only schema object types are allowed
     */
    if ((property == null ? void 0 : property.type) === 'object') {
      out[field] = extractConfigByNamespace(Component.schema, dataset, namespace);
    }
  }
  return out;
}

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { ObjectNested, Schema, SchemaProperty } from './index.mjs'
 */

/**
 * Normalise options passed to `initAll` or `createAll`
 *
 * @template {CompatibleClass} ComponentClass
 * @param {Config | CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null} [scopeOrOptions] - Scope of the document to search within, initialisation options or error callback function
 * @returns {CreateAllOptions<ComponentClass>} Normalised options
 */
function normaliseOptions(scopeOrOptions) {
  let /** @type {Element | Document | null} */$scope = document;
  let /** @type {OnErrorCallback<ComponentClass> | undefined} */onError;

  // Handle options object
  if (isObject(scopeOrOptions)) {
    const options = scopeOrOptions;

    // Scope must be valid or null
    if (isScope(options.scope) || options.scope === null) {
      $scope = options.scope;
    }

    // Error handler must be a function
    if (typeof options.onError === 'function') {
      onError = options.onError;
    }
  }
  if (isScope(scopeOrOptions)) {
    $scope = scopeOrOptions;
  } else if (scopeOrOptions === null) {
    $scope = null;
  } else if (typeof scopeOrOptions === 'function') {
    onError = scopeOrOptions;
  }
  return {
    scope: $scope,
    onError
  };
}

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { Config, CreateAllOptions, OnErrorCallback } from '../../index.mjs'
 */

/**
 * Validate component config by schema
 *
 * Follows limited examples in JSON schema for wider support in future
 *
 * {@link https://ajv.js.org/json-schema.html#compound-keywords}
 * {@link https://ajv.js.org/packages/ajv-errors.html#single-message}
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {ConfigurationType} config - Component config
 * @returns {string[]} List of validation errors
 */
function validateConfig(schema, config) {
  const validationErrors = [];

  // Check errors for each schema
  for (const [name, conditions] of Object.entries(schema)) {
    const errors = [];

    // Check errors for each schema condition
    if (Array.isArray(conditions)) {
      for (const {
        required,
        errorMessage
      } of conditions) {
        if (!required.every(key => !!config[key])) {
          errors.push(errorMessage); // Missing config key value
        }
      }

      // Check one condition passes or add errors
      if (name === 'anyOf' && !(conditions.length - errors.length >= 1)) {
        validationErrors.push(...errors);
      }
    }
  }
  return validationErrors;
}

/**
 * @import { Schema } from './index.mjs'
 */

const _self$1 = typeof globalThis !== 'undefined' ? globalThis // Modern browsers, Node.js
: self; // Old browsers, web workers

/**
 * Base component class
 *
 * Centralises the behaviours shared by our components
 *
 * @abstract
 * @template {Element} [RootElementType=HTMLElement]
 */
class Component {
  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    /**
     * @type {RootElementType}
     */
    this.$root = void 0;
    const childConstructor = /** @type {ComponentConstructor} */
    this.constructor;
    if (!$root || !($root instanceof childConstructor.elementType)) {
      throw new ElementError({
        element: $root,
        component: childConstructor,
        identifier: 'Root element (`$root`)',
        expectedType: childConstructor.elementType.name
      });
    }
    this.$root = /** @type {RootElementType} */$root;
    childConstructor.checkSupport();
    this.checkInitialised();
    const {
      moduleName
    } = childConstructor;
    this.$root.setAttribute(`data-${moduleName}-init`, '');
  }

  /**
   * Validates whether component is already initialised
   *
   * @throws {InitError} when component is already initialised
   */
  checkInitialised() {
    const childConstructor = /** @type {ComponentConstructor} */
    this.constructor;
    if (isInitialised(this.$root, childConstructor.moduleName)) {
      throw new InitError(childConstructor);
    }
  }

  /**
   * Validates whether components are supported
   *
   * @throws {SupportError} when the components are not supported
   */
  static checkSupport() {
    if (!isSupported()) {
      throw new SupportError();
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Component compatible class
 *
 * @template {typeof Component | typeof ConfigurableComponent} [ComponentType=typeof Component]
 * @typedef {{
 *   new(...args: ConstructorParameters<ComponentType>): InstanceType<ComponentType>,
 *   defaults?: ObjectNested,
 *   schema?: Schema<ObjectNested>,
 *   moduleName: string
 * }} CompatibleClass
 */

/**
 * Component constructor
 *
 * @template {typeof Component | typeof ConfigurableComponent} [ComponentType=typeof Component]
 * @typedef {CompatibleClass & ComponentType} ComponentConstructor
 */

/**
 * Component initialisation options
 *
 * @typedef {object} InitOptions
 * @property {Element | Document | null} [scope] - Scope of the document to search within
 */

/**
 * @import { ObjectNested, Schema } from './common/configuration/index.mjs'
 * @import { ConfigurableComponent } from './configurable-component.mjs'
 */
/**
 * @type {typeof Element}
 */
Component.elementType = _self$1.HTMLElement;
Component.moduleName = 'nhsuk-component';

/**
 * Configurable base component class
 *
 * @abstract
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} [ConfigurationType=ObjectNested]
 * @template {HTMLElement} [RootElementType=HTMLElement]
 * @augments Component<RootElementType>
 */
class ConfigurableComponent extends Component {
  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} $root - HTML element to use for component
   * @param {ConfigurationType} [config] - HTML element to use for component
   */
  constructor($root, config) {
    super($root);
    /**
     * @type {ConfigurationType}
     */
    this.config = void 0;
    const childConstructor = /** @type {ComponentConstructor<typeof ConfigurableComponent>} */
    this.constructor;
    if (!isObject(childConstructor.defaults)) {
      throw new ConfigError(formatErrorMessage(childConstructor, 'Config passed as parameter into constructor but no defaults defined'));
    }
    const datasetConfig = /** @type {ConfigurationType} */
    normaliseDataset(childConstructor, this.$root.dataset);

    // Override defaults with JavaScript config
    this.config = /** @type {ConfigurationType} */
    mergeConfigs(childConstructor.defaults, config != null ? config : {});

    // Override merged config with dataset config
    this.config = /** @type {ConfigurationType} */
    mergeConfigs(this.config, this.configOverride(datasetConfig), datasetConfig);
  }

  /**
   * Config override
   *
   * It should take a subset of configuration as input and return
   * a new configuration object with properties that should be
   * overridden based on the root element's dataset
   *
   * @abstract
   * @param {Partial<ConfigurationType>} _datasetConfig - Config specified by dataset
   * @returns {Partial<ConfigurationType>} Config to override by dataset
   */
  configOverride(_datasetConfig = {}) {
    return {};
  }
}

/**
 * @import { ObjectNested } from './common/configuration/index.mjs'
 * @import { ComponentConstructor } from './component.mjs'
 */

const DEBOUNCE_TIMEOUT_IN_SECONDS = 1;

/**
 * Button component
 *
 * @augments ConfigurableComponent<ButtonConfig>
 */
class Button extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {ButtonConfig} [config] - Button config
   */
  constructor($root, config = {}) {
    super($root, config);

    /**
     * Initialise an event listener for keydown at document level
     * this will help listening for later inserted elements with a role="button"
     */
    /**
     * @type {number | null}
     */
    this.debounceFormSubmitTimer = null;
    this.$root.addEventListener('keydown', event => this.handleKeyDown(event));
    this.$root.addEventListener('click', event => this.debounce(event));
  }

  /**
   * JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
   *
   * Created since some Assistive Technologies (for example some Screenreaders)
   * will tell a user to press space on a 'button', so this functionality needs to be shimmed
   * See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  handleKeyDown(event) {
    const target = event.target;

    // Handle space bar only
    if (event.key !== ' ') {
      return;
    }

    // Handle elements with [role="button"] only
    if (target instanceof HTMLElement && target.getAttribute('role') === 'button') {
      event.preventDefault();
      target.click();
    }
  }

  /**
   * Debounce double-clicks
   *
   * If the click quickly succeeds a previous click then nothing will happen.
   * This stops people accidentally causing multiple form submissions by
   * double clicking buttons.
   *
   * @param {MouseEvent} event - Mouse click event
   * @returns {undefined | false} Returns undefined, or false when debounced
   */
  debounce(event) {
    // Check the button that was clicked has preventDoubleClick enabled
    if (!this.config.preventDoubleClick) {
      return;
    }

    // If the timer is still running then we want to prevent the click from submitting the form
    if (this.debounceFormSubmitTimer) {
      event.preventDefault();
      return false;
    }
    this.debounceFormSubmitTimer = window.setTimeout(() => {
      this.debounceFormSubmitTimer = null;
    }, DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise button component
 *
 * @deprecated Use {@link createAll | `createAll(Button, options)`} instead.
 * @param {InitOptions & ButtonConfig} [options]
 */
Button.moduleName = 'nhsuk-button';
/**
 * Button default config
 *
 * @see {@link ButtonConfig}
 * @constant
 * @type {ButtonConfig}
 */
Button.defaults = Object.freeze({
  preventDoubleClick: false
});
/**
 * Button config schema
 *
 * @constant
 * @satisfies {Schema<ButtonConfig>}
 */
Button.schema = Object.freeze({
  properties: {
    preventDoubleClick: {
      type: 'boolean'
    }
  }
});
function initButtons(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $buttons = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Button.moduleName}"]`);
  $buttons == null || $buttons.forEach($root => {
    new Button($root, options);
  });
}

/**
 * Button config
 *
 * @typedef {object} ButtonConfig
 * @property {boolean} [preventDoubleClick=false] - Prevent accidental double
 *   clicks on submit buttons from submitting forms multiple times.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

/**
 * Internationalisation
 *
 * Adds support for selecting messages to render, with placeholder
 * interpolation and locale-aware number formatting and pluralisation
 */
class I18n {
  /**
   * @param {{ [key: string]: string | TranslationPluralForms }} translations - Key-value pairs of the translation strings to use.
   * @param {object} [config] - Configuration options for the function.
   * @param {string | null} [config.locale] - An overriding locale for the PluralRules functionality.
   */
  constructor(translations = {}, config = {}) {
    var _config$locale;
    // Make list of translations available throughout function
    this.translations = translations;

    // The locale to use for PluralRules and NumberFormat
    this.locale = (_config$locale = config.locale) != null ? _config$locale : document.documentElement.lang || 'en';
  }

  /**
   * The most used function - takes the key for a given piece of UI text and
   * returns the appropriate string.
   *
   * @param {string} lookupKey - The lookup key of the string to use.
   * @param {{ [key: string]: unknown }} [options] - Any options passed with the translation string, e.g: for string interpolation.
   * @returns {string} The appropriate translation string.
   * @throws {Error} Lookup key required
   * @throws {Error} Options required for `${}` placeholders
   */
  t(lookupKey, options) {
    if (!lookupKey) {
      // Print a console error if no lookup key has been provided
      throw new Error('i18n: lookup key missing');
    }

    // Fetch the translation for that lookup key
    let translation = this.translations[lookupKey];

    // If the `count` option is set, determine which plural suffix is needed and
    // change the lookupKey to match. We check to see if it's numeric instead of
    // falsy, as this could legitimately be 0.
    if (typeof (options == null ? void 0 : options.count) === 'number' && isObject(translation)) {
      const translationPluralForm = translation[this.getPluralSuffix(lookupKey, options.count)];

      // Update translation with plural suffix
      if (translationPluralForm) {
        translation = translationPluralForm;
      }
    }
    if (typeof translation === 'string') {
      // Check for ${} placeholders in the translation string
      // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
      if (translation.match(/%{(.\S+)}/)) {
        if (!options) {
          throw new Error('i18n: cannot replace placeholders in string if no option data provided');
        }
        return this.replacePlaceholders(translation, options);
      }
      return translation;
    }

    // If the key wasn't found in our translations object,
    // return the lookup key itself as the fallback
    return lookupKey;
  }

  /**
   * Takes a translation string with placeholders, and replaces the placeholders
   * with the provided data
   *
   * @param {string} translationString - The translation string
   * @param {{ [key: string]: unknown }} options - Any options passed with the translation string, e.g: for string interpolation.
   * @returns {string} The translation string to output, with $\{\} placeholders replaced
   */
  replacePlaceholders(translationString, options) {
    const formatter = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? new Intl.NumberFormat(this.locale) : undefined;
    return translationString.replace(/%{(.\S+)}/g,
    /**
     * Replace translation string placeholders
     *
     * @param {string} placeholderWithBraces - Placeholder with braces
     * @param {string} placeholderKey - Placeholder key
     * @returns {string} Placeholder value
     */
    function (placeholderWithBraces, placeholderKey) {
      if (Object.prototype.hasOwnProperty.call(options, placeholderKey)) {
        const placeholderValue = options[placeholderKey];

        // If a user has passed `false` as the value for the placeholder
        // treat it as though the value should not be displayed
        if (placeholderValue === false || typeof placeholderValue !== 'number' && typeof placeholderValue !== 'string') {
          return '';
        }

        // If the placeholder's value is a number, localise the number formatting
        if (typeof placeholderValue === 'number') {
          return formatter ? formatter.format(placeholderValue) : `${placeholderValue}`;
        }
        return placeholderValue;
      }
      throw new Error(`i18n: no data found to replace ${placeholderWithBraces} placeholder in string`);
    });
  }

  /**
   * Check to see if the browser supports Intl.PluralRules
   *
   * It requires all conditions to be met in order to be supported:
   * - The implementation of Intl supports PluralRules (NOT true in Safari 10–12)
   * - The browser/OS has plural rules for the current locale (browser dependent)
   *
   * {@link https://browsersl.ist/#q=supports+es6-module+and+not+supports+intl-pluralrules}
   *
   * @returns {boolean} Returns true if all conditions are met. Returns false otherwise.
   */
  hasIntlPluralRulesSupport() {
    return Boolean('PluralRules' in window.Intl && Intl.PluralRules.supportedLocalesOf(this.locale).length);
  }

  /**
   * Get the appropriate suffix for the plural form.
   *
   * Uses Intl.PluralRules (or our own fallback implementation) to get the
   * 'preferred' form to use for the given count.
   *
   * Checks that a translation has been provided for that plural form – if it
   * hasn't, it'll fall back to the 'other' plural form (unless that doesn't exist
   * either, in which case an error will be thrown)
   *
   * @param {string} lookupKey - The lookup key of the string to use.
   * @param {number} count - Number used to determine which pluralisation to use.
   * @returns {PluralRule} The suffix associated with the correct pluralisation for this locale.
   * @throws {Error} Plural form `.other` required when preferred plural form is missing
   */
  getPluralSuffix(lookupKey, count) {
    // Validate that the number is actually a number.
    //
    // Number(count) will turn anything that can't be converted to a Number type
    // into 'NaN'. isFinite filters out NaN, as it isn't a finite number.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion
    count = Number(count);
    if (!isFinite(count)) {
      return 'other';
    }

    // Fetch the translation for that lookup key
    const translation = this.translations[lookupKey];

    // Check to verify that all the requirements for Intl.PluralRules are met.
    // If so, we can use that instead of our custom implementation. Otherwise,
    // use the hardcoded fallback.
    const preferredForm = this.hasIntlPluralRulesSupport() ? new Intl.PluralRules(this.locale).select(count) : 'other';

    // Use the correct plural form if provided
    if (isObject(translation)) {
      if (preferredForm in translation) {
        return preferredForm;
        // Fall back to `other` if the plural form is missing, but log a warning
        // to the console
      } else if ('other' in translation) {
        console.warn(`i18n: Missing plural form ".${preferredForm}" for "${this.locale}" locale. Falling back to ".other".`);
        return 'other';
      }
    }

    // If the required `other` plural form is missing, all we can do is error
    throw new Error(`i18n: Plural form ".other" is required for "${this.locale}" locale`);
  }
}

/**
 * Plural rule category mnemonic tags
 *
 * @typedef {'zero' | 'one' | 'two' | 'few' | 'many' | 'other'} PluralRule
 */

/**
 * Translated message by plural rule they correspond to.
 *
 * Allows to group pluralised messages under a single key when passing
 * translations to a component's constructor
 *
 * @typedef {object} TranslationPluralForms
 * @property {string} [other] - General plural form
 * @property {string} [zero] - Plural form used with 0
 * @property {string} [one] - Plural form used with 1
 * @property {string} [two] - Plural form used with 2
 * @property {string} [few] - Plural form used for a few
 * @property {string} [many] - Plural form used for many
 */

/**
 * Character count component
 *
 * Tracks the number of characters or words in the `.nhsuk-js-character-count`
 * `<textarea>` inside the element. Displays a message with the remaining number
 * of characters/words available, or the number of characters/words in excess.
 *
 * You can configure the message to only appear after a certain percentage
 * of the available characters/words has been entered.
 *
 * @augments ConfigurableComponent<CharacterCountConfig>
 */
class CharacterCount extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {CharacterCountConfig} [config] - Character count config
   */
  constructor($root, config = {}) {
    var _ref, _this$config$maxwords;
    super($root, config);
    /**
     * @type {number | null}
     */
    this.lastInputTimestamp = null;
    this.lastInputValue = '';
    /**
     * @type {number | null}
     */
    this.valueChecker = null;
    const $textarea = this.$root.querySelector('.nhsuk-js-character-count');
    if (!($textarea instanceof HTMLTextAreaElement || $textarea instanceof HTMLInputElement)) {
      throw new ElementError({
        component: CharacterCount,
        element: $textarea,
        expectedType: 'HTMLTextareaElement or HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-character-count`)'
      });
    }

    // Check for valid config
    const errors = validateConfig(CharacterCount.schema, this.config);
    if (errors[0]) {
      throw new ConfigError(formatErrorMessage(CharacterCount, errors[0]));
    }
    this.i18n = new I18n(this.config.i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    });

    // Determine the limit attribute (characters or words)
    this.maxLength = (_ref = (_this$config$maxwords = this.config.maxwords) != null ? _this$config$maxwords : this.config.maxlength) != null ? _ref : Infinity;
    this.$textarea = $textarea;
    const textareaDescriptionId = `${this.$textarea.id}-info`;
    const $textareaDescription = document.getElementById(textareaDescriptionId);
    if (!$textareaDescription) {
      throw new ElementError({
        component: CharacterCount,
        element: $textareaDescription,
        identifier: `Count message (\`id="${textareaDescriptionId}"\`)`
      });
    }

    // Pre-existing validation error rendered from server
    this.$errorMessage = this.$root.querySelector('.nhsuk-error-message');

    // Inject a description for the textarea if none is present already
    // for when the component was rendered with no maxlength, maxwords
    // nor custom textareaDescriptionText
    if (/^\s*$/.exec($textareaDescription.textContent)) {
      $textareaDescription.textContent = this.i18n.t('textareaDescription', {
        count: this.maxLength
      });
    }

    // Move the textarea description to be immediately after the textarea
    // Kept for backwards compatibility
    this.$textarea.insertAdjacentElement('afterend', $textareaDescription);

    // Create the *screen reader* specific live-updating counter
    // This doesn't need any styling classes, as it is never visible
    const $screenReaderCountMessage = document.createElement('div');
    $screenReaderCountMessage.className = 'nhsuk-character-count__sr-status nhsuk-u-visually-hidden';
    $screenReaderCountMessage.setAttribute('aria-live', 'polite');
    this.$screenReaderCountMessage = $screenReaderCountMessage;
    $textareaDescription.insertAdjacentElement('afterend', $screenReaderCountMessage);

    // Create our live-updating counter element, copying the classes from the
    // textarea description for backwards compatibility as these may have been
    // configured
    const $visibleCountMessage = document.createElement('div');
    $visibleCountMessage.className = $textareaDescription.className;
    $visibleCountMessage.classList.add('nhsuk-character-count__status');
    $visibleCountMessage.setAttribute('aria-hidden', 'true');
    this.$visibleCountMessage = $visibleCountMessage;
    $textareaDescription.insertAdjacentElement('afterend', $visibleCountMessage);

    // Hide the textarea description
    $textareaDescription.classList.add('nhsuk-u-visually-hidden');

    // Remove hard limit if set
    this.$textarea.removeAttribute('maxlength');
    this.bindChangeEvents();

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => this.updateCountMessage());

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so update now too.
    this.updateCountMessage();
  }

  /**
   * Character count config override
   *
   * To ensure data-attributes take complete precedence, even if they change
   * the type of count, we need to reset the `maxlength` and `maxwords` from
   * the JavaScript config.
   *
   * @param {Partial<CharacterCountConfig>} datasetConfig - Config specified by dataset
   * @returns {Partial<CharacterCountConfig>} Config to override by dataset
   */
  configOverride(datasetConfig) {
    let configOverrides = {};
    if ('maxwords' in datasetConfig || 'maxlength' in datasetConfig) {
      configOverrides = {
        maxlength: undefined,
        maxwords: undefined
      };
    }
    return configOverrides;
  }

  /**
   * Count the number of characters (or words, if `config.maxwords` is set)
   * in the given text
   *
   * @param {string} text - The text to count the characters of
   * @returns {number} the number of characters (or words) in the text
   */
  count(text) {
    if (this.config.maxwords) {
      var _text$match;
      const tokens = (_text$match = text.match(/\S+/g)) != null ? _text$match : []; // Matches consecutive non-whitespace chars
      return tokens.length;
    }
    return text.length;
  }

  /**
   * Bind change events
   *
   * Set up event listeners on the $textarea so that the count messages update
   * when the user types.
   */
  bindChangeEvents() {
    this.$textarea.addEventListener('keyup', () => this.handleKeyUp());

    // Bind focus/blur events to start/stop polling
    this.$textarea.addEventListener('focus', () => this.handleFocus());
    this.$textarea.addEventListener('blur', () => this.handleBlur());
  }

  /**
   * Update count message if textarea value has changed
   */
  checkIfValueChanged() {
    if (this.$textarea.value !== this.lastInputValue) {
      this.lastInputValue = this.$textarea.value;
      this.updateCountMessage();
    }
  }

  /**
   * Update count message
   *
   * Helper function to update both the visible and screen reader-specific
   * counters simultaneously (e.g. on init)
   */
  updateCountMessage() {
    this.updateVisibleCountMessage();
    this.updateScreenReaderCountMessage();
  }

  /**
   * Update visible count message
   */
  updateVisibleCountMessage() {
    const remainingNumber = this.maxLength - this.count(this.$textarea.value);
    const isError = remainingNumber < 0;

    // If input is over the threshold, remove the disabled class which renders
    // the counter invisible.
    this.$visibleCountMessage.classList.toggle('nhsuk-character-count__message--disabled', !this.isOverThreshold());

    // Update styles
    if (!this.$errorMessage) {
      // Only toggle the textarea error class if there isn't an error message
      // already, as it may be unrelated to the limit (eg: allowed characters)
      // and would set the border colour back to black.
      this.$textarea.classList.toggle('nhsuk-textarea--error', isError);
    }
    this.$visibleCountMessage.classList.toggle('nhsuk-error-message', isError);
    this.$visibleCountMessage.classList.toggle('nhsuk-hint', !isError);

    // Update message
    this.$visibleCountMessage.textContent = this.formattedUpdateMessage();
  }

  /**
   * Update screen reader count message
   */
  updateScreenReaderCountMessage() {
    // If over the threshold, remove the aria-hidden attribute, allowing screen
    // readers to announce the content of the element.
    if (this.isOverThreshold()) {
      this.$screenReaderCountMessage.removeAttribute('aria-hidden');
    } else {
      this.$screenReaderCountMessage.setAttribute('aria-hidden', 'true');
    }

    // Update message
    this.$screenReaderCountMessage.textContent = this.formattedUpdateMessage();
  }

  /**
   * Get count message
   *
   * @returns {string} Status message
   */
  formattedUpdateMessage() {
    const remainingNumber = this.maxLength - this.count(this.$textarea.value);
    const countType = this.config.maxwords ? 'words' : 'characters';
    return this.formatCountMessage(remainingNumber, countType);
  }

  /**
   * Formats the message shown to users according to what's counted
   * and how many remain
   *
   * @param {number} remainingNumber - The number of words/characaters remaining
   * @param {string} countType - "words" or "characters"
   * @returns {string} Status message
   */
  formatCountMessage(remainingNumber, countType) {
    if (remainingNumber === 0) {
      return this.i18n.t(`${countType}AtLimit`);
    }
    const translationKeySuffix = remainingNumber < 0 ? 'OverLimit' : 'UnderLimit';
    return this.i18n.t(`${countType}${translationKeySuffix}`, {
      count: Math.abs(remainingNumber)
    });
  }

  /**
   * Check if count is over threshold
   *
   * Checks whether the value is over the configured threshold for the input.
   * If there is no configured threshold, it is set to 0 and this function will
   * always return true.
   *
   * @returns {boolean} true if the current count is over the config.threshold
   *   (or no threshold is set)
   */
  isOverThreshold() {
    // No threshold means we're always above threshold so save some computation
    if (!this.config.threshold) {
      return true;
    }

    // Determine the remaining number of characters/words
    const currentLength = this.count(this.$textarea.value);
    const maxLength = this.maxLength;
    const thresholdValue = maxLength * this.config.threshold / 100;
    return thresholdValue <= currentLength;
  }

  /**
   * Handle key up event
   *
   * Update the visible character counter and keep track of when the last update
   * happened for each keypress
   */
  handleKeyUp() {
    this.updateVisibleCountMessage();
    this.lastInputTimestamp = Date.now();
  }

  /**
   * Handle focus event
   *
   * Speech recognition software such as Dragon NaturallySpeaking will modify
   * the fields by directly changing its `value`. These changes don't trigger
   * events in JavaScript, so we need to poll to handle when and if they occur.
   *
   * Once the keyup event hasn't been detected for at least 1000 ms (1s), check
   * if the textarea value has changed and update the count message if it has.
   *
   * This is so that the update triggered by the manual comparison doesn't
   * conflict with debounced KeyboardEvent updates.
   */
  handleFocus() {
    this.valueChecker = window.setInterval(() => {
      if (!this.lastInputTimestamp || Date.now() - 500 >= this.lastInputTimestamp) {
        this.checkIfValueChanged();
      }
    }, 1000);
  }

  /**
   * Handle blur event
   *
   * Stop checking the textarea value once the textarea no longer has focus
   */
  handleBlur() {
    // Cancel value checking on blur
    if (this.valueChecker) {
      window.clearInterval(this.valueChecker);
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise character count component
 *
 * @deprecated Use {@link createAll | `createAll(CharacterCount, options)`} instead.
 * @param {InitOptions & CharacterCountConfig} [options]
 */
CharacterCount.moduleName = 'nhsuk-character-count';
/**
 * Character count default config
 *
 * @see {@link CharacterCountConfig}
 * @constant
 * @type {CharacterCountConfig}
 */
CharacterCount.defaults = Object.freeze({
  threshold: 0,
  i18n: {
    // Characters
    charactersUnderLimit: {
      one: 'You have %{count} character remaining',
      other: 'You have %{count} characters remaining'
    },
    charactersAtLimit: 'You have 0 characters remaining',
    charactersOverLimit: {
      one: 'You have %{count} character too many',
      other: 'You have %{count} characters too many'
    },
    // Words
    wordsUnderLimit: {
      one: 'You have %{count} word remaining',
      other: 'You have %{count} words remaining'
    },
    wordsAtLimit: 'You have 0 words remaining',
    wordsOverLimit: {
      one: 'You have %{count} word too many',
      other: 'You have %{count} words too many'
    },
    textareaDescription: {
      other: ''
    }
  }
});
/**
 * Character count config schema
 *
 * @constant
 * @satisfies {Schema<CharacterCountConfig>}
 */
CharacterCount.schema = Object.freeze({
  properties: {
    i18n: {
      type: 'object'
    },
    maxwords: {
      type: 'number'
    },
    maxlength: {
      type: 'number'
    },
    threshold: {
      type: 'number'
    }
  },
  anyOf: [{
    required: ['maxwords'],
    errorMessage: 'Either "maxlength" or "maxwords" must be provided'
  }, {
    required: ['maxlength'],
    errorMessage: 'Either "maxlength" or "maxwords" must be provided'
  }]
});
function initCharacterCounts(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $characterCounts = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${CharacterCount.moduleName}"]`);
  $characterCounts == null || $characterCounts.forEach($root => {
    new CharacterCount($root, options);
  });
}

/**
 * Character count config
 *
 * @see {@link CharacterCount.defaults}
 * @typedef {object} CharacterCountConfig
 * @property {number} [maxlength] - The maximum number of characters.
 *   If maxwords is provided, the maxlength option will be ignored.
 * @property {number} [maxwords] - The maximum number of words. If maxwords is
 *   provided, the maxlength option will be ignored.
 * @property {number} [threshold=0] - The percentage value of the limit at
 *   which point the count message is displayed. If this attribute is set, the
 *   count message will be hidden by default.
 * @property {CharacterCountTranslations} [i18n=CharacterCount.defaults.i18n] - Character count translations
 */

/**
 * Character count translations
 *
 * @see {@link CharacterCount.defaults.i18n}
 * @see {@link https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md}
 * @typedef {object} CharacterCountTranslations
 *
 * Messages shown to users as they type. It provides feedback on how many words
 * or characters they have remaining or if they are over the limit. This also
 * includes a message used as an accessible description for the textarea.
 * @property {TranslationPluralForms} [charactersUnderLimit] - Message displayed
 *   when the number of characters is under the configured maximum, `maxlength`.
 *   This message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining characters. This is a pluralised list of messages.
 * @property {string} [charactersAtLimit] - Message displayed when the number of
 *   characters reaches the configured maximum, `maxlength`. This message is
 *   displayed visually and through assistive technologies.
 * @property {TranslationPluralForms} [charactersOverLimit] - Message displayed
 *   when the number of characters is over the configured maximum, `maxlength`.
 *   This message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining characters. This is a pluralised list of messages.
 * @property {TranslationPluralForms} [wordsUnderLimit] - Message displayed when
 *   the number of words is under the configured maximum, `maxlength`. This
 *   message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining words. This is a pluralised list of messages.
 * @property {string} [wordsAtLimit] - Message displayed when the number of
 *   words reaches the configured maximum, `maxlength`. This message is
 *   displayed visually and through assistive technologies.
 * @property {TranslationPluralForms} [wordsOverLimit] - Message displayed when
 *   the number of words is over the configured maximum, `maxlength`. This
 *   message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining words. This is a pluralised list of messages.
 * @property {TranslationPluralForms} [textareaDescription] - Message made
 *   available to assistive technologies, if none is already present in the
 *   HTML, to describe that the component accepts only a limited amount of
 *   content. It is visible on the page when JavaScript is unavailable. The
 *   component will replace the `%{count}` placeholder with the value of the
 *   `maxlength` or `maxwords` parameter.
 */

/**
 * @import { TranslationPluralForms } from '../../i18n.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

/**
 * Checkboxes component
 *
 * Conditionally show content when a checkbox button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/checkboxes/with-conditional-content/}
 */
class Checkboxes extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root);
    const $inputs = this.$root.querySelectorAll('input[type="checkbox"]');
    if (!$inputs.length) {
      throw new ElementError({
        component: Checkboxes,
        identifier: 'Form inputs (`<input type="checkbox">`)'
      });
    }
    this.$inputs = $inputs;
    this.$inputs.forEach($input => {
      const targetId = $input.getAttribute('aria-controls');

      // Skip checkboxes without aria-controls attributes
      if (!targetId) {
        return;
      }

      // Throw if target conditional element does not exist.
      if (!document.getElementById(targetId)) {
        throw new ElementError({
          component: Checkboxes,
          identifier: `Conditional reveal (\`id="${targetId}"\`)`
        });
      }
    });

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => this.syncAllConditionalReveals());

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so sync now too.
    this.syncAllConditionalReveals();

    // Handle events
    this.$root.addEventListener('click', event => this.handleClick(event));
  }

  /**
   * Sync the conditional reveal states for all checkboxes in this component.
   */
  syncAllConditionalReveals() {
    this.$inputs.forEach($input => this.syncConditionalRevealWithInputState($input));
  }

  /**
   * Sync conditional reveal with the input state
   *
   * Synchronise the visibility of the conditional reveal, and its accessible
   * state, with the input's checked state.
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  syncConditionalRevealWithInputState($input) {
    toggleConditionalInput($input, 'nhsuk-checkboxes__conditional--hidden');
  }

  /**
   * Uncheck other checkboxes
   *
   * Find any other checkbox inputs with the checkbox group value, and uncheck them.
   * This is useful for when a “None of these" checkbox is checked.
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  unCheckAllInputsExcept($input) {
    const {
      checkboxExclusiveGroup: exclusiveGroup
    } = $input.dataset;
    const selectorGroup = exclusiveGroup ? `[data-checkbox-exclusive-group="${exclusiveGroup}"]` : `[name="${$input.name}"]`;
    const allInputsWithSameName = document.querySelectorAll(`input[type="checkbox"]${selectorGroup}`);
    allInputsWithSameName.forEach($inputWithSameName => {
      const hasSameFormOwner = $input.form === $inputWithSameName.form;

      // Uncheck all with same exclusive group by default, otherwise fall back to
      // GOV.UK Frontend behaviour to uncheck all with the same name attribute
      if (hasSameFormOwner && $inputWithSameName !== $input) {
        this.setInputState($inputWithSameName, false, exclusiveGroup);
      }
    });
  }

  /**
   * Uncheck exclusive inputs
   *
   * Find any checkbox inputs with the same checkbox group value and the 'exclusive' behaviour,
   * and uncheck them. This helps prevent someone checking both a regular checkbox and a
   * "None of these" checkbox in the same fieldset.
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  unCheckExclusiveInputs($input) {
    const {
      checkboxExclusiveGroup: exclusiveGroup
    } = $input.dataset;
    const selectorGroup = exclusiveGroup ? `[data-checkbox-exclusive-group="${exclusiveGroup}"]` : `[name="${$input.name}"]`;
    const allInputsWithSameNameAndExclusiveBehaviour = document.querySelectorAll(`input[type="checkbox"][data-checkbox-exclusive]${selectorGroup}`);
    allInputsWithSameNameAndExclusiveBehaviour.forEach($exclusiveInput => {
      const hasSameFormOwner = $input.form === $exclusiveInput.form;

      // Uncheck the exclusive input only. When no group is set, fall back to
      // GOV.UK Frontend behaviour and locate the exclusive input by name
      if (hasSameFormOwner) {
        this.setInputState($exclusiveInput, false, exclusiveGroup);
      }
    });
  }

  /**
   * Set input state, optionally for matching exclusive group only
   *
   * @param {HTMLInputElement} $input - Checkbox input
   * @param {boolean} checked - Checkbox checked state
   * @param {string} [exclusiveGroup] - Set state for matching exclusive group only (optional)
   */
  setInputState($input, checked, exclusiveGroup) {
    const {
      checkboxExclusiveGroup
    } = $input.dataset;

    // Skip input when exclusive group does not match
    if (exclusiveGroup && checkboxExclusiveGroup && checkboxExclusiveGroup !== exclusiveGroup) {
      return;
    }
    $input.checked = checked;
    this.syncConditionalRevealWithInputState($input);
  }

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    const $clickedInput = event.target;

    // Ignore clicks on things that aren't checkbox inputs
    if (!($clickedInput instanceof HTMLInputElement) || $clickedInput.type !== 'checkbox') {
      return;
    }

    // If the checkbox conditionally-reveals some content, sync the state
    const hasAriaControls = $clickedInput.getAttribute('aria-controls');
    if (hasAriaControls) {
      this.syncConditionalRevealWithInputState($clickedInput);
    }

    // No further behaviour needed for unchecking
    if (!$clickedInput.checked) {
      return;
    }

    // Handle 'exclusive' checkbox behaviour (ie "None of these")
    if ('checkboxExclusive' in $clickedInput.dataset) {
      this.unCheckAllInputsExcept($clickedInput);
    } else {
      this.unCheckExclusiveInputs($clickedInput);
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise checkboxes component
 *
 * @deprecated Use {@link createAll | `createAll(Checkboxes)`} instead.
 * @param {InitOptions} [options]
 */
Checkboxes.moduleName = 'nhsuk-checkboxes';
function initCheckboxes(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $checkboxes = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Checkboxes.moduleName}"]`);
  $checkboxes == null || $checkboxes.forEach($root => {
    new Checkboxes($root);
  });
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

/**
 * Error summary component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v2.13.0/src/components/error-summary/error-summary.js
 *
 * @augments ConfigurableComponent<ErrorSummaryConfig>
 */
class ErrorSummary extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {ErrorSummaryConfig} [config] - Error summary config
   */
  constructor($root, config = {}) {
    super($root, config);

    /**
     * Focus the error summary
     */
    if (!this.config.disableAutoFocus) {
      setFocus(this.$root);
    }
    this.$root.addEventListener('click', event => this.handleClick(event));
  }

  /**
   * Error summary config override
   *
   * @param {Partial<ErrorSummaryConfig>} _datasetConfig - Config specified by dataset
   * @returns {Partial<ErrorSummaryConfig>} Config to override by dataset
   */
  configOverride(_datasetConfig) {
    let configOverrides = /** @type {Partial<ErrorSummaryConfig>} */{};
    if ('focusOnPageLoad' in this.config) {
      console.warn(formatErrorMessage(ErrorSummary, 'Option `focusOnPageLoad` is deprecated. Use `disableAutoFocus` instead.'));
      configOverrides.disableAutoFocus = !this.config.focusOnPageLoad;
    }
    return configOverrides;
  }

  /**
   * Get associated legend or label
   *
   * Returns the first element that exists from this list:
   *
   * - The `<legend>` associated with the closest `<fieldset>` ancestor, as long
   *   as the top of it is no more than half a viewport height away from the
   *   bottom of the input
   * - The first `<label>` that is associated with the input using for="inputId"
   * - The closest parent `<label>`
   *
   * @param {Element} $input - The input
   * @returns {Element | null} Associated legend or label, or null if no
   *   associated legend or label can be found
   */
  getAssociatedLegendOrLabel($input) {
    var _document$querySelect;
    const $fieldset = $input.closest('fieldset');
    if ($fieldset) {
      const $legends = $fieldset.getElementsByTagName('legend');
      if ($legends.length) {
        const $candidateLegend = $legends[0];

        // If the input type is radio or checkbox, always use the legend if
        // there is one.
        if ($input instanceof HTMLInputElement && ($input.type === 'checkbox' || $input.type === 'radio')) {
          return $candidateLegend;
        }

        // For other input types, only scroll to the fieldset’s legend (instead
        // of the label associated with the input) if the input would end up in
        // the top half of the screen.
        //
        // This should avoid situations where the input either ends up off the
        // screen, or obscured by a software keyboard.
        const legendTop = $candidateLegend.getBoundingClientRect().top;
        const inputRect = $input.getBoundingClientRect();

        // If the browser doesn't support Element.getBoundingClientRect().height
        // or window.innerHeight (like IE8), bail and just link to the label.
        if (inputRect.height && window.innerHeight) {
          const inputBottom = inputRect.top + inputRect.height;
          if (inputBottom - legendTop < window.innerHeight / 2) {
            return $candidateLegend;
          }
        }
      }
    }
    return (_document$querySelect = document.querySelector(`label[for='${$input.getAttribute('id')}']`)) != null ? _document$querySelect : $input.closest('label');
  }

  /**
   * Focus the target element
   *
   * By default, the browser will scroll the target into view. Because our
   * labels or legends appear above the input, this means the user will be
   * presented with an input without any context, as the label or legend will be
   * off the top of the screen.
   *
   * Manually handling the click event, scrolling the question into view and
   * then focussing the element solves this.
   *
   * This also results in the label and/or legend being announced correctly in
   * NVDA (as tested in 2018.3.2) - without this only the field type is
   * announced (e.g. "Edit, has autocomplete").
   *
   * @param {EventTarget} $target - Event target
   * @returns {boolean} True if the target was able to be focussed
   */
  focusTarget($target) {
    // If the element that was clicked was not a link, return early
    if (!($target instanceof HTMLAnchorElement)) {
      return false;
    }
    const inputId = $target.hash.replace('#', '');
    if (!inputId) {
      return false;
    }
    const $input = document.getElementById(inputId);
    if (!$input) {
      return false;
    }
    const $legendOrLabel = this.getAssociatedLegendOrLabel($input);
    if (!$legendOrLabel) {
      return false;
    }

    // Scroll the legend or label into view *before* calling focus on the input
    // to avoid extra scrolling in browsers that don't support `preventScroll`
    // (which at time of writing is most of them...)
    $legendOrLabel.scrollIntoView();
    $input.focus({
      preventScroll: true
    });
    return true;
  }

  /**
   * Click event handler
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    const $target = event.target;
    if ($target && this.focusTarget($target)) {
      event.preventDefault();
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise error summary component
 *
 * @deprecated Use {@link createAll | `createAll(ErrorSummary, options)`} instead.
 * @param {InitOptions & ErrorSummaryConfig} [options]
 */
ErrorSummary.moduleName = 'nhsuk-error-summary';
/**
 * Error summary default config
 *
 * @see {@link ErrorSummaryConfig}
 * @constant
 * @type {ErrorSummaryConfig}
 */
ErrorSummary.defaults = Object.freeze({
  disableAutoFocus: false
});
/**
 * Error summary config schema
 *
 * @constant
 * @satisfies {Schema<ErrorSummaryConfig>}
 */
ErrorSummary.schema = Object.freeze({
  properties: {
    focusOnPageLoad: {
      type: 'boolean'
    },
    // Deprecated
    disableAutoFocus: {
      type: 'boolean'
    }
  }
});
function initErrorSummary(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $root = $scope == null ? void 0 : $scope.querySelector(`[data-module="${ErrorSummary.moduleName}"]`);
  if (!$root) {
    return;
  }
  new ErrorSummary($root, options);
}

/**
 * Error summary config
 *
 * @see {@link ErrorSummary.defaults}
 * @typedef {object} ErrorSummaryConfig
 * @property {boolean} [focusOnPageLoad=true] - Deprecated. Use `disableAutoFocus` instead.
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the error
 *   summary will not be focussed when the page loads.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

/**
 * Header component
 */
class Header extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root);
    /** @type {HTMLElement | null} */
    this.$navigation = null;
    /** @type {HTMLElement | null} */
    this.$navigationList = null;
    /** @type {NodeListOf<HTMLElement> | null} */
    this.$navigationItems = null;
    /** @type {HTMLElement | null} */
    this.$menu = null;
    /** @type {HTMLButtonElement | null} */
    this.$menuToggle = null;
    /** @type {HTMLElement | null} */
    this.$menuList = null;
    this.width = 0;
    /**
     * @type {{ element: HTMLElement, right: number }[]}
     */
    this.breakpoints = [];
    /**
     * @type {number | null}
     */
    this.updateNavigationTimer = null;
    this.menuIsEnabled = false;
    this.menuIsOpen = false;
    const $navigation = this.$root.querySelector('.nhsuk-header__navigation');
    const $navigationList = this.$root.querySelector('.nhsuk-header__navigation-list');
    const $navigationItems = /** @type {NodeListOf<HTMLElement>} */
    this.$root.querySelectorAll('.nhsuk-header__navigation-item');
    const $menu = this.$root.querySelector('.nhsuk-header__menu');
    const $menuToggle = this.$root.querySelector('.nhsuk-header__menu-toggle');

    // Check for navigation (optional)
    if ($navigation) {
      if (!($navigation instanceof HTMLElement)) {
        throw new ElementError({
          component: Header,
          identifier: 'Navigation (`<nav class="nhsuk-header__navigation">`)'
        });
      }
      if (!$navigationList || !($navigationList instanceof HTMLElement)) {
        throw new ElementError({
          component: Header,
          identifier: 'List (`<ul class="nhsuk-header__navigation-list">`)'
        });
      }
      if (!$navigationItems.length) {
        throw new ElementError({
          component: Header,
          identifier: 'List items (`<li class="nhsuk-header__navigation-item">`)'
        });
      }
      if (!$menu || !($menu instanceof HTMLElement)) {
        throw new ElementError({
          component: Header,
          identifier: 'Menu item (`<li class="nhsuk-header__menu" hidden>`)'
        });
      }
      if (!$menuToggle || !($menuToggle instanceof HTMLButtonElement)) {
        throw new ElementError({
          component: Header,
          identifier: 'Menu button (`<button class="nhsuk-header__menu-toggle">`)',
          expectedType: 'HTMLButtonElement'
        });
      }
      this.$navigation = $navigation;
      this.$navigationList = $navigationList;
      this.$navigationItems = $navigationItems;
      this.$menu = $menu;
      this.$menuToggle = $menuToggle;
      this.$menuList = document.createElement('ul');
    }

    // Save bound functions so we can remove event listeners when unnecessary
    this.handleEscapeKey = this.onEscapeKey.bind(this);
    this.handleUpdateNavigation = this.updateNavigation.bind(this);
    this.handleToggleMenu = this.toggleMenu.bind(this);
    this.setupNavigation();
    this.updateNavigation();
  }

  /**
   * Reset navigation
   *
   * Calculate available space by summing the width of each navigation item
   */
  resetNavigation() {
    const {
      $menu,
      $navigationList
    } = this;
    if (!$menu || !$navigationList) {
      return;
    }
    let right = 0;

    // Reset and calculate widths on every resize
    this.breakpoints.forEach(breakpoint => {
      $navigationList.insertBefore(breakpoint.element, $menu);

      // Calculate widths
      right += breakpoint.element.offsetWidth;
      breakpoint.right = right;
    });

    // Reset space for menu button
    this.width = $navigationList.offsetWidth;
  }

  /**
   * Add the breakpoints with default positions
   */
  setupNavigation() {
    const {
      $navigationItems
    } = this;

    // Skip with no navigation items
    if (!$navigationItems) {
      return;
    }
    $navigationItems.forEach(element => {
      this.breakpoints.push({
        element,
        right: 0
      });
    });

    // Add resize listener for next update
    window.addEventListener('resize', () => {
      if (this.updateNavigationTimer) {
        window.clearTimeout(this.updateNavigationTimer);
      }
      this.updateNavigationTimer = window.setTimeout(this.handleUpdateNavigation, 100);
    });
  }

  /**
   * Add the menu to the DOM
   */
  setupMenu() {
    const {
      $menu,
      $menuList
    } = this;

    // Skip with no menu or when already appended
    if (!$menu || !$menuList || $menuList.parentElement) {
      return;
    }
    $menuList.classList.add('nhsuk-header__menu-list');
    $menuList.setAttribute('hidden', '');
    $menu.appendChild($menuList);
  }

  /**
   * Enable the menu
   */
  enableMenu() {
    const {
      $menu,
      $menuToggle
    } = this;

    // Skip with no menu or when already enabled
    if (!$menu || !$menuToggle || this.menuIsEnabled) {
      return;
    }
    this.menuIsEnabled = true;
    $menu.removeAttribute('hidden');

    // Add click listener to toggle menu
    $menuToggle.addEventListener('click', this.handleToggleMenu);
  }

  /**
   * Disable the menu
   */
  disableMenu() {
    const {
      $menu,
      $menuToggle
    } = this;

    // Skip with no menu or when already disabled
    if (!$menu || !$menuToggle || !this.menuIsEnabled) {
      return;
    }
    this.closeMenu();
    this.menuIsEnabled = false;
    $menu.setAttribute('hidden', '');

    // Remove click listener from toggle menu
    $menuToggle.removeEventListener('click', this.handleToggleMenu);
  }

  /**
   * Close the menu
   *
   * Closes the menu and updates accessibility state.
   *
   * Removes the bottom border from the navigation
   */
  closeMenu() {
    const {
      $menuList,
      $menuToggle,
      $navigation
    } = this;

    // Skip with no menu or when already closed
    if (!$navigation || !$menuList || !$menuToggle || !this.menuIsEnabled || !this.menuIsOpen) {
      return;
    }
    this.menuIsOpen = false;
    $menuList.setAttribute('hidden', '');
    $menuToggle.setAttribute('aria-expanded', 'false');
    $navigation.style.removeProperty('border-bottom-width');

    // Remove escape key listener to close menu
    document.removeEventListener('keydown', this.handleEscapeKey);
  }

  /**
   * Escape key handler
   *
   * This function is called when the user
   * presses the escape key to close the menu.
   *
   * @param {KeyboardEvent} event - Key press event
   */
  onEscapeKey(event) {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  /**
   * Open the menu
   *
   * Opens the menu and updates accessibility state.
   *
   * The menu is absolutely positioned, so it adds a border
   * to the bottom of the navigation to prevent it from overlapping
   *
   * Adds event listeners for the close button,
   */
  openMenu() {
    const {
      $menuList,
      $menuToggle,
      $navigation
    } = this;

    // Skip with no menu or when already open
    if (!$navigation || !$menuList || !$menuToggle || !this.menuIsEnabled || this.menuIsOpen) {
      return;
    }
    this.menuIsOpen = true;
    $menuList.removeAttribute('hidden');
    $menuToggle.setAttribute('aria-expanded', 'true');
    $navigation.style.setProperty('border-bottom-width', `${$menuList.offsetHeight}px`);

    // Add escape key listener to close menu
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  /**
   * Handle menu button click
   *
   * Toggles the menu between open and closed
   */
  toggleMenu() {
    if (!this.menuIsEnabled) {
      return;
    }
    if (this.menuIsOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * Update navigation for the available space
   *
   * Moves all items that overflow the available space into the menu
   */
  updateNavigation() {
    this.resetNavigation();

    // Check for items that overflow
    let menuItems = this.breakpoints.filter(breakpoint => {
      return breakpoint.right > this.width;
    });

    // Disable menu if empty
    if (!menuItems.length) {
      this.disableMenu();
      return;
    }
    this.setupMenu();
    this.enableMenu();
    const {
      $menu,
      $menuList,
      $navigation
    } = this;

    // Skip when no menu or menu list
    if (!$menu || !$menuList || !$navigation) {
      return;
    }

    // Subtract space for menu button
    this.width -= $menu.offsetWidth;

    // Move items based on available width
    this.breakpoints.forEach(breakpoint => {
      if (breakpoint.right > this.width) {
        $menuList.insertAdjacentElement('beforeend', breakpoint.element);
      }
    });

    // Update menu height if open
    if (this.menuIsOpen) {
      $navigation.style.setProperty('border-bottom-width', `${$menuList.offsetHeight}px`);
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise header component
 *
 * @deprecated Use {@link createAll | `createAll(Header)`} instead.
 * @param {InitOptions} [options]
 */
Header.moduleName = 'nhsuk-header';
function initHeader(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $root = $scope == null ? void 0 : $scope.querySelector(`[data-module="${Header.moduleName}"]`);
  if (!$root) {
    return;
  }
  new Header($root);
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

/**
 * Notification banner component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v5.10.2/packages/govuk-frontend/src/govuk/components/notification-banner/notification-banner.mjs
 *
 * @augments ConfigurableComponent<NotificationBannerConfig>
 */
class NotificationBanner extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {NotificationBannerConfig} [config] - Notification banner config
   */
  constructor($root, config = {}) {
    super($root, config);

    /**
     * Focus the notification banner
     *
     * If `role="alert"` is set, focus the element to help some assistive
     * technologies prioritise announcing it.
     *
     * You can turn off the auto-focus functionality by setting
     * `data-disable-auto-focus="true"` in the component HTML. You might wish to
     * do this based on user research findings, or to avoid a clash with another
     * element which should be focused when the page loads.
     */
    if (this.$root.getAttribute('role') === 'alert' && !this.config.disableAutoFocus) {
      setFocus(this.$root);
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes.
   */
}

/**
 * Initialise notification banner component
 *
 * @deprecated Use {@link createAll | `createAll(NotificationBanner, options)`} instead.
 * @param {InitOptions & NotificationBannerConfig} [options]
 */
NotificationBanner.moduleName = 'nhsuk-notification-banner';
/**
 * Notification banner default config
 *
 * @see {@link NotificationBannerConfig}
 * @constant
 * @type {NotificationBannerConfig}
 */
NotificationBanner.defaults = Object.freeze({
  disableAutoFocus: false
});
/**
 * Notification banner config schema
 *
 * @constant
 * @satisfies {Schema<NotificationBannerConfig>}
 */
NotificationBanner.schema = Object.freeze({
  properties: {
    disableAutoFocus: {
      type: 'boolean'
    }
  }
});
function initNotificationBanners(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $notificationBanners = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${NotificationBanner.moduleName}"]`);
  $notificationBanners == null || $notificationBanners.forEach($notificationBanner => {
    new NotificationBanner($notificationBanner, options);
  });
}

/**
 * Notification banner config
 *
 * @typedef {object} NotificationBannerConfig
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the
 *   notification banner will not be focussed when the page loads. This only
 *   applies if the component has a `role` of `alert` – in other cases the
 *   component will not be focused on page load, regardless of this option.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

/**
 * Password input component
 *
 * @augments ConfigurableComponent<PasswordInputConfig>
 */
class PasswordInput extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {PasswordInputConfig} [config] - Password input config
   */
  constructor($root, config = {}) {
    super($root, config);
    const $input = this.$root.querySelector('.nhsuk-js-password-input-input');
    if (!($input instanceof HTMLInputElement)) {
      throw new ElementError({
        component: PasswordInput,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-password-input-input`)'
      });
    }
    if ($input.type !== 'password') {
      throw new ElementError({
        component: PasswordInput,
        element: $input,
        expectedType: 'HTMLInputElement with attribute (`type="password"`)',
        identifier: 'Form field (`.nhsuk-js-password-input-input`)'
      });
    }
    const $showHideButton = this.$root.querySelector('.nhsuk-js-password-input-toggle');
    if (!($showHideButton instanceof HTMLButtonElement)) {
      throw new ElementError({
        component: PasswordInput,
        element: $showHideButton,
        expectedType: 'HTMLButtonElement',
        identifier: 'Button (`.nhsuk-js-password-input-toggle`)'
      });
    }
    if ($showHideButton.type !== 'button') {
      throw new ElementError({
        component: PasswordInput,
        element: $showHideButton,
        expectedType: 'HTMLButtonElement with type="button"',
        identifier: 'Button (`.nhsuk-js-password-input-toggle`)'
      });
    }
    this.$input = $input;
    this.$showHideButton = $showHideButton;
    this.i18n = new I18n(this.config.i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    });

    // Show the toggle button element
    this.$showHideButton.removeAttribute('hidden');

    // Create and append the status text for screen readers.
    // This is injected between the input and button so that users get a sensible reading order if
    // moving through the page content linearly:
    // [password input] -> [your password is visible/hidden] -> [show/hide password]
    const $screenReaderStatusMessage = document.createElement('div');
    $screenReaderStatusMessage.className = 'nhsuk-password-input__sr-status nhsuk-u-visually-hidden';
    $screenReaderStatusMessage.setAttribute('aria-live', 'polite');
    this.$screenReaderStatusMessage = $screenReaderStatusMessage;
    this.$input.insertAdjacentElement('afterend', $screenReaderStatusMessage);

    // Bind toggle button
    this.$showHideButton.addEventListener('click', this.toggle.bind(this));

    // Bind event to revert the password visibility to hidden
    if (this.$input.form) {
      this.$input.form.addEventListener('submit', () => this.hide());
    }

    // If the page is restored from bfcache and the password is visible, hide it again
    window.addEventListener('pageshow', event => {
      if (event.persisted && this.$input.type !== 'password') {
        this.hide();
      }
    });

    // Default the component to having the password hidden.
    this.hide();
  }

  /**
   * Toggle the visibility of the password input
   *
   * @param {MouseEvent} event - Click event
   */
  toggle(event) {
    event.preventDefault();

    // If on this click, the field is type="password", show the value
    if (this.$input.type === 'password') {
      this.show();
      return;
    }

    // Otherwise, hide it
    // Being defensive - hiding should always be the default
    this.hide();
  }

  /**
   * Show the password input value in plain text
   */
  show() {
    this.setType('text');
  }

  /**
   * Hide the password input value
   */
  hide() {
    this.setType('password');
  }

  /**
   * Set the password input type
   *
   * @param {'text' | 'password'} type - Input type
   */
  setType(type) {
    if (type === this.$input.type) {
      return;
    }

    // Update input type
    this.$input.setAttribute('type', type);
    const isHidden = type === 'password';
    const prefixButton = isHidden ? 'show' : 'hide';
    const prefixStatus = isHidden ? 'passwordHidden' : 'passwordShown';

    // Update button text
    this.$showHideButton.innerText = this.i18n.t(`${prefixButton}Password`);

    // Update button aria-label
    this.$showHideButton.setAttribute('aria-label', this.i18n.t(`${prefixButton}PasswordAriaLabel`));

    // Update status change text
    this.$screenReaderStatusMessage.innerText = this.i18n.t(`${prefixStatus}Announcement`);
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise password input component
 *
 * @deprecated Use {@link createAll | `createAll(PasswordInput, options)`} instead.
 * @param {InitOptions & PasswordInputConfig} [options]
 */
PasswordInput.moduleName = 'nhsuk-password-input';
/**
 * Password input default config
 *
 * @see {@link PasswordInputConfig}
 * @constant
 * @type {PasswordInputConfig}
 */
PasswordInput.defaults = Object.freeze({
  i18n: {
    showPassword: 'Show',
    hidePassword: 'Hide',
    showPasswordAriaLabel: 'Show password',
    hidePasswordAriaLabel: 'Hide password',
    passwordShownAnnouncement: 'Your password is visible',
    passwordHiddenAnnouncement: 'Your password is hidden'
  }
});
/**
 * Password input config schema
 *
 * @constant
 * @satisfies {Schema<PasswordInputConfig>}
 */
PasswordInput.schema = Object.freeze({
  properties: {
    i18n: {
      type: 'object'
    }
  }
});
function initPasswordInputs(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $passwordInputs = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${PasswordInput.moduleName}"]`);
  $passwordInputs == null || $passwordInputs.forEach($root => {
    new PasswordInput($root, options);
  });
}

/**
 * Password input config
 *
 * @typedef {object} PasswordInputConfig
 * @property {PasswordInputTranslations} [i18n=PasswordInput.defaults.i18n] - Password input translations
 */

/**
 * Password input translations
 *
 * @see {@link PasswordInput.defaults.i18n}
 * @typedef {object} PasswordInputTranslations
 *
 * Messages displayed to the user indicating the state of the show/hide toggle.
 * @property {string} [showPassword] - Visible text of the button when the
 *   password is currently hidden. Plain text only.
 * @property {string} [hidePassword] - Visible text of the button when the
 *   password is currently visible. Plain text only.
 * @property {string} [showPasswordAriaLabel] - aria-label of the button when
 *   the password is currently hidden. Plain text only.
 * @property {string} [hidePasswordAriaLabel] - aria-label of the button when
 *   the password is currently visible. Plain text only.
 * @property {string} [passwordShownAnnouncement] - Screen reader
 *   announcement to make when the password has just become visible.
 *   Plain text only.
 * @property {string} [passwordHiddenAnnouncement] - Screen reader
 *   announcement to make when the password has just been hidden.
 *   Plain text only.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

/**
 * Radios component
 *
 * Conditionally show content when a radio button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/}
 */
class Radios extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root);
    const $inputs = this.$root.querySelectorAll('input[type="radio"]');
    if (!$inputs.length) {
      throw new ElementError({
        component: Radios,
        identifier: 'Form inputs (`<input type="radio">`)'
      });
    }
    this.$inputs = $inputs;
    this.$inputs.forEach($input => {
      const targetId = $input.getAttribute('aria-controls');

      // Skip radios without aria-controls attributes
      if (!targetId) {
        return;
      }

      // Throw if target conditional element does not exist.
      if (!document.getElementById(targetId)) {
        throw new ElementError({
          component: Radios,
          identifier: `Conditional reveal (\`id="${targetId}"\`)`
        });
      }
    });

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => this.syncAllConditionalReveals());

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so sync now too.
    this.syncAllConditionalReveals();

    // Handle events
    this.$root.addEventListener('click', event => this.handleClick(event));
  }

  /**
   * Sync the conditional reveal states for all radio buttons in this component.
   */
  syncAllConditionalReveals() {
    this.$inputs.forEach($input => this.syncConditionalRevealWithInputState($input));
  }

  /**
   * Sync conditional reveal with the input state
   *
   * Synchronise the visibility of the conditional reveal, and its accessible
   * state, with the input's checked state.
   *
   * @param {HTMLInputElement} $input - Radio input
   */
  syncConditionalRevealWithInputState($input) {
    toggleConditionalInput($input, 'nhsuk-radios__conditional--hidden');
  }

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    const $clickedInput = event.target;

    // Ignore clicks on things that aren't radio buttons
    if (!($clickedInput instanceof HTMLInputElement) || $clickedInput.type !== 'radio') {
      return;
    }

    // We only need to consider radios with conditional reveals, which will have
    // aria-controls attributes.
    const $allInputs = document.querySelectorAll('input[type="radio"][aria-controls]');
    const $clickedInputForm = $clickedInput.form;
    const $clickedInputName = $clickedInput.name;
    $allInputs.forEach($input => {
      const hasSameFormOwner = $input.form === $clickedInputForm;
      const hasSameName = $input.name === $clickedInputName;
      if (hasSameName && hasSameFormOwner) {
        this.syncConditionalRevealWithInputState($input);
      }
    });
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise radios component
 *
 * @deprecated Use {@link createAll | `createAll(Radios)`} instead.
 * @param {InitOptions} [options]
 */
Radios.moduleName = 'nhsuk-radios';
function initRadios(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $radios = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Radios.moduleName}"]`);
  $radios == null || $radios.forEach($root => {
    new Radios($root);
  });
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

const _self = typeof globalThis !== 'undefined' ? globalThis // Modern browsers, Node.js
: self; // Old browsers, web workers

/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when selected so the next focusable element is not at the jumped to area.
 *
 * @augments Component<HTMLAnchorElement>
 */
class SkipLink extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    var _this$$root$getAttrib;
    super($root);
    const hash = this.$root.hash;
    const href = (_this$$root$getAttrib = this.$root.getAttribute('href')) != null ? _this$$root$getAttrib : '';
    const linkedElementId = hash.replace('#', '');
    if (!linkedElementId) {
      throw new ElementError({
        component: SkipLink,
        identifier: `Target link (\`href="${href}"\`) hash fragment`
      });
    }
    const $linkedElement = document.getElementById(linkedElementId);

    // Check for linked element
    if (!$linkedElement) {
      throw new ElementError({
        component: SkipLink,
        element: $linkedElement,
        identifier: `Target content (\`id="${linkedElementId}"\`)`
      });
    }

    /**
     * Focus the linked element on click
     *
     * Adds a helper CSS class to hide native focus styles,
     * but removes it on blur to restore native focus styles
     */
    this.$root.addEventListener('click', () => setFocus($linkedElement, {
      onBeforeFocus() {
        $linkedElement.classList.add('nhsuk-skip-link-focused-element');
      },
      onBlur() {
        $linkedElement.classList.remove('nhsuk-skip-link-focused-element');
      }
    }));
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink)`} instead.
 * @param {InitOptions} [options]
 */
SkipLink.elementType = _self.HTMLAnchorElement;
SkipLink.moduleName = 'nhsuk-skip-link';
function initSkipLinks(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $skipLinks = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${SkipLink.moduleName}"]`);
  $skipLinks == null || $skipLinks.forEach($root => {
    new SkipLink($root);
  });
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

/**
 * Tabs component
 */
class Tabs extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root);
    this.jsHiddenClass = 'nhsuk-tabs__panel--hidden';
    this.changingHash = false;
    /**
     * @type {MediaQueryList | null}
     */
    this.mql = null;
    const $tabs = this.$root.querySelectorAll('a.nhsuk-tabs__tab');
    if (!$tabs.length) {
      throw new ElementError({
        component: Tabs,
        identifier: 'Links (`<a class="nhsuk-tabs__tab">`)'
      });
    }
    this.$tabs = $tabs;

    // Save bound functions so we can remove event listeners during teardown
    this.boundTabClick = this.onTabClick.bind(this);
    this.boundTabKeydown = this.onTabKeydown.bind(this);
    this.boundOnHashChange = this.onHashChange.bind(this);
    const $tabList = this.$root.querySelector('.nhsuk-tabs__list');
    const $tabListItems = this.$root.querySelectorAll('li.nhsuk-tabs__list-item');
    if (!$tabList) {
      throw new ElementError({
        component: Tabs,
        identifier: 'List (`<ul class="nhsuk-tabs__list">`)'
      });
    }
    if (!$tabListItems.length) {
      throw new ElementError({
        component: Tabs,
        identifier: 'List items (`<li class="nhsuk-tabs__list-item">`)'
      });
    }
    this.$tabList = $tabList;
    this.$tabListItems = $tabListItems;
    this.setupResponsiveChecks();
  }

  /**
   * Setup viewport resize check
   */
  setupResponsiveChecks() {
    const breakpoint = getBreakpoint('tablet');
    if (!breakpoint.value) {
      throw new ElementError({
        component: Tabs,
        identifier: `CSS custom property (\`${breakpoint.property}\`) on pseudo-class \`:root\``
      });
    }

    // Media query list for NHS.UK frontend tablet breakpoint
    this.mql = window.matchMedia(`(min-width: ${breakpoint.value})`);

    // MediaQueryList.addEventListener isn't supported by Safari < 14 so we need
    // to be able to fall back to the deprecated MediaQueryList.addListener
    if ('addEventListener' in this.mql) {
      this.mql.addEventListener('change', () => this.checkMode());
    } else {
      // @ts-expect-error Property 'addListener' does not exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.mql.addListener(() => this.checkMode());
    }
    this.checkMode();
  }

  /**
   * Setup or teardown handler for viewport resize check
   */
  checkMode() {
    var _this$mql;
    if ((_this$mql = this.mql) != null && _this$mql.matches) {
      this.setup();
    } else {
      this.teardown();
    }
  }

  /**
   * Setup tab component
   */
  setup() {
    var _this$getTab;
    this.$tabList.setAttribute('role', 'tablist');
    this.$tabListItems.forEach($item => {
      $item.setAttribute('role', 'presentation');
    });
    this.$tabs.forEach($tab => {
      // Set HTML attributes
      this.setAttributes($tab);

      // Handle events
      $tab.addEventListener('click', this.boundTabClick, true);
      $tab.addEventListener('keydown', this.boundTabKeydown, true);

      // Remove old active panels
      this.hideTab($tab);
    });

    // Show either the active tab according to the URL's hash or the first tab
    const $activeTab = (_this$getTab = this.getTab(window.location.hash)) != null ? _this$getTab : this.$tabs[0];
    this.showTab($activeTab);

    // Handle hashchange events
    window.addEventListener('hashchange', this.boundOnHashChange, true);
  }

  /**
   * Teardown tab component
   */
  teardown() {
    this.$tabList.removeAttribute('role');
    this.$tabListItems.forEach($item => {
      $item.removeAttribute('role');
    });
    this.$tabs.forEach($tab => {
      // Remove events
      $tab.removeEventListener('click', this.boundTabClick, true);
      $tab.removeEventListener('keydown', this.boundTabKeydown, true);

      // Unset HTML attributes
      this.unsetAttributes($tab);
    });

    // Remove hashchange event handler
    window.removeEventListener('hashchange', this.boundOnHashChange, true);
  }

  /**
   * Handle hashchange event
   *
   * @returns {void} Returns void when prevented
   */
  onHashChange() {
    const {
      hash
    } = window.location;
    const $tabWithHash = this.getTab(hash);
    if (!$tabWithHash) {
      return;
    }

    // Prevent changing the hash
    if (this.changingHash) {
      this.changingHash = false;
      return;
    }

    // Show either the active tab according to the URL's hash or the first tab
    const $previousTab = this.getCurrentTab();
    if (!$previousTab) {
      return;
    }
    this.hideTab($previousTab);
    this.showTab($tabWithHash);
    $tabWithHash.focus();
  }

  /**
   * Hide panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hideTab($tab) {
    this.unhighlightTab($tab);
    this.hidePanel($tab);
  }

  /**
   * Show panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showTab($tab) {
    this.highlightTab($tab);
    this.showPanel($tab);
  }

  /**
   * Get tab link by hash
   *
   * @param {string} hash - Hash fragment including #
   * @returns {HTMLAnchorElement | null} Tab link
   */
  getTab(hash) {
    return this.$root.querySelector(`a.nhsuk-tabs__tab[href="${hash}"]`);
  }

  /**
   * Set tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  setAttributes($tab) {
    const panelId = $tab.hash.replace('#', '');
    if (!panelId) {
      return;
    }

    // Set tab attributes
    $tab.setAttribute('id', `tab_${panelId}`);
    $tab.setAttribute('role', 'tab');
    $tab.setAttribute('aria-controls', panelId);
    $tab.setAttribute('aria-selected', 'false');
    $tab.setAttribute('tabindex', '-1');

    // Set panel attributes
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.setAttribute('role', 'tabpanel');
    $panel.setAttribute('aria-labelledby', $tab.id);
    $panel.classList.add(this.jsHiddenClass);
  }

  /**
   * Unset tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unsetAttributes($tab) {
    // unset tab attributes
    $tab.removeAttribute('id');
    $tab.removeAttribute('role');
    $tab.removeAttribute('aria-controls');
    $tab.removeAttribute('aria-selected');
    $tab.removeAttribute('tabindex');

    // unset panel attributes
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.removeAttribute('role');
    $panel.removeAttribute('aria-labelledby');
    $panel.classList.remove(this.jsHiddenClass);
  }

  /**
   * Handle tab link clicks
   *
   * @param {MouseEvent} event - Mouse click event
   * @returns {void} Returns void
   */
  onTabClick(event) {
    const $currentTab = this.getCurrentTab();
    const $nextTab = event.currentTarget;
    if (!$currentTab || !($nextTab instanceof HTMLAnchorElement)) {
      return;
    }
    event.preventDefault();
    this.hideTab($currentTab);
    this.showTab($nextTab);
    this.createHistoryEntry($nextTab);
  }

  /**
   * Update browser URL hash fragment for tab
   *
   * - Allows back/forward to navigate tabs
   * - Avoids page jump when hash changes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  createHistoryEntry($tab) {
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }

    // Save and restore the id so the page doesn't jump when a user clicks a tab
    // (which changes the hash)
    const panelId = $panel.id;
    $panel.id = '';
    this.changingHash = true;
    window.location.hash = panelId;
    $panel.id = panelId;
  }

  /**
   * Handle tab keydown event
   *
   * - Press right arrow for next tab
   * - Press left arrow for previous tab
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  onTabKeydown(event) {
    switch (event.key) {
      // 'Left' and 'Right' required for Edge 16 support.
      case 'ArrowLeft':
      case 'Left':
        this.activatePreviousTab();
        event.preventDefault();
        break;
      case 'ArrowRight':
      case 'Right':
        this.activateNextTab();
        event.preventDefault();
        break;
    }
  }

  /**
   * Activate next tab
   */
  activateNextTab() {
    const $currentTab = this.getCurrentTab();
    if (!($currentTab != null && $currentTab.parentElement)) {
      return;
    }
    const $nextTabListItem = $currentTab.parentElement.nextElementSibling;
    if (!$nextTabListItem) {
      return;
    }
    const $nextTab = $nextTabListItem.querySelector('a.nhsuk-tabs__tab');
    if (!$nextTab) {
      return;
    }
    this.hideTab($currentTab);
    this.showTab($nextTab);
    $nextTab.focus();
    this.createHistoryEntry($nextTab);
  }

  /**
   * Activate previous tab
   */
  activatePreviousTab() {
    const $currentTab = this.getCurrentTab();
    if (!($currentTab != null && $currentTab.parentElement)) {
      return;
    }
    const $previousTabListItem = $currentTab.parentElement.previousElementSibling;
    if (!$previousTabListItem) {
      return;
    }
    const $previousTab = $previousTabListItem.querySelector('a.nhsuk-tabs__tab');
    if (!$previousTab) {
      return;
    }
    this.hideTab($currentTab);
    this.showTab($previousTab);
    $previousTab.focus();
    this.createHistoryEntry($previousTab);
  }

  /**
   * Get tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   * @returns {Element | null} Tab panel
   */
  getPanel($tab) {
    const panelId = $tab.hash.replace('#', '');
    if (!panelId) {
      return null;
    }
    return this.$root.querySelector(`#${panelId}`);
  }

  /**
   * Show tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showPanel($tab) {
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.classList.remove(this.jsHiddenClass);
  }

  /**
   * Hide tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hidePanel($tab) {
    const $panel = this.getPanel($tab);
    if (!$panel) {
      return;
    }
    $panel.classList.add(this.jsHiddenClass);
  }

  /**
   * Unset 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unhighlightTab($tab) {
    if (!$tab.parentElement) {
      return;
    }
    $tab.setAttribute('aria-selected', 'false');
    $tab.parentElement.classList.remove('nhsuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '-1');
  }

  /**
   * Set 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  highlightTab($tab) {
    if (!$tab.parentElement) {
      return;
    }
    $tab.setAttribute('aria-selected', 'true');
    $tab.parentElement.classList.add('nhsuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '0');
  }

  /**
   * Get current tab link
   *
   * @returns {HTMLAnchorElement | null} Tab link
   */
  getCurrentTab() {
    return this.$root.querySelector('.nhsuk-tabs__list-item--selected a.nhsuk-tabs__tab');
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise tabs component
 *
 * @deprecated Use {@link createAll | `createAll(Tabs)`} instead.
 * @param {InitOptions} [options]
 */
Tabs.moduleName = 'nhsuk-tabs';
function initTabs(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $tabs = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Tabs.moduleName}"]`);
  $tabs == null || $tabs.forEach($root => {
    new Tabs($root);
  });
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

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
  const components = /** @type {const} */[[Button, config.button], [CharacterCount, config.characterCount], [Checkboxes], [ErrorSummary, config.errorSummary], [Header], [NotificationBanner, config.notificationBanner], [PasswordInput, config.passwordInput], [Radios], [SkipLink], [Tabs]];
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
 * @property {ComponentConfig<typeof PasswordInput>} [passwordInput] - Password Input config
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

export { Button, CharacterCount, Checkboxes, Component, ConfigError, ConfigurableComponent, ElementError, ErrorSummary, Header, I18n, InitError, NHSUKFrontendError, NotificationBanner, PasswordInput, Radios, SkipLink, SupportError, Tabs, closestAttributeValue, createAll, formatErrorMessage, getBreakpoint, initAll, initButtons, initCharacterCounts, initCheckboxes, initErrorSummary, initHeader, initNotificationBanners, initPasswordInputs, initRadios, initSkipLinks, initTabs, isInitialised, isObject, isScope, isSupported, setFocus, toggleConditionalInput, version };
//# sourceMappingURL=nhsuk-frontend.js.map
