import { normaliseOptions } from '../../common/configuration/index.mjs'
import { toggleConditionalInput } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Checkboxes component
 *
 * Conditionally show content when a checkbox button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/checkboxes/with-conditional-content/}
 *
 * @augments {ConfigurableComponent<CheckboxesConfig>}
 */
export class Checkboxes extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<CheckboxesConfig>} [config] - Checkboxes config
   */
  constructor($root, config) {
    super($root, config)

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
    const { conditionalClass } = this.config
    toggleConditionalInput($input, `${conditionalClass}--hidden`)
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
    const { checkboxExclusiveGroup: exclusiveGroup } = $input.dataset

    const selectorGroup = exclusiveGroup
      ? `[data-checkbox-exclusive-group="${exclusiveGroup}"]`
      : `[name="${$input.name}"]`

    const allInputsWithSameName = document.querySelectorAll(
      `input[type="checkbox"]${selectorGroup}`
    )

    allInputsWithSameName.forEach(($inputWithSameName) => {
      const hasSameFormOwner = $input.form === $inputWithSameName.form

      // Uncheck all with same exclusive group by default, otherwise fall back to
      // GOV.UK Frontend behaviour to uncheck all with the same name attribute
      if (hasSameFormOwner && $inputWithSameName !== $input) {
        this.setInputState($inputWithSameName, false, exclusiveGroup)
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
    const { checkboxExclusiveGroup: exclusiveGroup } = $input.dataset

    const selectorGroup = exclusiveGroup
      ? `[data-checkbox-exclusive-group="${exclusiveGroup}"]`
      : `[name="${$input.name}"]`

    const allInputsWithSameNameAndExclusiveBehaviour =
      document.querySelectorAll(
        `input[type="checkbox"][data-checkbox-exclusive]${selectorGroup}`
      )

    allInputsWithSameNameAndExclusiveBehaviour.forEach(($exclusiveInput) => {
      const hasSameFormOwner = $input.form === $exclusiveInput.form

      // Uncheck the exclusive input only. When no group is set, fall back to
      // GOV.UK Frontend behaviour and locate the exclusive input by name
      if (hasSameFormOwner) {
        this.setInputState($exclusiveInput, false, exclusiveGroup)
      }
    })
  }

  /**
   * Set input state, optionally for matching exclusive group only
   *
   * @param {HTMLInputElement} $input - Checkbox input
   * @param {boolean} checked - Checkbox checked state
   * @param {string} [exclusiveGroup] - Set state for matching exclusive group only (optional)
   */
  setInputState($input, checked, exclusiveGroup) {
    const { checkboxExclusiveGroup } = $input.dataset

    // Skip input when exclusive group does not match
    if (
      exclusiveGroup &&
      checkboxExclusiveGroup &&
      checkboxExclusiveGroup !== exclusiveGroup
    ) {
      return
    }

    $input.checked = checked
    this.syncConditionalRevealWithInputState($input)
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
    if ('checkboxExclusive' in $clickedInput.dataset) {
      this.unCheckAllInputsExcept($clickedInput)
    } else {
      this.unCheckExclusiveInputs($clickedInput)
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-checkboxes'

  /**
   * Radios default config
   *
   * @see {@link CheckboxesConfig}
   * @constant
   * @type {CheckboxesConfig}
   */
  static defaults = Object.freeze({
    conditionalClass: 'nhsuk-checkboxes__conditional'
  })

  /**
   * Checkboxes config schema
   *
   * @constant
   * @satisfies {Schema<CheckboxesConfig>}
   */
  static schema = Object.freeze({
    properties: {
      conditionalClass: { type: 'string' }
    }
  })
}

/**
 * Initialise checkboxes component
 *
 * @deprecated Use {@link createAll | `createAll(Checkboxes, options)`} instead.
 * @param {InitOptions & Partial<CheckboxesConfig>} [options]
 */
export function initCheckboxes(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $checkboxes = $scope?.querySelectorAll(
    `[data-module="${Checkboxes.moduleName}"]`
  )

  $checkboxes?.forEach(($root) => {
    new Checkboxes($root, options)
  })
}

/**
 * Checkboxes config
 *
 * @typedef {object} CheckboxesConfig
 * @property {string} conditionalClass - Conditionally revealed content class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
