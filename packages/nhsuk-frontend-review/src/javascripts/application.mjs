import { initAll } from 'nhsuk-frontend'

/**
 * Review app errors
 *
 * @type {{ error: unknown, context: ErrorContext<CompatibleClass> }[]}
 */
const errors = []

initAll({
  errorSummary: { disableAutoFocus: true },
  notificationBanner: { disableAutoFocus: true },
  onError(error, context) {
    errors.push({ error, context })
  }
})

for (const { error, context } of errors) {
  const $element = context.element

  // Locate component example
  const $example = $element?.closest('.app-wrapper')
  const $heading = $example?.querySelector('h2')

  console.error(
    $heading
      ? `Error in NHS.UK frontend: '${$heading.textContent}'`
      : 'Error in NHS.UK frontend',
    error,
    context
  )
}

if (errors.length > 0) {
  throw new Error('Errors in NHS.UK frontend review app')
}

/**
 * @import { CompatibleClass, ErrorContext } from 'nhsuk-frontend'
 */
