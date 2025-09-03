import { normaliseOptions } from '../../common/configuration/index.mjs'
import { setFocus } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'

/**
 * Notification banner component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v5.10.2/packages/govuk-frontend/src/govuk/components/notification-banner/notification-banner.mjs
 *
 * @augments ConfigurableComponent<NotificationBannerConfig>
 */
export class NotificationBanner extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {NotificationBannerConfig} [config] - Notification banner config
   */
  constructor($root, config = {}) {
    super($root, config)

    /**
     * Focus the notification banner
     *
     * If `role="alert"` is set, focus the element to help some assistive
     * technologies prioritise announcing it.
     *
     * You can turn off the auto-focus functionality by setting
     * `data-disable-auto-focus="true"` in the component HTML. You might wish to
     * do this based on user research findings, or to avoid a clash with another
     * element which should be focused when the page loads.
     */
    if (
      this.$root.getAttribute('role') === 'alert' &&
      !this.config.disableAutoFocus
    ) {
      setFocus(this.$root)
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes.
   */
  static moduleName = 'nhsuk-notification-banner'

  /**
   * Notification banner default config
   *
   * @see {@link NotificationBannerConfig}
   * @constant
   * @type {NotificationBannerConfig}
   */
  static defaults = Object.freeze({
    disableAutoFocus: false
  })

  /**
   * Notification banner config schema
   *
   * @constant
   * @satisfies {Schema<NotificationBannerConfig>}
   */
  static schema = Object.freeze({
    properties: {
      disableAutoFocus: { type: 'boolean' }
    }
  })
}

/**
 * Initialise notification banner component
 *
 * @deprecated Use {@link createAll | `createAll(NotificationBanner, options)`} instead.
 * @param {InitOptions & NotificationBannerConfig} [options]
 */
export function initNotificationBanners(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $notificationBanners = $scope?.querySelectorAll(
    `[data-module="${NotificationBanner.moduleName}"]`
  )

  $notificationBanners?.forEach(($notificationBanner) => {
    new NotificationBanner($notificationBanner, options)
  })
}

/**
 * Notification banner config
 *
 * @typedef {object} NotificationBannerConfig
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the
 *   notification banner will not be focussed when the page loads. This only
 *   applies if the component has a `role` of `alert` – in other cases the
 *   component will not be focused on page load, regardless of this option.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
