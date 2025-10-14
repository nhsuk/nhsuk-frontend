'use strict';

var configurableComponent = require('../../configurable-component.js');
var normaliseOptions = require('../../common/configuration/normalise-options.js');

const DEBOUNCE_TIMEOUT_IN_SECONDS = 1;

/**
 * Button component
 *
 * @augments ConfigurableComponent<ButtonConfig>
 */
class Button extends configurableComponent.ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {ButtonConfig} [config] - Button config
   */
  constructor($root, config = {}) {
    super($root, config);

    /**
     * Initialise an event listener for keydown at document level
     * this will help listening for later inserted elements with a role="button"
     */
    /**
     * @type {number | null}
     */
    this.debounceFormSubmitTimer = null;
    this.$root.addEventListener('keydown', event => this.handleKeyDown(event));
    this.$root.addEventListener('click', event => this.debounce(event));
  }

  /**
   * JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
   *
   * Created since some Assistive Technologies (for example some Screenreaders)
   * will tell a user to press space on a 'button', so this functionality needs to be shimmed
   * See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  handleKeyDown(event) {
    const target = event.target;

    // Handle space bar only
    if (event.key !== ' ') {
      return;
    }

    // Handle elements with [role="button"] only
    if (target instanceof HTMLElement && target.getAttribute('role') === 'button') {
      event.preventDefault();
      target.click();
    }
  }

  /**
   * Debounce double-clicks
   *
   * If the click quickly succeeds a previous click then nothing will happen.
   * This stops people accidentally causing multiple form submissions by
   * double clicking buttons.
   *
   * @param {MouseEvent} event - Mouse click event
   * @returns {undefined | false} Returns undefined, or false when debounced
   */
  debounce(event) {
    // Check the button that was clicked has preventDoubleClick enabled
    if (!this.config.preventDoubleClick) {
      return;
    }

    // If the timer is still running then we want to prevent the click from submitting the form
    if (this.debounceFormSubmitTimer) {
      event.preventDefault();
      return false;
    }
    this.debounceFormSubmitTimer = window.setTimeout(() => {
      this.debounceFormSubmitTimer = null;
    }, DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise button component
 *
 * @deprecated Use {@link createAll | `createAll(Button, options)`} instead.
 * @param {InitOptions & ButtonConfig} [options]
 */
Button.moduleName = 'nhsuk-button';
/**
 * Button default config
 *
 * @see {@link ButtonConfig}
 * @constant
 * @type {ButtonConfig}
 */
Button.defaults = Object.freeze({
  preventDoubleClick: false
});
/**
 * Button config schema
 *
 * @constant
 * @satisfies {Schema<ButtonConfig>}
 */
Button.schema = Object.freeze({
  properties: {
    preventDoubleClick: {
      type: 'boolean'
    }
  }
});
function initButtons(options) {
  const {
    scope: $scope
  } = normaliseOptions.normaliseOptions(options);
  const $buttons = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Button.moduleName}"]`);
  $buttons == null || $buttons.forEach($root => {
    new Button($root, options);
  });
}

/**
 * Button config
 *
 * @typedef {object} ButtonConfig
 * @property {boolean} [preventDoubleClick=false] - Prevent accidental double
 *   clicks on submit buttons from submitting forms multiple times.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

exports.Button = Button;
exports.initButtons = initButtons;
//# sourceMappingURL=button.js.map
