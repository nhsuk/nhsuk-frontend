/**
 * Configurable base component class
 *
 * @abstract
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} [ConfigurationType=ObjectNested]
 * @template {HTMLElement} [RootElementType=HTMLElement]
 * @augments Component<RootElementType>
 */
export class ConfigurableComponent<ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>> = ObjectNested, RootElementType extends HTMLElement = HTMLElement> extends Component<RootElementType> {
    /**
     * Constructs a new component, validating that NHS.UK frontend is supported
     *
     * @param {Element | null} $root - HTML element to use for component
     * @param {ConfigurationType} [config] - HTML element to use for component
     */
    constructor($root: Element | null, config?: ConfigurationType);
    /**
     * @type {ConfigurationType}
     */
    config: ConfigurationType;
    /**
     * Config override
     *
     * It should take a subset of configuration as input and return
     * a new configuration object with properties that should be
     * overridden based on the root element's dataset
     *
     * @abstract
     * @param {Partial<ConfigurationType>} _datasetConfig - Config specified by dataset
     * @returns {Partial<ConfigurationType>} Config to override by dataset
     */
    configOverride(_datasetConfig?: Partial<ConfigurationType>): Partial<ConfigurationType>;
}
import type { ObjectNested } from './common/configuration/index.mjs';
import { Component } from './component.mjs';
//# sourceMappingURL=configurable-component.d.mts.map