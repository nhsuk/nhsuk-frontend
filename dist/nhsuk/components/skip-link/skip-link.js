'use strict';

require('../../common/configuration/index.js');
var index$1 = require('../../common/index.js');
var component = require('../../component.js');
var index = require('../../errors/index.js');
var normaliseOptions = require('../../common/configuration/normalise-options.js');

/* eslint-disable es-x/no-global-this */

const _self = typeof globalThis !== 'undefined' ? globalThis // Modern browsers, Node.js
: self; // Old browsers, web workers

/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 *
 * @augments Component<HTMLAnchorElement>
 */
class SkipLink extends component.Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    var _this$$root$getAttrib;
    super($root);
    const hash = this.$root.hash;
    const href = (_this$$root$getAttrib = this.$root.getAttribute('href')) != null ? _this$$root$getAttrib : '';
    const linkedElementId = hash.replace('#', '');
    if (!linkedElementId) {
      throw new index.ElementError({
        component: SkipLink,
        identifier: `Target link (\`href="${href}"\`) hash fragment`
      });
    }
    const $linkedElement = document.getElementById(linkedElementId);

    // Check for linked element
    if (!$linkedElement) {
      throw new index.ElementError({
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
    this.$root.addEventListener('click', () => index$1.setFocus($linkedElement, {
      onBeforeFocus() {
        $linkedElement.classList.add('nhsuk-skip-link-focused-element');
      },
      onBlur() {
        $linkedElement.classList.remove('nhsuk-skip-link-focused-element');
      }
    }));
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink)`} instead.
 * @param {InitOptions} [options]
 */
SkipLink.elementType = _self.HTMLAnchorElement;
SkipLink.moduleName = 'nhsuk-skip-link';
function initSkipLinks(options) {
  const {
    scope: $scope
  } = normaliseOptions.normaliseOptions(options);
  const $skipLinks = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${SkipLink.moduleName}"]`);
  $skipLinks == null || $skipLinks.forEach($root => {
    new SkipLink($root);
  });
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

exports.SkipLink = SkipLink;
exports.initSkipLinks = initSkipLinks;
//# sourceMappingURL=skip-link.js.map
