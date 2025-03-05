import { setFocus } from '../../common.js'

/*
 * NHS.UK skip link.
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 */

export default () => {
  const $skipLink = document.querySelector('.nhsuk-skip-link')

  // Check for skip link
  if (!$skipLink || !($skipLink instanceof HTMLAnchorElement)) {
    return
  }

  const linkedElementId = $skipLink.hash.split('#').pop()
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
  $skipLink.addEventListener('click', () =>
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
