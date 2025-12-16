import { normaliseOptions } from '../../common/configuration/index.mjs'
import { setFocus } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

const _self =
  typeof globalThis !== 'undefined'
    ? globalThis // Modern browsers, Node.js
    : self // Old browsers, web workers

/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when selected so the next focusable element is not at the jumped to area.
 *
 * @augments {ConfigurableComponent<SkipLinkConfig, HTMLAnchorElement>}
 */
export class SkipLink extends ConfigurableComponent {
  static elementType = _self.HTMLAnchorElement

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<SkipLinkConfig>} [config] - Skip link config
   */
  constructor($root, config) {
    super($root, config)

    const hash = this.$root.hash
    const href = this.$root.getAttribute('href') ?? ''

    // Return early for external URLs or links to other pages
    if (
      this.$root.origin !== window.location.origin ||
      this.$root.pathname !== window.location.pathname
    ) {
      return
    }

    const linkedElementId = hash.replace('#', '')

    // Check link path matching current page
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
    this.$root.addEventListener('click', () => {
      const { focusedElementClass } = this.config

      setFocus($linkedElement, {
        onBeforeFocus() {
          $linkedElement.classList.add(focusedElementClass)
        },
        onBlur() {
          $linkedElement.classList.remove(focusedElementClass)
        }
      })
    })
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-skip-link'

  /**
   * Skip link default config
   *
   * @see {@link SkipLinkConfig}
   * @constant
   * @type {SkipLinkConfig}
   */
  static defaults = Object.freeze({
    focusedElementClass: 'nhsuk-skip-link-focused-element'
  })

  /**
   * Skip link config schema
   *
   * @constant
   * @satisfies {Schema<SkipLinkConfig>}
   */
  static schema = Object.freeze({
    properties: {
      focusedElementClass: { type: 'string' }
    }
  })
}

/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink, options)`} instead.
 * @param {InitOptions & Partial<SkipLinkConfig>} [options]
 */
export function initSkipLinks(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $skipLinks = $scope?.querySelectorAll(
    `[data-module="${SkipLink.moduleName}"]`
  )

  $skipLinks?.forEach(($root) => {
    new SkipLink($root, options)
  })
}

/**
 * Skip link config
 *
 * @typedef {object} SkipLinkConfig
 * @property {string} focusedElementClass - Focused element class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
