import { toggleConditionalInput } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Checkboxes component
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/checkboxes/with-conditional-content/}
 *
 * @augments {ConfigurableComponent<CheckboxesConfig>}
 */
export class Checkboxes extends ConfigurableComponent {
  /**
   * Checkboxes can be associated with a 'conditionally revealed' content block
   * – for example, a checkbox for 'Phone' could reveal an additional form field
   * for the user to enter their phone number.
   *
   * These associations are made using a `data-aria-controls` attribute, which
   * is promoted to an aria-controls attribute during initialisation.
   *
   * We also need to restore the state of any conditional reveals on the page
   * (for example if the user has navigated back), and set up event handlers to
   * keep the reveal in sync with the checkbox state.
   *
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
      const targetId =
        $input.dataset.ariaControls ?? $input.getAttribute('aria-controls')

      // Skip checkboxes without data-aria-controls attributes
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

      // Promote the data-aria-controls attribute to an aria-controls attribute
      // so that the relationship is exposed in the AOM
      if (!$input.hasAttribute('aria-controls')) {
        $input.setAttribute('aria-controls', targetId)
        delete $input.dataset.ariaControls
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
   * This is useful when a "none" checkbox option is checked.
   *
   * @param {HTMLInputElement} $behaviourInput - Checkbox input
   */
  unCheckAllInputsExcept($behaviourInput) {
    const $groupInputs = this.getGroupInputs($behaviourInput)

    // Uncheck all with same group type by default, otherwise fall back to
    // GOV.UK Frontend behaviour to uncheck all with the same name attribute
    for (const $input of $groupInputs) {
      this.setInputState($input, false)
    }
  }

  /**
   * Uncheck inputs
   *
   * Find any checkbox inputs with the same checkbox group value and behaviour
   * and uncheck them. This helps prevent checking both a regular checkbox and
   * a "none" option at the same time
   *
   * @param {HTMLInputElement} $input - Checkbox input
   * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
   */
  unCheckInputs($input, behaviour = 'exclusive') {
    const $behaviourInputs = this.getBehaviourInputs($input, behaviour)

    for (const $behaviourInput of $behaviourInputs) {
      this.setInputState($behaviourInput, false)
    }
  }

  /**
   * Check other checkboxes
   *
   * Find any other checkbox inputs with the checkbox group value, and check them.
   * This is useful for when an "all" checkbox option is checked.
   *
   * @param {HTMLInputElement} $behaviourInput - Checkbox input
   */
  checkAllInputsExcept($behaviourInput) {
    const $groupInputs = this.getGroupInputs($behaviourInput)

    // Check all with same group type by default, otherwise fall back to
    // GOV.UK Frontend behaviour to check all with the same name attribute
    for (const $input of $groupInputs) {
      this.setInputState($input, true)
    }
  }

  /**
   * Check inputs
   *
   * Find any checkbox inputs with the same checkbox group value and behaviour
   * and check them. This helps prevent "all" options being left unchecked when
   * all regular checkboxes are checked
   *
   * @param {HTMLInputElement} $input - Checkbox input
   * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
   */
  checkInputs($input, behaviour = 'exclusive') {
    const $behaviourInputs = this.getBehaviourInputs($input, behaviour)

    for (const $behaviourInput of $behaviourInputs) {
      const $groupInputs = this.getGroupInputs($behaviourInput)

      // If all group inputs are checked, check the behaviour input
      if ($groupInputs.every(($groupInput) => $groupInput.checked)) {
        this.setInputState($behaviourInput, true)
      }
    }
  }

  /**
   * Get checkbox group
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  getGroup($input) {
    return $input.dataset.behaviourGroup
  }

  /**
   * Get checkbox group selector
   *
   * @param {HTMLInputElement} $input - Checkbox input
   */
  getGroupSelector($input) {
    const behaviourGroup = this.getGroup($input)

    return behaviourGroup
      ? `[data-behaviour-group="${behaviourGroup}"]`
      : `[name="${$input.name}"]`
  }

  /**
   * Get checkbox group inputs
   *
   * @param {HTMLInputElement} $behaviourInput - Checkbox input
   */
  getGroupInputs($behaviourInput) {
    const groupSelector = this.getGroupSelector($behaviourInput)

    const $groupInputs = document.querySelectorAll(
      `input[type="checkbox"]${groupSelector}`
    )

    return Array.from($groupInputs).filter(($input) => {
      return $input.form === $behaviourInput.form && $input !== $behaviourInput
    })
  }

  /**
   * Get checkbox behaviour inputs
   *
   * @param {HTMLInputElement} $input - Checkbox input
   * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
   */
  getBehaviourInputs($input, behaviour) {
    const groupSelector = this.getGroupSelector($input)

    const $behaviourInputs = document.querySelectorAll(
      `input[type="checkbox"][data-behaviour="${behaviour}"]${groupSelector}`
    )

    return Array.from($behaviourInputs).filter(
      ($behaviourInput) => $input.form === $behaviourInput.form
    )
  }

  /**
   * Set input state
   *
   * @param {HTMLInputElement} $input - Checkbox input
   * @param {boolean} checked - Checkbox checked state
   */
  setInputState($input, checked) {
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

    const { dataset } = $clickedInput

    if (dataset.behaviour === 'exclusive') {
      if ($clickedInput.checked) {
        this.unCheckAllInputsExcept($clickedInput)
      }
    } else if (dataset.behaviour === 'inclusive') {
      if ($clickedInput.checked) {
        this.checkAllInputsExcept($clickedInput)
      } else {
        this.unCheckAllInputsExcept($clickedInput)
      }
    } else if ($clickedInput.checked) {
      this.checkInputs($clickedInput, 'inclusive')
      this.unCheckInputs($clickedInput, 'exclusive')
    } else {
      this.unCheckInputs($clickedInput, 'inclusive')
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
 * Checkboxes config
 *
 * @typedef {object} CheckboxesConfig
 * @property {string} conditionalClass - Conditionally revealed content class
 */

/**
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
