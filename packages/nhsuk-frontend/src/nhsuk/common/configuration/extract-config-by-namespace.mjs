import { isObject } from '../index.mjs'

import { normaliseString } from './normalise-string.mjs'

/**
 * Extracts keys starting with a particular namespace from dataset ('data-*')
 * object, removing the namespace in the process, normalising all values
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {DOMStringMap} dataset - The object to extract key-value pairs from
 * @param {keyof ConfigurationType} namespace - The namespace to filter keys with
 * @returns {ObjectNested | undefined} Nested object with dot-separated key namespace removed
 */
export function extractConfigByNamespace(schema, dataset, namespace) {
  const property = schema.properties[namespace]

  // Only extract configs for object schema properties
  if (property?.type !== 'object') {
    return
  }

  // Add default empty config
  const newObject = /** @type {Record<typeof namespace, ObjectNested>} */ ({
    [namespace]: {}
  })

  for (const [key, value] of Object.entries(dataset)) {
    /** @type {ObjectNested | ObjectNested[NestedKey]} */
    let current = newObject

    // Split the key into parts, using . as our namespace separator
    const keyParts = key.split('.')

    /**
     * Create new level per part
     *
     * e.g. 'i18n.textareaDescription.other' becomes
     * `{ i18n: { textareaDescription: { other } } }`
     */
    for (const [index, name] of keyParts.entries()) {
      if (isObject(current)) {
        // Drop down to nested object until the last part
        if (index < keyParts.length - 1) {
          // New nested object (optionally) replaces existing value
          if (!isObject(current[name])) {
            current[name] = {}
          }

          // Drop down into new or existing nested object
          current = current[name]
        } else if (key !== namespace) {
          // Normalised value (optionally) replaces existing value
          current[name] = normaliseString(value)
        }
      }
    }
  }

  return newObject[namespace]
}

/**
 * Schema for component config
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @typedef {object} Schema
 * @property {Record<keyof ConfigurationType, SchemaProperty | undefined>} properties - Schema properties
 * @property {SchemaCondition<ConfigurationType>[]} [anyOf] - List of schema conditions
 */

/**
 * Schema property for component config
 *
 * @typedef {object} SchemaProperty
 * @property {'string' | 'boolean' | 'number' | 'object'} type - Property type
 */

/**
 * Schema condition for component config
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @typedef {object} SchemaCondition
 * @property {(keyof ConfigurationType)[]} required - List of required config fields
 * @property {string} errorMessage - Error message when required config fields not provided
 */

/**
 * @typedef {keyof ObjectNested} NestedKey
 * @typedef {{ [key: string]: string | boolean | number | ObjectNested | undefined }} ObjectNested
 */
