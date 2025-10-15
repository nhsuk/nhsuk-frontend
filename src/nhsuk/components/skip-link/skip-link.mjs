/* eslint-disable es-x/no-global-this */

import { normaliseOptions } from '../../common/configuration/index.mjs'
import { setFocus } from '../../common/index.mjs'
import { Component } from '../../component.mjs'
import { ElementError } from '../../errors/index.mjs'

const _self =
  typeof globalThis !== 'undefined'
    ? globalThis // Modern browsers, Node.js
    : self // Old browsers, web workers

/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 *
 * @augments Component<HTMLAnchorElement>
 */
export class SkipLink extends Component {
  static elementType = _self.HTMLAnchorElement

  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const hash = this.$root.hash
    const href = this.$root.getAttribute('href') ?? ''

    const linkedElementId = hash.replace('#', '')
    if (!linkedElementId) {
      throw new ElementError({
        component: SkipLink,
        identifier: `Target link (\`href="${href}"\`) hash fragment`
      })
    }

    const $linkedElement = document.getElementById(linkedElementId)

    // Check for linked element
    if (!$linkedElement) {
      throw new ElementError({
        component: SkipLink,
        element: $linkedElement,
        identifier: `Target content (\`id="${linkedElementId}"\`)`
      })
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

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-skip-link'
}

/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink)`} instead.
 * @param {InitOptions} [options]
 */
export function initSkipLinks(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $skipLinks = $scope?.querySelectorAll(
    `[data-module="${SkipLink.moduleName}"]`
  )

  $skipLinks?.forEach(($root) => {
    new SkipLink($root)
  })
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */
