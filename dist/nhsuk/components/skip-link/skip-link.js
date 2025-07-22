'use strict';

var index$1 = require('../../common/index.js');
var component = require('../../component.js');
var index = require('../../errors/index.js');

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
   * @param {Element | null} [$root] - HTML element to use for component
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
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
SkipLink.elementType = HTMLAnchorElement;
SkipLink.moduleName = 'nhsuk-skip-link';
function initSkipLinks(options = {}) {
  var _options$scope;
  const $scope = (_options$scope = options.scope) != null ? _options$scope : document;
  const $skipLinks = $scope.querySelectorAll(`[data-module="${SkipLink.moduleName}"]`);
  $skipLinks.forEach($root => {
    new SkipLink($root);
  });
}

exports.SkipLink = SkipLink;
exports.initSkipLinks = initSkipLinks;
//# sourceMappingURL=skip-link.js.map
