import { toggleConditionalInput } from '../../common.mjs'
import { Component } from '../../component.mjs'

/**
 * Checkboxes component
 *
 * Conditionally show content when a checkbox button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/checkboxes/with-conditional-content/}
 */
export class Checkboxes extends Component {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const $inputs = this.$root.querySelectorAll('.nhsuk-checkboxes__input')
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
    this.syncAllConditionalReveals()

    // Attach handleClick as click to inputs
    this.$inputs.forEach((checkboxButton) => {
      checkboxButton.addEventListener('change', this.handleClick.bind(this))
    })
  }

  /**
   * Update all conditional reveals to match checked state
   */
  syncAllConditionalReveals() {
    this.$inputs.forEach((item) =>
      toggleConditionalInput(item, 'nhsuk-checkboxes__conditional--hidden')
    )
  }

  /**
   * Uncheck other checkboxes
   *
   * Find any other checkbox inputs with the checkbox group value, and uncheck them.
   * This is useful for when a “None of these" checkbox is checked.
   */
  unCheckAllInputsExcept(input) {
    const allInputsInSameExclusiveGroup = input.form.querySelectorAll(
      `input[type="checkbox"][data-checkbox-exclusive-group="${input.getAttribute('data-checkbox-exclusive-group')}"]`
    )

    allInputsInSameExclusiveGroup.forEach((inputWithSameName) => {
      const hasSameFormOwner = input.form === inputWithSameName.form
      if (hasSameFormOwner && inputWithSameName !== input) {
        inputWithSameName.checked = false // eslint-disable-line no-param-reassign
      }
    })

    this.syncAllConditionalReveals()
  }

  /**
   * Uncheck exclusive inputs
   *
   * Find any checkbox inputs with the same checkbox group value and the 'exclusive' behaviour,
   * and uncheck them. This helps prevent someone checking both a regular checkbox and a
   * "None of these" checkbox in the same fieldset.
   */
  unCheckExclusiveInputs(input) {
    const allExclusiveInputsInSameExclusiveGroup = input.form.querySelectorAll(
      `input[type="checkbox"][data-checkbox-exclusive][data-checkbox-exclusive-group="${input.getAttribute(
        'data-checkbox-exclusive-group'
      )}"]`
    )

    allExclusiveInputsInSameExclusiveGroup.forEach((exclusiveInput) => {
      const hasSameFormOwner = input.form === exclusiveInput.form
      if (hasSameFormOwner) {
        exclusiveInput.checked = false // eslint-disable-line no-param-reassign
      }
    })

    this.syncAllConditionalReveals()
  }

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    // Toggle conditional content based on checked state
    toggleConditionalInput(
      event.target,
      'nhsuk-checkboxes__conditional--hidden'
    )

    if (!event.target.checked) {
      return
    }

    // Handle 'exclusive' checkbox behaviour (ie "None of these")
    if (event.target.hasAttribute('data-checkbox-exclusive')) {
      this.unCheckAllInputsExcept(event.target)
    } else {
      this.unCheckExclusiveInputs(event.target)
    }
  }
}

/**
 * Initialise checkboxes component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initCheckboxes(options = {}) {
  const $scope = options.scope || document
  const $checkboxes = $scope.querySelectorAll('.nhsuk-checkboxes')

  $checkboxes.forEach(($root) => {
    new Checkboxes($root)
  })
}
