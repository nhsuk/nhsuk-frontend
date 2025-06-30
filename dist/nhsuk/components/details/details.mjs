import { generateUniqueID, toggleAttribute } from '../../common.mjs';

/**
 * Details component
 *
 * Ensure details component is cross browser and accessible
 * Test at http://localhost:3000/nhsuk-frontend/components/details/index.html
 */
class Details {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    if (!$root || !($root instanceof HTMLElement)) {
      return this;
    }
    this.$root = $root;

    // If there is native details support, we want to avoid running code to polyfill native behaviour.
    const hasNativeDetails = 'HTMLDetailsElement' in window && this.$root instanceof HTMLDetailsElement;
    if (!hasNativeDetails) {
      this.polyfillDetails();
    }
  }

  /**
   * Adds all necessary functionality to a details element
   */
  polyfillDetails() {
    // Set content element and give it an ID if it doesn't already have one
    const content = this.$root.querySelector('.nhsuk-details__text');
    if (!content.id) {
      content.setAttribute('id', `details-content-${generateUniqueID()}`);
    }

    // Set summary element
    const summary = this.$root.querySelector('.nhsuk-details__summary');

    // Set initial summary aria attributes
    summary.setAttribute('role', 'button');
    summary.setAttribute('aria-controls', content.id);
    summary.setAttribute('tabIndex', '0');
    const openAttr = this.$root.getAttribute('open') !== null;
    if (openAttr === true) {
      summary.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    } else {
      summary.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
      content.style.display = 'none';
    }
    const toggleDetails = () => {
      toggleAttribute(summary, 'aria-expanded');
      toggleAttribute(content, 'aria-hidden');
      content.style.display = content.getAttribute('aria-hidden') === 'true' ? 'none' : '';
      if (this.$root.hasAttribute('open')) {
        this.$root.removeAttribute('open');
      } else {
        this.$root.setAttribute('open', 'open');
      }
    };

    // Toggle details onclick
    summary.addEventListener('click', toggleDetails);

    // Call toggle details on enter and space key events
    summary.addEventListener('keydown', event => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        summary.click();
      }
    });
  }
}

/**
 * Initialise details component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
function initDetails(options = {}) {
  const $scope = options.scope || document;
  const $details = $scope.querySelectorAll('.nhsuk-details');
  $details.forEach($root => {
    new Details($root);
  });
}

export { Details, initDetails };
//# sourceMappingURL=details.mjs.map
