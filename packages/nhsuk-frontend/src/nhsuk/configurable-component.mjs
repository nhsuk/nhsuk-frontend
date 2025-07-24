import {
  mergeConfigs,
  normaliseDataset
} from './common/configuration/index.mjs'
import { formatErrorMessage } from './common/index.mjs'
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

    this.config = /** @type {ConfigurationType} */ (
      mergeConfigs(
        ComponentClass.defaults,
        config ?? {},
        normaliseDataset(ComponentClass, this.$root.dataset)
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
