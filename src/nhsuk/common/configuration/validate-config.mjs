/**
 * Validate component config by schema
 *
 * Follows limited examples in JSON schema for wider support in future
 *
 * {@link https://ajv.js.org/json-schema.html#compound-keywords}
 * {@link https://ajv.js.org/packages/ajv-errors.html#single-message}
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {ConfigurationType} config - Component config
 * @returns {string[]} List of validation errors
 */
export function validateConfig(schema, config) {
  const validationErrors = /** @type {string[]} */ ([])

  // Check errors for each schema
  for (const [name, conditions] of Object.entries(schema)) {
    const errors = /** @type {string[]} */ ([])

    // Check errors for each schema condition
    if (Array.isArray(conditions)) {
      for (const { required, errorMessage } of conditions) {
        if (!required.every((key) => !!config[key])) {
          errors.push(errorMessage) // Missing config key value
        }
      }

      // Check all conditions pass or add errors
      if (name === 'allOf' && errors.length) {
        validationErrors.push(...errors)
        for (const error of errors) {
          if (!validationErrors.includes(error)) {
            validationErrors.push(error)
          }
        }
      }

      // Check one condition passes or add errors
      if (name === 'anyOf' && !(conditions.length - errors.length >= 1)) {
        for (const error of errors) {
          if (!validationErrors.includes(error)) {
            validationErrors.push(error)
          }
        }
      }
    }
  }

  return validationErrors
}

/**
 * @import { Schema } from './index.mjs'
 */
