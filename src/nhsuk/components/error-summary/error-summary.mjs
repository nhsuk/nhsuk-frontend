import { getFragmentFromUrl } from '../../common/index.mjs'
import { Component } from '../../component.mjs'

/**
 * Error summary component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v2.13.0/src/components/error-summary/error-summary.js
 */
export class ErrorSummary extends Component {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   * @param {ErrorSummaryConfig} [config] - Error summary config
   */
  constructor($root, config = {}) {
    super($root)

    this.$root.addEventListener('click', this.handleClick.bind(this))

    if (!config.disableAutoFocus) {
      this.$root.focus()
    }
  }

  /**
   * Get associated legend or label
   *
   * Returns the first element that exists from this list:
   *
   * - The `<legend>` associated with the closest `<fieldset>` ancestor, as long
   *   as the top of it is no more than half a viewport height away from the
   *   bottom of the input
   * - The first `<label>` that is associated with the input using for='inputId'
   * - The closest parent `<label>`
   *
   * @param {Element} input - The input
   * @returns {Element | null} Associated legend or label, or null if no
   *   associated legend or label can be found
   */
  getAssociatedLegendOrLabel(input) {
    const fieldset = input.closest('fieldset')

    if (fieldset) {
      const legends = fieldset.getElementsByTagName('legend')

      if (legends.length) {
        const candidateLegend = legends[0] // eslint-disable-line prefer-destructuring

        // If the input type is radio or checkbox, always use the legend if there
        // is one.
        if (
          input instanceof HTMLInputElement &&
          (input.type === 'checkbox' || input.type === 'radio')
        ) {
          return candidateLegend
        }

        // For other input types, only scroll to the fieldset’s legend (instead of
        // the label associated with the input) if the input would end up in the
        // top half of the screen.
        //
        // This should avoid situations where the input either ends up off the
        // screen, or obscured by a software keyboard.
        const legendTop = candidateLegend.getBoundingClientRect().top
        const inputRect = input.getBoundingClientRect()

        // If the browser doesn't support Element.getBoundingClientRect().height
        // or window.innerHeight (like IE8), bail and just link to the label.
        if (inputRect.height && window.innerHeight) {
          const inputBottom = inputRect.top + inputRect.height

          if (inputBottom - legendTop < window.innerHeight / 2) {
            return candidateLegend
          }
        }
      }
    }

    return (
      document.querySelector(`label[for='${input.getAttribute('id')}']`) ||
      input.closest('label')
    )
  }

  /**
   * Focus the target element
   *
   * By default, the browser will scroll the target into view. Because our labels
   * or legends appear above the input, this means the user will be presented with
   * an input without any context, as the label or legend will be off the top of
   * the screen.
   *
   * Manually handling the click event, scrolling the question into view and then
   * focussing the element solves this.
   *
   * This also results in the label and/or legend being announced correctly in
   * NVDA - without this only the field type is announced
   * (e.g. 'Edit, has autocomplete').
   *
   * @param {EventTarget} target - Event target
   * @returns {boolean} True if the target was able to be focussed
   */
  focusTarget(target) {
    // If the element that was clicked was not a link, return early
    if (!(target instanceof HTMLAnchorElement)) {
      return false
    }

    const inputId = getFragmentFromUrl(target.href)
    if (!inputId) {
      return false
    }

    const input = document.getElementById(inputId)
    if (!input) {
      return false
    }

    const legendOrLabel = this.getAssociatedLegendOrLabel(input)
    if (!legendOrLabel) {
      return false
    }

    // Scroll the legend or label into view *before* calling focus on the input to
    // avoid extra scrolling in browsers that don't support `preventScroll` (which
    // at time of writing is most of them...)
    legendOrLabel.scrollIntoView()
    input.focus({ preventScroll: true })

    return true
  }

  /**
   * Click event handler
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    if (this.focusTarget(event.target)) {
      event.preventDefault()
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-error-summary'
}

/**
 * Initialise error summary component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 * @param {boolean} [options.focusOnPageLoad] - If set to `false` the error
 *   summary will not be focussed when the page loads.
 */
export function initErrorSummary(options = {}) {
  const $scope = options.scope || document
  const $root = $scope.querySelector(
    `[data-module="${ErrorSummary.moduleName}"]`
  )

  if (!$root) {
    return
  }

  new ErrorSummary($root, {
    disableAutoFocus: options.focusOnPageLoad === false
  })
}

/**
 * Error summary config
 *
 * @typedef {object} ErrorSummaryConfig
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the error
 *   summary will not be focussed when the page loads.
 */
