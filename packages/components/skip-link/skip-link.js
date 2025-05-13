const { setFocus } = require('../../common')

/*
 * NHS.UK skip link.
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 */

module.exports = (options = {}) => {
  const $scope = options.scope || document
  const $module = $scope.querySelector('.nhsuk-skip-link')

  // Check for skip link
  if (!$module || !($module instanceof HTMLAnchorElement)) {
    return
  }

  const linkedElementId = $module.hash.split('#').pop()
  const $linkedElement = linkedElementId
    ? document.getElementById(linkedElementId)
    : null

  // Check for linked element
  if (!$linkedElement) {
    return
  }

  /**
   * Focus the linked element on click
   *
   * Adds a helper CSS class to hide native focus styles,
   * but removes it on blur to restore native focus styles
   */
  $module.addEventListener('click', () =>
    setFocus($linkedElement, {
      onBeforeFocus() {
        $linkedElement.classList.add('nhsuk-skip-link-focused-element')
      },
      onBlur() {
        $linkedElement.classList.remove('nhsuk-skip-link-focused-element')
      }
    })
  )
}
