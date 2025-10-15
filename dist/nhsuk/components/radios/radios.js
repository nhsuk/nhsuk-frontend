'use strict';

var index$1 = require('../../common/index.js');
var component = require('../../component.js');
var index = require('../../errors/index.js');
var normaliseOptions = require('../../common/configuration/normalise-options.js');

/**
 * Radios component
 *
 * Conditionally show content when a radio button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/}
 */
class Radios extends component.Component {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root);
    const $inputs = this.$root.querySelectorAll('input[type="radio"]');
    if (!$inputs.length) {
      throw new index.ElementError({
        component: Radios,
        identifier: 'Form inputs (`<input type="radio">`)'
      });
    }
    this.$inputs = $inputs;
    this.$inputs.forEach($input => {
      const targetId = $input.getAttribute('aria-controls');

      // Skip radios without aria-controls attributes
      if (!targetId) {
        return;
      }

      // Throw if target conditional element does not exist.
      if (!document.getElementById(targetId)) {
        throw new index.ElementError({
          component: Radios,
          identifier: `Conditional reveal (\`id="${targetId}"\`)`
        });
      }
    });

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => this.syncAllConditionalReveals());

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so sync now too.
    this.syncAllConditionalReveals();

    // Handle events
    this.$root.addEventListener('click', event => this.handleClick(event));
  }

  /**
   * Sync the conditional reveal states for all radio buttons in this component.
   */
  syncAllConditionalReveals() {
    this.$inputs.forEach($input => this.syncConditionalRevealWithInputState($input));
  }

  /**
   * Sync conditional reveal with the input state
   *
   * Synchronise the visibility of the conditional reveal, and its accessible
   * state, with the input's checked state.
   *
   * @param {HTMLInputElement} $input - Radio input
   */
  syncConditionalRevealWithInputState($input) {
    index$1.toggleConditionalInput($input, 'nhsuk-radios__conditional--hidden');
  }

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    const $clickedInput = event.target;

    // Ignore clicks on things that aren't radio buttons
    if (!($clickedInput instanceof HTMLInputElement) || $clickedInput.type !== 'radio') {
      return;
    }

    // We only need to consider radios with conditional reveals, which will have
    // aria-controls attributes.
    const $allInputs = document.querySelectorAll('input[type="radio"][aria-controls]');
    const $clickedInputForm = $clickedInput.form;
    const $clickedInputName = $clickedInput.name;
    $allInputs.forEach($input => {
      const hasSameFormOwner = $input.form === $clickedInputForm;
      const hasSameName = $input.name === $clickedInputName;
      if (hasSameName && hasSameFormOwner) {
        this.syncConditionalRevealWithInputState($input);
      }
    });
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise radios component
 *
 * @deprecated Use {@link createAll | `createAll(Radios)`} instead.
 * @param {InitOptions} [options]
 */
Radios.moduleName = 'nhsuk-radios';
function initRadios(options) {
  const {
    scope: $scope
  } = normaliseOptions.normaliseOptions(options);
  const $radios = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Radios.moduleName}"]`);
  $radios == null || $radios.forEach($root => {
    new Radios($root);
  });
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

exports.Radios = Radios;
exports.initRadios = initRadios;
//# sourceMappingURL=radios.js.map
