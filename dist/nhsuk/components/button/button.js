'use strict';

const KEY_SPACE = 32;
const DEBOUNCE_TIMEOUT_IN_SECONDS = 1;

/**
 * Button component
 */
class Button {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    if (!$root || !($root instanceof HTMLElement)) {
      return this;
    }
    this.$root = $root;
    this.debounceFormSubmitTimer = null;

    /**
     * Initialise an event listener for keydown at document level
     * this will help listening for later inserted elements with a role="button"
     */
    this.$root.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.$root.addEventListener('click', this.debounce.bind(this));
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
    // get the target element

    const {
      target
    } = event;
    // if the element has a role='button' and the pressed key is a space, we'll simulate a click
    if (target.getAttribute('role') === 'button' && event.keyCode === KEY_SPACE) {
      event.preventDefault();
      // trigger the target's click event
      target.click();
    }
  }

  /**
   * If the click quickly succeeds a previous click then nothing will happen.
   * This stops people accidentally causing multiple form submissions by
   * double clicking buttons.
   */
  debounce(event) {
    const {
      target
    } = event;
    // Check the button that is clicked on has the preventDoubleClick feature enabled
    if (target.getAttribute('data-prevent-double-click') !== 'true') {
      return;
    }

    // If the timer is still running then we want to prevent the click from submitting the form
    if (this.debounceFormSubmitTimer) {
      event.preventDefault();
      return false; // eslint-disable-line consistent-return
    }
    this.debounceFormSubmitTimer = setTimeout(() => {
      this.debounceFormSubmitTimer = null;
    }, DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
  }
}

/**
 * Initialise button component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
function initButtons(options = {}) {
  const $scope = options.scope || document;
  const $buttons = $scope.querySelectorAll('[data-module="nhsuk-button"]');
  $buttons.forEach($root => {
    new Button($root);
  });
}

exports.Button = Button;
exports.initButtons = initButtons;
//# sourceMappingURL=button.js.map
