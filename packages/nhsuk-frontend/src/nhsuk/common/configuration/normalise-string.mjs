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
export function normaliseString(value, property) {
  if (!isValid(value)) {
    return
  }

  const trimmedValue = value.toString().trim()

  let output
  let outputType = property?.type

  // No schema type set? Determine automatically
  if (!outputType) {
    if (['true', 'false'].includes(trimmedValue)) {
      outputType = 'boolean'
    }

    // Empty / whitespace-only strings are considered finite so we need to check
    // the length of the trimmed string as well
    if (trimmedValue.length > 0 && isFinite(Number(trimmedValue))) {
      outputType = 'number'
    }
  }

  switch (outputType) {
    case 'boolean':
      output = trimmedValue === 'true'
      break

    case 'number':
      output = Number(trimmedValue)
      break

    default:
      output = value
  }

  return output
}

/**
 * Normalise array of strings
 *
 * @param {string | (string | number | boolean | undefined)[] | undefined} value - The value to normalise
 * @returns Normalised array of data
 */
export function normaliseArray(value) {
  let values = Array.isArray(value) ? value : []

  // Attempt to parse string as array
  if (typeof value === 'string') {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      values = JSON.parse(decodeURIComponent(value), getArrayValue) ?? []
    } catch {
      return []
    }
  }

  // Normalise and filter array values
  return values
    .map((value) => normaliseString(value))
    .filter((value) => value !== undefined)
}

/**
 * Accept valid array values only
 *
 * Used as reviver function in `JSON.parse()`
 *
 * @this {unknown}
 * @param {string} key
 * @param {unknown} value
 */
function getArrayValue(key, value) {
  return isValid(value) || (key === '' && Array.isArray(value))
    ? value
    : undefined
}

/**
 * Whether value is valid
 *
 * @param {unknown} value
 */
function isValid(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * @import { SchemaProperty } from './index.mjs'
 */
