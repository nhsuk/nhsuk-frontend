'use strict';

var index$1 = require('../../errors/index.js');
var index = require('../index.js');
var extractConfigByNamespace = require('./extract-config-by-namespace.js');
var normaliseString = require('./normalise-string.js');

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
function normaliseDataset(Component, dataset) {
  if (!index.isObject(Component.schema)) {
    throw new index$1.ConfigError(index.formatErrorMessage(Component, 'Config passed as parameter into constructor but no schema defined'));
  }
  const out = /** @type {ObjectNested} */{};
  const entries = /** @type {SchemaEntryType} */
  Object.entries(Component.schema.properties);

  // Normalise top-level dataset ('data-*') values using schema types
  for (const entry of entries) {
    const [namespace, property] = entry;

    // Cast the `namespace` to string so it can be used to access the dataset
    const field = namespace.toString();
    if (field in dataset) {
      out[field] = normaliseString.normaliseString(dataset[field], property);
    }

    /**
     * Extract and normalise nested object values automatically using
     * {@link normaliseString} but only schema object types are allowed
     */
    if ((property == null ? void 0 : property.type) === 'object') {
      out[field] = extractConfigByNamespace.extractConfigByNamespace(Component.schema, dataset, namespace);
    }
  }
  return out;
}

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { ObjectNested, Schema, SchemaProperty } from './index.mjs'
 */

exports.normaliseDataset = normaliseDataset;
//# sourceMappingURL=normalise-dataset.js.map
