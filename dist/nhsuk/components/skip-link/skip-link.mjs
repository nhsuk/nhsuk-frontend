import '../../common/configuration/index.mjs';
import { setFocus } from '../../common/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { ElementError } from '../../errors/index.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

const _self = typeof globalThis !== 'undefined' ? globalThis // Modern browsers, Node.js
: self; // Old browsers, web workers

/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when selected so the next focusable element is not at the jumped to area.
 *
 * @augments {ConfigurableComponent<SkipLinkConfig, HTMLAnchorElement>}
 */
class SkipLink extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<SkipLinkConfig>} [config] - Skip link config
   */
  constructor($root, config) {
    var _this$$root$getAttrib;
    super($root, config);
    const hash = this.$root.hash;
    const href = (_this$$root$getAttrib = this.$root.getAttribute('href')) != null ? _this$$root$getAttrib : '';

    // Return early for external URLs or links to other pages
    if (this.$root.origin !== window.location.origin || this.$root.pathname !== window.location.pathname) {
      return;
    }
    const linkedElementId = hash.replace('#', '');

    // Check link path matching current page
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
    this.$root.addEventListener('click', () => {
      const {
        focusedElementClassList
      } = this.config;
      setFocus($linkedElement, {
        onBeforeFocus() {
          $linkedElement.classList.add(...focusedElementClassList);
        },
        onBlur() {
          $linkedElement.classList.remove(...focusedElementClassList);
        }
      });
    });
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink, options)`} instead.
 * @param {InitOptions & Partial<SkipLinkConfig>} [options]
 */
SkipLink.elementType = _self.HTMLAnchorElement;
SkipLink.moduleName = 'nhsuk-skip-link';
/**
 * Skip link default config
 *
 * @see {@link SkipLinkConfig}
 * @constant
 * @type {SkipLinkConfig}
 */
SkipLink.defaults = Object.freeze({
  focusedElementClassList: ['nhsuk-skip-link-focused-element']
});
/**
 * Skip link config schema
 *
 * @constant
 * @satisfies {Schema<SkipLinkConfig>}
 */
SkipLink.schema = Object.freeze({
  properties: {
    focusedElementClassList: {
      type: 'array'
    }
  }
});
function initSkipLinks(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $skipLinks = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${SkipLink.moduleName}"]`);
  $skipLinks == null || $skipLinks.forEach($root => {
    new SkipLink($root, options);
  });
}

/**
 * Skip link config
 *
 * @typedef {object} SkipLinkConfig
 * @property {string[]} focusedElementClassList - Focused element class list
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

export { SkipLink, initSkipLinks };
//# sourceMappingURL=skip-link.mjs.map
