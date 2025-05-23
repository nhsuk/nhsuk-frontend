/* eslint-disable @typescript-eslint/no-extraneous-class */

import { setFocus } from '../../common.mjs'

/*
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 */
export class SkipLink {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    if (!$root || !($root instanceof HTMLAnchorElement)) {
      return this
    }

    this.$root = $root

    const linkedElementId = this.$root.hash.split('#').pop()
    const $linkedElement = linkedElementId
      ? document.getElementById(linkedElementId)
      : null

    // Check for linked element
    if (!$linkedElement) {
      return this
    }

    /**
     * Focus the linked element on click
     *
     * Adds a helper CSS class to hide native focus styles,
     * but removes it on blur to restore native focus styles
     */
    this.$root.addEventListener('click', () =>
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
}

/**
 * Initialise skip link component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initSkipLink(options = {}) {
  const $scope = options.scope || document
  const $root = $scope.querySelector('.nhsuk-skip-link')

  new SkipLink($root)
}
