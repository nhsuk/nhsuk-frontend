import { Component } from '../../component.mjs';

const DEBOUNCE_TIMEOUT_IN_SECONDS = 1;

/**
 * Button component
 */
class Button extends Component {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    super($root);

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
    // Check the button that is clicked on has the preventDoubleClick feature enabled
    if (!(event.target instanceof HTMLElement) || event.target.dataset.preventDoubleClick !== 'true') {
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
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
Button.moduleName = 'nhsuk-button';
function initButtons(options = {}) {
  var _options$scope;
  const $scope = (_options$scope = options.scope) != null ? _options$scope : document;
  const $buttons = $scope.querySelectorAll(`[data-module="${Button.moduleName}"]`);
  $buttons.forEach($root => {
    new Button($root);
  });
}

export { Button, initButtons };
//# sourceMappingURL=button.mjs.map
