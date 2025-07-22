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
     * @param {Element | null} [$root] - HTML element to use for component
     */
    constructor($root?: Element | null);
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
export type ComponentConstructor<RootElementType extends Element = HTMLElement> = typeof Component<RootElementType>;
//# sourceMappingURL=component.d.mts.map