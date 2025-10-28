'use strict';

var index$1 = require('./common/index.js');
var index = require('./errors/index.js');

/* eslint-disable es-x/no-global-this */

const _self = typeof globalThis !== 'undefined' ? globalThis // Modern browsers, Node.js
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
      throw new index.ElementError({
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
    if (index$1.isInitialised(this.$root, childConstructor.moduleName)) {
      throw new index.InitError(childConstructor);
    }
  }

  /**
   * Validates whether components are supported
   *
   * @throws {SupportError} when the components are not supported
   */
  static checkSupport() {
    if (!index$1.isSupported()) {
      throw new index.SupportError();
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/* eslint-disable jsdoc/valid-types --
 * `{new(...args: any[] ): any}` is not recognised as valid
 * https://github.com/gajus/eslint-plugin-jsdoc/issues/145#issuecomment-1308722878
 * https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/issues/131
 **/

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

/* eslint-enable jsdoc/valid-types */

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
Component.elementType = _self.HTMLElement;
Component.moduleName = 'nhsuk-component';

exports.Component = Component;
//# sourceMappingURL=component.js.map
