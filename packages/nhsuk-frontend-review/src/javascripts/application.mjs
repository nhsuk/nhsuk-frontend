import { initAll } from 'nhsuk-frontend'

initAll({
  errorSummary: { disableAutoFocus: true },
  notificationBanner: { disableAutoFocus: true },
  onError(error, context) {
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

    throw error
  }
})
