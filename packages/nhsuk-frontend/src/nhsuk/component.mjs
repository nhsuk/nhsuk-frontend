import { ElementError } from './errors/index.mjs'

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
   * Constructs a new component
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
  }
}

/**
 * @template {Function} [ComponentType=typeof Component]
 * @typedef {ComponentType} ComponentConstructor
 */
