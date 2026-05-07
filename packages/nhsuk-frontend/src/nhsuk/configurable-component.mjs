import {
  mergeConfigs,
  normaliseDataset,
  validateConfig
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
 * @augments {Component<RootElementType>}
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
   * @param {Partial<ConfigurationType>} [config] - HTML element to use for component
   */
  constructor($root, config) {
    super($root)

    const childConstructor =
      /** @type {ComponentConstructor<typeof ConfigurableComponent>} */ (
        this.constructor
      )

    if (!isObject(childConstructor.schema)) {
      throw new ConfigError(
        formatErrorMessage(
          childConstructor,
          'Config passed as parameter into constructor but no schema defined'
        )
      )
    }

    if (!isObject(childConstructor.defaults)) {
      throw new ConfigError(
        formatErrorMessage(
          childConstructor,
          'Config passed as parameter into constructor but no defaults defined'
        )
      )
    }

    const schema = /** @type {Schema<ConfigurationType>} */ (
      childConstructor.schema
    )

    const datasetConfig = /** @type {Partial<ConfigurationType>} */ (
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

    // Check for valid config
    const errors = validateConfig(schema, this.config)
    if (errors[0]) {
      throw new ConfigError(formatErrorMessage(childConstructor, errors[0]))
    }
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
 * @import { ObjectNested, Schema } from './common/configuration/index.mjs'
 * @import { ComponentConstructor } from './component.mjs'
 */
