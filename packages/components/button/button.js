class Button {
  KEY_SPACE = 32

  DEBOUNCE_TIMEOUT_IN_SECONDS = 1

  constructor($module) {
    this.$module = $module
    this.debounceFormSubmitTimer = null
  }

  /**
   * JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
   *
   * Created since some Assistive Technologies (for example some Screenreaders)
   * will tell a user to press space on a 'button', so this functionality needs to be shimmed
   * See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
   *
   * @param {object} event event
   */
  handleKeyDown(event) {
    // get the target element

    const { target } = event
    // if the element has a role='button' and the pressed key is a space, we'll simulate a click
    if (target.getAttribute('role') === 'button' && event.keyCode === this.KEY_SPACE) {
      event.preventDefault()
      // trigger the target's click event
      target.click()
    }
  }

  /**
   * If the click quickly succeeds a previous click then nothing will happen.
   * This stops people accidentally causing multiple form submissions by
   * double clicking buttons.
   */
  debounce(event) {
    const { target } = event
    // Check the button that is clicked on has the preventDoubleClick feature enabled
    if (target.getAttribute('data-prevent-double-click') !== 'true') {
      return
    }

    // If the timer is still running then we want to prevent the click from submitting the form
    if (this.debounceFormSubmitTimer) {
      event.preventDefault()
      return false // eslint-disable-line consistent-return
    }

    this.debounceFormSubmitTimer = setTimeout(() => {
      this.debounceFormSubmitTimer = null
    }, this.DEBOUNCE_TIMEOUT_IN_SECONDS * 1000)
  }

  /**
   * Initialise an event listener for keydown at document level
   * this will help listening for later inserted elements with a role="button"
   */
  init() {
    this.$module.addEventListener('keydown', this.handleKeyDown.bind(this))
    this.$module.addEventListener('click', this.debounce.bind(this))
  }
}

export default ({ scope = document } = {}) => {
  const buttons = scope.querySelectorAll('[data-module="nhsuk-button"]')
  buttons.forEach((el) => {
    new Button(el).init()
  })
}
