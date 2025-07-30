import { ConfigError } from '../../errors/index.mjs'
import { formatErrorMessage, isObject } from '../index.mjs'

import { normaliseString } from './normalise-string.mjs'

/**
 * Normalise dataset
 *
 * Loop over an object and normalise each value using {@link normaliseString}
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @template {[keyof ConfigurationType, SchemaProperty | undefined][]} SchemaEntryType
 * @param {CompatibleClass & { schema?: Schema<ConfigurationType> }} Component - Component class
 * @param {DOMStringMap} dataset - HTML element dataset
 * @returns {ObjectNested} Normalised dataset
 */
export function normaliseDataset(Component, dataset) {
  if (!isObject(Component.schema)) {
    throw new ConfigError(
      formatErrorMessage(
        Component,
        'Config passed as parameter into constructor but no schema defined'
      )
    )
  }

  const out = /** @type {ObjectNested} */ ({})
  const entries = /** @type {SchemaEntryType} */ (
    Object.entries(Component.schema.properties)
  )

  // Normalise top-level dataset ('data-*') values using schema types
  for (const entry of entries) {
    const [namespace, property] = entry

    // Cast the `namespace` to string so it can be used to access the dataset
    const field = namespace.toString()

    if (field in dataset) {
      out[field] = normaliseString(dataset[field], property)
    }
  }

  return out
}

/**
 * @typedef {{ [key: string]: string | boolean | number | ObjectNested | undefined }} ObjectNested
 */

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { Schema, SchemaProperty } from '../../configurable-component.mjs'
 */
