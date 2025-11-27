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
export function normaliseDataset<ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>, SchemaEntryType extends [keyof ConfigurationType, SchemaProperty | undefined][]>(Component: CompatibleClass & {
    schema?: Schema<ConfigurationType>;
}, dataset: DOMStringMap): ObjectNested;
import type { SchemaProperty } from './index.mjs';
import type { CompatibleClass } from '../../component.mjs';
import type { Schema } from './index.mjs';
import type { ObjectNested } from './index.mjs';
//# sourceMappingURL=normalise-dataset.d.mts.map