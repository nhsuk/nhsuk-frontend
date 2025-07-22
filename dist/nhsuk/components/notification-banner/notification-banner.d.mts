/**
 * Initialise notification banner component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initNotificationBanners(options?: {
    scope?: Element | Document | null | undefined;
}): void;
/**
 * Notification banner component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v5.10.2/packages/govuk-frontend/src/govuk/components/notification-banner/notification-banner.mjs
 */
export class NotificationBanner extends Component<HTMLElement> {
    /**
     * Read data attributes
     *
     * @param {HTMLElement} element - HTML element
     */
    static getDataset(element: HTMLElement): NotificationBannerConfig;
    /**
     * Notification banner default config
     *
     * @see {@link NotificationBannerConfig}
     * @constant
     * @type {NotificationBannerConfig}
     */
    static defaults: NotificationBannerConfig;
    /**
     * @param {Element | null} [$root] - HTML element to use for notification banner
     */
    constructor($root?: Element | null);
    /**
     * Read config set using dataset ('data-' values)
     *
     * @type {NotificationBannerConfig}
     */
    config: NotificationBannerConfig;
}
/**
 * Notification banner config
 */
export type NotificationBannerConfig = {
    /**
     * - If set to `true` the
     * notification banner will not be focussed when the page loads. This only
     * applies if the component has a `role` of `alert` – in other cases the
     * component will not be focused on page load, regardless of this option.
     */
    disableAutoFocus?: boolean | undefined;
};
import { Component } from '../../component.mjs';
//# sourceMappingURL=notification-banner.d.mts.map