'use strict';

var index$1 = require('./common/index.js');
var index = require('./errors/index.js');

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
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    /**
     * @type {RootElementType}
     */
    this.$root = void 0;
    const ComponentClass = /** @type {ComponentConstructor} */
    this.constructor;
    if (!$root || !($root instanceof ComponentClass.elementType)) {
      throw new index.ElementError({
        element: $root,
        component: ComponentClass,
        identifier: 'Root element (`$root`)',
        expectedType: ComponentClass.elementType.name
      });
    }
    this.$root = /** @type {RootElementType} */$root;
    ComponentClass.checkSupport();
    this.checkInitialised();
    const {
      moduleName
    } = ComponentClass;
    this.$root.setAttribute(`data-${moduleName}-init`, '');
  }

  /**
   * Validates whether component is already initialised
   *
   * @throws {InitError} when component is already initialised
   */
  checkInitialised() {
    const ComponentClass = /** @type {ComponentConstructor} */
    this.constructor;
    if (index$1.isInitialised(this.$root, ComponentClass.moduleName)) {
      throw new index.InitError(ComponentClass);
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

/**
 * @template {Element} [RootElementType=HTMLElement]
 * @typedef {typeof Component<RootElementType>} ComponentConstructor
 */
/**
 * @type {typeof Element}
 */
Component.elementType = HTMLElement;
Component.moduleName = 'nhsuk-component';

exports.Component = Component;
//# sourceMappingURL=component.js.map
