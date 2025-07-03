import { ElementError } from './errors/index.mjs'

/**
 * Base component class
 *
 * Centralises the behaviours shared by our components
 *
 * @abstract
 */
export class Component {
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

    if (!$root || !($root instanceof HTMLElement)) {
      throw new ElementError({
        element: $root,
        component: ComponentClass,
        identifier: 'Root element (`$root`)',
        expectedType: 'HTMLElement'
      })
    }

    this.$root = $root
  }
}

/**
 * @template {Function} [ComponentType=typeof Component]
 * @typedef {ComponentType} ComponentConstructor
 */
