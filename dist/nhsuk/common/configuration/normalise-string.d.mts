/**
 * Normalise string
 *
 * 'If it looks like a duck, and it quacks like a duck…' 🦆
 *
 * If the passed value looks like a boolean or a number, convert it to a boolean
 * or number.
 *
 * Designed to be used to convert config passed via data attributes (which are
 * always strings) into something sensible.
 *
 * @param {string | undefined} value - The value to normalise
 * @param {SchemaProperty} [property] - Component schema property
 * @returns Normalised data
 */
export function normaliseString(value: string | undefined, property?: SchemaProperty): string | number | boolean | undefined;
import type { SchemaProperty } from './index.mjs';
//# sourceMappingURL=normalise-string.d.mts.map