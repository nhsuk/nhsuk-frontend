/**
 * Initialise all components
 *
 * Use the `data-module` attributes to find and initialise all of the
 * components provided as part of NHS.UK frontend.
 *
 * @overload
 * @param {Config} [config] - Config for all components (with optional scope)
 * @returns {void}
 */
export function initAll(config?: Config | undefined): void;
/**
 * @overload
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 * @returns {void}
 */
export function initAll($scope?: Element | Document | null | undefined): void;
/**
 * Create all instances of a specific component on the page
 *
 * Uses the `data-module` attribute to find all elements matching the specified
 * component on the page, creating instances of the component object for each
 * of them.
 *
 * Any component errors will be caught and logged to the console.
 *
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {CreateAllOptions<ComponentClass>} [options] - Options including scope of the document to search within and callback function if error throw by component on init
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */
export function createAll<ComponentClass extends CompatibleClass | CompatibleClass<typeof ConfigurableComponent>>(Component: ComponentClass, config?: ComponentConfig<ComponentClass> | undefined, options?: CreateAllOptions<ComponentClass> | undefined): InstanceType<ComponentClass>[];
/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {OnErrorCallback<ComponentClass>} [onError] - Initialisation error callback
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */
export function createAll<ComponentClass extends CompatibleClass | CompatibleClass<typeof ConfigurableComponent>>(Component: ComponentClass, config?: ComponentConfig<ComponentClass> | undefined, onError?: OnErrorCallback<ComponentClass> | undefined): InstanceType<ComponentClass>[];
/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */
export function createAll<ComponentClass extends CompatibleClass | CompatibleClass<typeof ConfigurableComponent>>(Component: ComponentClass, config?: ComponentConfig<ComponentClass> | undefined, $scope?: Element | Document | null | undefined): InstanceType<ComponentClass>[];
export * from "./i18n.mjs";
export * from "./common/index.mjs";
export * from "./components/index.mjs";
export * from "./errors/index.mjs";
/**
 * NHS.UK frontend config for all components via `initAll()`
 */
export type Config = {
    /**
     * - Scope of the document to search within
     */
    scope?: Element | Document | null | undefined;
    /**
     * - Initialisation error callback
     */
    onError?: OnErrorCallback<CompatibleClass> | undefined;
    /**
     * - Button config
     */
    button?: ComponentConfig<typeof Button>;
    /**
     * - Character count config
     */
    characterCount?: ComponentConfig<typeof CharacterCount>;
    /**
     * - Error Summary config
     */
    errorSummary?: ComponentConfig<typeof ErrorSummary>;
    /**
     * - Notification Banner config
     */
    notificationBanner?: ComponentConfig<typeof NotificationBanner>;
};
/**
 * Component config
 */
export type ComponentConfig<ComponentClass extends CompatibleClass> = ConstructorParameters<ComponentClass>[1];
/**
 * Initialisation error context
 *
 * Contains the element, component class and configuration
 */
export type ErrorContext<ComponentClass extends CompatibleClass> = {
    /**
     * - Element used for component module initialisation
     */
    element?: Element | undefined;
    /**
     * - Class of component
     */
    component?: ComponentClass | undefined;
    /**
     * - Config supplied to components
     */
    config: Config | ComponentConfig<ComponentClass>;
};
/**
 * Initialisation error callback
 */
export type OnErrorCallback<ComponentClass extends CompatibleClass> = (error: unknown, context: ErrorContext<ComponentClass>) => any;
/**
 * Initialisation options
 */
export type CreateAllOptions<ComponentClass extends CompatibleClass> = {
    /**
     * - Scope of the document to search within
     */
    scope?: Element | Document | null | undefined;
    /**
     * - Initialisation error callback
     */
    onError?: OnErrorCallback<ComponentClass> | undefined;
};
import type { CompatibleClass } from './component.mjs';
import type { ConfigurableComponent } from './configurable-component.mjs';
import { Button } from './components/index.mjs';
import { CharacterCount } from './components/index.mjs';
import { ErrorSummary } from './components/index.mjs';
import { NotificationBanner } from './components/index.mjs';
//# sourceMappingURL=index.d.mts.map