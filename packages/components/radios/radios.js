const { toggleConditionalInput } = require('../../common')

/**
 * Radios component
 *
 * Conditionally show content when a radio button is checked
 * Test at http://localhost:3000/nhsuk-frontend/components/radios/conditional.html
 */
class Radios {
  constructor($module) {
    if (!$module) {
      return this
    }

    this.$module = $module

    const $inputs = this.$module.querySelectorAll('.nhsuk-radios__input')
    if (!$inputs.length) {
      return this
    }

    this.$inputs = $inputs

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event in browsers
    // that support it.
    if ('onpageshow' in window) {
      window.addEventListener('pageshow', () =>
        this.syncAllConditionalReveals()
      )
    } else {
      window.addEventListener('DOMContentLoaded', () =>
        this.syncAllConditionalReveals()
      )
    }

    // Although we've set up handlers to sync state on the pageshow or
    // DOMContentLoaded event, init could be called after those events have fired,
    // for example if they are added to the page dynamically, so sync now too.

    // Attach event handler to radioInputs
    this.$inputs.forEach((radioButton) => {
      radioButton.addEventListener('change', () =>
        this.syncAllConditionalReveals()
      )
    })
  }

  /**
   * Update all conditional reveals to match checked state
   */
  syncAllConditionalReveals() {
    this.$inputs.forEach((input) =>
      toggleConditionalInput(input, 'nhsuk-radios__conditional--hidden')
    )
  }
}

module.exports = (options = {}) => {
  const $scope = options.scope || document
  const $module = $scope.querySelector('.nhsuk-radios--conditional')

  new Radios($module)
}
