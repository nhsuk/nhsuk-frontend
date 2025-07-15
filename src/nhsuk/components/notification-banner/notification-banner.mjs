import { setFocus } from '../../common/index.mjs'
import { Component } from '../../component.mjs'

/**
 * Notification banner component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v5.10.2/packages/govuk-frontend/src/govuk/components/notification-banner/notification-banner.mjs
 */
export class NotificationBanner extends Component {
  /**
   * @param {Element | null} [$root] - HTML element to use for notification banner
   */
  constructor($root) {
    super($root)

    /**
     * Read config set using dataset ('data-' values)
     *
     * @type {NotificationBannerConfig}
     */
    this.config = Object.assign(
      {},
      NotificationBanner.defaults,
      NotificationBanner.getDataset(this.$root)
    )

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
   * Read data attributes
   *
   * @param {HTMLElement} element - HTML element
   */
  static getDataset(element) {
    const dataset = /** @type {NotificationBannerConfig} */ ({})

    for (const [key, value] of Object.entries(element.dataset)) {
      if (key === 'disableAutoFocus') {
        dataset[key] = Boolean(value)
      }
    }

    return dataset
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
}

/**
 * Initialise notification banner component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initNotificationBanners(options = {}) {
  const $scope = options.scope ?? document
  const $notificationBanners = $scope.querySelectorAll(
    `[data-module="${NotificationBanner.moduleName}"]`
  )

  $notificationBanners.forEach(($notificationBanner) => {
    new NotificationBanner($notificationBanner)
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
