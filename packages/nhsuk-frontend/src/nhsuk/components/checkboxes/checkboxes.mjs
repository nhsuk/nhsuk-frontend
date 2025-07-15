import { toggleConditionalInput } from '../../common/index.mjs'
import { Component } from '../../component.mjs'
import { ElementError } from '../../errors/index.mjs'

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

    const $inputs = this.$root.querySelectorAll('input[type="checkbox"]')
    if (!$inputs.length) {
      throw new ElementError({
        component: Checkboxes,
        identifier: 'Form inputs (`<input type="checkbox">`)'
      })
    }

    this.$inputs = $inputs

    this.$inputs.forEach(($input) => {
      const targetId = $input.getAttribute('aria-controls')

      // Skip checkboxes without aria-controls attributes
      if (!targetId) {
        return
      }

      // Throw if target conditional element does not exist.
      if (!document.getElementById(targetId)) {
        throw new ElementError({
          component: Checkboxes,
          identifier: `Conditional reveal (\`id="${targetId}"\`)`
        })
      }
    })

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => this.syncAllConditionalReveals())

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so sync now too.
    this.syncAllConditionalReveals()

    // Handle events
    this.$root.addEventListener('click', (event) => this.handleClick(event))
  }

  /**
   * Sync the conditional reveal states for all checkboxes in this component.
   */
  syncAllConditionalReveals() {
    this.$inputs.forEach(($input) =>
      this.syncConditionalRevealWithInputState($input)
    )
  }

  /**
   * Sync conditional reveal with the input state
   *
   * Synchronise the visibility of the conditional reveal, and its accessible
   * state, with the input's checked state.
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  syncConditionalRevealWithInputState($input) {
    toggleConditionalInput($input, 'nhsuk-checkboxes__conditional--hidden')
  }

  /**
   * Uncheck other checkboxes
   *
   * Find any other checkbox inputs with the checkbox group value, and uncheck them.
   * This is useful for when a “None of these" checkbox is checked.
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  unCheckAllInputsExcept($input) {
    const allInputsInSameExclusiveGroup = document.querySelectorAll(
      `input[type="checkbox"][data-checkbox-exclusive-group="${$input.getAttribute('data-checkbox-exclusive-group')}"]`
    )

    allInputsInSameExclusiveGroup.forEach(($inputWithSameName) => {
      const hasSameFormOwner = $input.form === $inputWithSameName.form
      if (hasSameFormOwner && $inputWithSameName !== $input) {
        $inputWithSameName.checked = false
        this.syncConditionalRevealWithInputState($inputWithSameName)
      }
    })
  }

  /**
   * Uncheck exclusive inputs
   *
   * Find any checkbox inputs with the same checkbox group value and the 'exclusive' behaviour,
   * and uncheck them. This helps prevent someone checking both a regular checkbox and a
   * "None of these" checkbox in the same fieldset.
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  unCheckExclusiveInputs($input) {
    const allExclusiveInputsInSameExclusiveGroup = document.querySelectorAll(
      `input[type="checkbox"][data-checkbox-exclusive][data-checkbox-exclusive-group="${$input.getAttribute(
        'data-checkbox-exclusive-group'
      )}"]`
    )

    allExclusiveInputsInSameExclusiveGroup.forEach(($exclusiveInput) => {
      const hasSameFormOwner = $input.form === $exclusiveInput.form
      if (hasSameFormOwner) {
        $exclusiveInput.checked = false
        this.syncConditionalRevealWithInputState($exclusiveInput)
      }
    })
  }

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    const $clickedInput = event.target

    // Ignore clicks on things that aren't checkbox inputs
    if (
      !($clickedInput instanceof HTMLInputElement) ||
      $clickedInput.type !== 'checkbox'
    ) {
      return
    }

    // If the checkbox conditionally-reveals some content, sync the state
    const hasAriaControls = $clickedInput.getAttribute('aria-controls')
    if (hasAriaControls) {
      this.syncConditionalRevealWithInputState($clickedInput)
    }

    // No further behaviour needed for unchecking
    if (!$clickedInput.checked) {
      return
    }

    // Handle 'exclusive' checkbox behaviour (ie "None of these")
    if ($clickedInput.hasAttribute('data-checkbox-exclusive')) {
      this.unCheckAllInputsExcept($clickedInput)
    } else {
      this.unCheckExclusiveInputs($clickedInput)
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-checkboxes'
}

/**
 * Initialise checkboxes component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initCheckboxes(options = {}) {
  const $scope = options.scope || document
  const $checkboxes = $scope.querySelectorAll(
    `[data-module="${Checkboxes.moduleName}"]`
  )

  $checkboxes.forEach(($root) => {
    new Checkboxes($root)
  })
}
