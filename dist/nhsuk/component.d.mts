/**
 * Base component class
 *
 * Centralises the behaviours shared by our components
 *
 * @abstract
 * @template {Element} [RootElementType=HTMLElement]
 */
export class Component<RootElementType extends Element = HTMLElement> {
    /**
     * @type {typeof Element}
     */
    static elementType: typeof Element;
    /**
     * Validates whether components are supported
     *
     * @throws {SupportError} when the components are not supported
     */
    static checkSupport(): void;
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
import type { ConfigurableComponent } from './configurable-component.mjs';
import type { ObjectNested } from './common/configuration/index.mjs';
import type { Schema } from './common/configuration/index.mjs';
//# sourceMappingURL=component.d.mts.map