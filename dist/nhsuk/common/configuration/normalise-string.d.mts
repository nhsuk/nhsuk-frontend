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
 * @param {string | number | boolean | undefined} value - The value to normalise
 * @param {SchemaProperty} [property] - Component schema property
 * @returns Normalised data
 */
export function normaliseString(value: string | number | boolean | undefined, property?: SchemaProperty): string | number | boolean | undefined;
/**
 * Normalise array of strings
 *
 * @param {string | (string | number | boolean | undefined)[] | undefined} value - The value to normalise
 * @param {Parameters<typeof JSON.parse>[1]} [reviver] - JSON parse reviver function
 * @returns Normalised array of data
 */
export function normaliseArray(value: string | (string | number | boolean | undefined)[] | undefined, reviver?: Parameters<typeof JSON.parse>[1]): (string | number | boolean)[];
import type { SchemaProperty } from './index.mjs';
//# sourceMappingURL=normalise-string.d.mts.map