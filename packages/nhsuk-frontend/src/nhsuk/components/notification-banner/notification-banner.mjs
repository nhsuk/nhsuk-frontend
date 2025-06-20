import { Component } from '../../component.mjs'

/**
 * Notification banner component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/main/packages/govuk-frontend/src/govuk/components/notification-banner/notification-banner.mjs
 */
export class NotificationBanner extends Component {
  /**
   * @param {Element | null} [$root] - HTML element to use for notification banner
   * @param {NotificationBannerConfig} [config] - Notification banner config
   */
  constructor($root, config = {}) {
    super($root)

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
      !config.disableAutoFocus
    ) {
      this.$root.focus()
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes.
   */
  static moduleName = 'nhsuk-notification-banner'
}

/**
 * Initialise notification banner component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 * @param {boolean} [options.disableAutoFocus] - If set to `true` the notification
 *   banner will not be focussed when the page loads.
 */
export function initNotificationBanners(options = {}) {
  const $scope = options.scope || document
  const $notificationBanners = $scope.querySelectorAll(
    `[data-module="${NotificationBanner.moduleName}"]`
  )

  $notificationBanners.forEach(($notificationBanner) => {
    new NotificationBanner($notificationBanner, {
      disableAutoFocus: options.disableAutoFocus || false
    })
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
