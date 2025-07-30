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
   * @param {Element | null} [$root] - HTML element to use for component
   * @param {ConfigurationType} [config] - HTML element to use for component
   */
  constructor($root, config) {
    super($root)

    const ComponentClass =
      /** @type {ComponentConstructor<typeof ConfigurableComponent>} */ (
        this.constructor
      )

    if (!isObject(ComponentClass.defaults)) {
      throw new ConfigError(
        formatErrorMessage(
          ComponentClass,
          'Config passed as parameter into constructor but no defaults defined'
        )
      )
    }

    const datasetConfig = /** @type {ConfigurationType} */ (
      normaliseDataset(ComponentClass, this.$root.dataset)
    )

    // Override defaults with JavaScript config
    this.config = /** @type {ConfigurationType} */ (
      mergeConfigs(ComponentClass.defaults, config ?? {})
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
 * Schema for component config
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @typedef {object} Schema
 * @property {Record<keyof ConfigurationType, SchemaProperty | undefined>} properties - Schema properties
 */

/**
 * Schema property for component config
 *
 * @typedef {object} SchemaProperty
 * @property {'string' | 'boolean' | 'number' | 'object'} type - Property type
 */

/**
 * @import { ObjectNested } from './common/configuration/index.mjs'
 * @import { ComponentConstructor } from './component.mjs'
 */
