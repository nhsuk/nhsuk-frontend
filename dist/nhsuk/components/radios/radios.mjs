import { toggleConditionalInput } from '../../common.mjs';

/**
 * Radios component
 *
 * Conditionally show content when a radio button is checked
 * Test at http://localhost:3000/nhsuk-frontend/components/radios/conditional.html
 */
class Radios {
  constructor($root) {
    if (!$root || !($root instanceof HTMLElement)) {
      return this;
    }
    this.$root = $root;
    const $inputs = this.$root.querySelectorAll('.nhsuk-radios__input');
    if (!$inputs.length) {
      return this;
    }
    this.$inputs = $inputs;

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event in browsers
    // that support it.
    if ('onpageshow' in window) {
      window.addEventListener('pageshow', () => this.syncAllConditionalReveals());
    } else {
      window.addEventListener('DOMContentLoaded', () => this.syncAllConditionalReveals());
    }

    // Although we've set up handlers to sync state on the pageshow or
    // DOMContentLoaded event, init could be called after those events have fired,
    // for example if they are added to the page dynamically, so sync now too.

    // Attach event handler to radioInputs
    this.$inputs.forEach(radioButton => {
      radioButton.addEventListener('change', () => this.syncAllConditionalReveals());
    });
  }

  /**
   * Update all conditional reveals to match checked state
   */
  syncAllConditionalReveals() {
    this.$inputs.forEach(input => toggleConditionalInput(input, 'nhsuk-radios__conditional--hidden'));
  }
}

/**
 * Initialise radios component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
function initRadios(options = {}) {
  const $scope = options.scope || document;
  const $radios = $scope.querySelectorAll('.nhsuk-radios--conditional');
  $radios.forEach($root => {
    new Radios($root);
  });
}

export { Radios, initRadios };
//# sourceMappingURL=radios.mjs.map
