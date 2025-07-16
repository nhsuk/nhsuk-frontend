import { toggleConditionalInput } from '../../common/index.mjs'
import { Component } from '../../component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Radios component
 *
 * Conditionally show content when a radio button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/}
 */
export class Radios extends Component {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const $inputs = this.$root.querySelectorAll('input[type="radio"]')
    if (!$inputs.length) {
      throw new ElementError({
        component: Radios,
        identifier: 'Form inputs (`<input type="radio">`)'
      })
    }

    this.$inputs = $inputs

    this.$inputs.forEach(($input) => {
      const targetId = $input.getAttribute('aria-controls')

      // Skip radios without aria-controls attributes
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
    })

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => this.syncAllConditionalReveals())

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so sync now too.
    this.syncAllConditionalReveals()

    // Attach event handler to radioInputs
    this.$inputs.forEach(($input) => {
      $input.addEventListener('click', () =>
        this.syncConditionalRevealWithInputState($input)
      )
    })
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
   * @private
   * @param {HTMLInputElement} $input - Radio input
   */
  syncConditionalRevealWithInputState($input) {
    toggleConditionalInput($input, 'nhsuk-radios__conditional--hidden')
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-radios'
}

/**
 * Initialise radios component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initRadios(options = {}) {
  const $scope = options.scope || document
  const $radios = $scope.querySelectorAll(
    `[data-module="${Radios.moduleName}"]`
  )

  $radios.forEach(($root) => {
    new Radios($root)
  })
}
