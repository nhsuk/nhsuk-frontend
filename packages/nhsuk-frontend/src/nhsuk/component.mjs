import { isInitialised, isSupported } from './common/index.mjs'
import { ElementError, InitError, SupportError } from './errors/index.mjs'

/**
 * Base component class
 *
 * Centralises the behaviours shared by our components
 *
 * @abstract
 * @template {Element} [RootElementType=HTMLElement]
 */
export class Component {
  /**
   * @type {typeof Element}
   */
  static elementType = HTMLElement

  /**
   * @type {RootElementType}
   */
  $root

  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    const ComponentClass = /** @type {ComponentConstructor} */ (
      this.constructor
    )

    if (!$root || !($root instanceof ComponentClass.elementType)) {
      throw new ElementError({
        element: $root,
        component: ComponentClass,
        identifier: 'Root element (`$root`)',
        expectedType: ComponentClass.elementType.name
      })
    }

    this.$root = /** @type {RootElementType} */ ($root)

    ComponentClass.checkSupport()

    this.checkInitialised()

    const { moduleName } = ComponentClass
    this.$root.setAttribute(`data-${moduleName}-init`, '')
  }

  /**
   * Validates whether component is already initialised
   *
   * @throws {InitError} when component is already initialised
   */
  checkInitialised() {
    const ComponentClass = /** @type {ComponentConstructor} */ (
      this.constructor
    )

    if (isInitialised(this.$root, ComponentClass.moduleName)) {
      throw new InitError(ComponentClass)
    }
  }

  /**
   * Validates whether components are supported
   *
   * @throws {SupportError} when the components are not supported
   */
  static checkSupport() {
    if (!isSupported()) {
      throw new SupportError()
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-component'
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
 * @import { ObjectNested } from './common/configuration/index.mjs'
 * @import { ConfigurableComponent } from './configurable-component.mjs'
 */
