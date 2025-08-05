import {
  mergeConfigs,
  normaliseDataset
} from './common/configuration/index.mjs'
import { formatErrorMessage, isObject } from './common/index.mjs'
import { Component } from './component.mjs'
import { ConfigError } from './errors/index.mjs'

/**
 * Configurable base component class
 *
 * @abstract
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} [ConfigurationType=ObjectNested]
 * @template {HTMLElement} [RootElementType=HTMLElement]
 * @augments Component<RootElementType>
 */
export class ConfigurableComponent extends Component {
  /**
   * @type {ConfigurationType}
   */
  config

  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} $root - HTML element to use for component
   * @param {ConfigurationType} [config] - HTML element to use for component
   */
  constructor($root, config) {
    super($root)

    const childConstructor =
      /** @type {ComponentConstructor<typeof ConfigurableComponent>} */ (
        this.constructor
      )

    if (!isObject(childConstructor.defaults)) {
      throw new ConfigError(
        formatErrorMessage(
          childConstructor,
          'Config passed as parameter into constructor but no defaults defined'
        )
      )
    }

    const datasetConfig = /** @type {ConfigurationType} */ (
      normaliseDataset(childConstructor, this.$root.dataset)
    )

    // Override defaults with JavaScript config
    this.config = /** @type {ConfigurationType} */ (
      mergeConfigs(childConstructor.defaults, config ?? {})
    )

    // Override merged config with dataset config
    this.config = /** @type {ConfigurationType} */ (
      mergeConfigs(
        this.config,
        this.configOverride(datasetConfig),
        datasetConfig
      )
    )
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
    return {}
  }
}

/**
 * @import { ObjectNested } from './common/configuration/index.mjs'
 * @import { ComponentConstructor } from './component.mjs'
 */
