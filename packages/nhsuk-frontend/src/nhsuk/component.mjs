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
    if (!$root || !($root instanceof HTMLElement)) {
      return this
    }

    this.$root = $root
  }
}
