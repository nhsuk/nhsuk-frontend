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
export function validateConfig<ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>>(schema: Schema<ConfigurationType>, config: ConfigurationType): string[];
import type { Schema } from './index.mjs';
//# sourceMappingURL=validate-config.d.mts.map