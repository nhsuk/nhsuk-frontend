import { toggleConditionalInput } from '../../common'

/**
 * Conditionally show content when a checkbox button is checked
 * Test at http://0.0.0.0:3000/components/checkboxes/conditional.html
 */
const syncAllConditionalReveals = function syncAllConditionalReveals(input) {
  const allInputsInForm = input.form.querySelectorAll('input[type="checkbox"]')
  allInputsInForm.forEach((item) => toggleConditionalInput(item, 'nhsuk-checkboxes__conditional--hidden'))
}

/**
 * Uncheck other checkboxes
 *
 * Find any other checkbox inputs with the checkbox group value, and uncheck them.
 * This is useful for when a “None of these" checkbox is checked.
 */
const unCheckAllInputsExcept = function unCheckAllInputsExcept(input) {
  const allInputsInSameExclusiveGroup = input.form.querySelectorAll(
    `input[type="checkbox"][data-checkbox-exclusive-group="${input.getAttribute('data-checkbox-exclusive-group')}"]`
  )

  allInputsInSameExclusiveGroup.forEach((inputWithSameName) => {
    const hasSameFormOwner = input.form === inputWithSameName.form
    if (hasSameFormOwner && inputWithSameName !== input) {
      inputWithSameName.checked = false // eslint-disable-line no-param-reassign
    }
  })

  syncAllConditionalReveals(input)
}

/**
 * Uncheck exclusive inputs
 *
 * Find any checkbox inputs with the same checkbox group value and the 'exclusive' behaviour,
 * and uncheck them. This helps prevent someone checking both a regular checkbox and a
 * "None of these" checkbox in the same fieldset.
 */
const unCheckExclusiveInputs = function unCheckExclusiveInputs(input) {
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

  syncAllConditionalReveals(input)
}

export default ({ scope = document } = {}) => {
  // Checkbox input DOMElements inside a conditional form group
  const checkboxInputs = scope.querySelectorAll('.nhsuk-checkboxes .nhsuk-checkboxes__input')

  /**
   * Toggle classes and attributes
   * @param {Object} event click event object
   */
  const handleClick = (event) => {
    // Toggle conditional content based on checked state
    toggleConditionalInput(event.target, 'nhsuk-checkboxes__conditional--hidden')

    if (!event.target.checked) {
      return
    }

    // Handle 'exclusive' checkbox behaviour (ie "None of these")
    if (event.target.hasAttribute('data-checkbox-exclusive')) {
      unCheckAllInputsExcept(event.target)
    } else {
      unCheckExclusiveInputs(event.target)
    }
  }

  // When the page is restored after navigating 'back' in some browsers the
  // state of form controls is not restored until *after* the DOMContentLoaded
  // event is fired, so we need to sync after the pageshow event in browsers
  // that support it.
  if ('onpageshow' in window) {
    window.addEventListener('pageshow', () => checkboxInputs.forEach((input) => syncAllConditionalReveals(input)))
  } else {
    window.addEventListener('DOMContentLoaded', () =>
      checkboxInputs.forEach((input) => syncAllConditionalReveals(input))
    )
  }

  // Although we've set up handlers to sync state on the pageshow or
  // DOMContentLoaded event, init could be called after those events have fired,
  // for example if they are added to the page dynamically, so sync now too.
  checkboxInputs.forEach((input) => syncAllConditionalReveals(input))

  // Attach handleClick as click to checkboxInputs
  checkboxInputs.forEach((checkboxButton) => {
    checkboxButton.addEventListener('change', handleClick)
  })
}
