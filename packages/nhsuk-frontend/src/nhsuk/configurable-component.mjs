import {
  mergeConfigs,
  normaliseDataset
} from './common/configuration/index.mjs'
import { formatErrorMessage } from './common/index.mjs'
import { Component } from './component.mjs'
import { ConfigError } from './errors/index.mjs'

export const configOverride = Symbol.for('configOverride')

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
   * configOverride
   *
   * Function which defines configuration overrides to prioritize
   * properties from the root element's dataset.
   *
   * It should take a subset of configuration as input and return
   * a new configuration object with properties that should be
   * overridden based on the root element's dataset. A Symbol
   * is used for indexing to prevent conflicts.
   *
   * @abstract
   * @param {Partial<ConfigurationType>} [param] - Configuration object
   * @returns {Partial<ConfigurationType>} Configuration object
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [configOverride](param) {
    return {}
  }

  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} [$root] - HTML element to use for component
   * @param {ConfigurationType} [config] - HTML element to use for component
   */
  constructor($root, config) {
    super($root)

    const ComponentClass = /** @type {ConfigurableComponentConstructor} */ (
      this.constructor
    )

    if (typeof ComponentClass.defaults === 'undefined') {
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

    this.config = /** @type {ConfigurationType} */ (
      mergeConfigs(
        ComponentClass.defaults,
        config ?? {},
        this[configOverride](datasetConfig),
        datasetConfig
      )
    )
  }
}

/**
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} [ConfigurationType=ObjectNested]
 * @typedef {typeof ConfigurableComponent<ConfigurationType> & {
 *   defaults: ConfigurationType
 *   schema: Schema<ConfigurationType>
 * }} ConfigurableComponentConstructor
 */

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
 * @import { ObjectNested } from './common/configuration/normalise-dataset.mjs'
 */
