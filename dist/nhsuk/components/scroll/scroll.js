'use strict';

require('../../common/configuration/index.js');
var configurableComponent = require('../../configurable-component.js');
var index = require('../../errors/index.js');
var normaliseOptions = require('../../common/configuration/normalise-options.js');

/**
 * Scroll component
 *
 * @augments {ConfigurableComponent<ScrollConfig>}
 */
class Scroll extends configurableComponent.ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<ScrollConfig>} [config] - Scroll config
   */
  constructor($root, config = {}) {
    super($root, config);
    const {
      contentClass
    } = this.config;
    const $content = this.$root.querySelector(`.${contentClass}`);
    if (!($content instanceof HTMLElement)) {
      throw new index.ElementError({
        component: Scroll,
        element: $content,
        identifier: `Scroll content (\`.${contentClass}\`)`
      });
    }
    this.$content = $content;
    this.setup();
    this.update();
  }
  setup() {
    this.handleUpdate = this.update.bind(this);

    // ResizeObserver isn't supported by Safari < 13.1 so we need to fall back
    // to window resize, checking the container width has actually changed
    if ('ResizeObserver' in window) {
      this.resizeObserver = new window.ResizeObserver(this.handleUpdate);
      this.resizeObserver.observe(this.$content);
    } else {
      // @ts-expect-error Property 'addEventListener' does not exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      window.addEventListener('resize', this.handleUpdate);
    }
    this.$content.addEventListener('scroll', this.handleUpdate);
  }
  update() {
    const {
      $root,
      $content
    } = this;
    const isOverflowing = Scroll.isOverflowing($content);

    // Enable shadows
    $root.classList.toggle(`${Scroll.moduleName}--scrollable`, isOverflowing);

    // Toggle left shadow
    $root.classList.toggle(`${Scroll.moduleName}--scrollable-left`, $content.scrollLeft > 0);

    // Toggle right shadow
    $root.classList.toggle(`${Scroll.moduleName}--scrollable-right`, $content.scrollLeft < $content.scrollWidth - $content.clientWidth - 1);
    if (isOverflowing) {
      this.$content.setAttribute('tabindex', '0');
    } else {
      this.$content.removeAttribute('tabindex');
    }
  }

  /**
   * Checks if the elements scrollable width or height is greater than the
   * width or height the element is being rendered at.
   *
   * @param {Element} $element - The element to check
   * @returns {boolean} - Returns `true` if the given element is overflowing
   *   in either dimension, otherwise returns `false`
   */
  static isOverflowing($element) {
    return $element.scrollHeight > $element.clientHeight || $element.scrollWidth > $element.clientWidth;
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise scroll component
 *
 * @deprecated Use {@link createAll | `createAll(Scroll, options)`} instead.
 * @param {InitOptions & Partial<ScrollConfig>} [options]
 */
Scroll.moduleName = 'nhsuk-scroll';
/**
 * Scroll default config
 *
 * @see {@link ScrollConfig}
 * @constant
 * @type {ScrollConfig}
 */
Scroll.defaults = Object.freeze({
  contentClass: 'nhsuk-scroll__content'
});
/**
 * Scroll config schema
 *
 * @constant
 * @satisfies {Schema<ScrollConfig>}
 */
Scroll.schema = Object.freeze({
  properties: {
    contentClass: {
      type: 'string'
    }
  }
});
function initScroll(options) {
  const {
    scope: $scope
  } = normaliseOptions.normaliseOptions(options);
  const $scrolls = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Scroll.moduleName}"]`);
  $scrolls == null || $scrolls.forEach($root => {
    new Scroll($root, options);
  });
}

/**
 * Scroll config
 *
 * @typedef {object} ScrollConfig
 * @property {string} contentClass - Scroll content class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

exports.Scroll = Scroll;
exports.initScroll = initScroll;
//# sourceMappingURL=scroll.js.map
