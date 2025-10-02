/**
 * Initialise notification banner component
 *
 * @deprecated Use {@link createAll | `createAll(NotificationBanner, options)`} instead.
 * @param {InitOptions & NotificationBannerConfig} [options]
 */
export function initNotificationBanners(options?: InitOptions & NotificationBannerConfig): void;
/**
 * Notification banner component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v5.10.2/packages/govuk-frontend/src/govuk/components/notification-banner/notification-banner.mjs
 *
 * @augments ConfigurableComponent<NotificationBannerConfig>
 */
export class NotificationBanner extends ConfigurableComponent<NotificationBannerConfig, HTMLElement> {
    /**
     * Notification banner default config
     *
     * @see {@link NotificationBannerConfig}
     * @constant
     * @type {NotificationBannerConfig}
     */
    static defaults: NotificationBannerConfig;
    /**
     * Notification banner config schema
     *
     * @constant
     * @satisfies {Schema<NotificationBannerConfig>}
     */
    static schema: Readonly<{
        properties: {
            disableAutoFocus: {
                type: "boolean";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {NotificationBannerConfig} [config] - Notification banner config
     */
    constructor($root: Element | null, config?: NotificationBannerConfig);
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
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=notification-banner.d.mts.map