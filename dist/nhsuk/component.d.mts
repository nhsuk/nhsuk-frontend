/**
 * Base component class
 *
 * Centralises the behaviours shared by our components
 *
 * @abstract
 * @template {HTMLElement} [RootElementType=HTMLElement]
 */
export class Component<RootElementType extends HTMLElement = HTMLElement> {
    /**
     * @type {typeof Element}
     */
    static elementType: typeof Element;
    /**
     * Validate whether component is supported
     *
     * @template {Partial<Record<keyof ConfigurationType, unknown>>} [ConfigurationType=ObjectNested]
     * @template {HTMLElement} [RootElementType=HTMLElement]
     * @param {RootElementType} [_$root] - HTML element to use for component
     * @param {ConfigurationType} [_config] - Config specified by configurable components only
     * @throws {SupportError} when component is not supported
     */
    static checkSupport<ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>> = ObjectNested, RootElementType_1 extends HTMLElement = HTMLElement>(_$root?: RootElementType_1, _config?: ConfigurationType): void;
    /**
     * Name for the component used when initialising using data-module attributes
     */
    static moduleName: string;
    /**
     * Constructs a new component, validating that NHS.UK frontend is supported
     *
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
    /**
     * @type {RootElementType}
     */
    $root: RootElementType;
    /**
     * Set component as initialised
     */
    setInitialised(): void;
    /**
     * Validates whether component is already initialised
     *
     * @throws {InitError} when component is already initialised
     */
    checkInitialised(): void;
}
/**
 * Component compatible class
 */
export type CompatibleClass<ComponentType extends typeof Component | typeof ConfigurableComponent = typeof Component> = {
    new (...args: ConstructorParameters<ComponentType>): InstanceType<ComponentType>;
    defaults?: ObjectNested;
    schema?: Schema<ObjectNested>;
    moduleName: string;
};
/**
 * Component constructor
 */
export type ComponentConstructor<ComponentType extends typeof Component | typeof ConfigurableComponent = typeof Component> = CompatibleClass & ComponentType;
/**
 * Component initialisation options
 */
export type InitOptions = {
    /**
     * - Scope of the document to search within
     */
    scope?: Element | Document | null | undefined;
};
import type { ObjectNested } from './common/configuration/index.mjs';
import type { ConfigurableComponent } from './configurable-component.mjs';
import type { Schema } from './common/configuration/index.mjs';
//# sourceMappingURL=component.d.mts.map