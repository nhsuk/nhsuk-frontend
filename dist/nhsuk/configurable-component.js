'use strict';

var index = require('./common/index.js');
var component = require('./component.js');
var index$1 = require('./errors/index.js');
var normaliseDataset = require('./common/configuration/normalise-dataset.js');
var mergeConfigs = require('./common/configuration/merge-configs.js');

/**
 * Configurable base component class
 *
 * @abstract
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} [ConfigurationType=ObjectNested]
 * @template {HTMLElement} [RootElementType=HTMLElement]
 * @augments Component<RootElementType>
 */
class ConfigurableComponent extends component.Component {
  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} $root - HTML element to use for component
   * @param {ConfigurationType} [config] - HTML element to use for component
   */
  constructor($root, config) {
    super($root);
    /**
     * @type {ConfigurationType}
     */
    this.config = void 0;
    const childConstructor = /** @type {ComponentConstructor<typeof ConfigurableComponent>} */
    this.constructor;
    if (!index.isObject(childConstructor.defaults)) {
      throw new index$1.ConfigError(index.formatErrorMessage(childConstructor, 'Config passed as parameter into constructor but no defaults defined'));
    }
    const datasetConfig = /** @type {ConfigurationType} */
    normaliseDataset.normaliseDataset(childConstructor, this.$root.dataset);

    // Override defaults with JavaScript config
    this.config = /** @type {ConfigurationType} */
    mergeConfigs.mergeConfigs(childConstructor.defaults, config != null ? config : {});

    // Override merged config with dataset config
    this.config = /** @type {ConfigurationType} */
    mergeConfigs.mergeConfigs(this.config, this.configOverride(datasetConfig), datasetConfig);
  }

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
  configOverride(_datasetConfig = {}) {
    return {};
  }
}

/**
 * @import { ObjectNested } from './common/configuration/index.mjs'
 * @import { ComponentConstructor } from './component.mjs'
 */

exports.ConfigurableComponent = ConfigurableComponent;
//# sourceMappingURL=configurable-component.js.map
