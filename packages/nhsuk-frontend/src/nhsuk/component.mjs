import { isSupported } from './common/index.mjs'
import { ElementError, SupportError } from './errors/index.mjs'

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
   * @param {Element | null} [$root] - HTML element to use for component
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

/**
 * @template {Element} [RootElementType=HTMLElement]
 * @typedef {typeof Component<RootElementType>} ComponentConstructor
 */
