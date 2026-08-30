import { normaliseOptions } from '../../common/configuration/index.mjs'
import { formatErrorMessage, setFocus, setScroll } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Error summary component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v2.13.0/src/components/error-summary/error-summary.js
 *
 * @augments {ConfigurableComponent<ErrorSummaryConfig>}
 */
export class ErrorSummary extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<ErrorSummaryConfig>} [config] - Error summary config
   */
  constructor($root, config = {}) {
    super($root, config)

    const { disableAutoFocus, titleClass } = this.config

    const $title = this.$root.querySelector(`.${titleClass}`)
    if (!($title instanceof HTMLElement)) {
      throw new ElementError({
        component: ErrorSummary,
        element: $title,
        identifier: `Error summary title (\`${titleClass}\`)`
      })
    }

    this.$title = $title

    /**
     * Focus the error summary
     */
    if (!disableAutoFocus) {
      setScroll(this.$title, {
        scrollTo: this.$root
      })

      setFocus(this.$root, {
        preventScroll: true
      })
    }

    this.$root.addEventListener('click', (event) => this.handleClick(event))
  }

  /**
   * Error summary config override
   *
   * @param {Partial<ErrorSummaryConfig>} _datasetConfig - Config specified by dataset
   * @returns {Partial<ErrorSummaryConfig>} Config to override by dataset
   */
  configOverride(_datasetConfig) {
    let configOverrides = /** @type {Partial<ErrorSummaryConfig>} */ ({})

    if ('focusOnPageLoad' in this.config) {
      console.warn(
        formatErrorMessage(
          ErrorSummary,
          'Option `focusOnPageLoad` is deprecated. Use `disableAutoFocus` instead.'
        )
      )

      configOverrides.disableAutoFocus = !this.config.focusOnPageLoad
    }

    return configOverrides
  }

  /**
   * Get associated legend or label
   *
   * Returns the first element that exists from this list:
   *
   * - The `<legend>` associated with the closest `<fieldset>` ancestor
   * - The first `<label>` that is associated with the input using for="inputId"
   * - The closest parent `<label>`
   *
   * @param {Element} $input - The input
   * @returns {Element | null} Associated legend or label, or null if no
   *   associated legend or label can be found
   */
  getAssociatedLegendOrLabel($input) {
    const $legend = $input.closest('fieldset')?.querySelector('legend')
    return $legend ?? this.getAssociatedLabel($input)
  }

  /**
   * Get associated label
   *
   * Returns the first element that exists from this list:
   *
   * - The first `<label>` that is associated with the input using for="inputId"
   * - The closest parent `<label>`
   *
   * @param {Element} $input - The input
   * @returns {Element | null} Associated label, or null if no associated label
   *   can be found
   */
  getAssociatedLabel($input) {
    return (
      document.querySelector(`label[for='${$input.getAttribute('id')}']`) ??
      $input.closest('label')
    )
  }

  /**
   * Focus the target element
   *
   * By default, the browser will scroll the target into view. Because our
   * labels or legends appear above the input, this means the user will be
   * presented with an input without any context, as the label or legend will be
   * off the top of the screen.
   *
   * Manually handling the click event, scrolling the question into view and
   * then focussing the element solves this.
   *
   * This also results in the label and/or legend being announced correctly in
   * NVDA (as tested in 2018.3.2) - without this only the field type is
   * announced (e.g. "Edit, has autocomplete").
   *
   * @param {EventTarget} $target - Event target
   * @returns {boolean} True if the target was able to be focussed
   */
  focusTarget($target) {
    // If the element that was clicked was not a link, return early
    if (!($target instanceof HTMLAnchorElement)) {
      return false
    }

    const inputId = $target.hash.replace('#', '')
    if (!inputId) {
      return false
    }

    const $input = document.getElementById(inputId)
    if (!$input) {
      return false
    }

    const $legendOrLabel = this.getAssociatedLegendOrLabel($input)
    const $label = this.getAssociatedLabel($input)
    if (!$legendOrLabel && !$label) {
      return false
    }

    setFocus($input, {
      scrollTo: [$legendOrLabel, $label]
    })

    return true
  }

  /**
   * Click event handler
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    const $target = event.target
    if ($target && this.focusTarget($target)) {
      event.preventDefault()
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-error-summary'

  /**
   * Error summary default config
   *
   * @see {@link ErrorSummaryConfig}
   * @constant
   * @type {ErrorSummaryConfig}
   */
  static defaults = Object.freeze({
    titleClass: 'nhsuk-error-summary__title',
    disableAutoFocus: false
  })

  /**
   * Error summary config schema
   *
   * @constant
   * @satisfies {Schema<ErrorSummaryConfig>}
   */
  static schema = Object.freeze({
    properties: {
      titleClass: { type: 'string' },
      focusOnPageLoad: { type: 'boolean' }, // Deprecated
      disableAutoFocus: { type: 'boolean' }
    }
  })
}

/**
 * Initialise error summary component
 *
 * @deprecated Use {@link createAll | `createAll(ErrorSummary, options)`} instead.
 * @param {InitOptions & Partial<ErrorSummaryConfig>} [options]
 */
export function initErrorSummary(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $root = $scope?.querySelector(
    `[data-module="${ErrorSummary.moduleName}"]`
  )

  if (!$root) {
    return
  }

  new ErrorSummary($root, options)
}

/**
 * Error summary config
 *
 * @see {@link ErrorSummary.defaults}
 * @typedef {object} ErrorSummaryConfig
 * @property {string} titleClass - Title class
 * @property {boolean} [focusOnPageLoad=true] - Deprecated. Use `disableAutoFocus` instead.
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the error
 *   summary will not be focussed when the page loads.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
