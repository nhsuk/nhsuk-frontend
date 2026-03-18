import { isObject } from '../index.mjs'

import { extractConfigByNamespace } from './extract-config-by-namespace.mjs'
import { normaliseArray, normaliseString } from './normalise-string.mjs'

/**
 * Normalise dataset
 *
 * Loop over an object and normalise each value using {@link normaliseString},
 * optionally expanding `data-i18n.property` nested values
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @template {[keyof ConfigurationType, SchemaProperty | undefined][]} SchemaEntryType
 * @param {CompatibleClass & { schema?: Schema<ConfigurationType> }} Component - Component class
 * @param {DOMStringMap} dataset - HTML element dataset
 * @returns {ObjectNested} Normalised dataset
 */
export function normaliseDataset(Component, dataset) {
  const out = /** @type {ObjectNested} */ ({})
  if (!isObject(Component.schema)) {
    return out
  }

  const entries = /** @type {SchemaEntryType} */ (
    Object.entries(Component.schema.properties)
  )

  // Normalise top-level dataset ('data-*') values using schema types
  for (const entry of entries) {
    const [namespace, property] = entry

    // Cast the `namespace` to string so it can be used to access the dataset
    const field = namespace.toString()

    if (field in dataset) {
      out[field] =
        property?.type === 'array'
          ? normaliseArray(dataset[field])
          : normaliseString(dataset[field], property)
    }

    /**
     * Extract and normalise nested object values automatically using
     * {@link normaliseString} but only schema object types are allowed
     */
    if (property?.type === 'object') {
      out[field] = extractConfigByNamespace(
        Component.schema,
        dataset,
        namespace
      )
    }
  }

  return out
}

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { ObjectNested, Schema, SchemaProperty } from './index.mjs'
 */
