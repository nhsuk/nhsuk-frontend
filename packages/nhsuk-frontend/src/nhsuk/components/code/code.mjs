import { normaliseOptions } from '../../common/configuration/index.mjs'
import { Component } from '../../component.mjs'
import { ElementError } from '../../errors/index.mjs'

const _self =
  typeof globalThis !== 'undefined'
    ? globalThis // Modern browsers, Node.js
    : self // Old browsers, web workers

/**
 * Code component
 *
 * @augments {Component<HTMLPreElement>}
 */
export class Code extends Component {
  static elementType = _self.HTMLPreElement

  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const $container = this.$root.querySelector('.nhsuk-code__container')
    if (!($container instanceof HTMLElement)) {
      throw new ElementError({
        component: Code,
        element: $container,
        identifier: 'Code container (`.nhsuk-code__container`)'
      })
    }

    this.$container = $container
    this.handleEnableFocus = this.enableFocus.bind(this)

    // ResizeObserver isn't supported by Safari < 13.1 so we need to fall back
    // to window resize, checking the container width has actually changed
    if ('ResizeObserver' in window) {
      this.resizeObserver = new window.ResizeObserver(this.handleEnableFocus)
      this.resizeObserver.observe(this.$container)
    } else {
      // @ts-expect-error Property 'addEventListener' does not exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      window.addEventListener('resize', this.handleEnableFocus)
    }
  }

  /**
   * Enable container focus
   */
  enableFocus() {
    if (this.isOverflowing()) {
      this.$container.setAttribute('tabindex', '0')
    } else {
      this.$container.removeAttribute('tabindex')
    }
  }

  /**
   * Checks if the container scrollable width or height is greater than the
   * width or height the container is being rendered at
   */
  isOverflowing() {
    return (
      this.$container.scrollHeight > this.$container.clientHeight ||
      this.$container.scrollWidth > this.$container.clientWidth
    )
  }

  static moduleName = 'nhsuk-code'
}

/**
 * Initialise code component
 *
 * @deprecated Use {@link createAll | `createAll(Code)`} instead.
 * @param {InitOptions} [options]
 */
export function initCode(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $codes = $scope?.querySelectorAll(`[data-module="${Code.moduleName}"]`)

  $codes?.forEach(($root) => {
    new Code($root)
  })
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */
