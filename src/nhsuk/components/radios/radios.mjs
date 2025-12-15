import { normaliseOptions } from '../../common/configuration/index.mjs'
import { toggleConditionalInput } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Radios component
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/}
 *
 * @augments {ConfigurableComponent<RadiosConfig>}
 */
export class Radios extends ConfigurableComponent {
  /**
   * Radios can be associated with a 'conditionally revealed' content block –
   * for example, a radio for 'Phone' could reveal an additional form field for
   * the user to enter their phone number.
   *
   * These associations are made using a `data-aria-controls` attribute, which
   * is promoted to an aria-controls attribute during initialisation.
   *
   * We also need to restore the state of any conditional reveals on the page
   * (for example if the user has navigated back), and set up event handlers to
   * keep the reveal in sync with the radio state.
   *
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<RadiosConfig>} [config] - Radios config
   */
  constructor($root, config) {
    super($root, config)

    const $inputs = this.$root.querySelectorAll('input[type="radio"]')
    if (!$inputs.length) {
      throw new ElementError({
        component: Radios,
        identifier: 'Form inputs (`<input type="radio">`)'
      })
    }

    this.$inputs = $inputs

    this.$inputs.forEach(($input) => {
      const targetId =
        $input.dataset.ariaControls ?? $input.getAttribute('aria-controls')

      // Skip radios without data-aria-controls attributes
      if (!targetId) {
        return
      }

      // Throw if target conditional element does not exist.
      if (!document.getElementById(targetId)) {
        throw new ElementError({
          component: Radios,
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
   * Sync the conditional reveal states for all radio buttons in this component.
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
   * @param {HTMLInputElement} $input - Radio input
   */
  syncConditionalRevealWithInputState($input) {
    const { conditionalClass } = this.config
    toggleConditionalInput($input, `${conditionalClass}--hidden`)
  }

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    const $clickedInput = event.target

    // Ignore clicks on things that aren't radio buttons
    if (
      !($clickedInput instanceof HTMLInputElement) ||
      $clickedInput.type !== 'radio'
    ) {
      return
    }

    // We only need to consider radios with conditional reveals, which will have
    // aria-controls attributes.
    const $allInputs = document.querySelectorAll(
      'input[type="radio"][aria-controls]'
    )

    const $clickedInputForm = $clickedInput.form
    const $clickedInputName = $clickedInput.name

    $allInputs.forEach(($input) => {
      const hasSameFormOwner = $input.form === $clickedInputForm
      const hasSameName = $input.name === $clickedInputName

      if (hasSameName && hasSameFormOwner) {
        this.syncConditionalRevealWithInputState($input)
      }
    })
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-radios'

  /**
   * Radios default config
   *
   * @see {@link RadiosConfig}
   * @constant
   * @type {RadiosConfig}
   */
  static defaults = Object.freeze({
    conditionalClass: 'nhsuk-radios__conditional'
  })

  /**
   * Radios config schema
   *
   * @constant
   * @satisfies {Schema<RadiosConfig>}
   */
  static schema = Object.freeze({
    properties: {
      conditionalClass: { type: 'string' }
    }
  })
}

/**
 * Initialise radios component
 *
 * @deprecated Use {@link createAll | `createAll(Radios, options)`} instead.
 * @param {InitOptions & Partial<RadiosConfig>} [options]
 */
export function initRadios(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $radios = $scope?.querySelectorAll(
    `[data-module="${Radios.moduleName}"]`
  )

  $radios?.forEach(($root) => {
    new Radios($root, options)
  })
}

/**
 * Radios config
 *
 * @typedef {object} RadiosConfig
 * @property {string} conditionalClass - Conditionally revealed content class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
