import { components } from '@nhsuk/frontend-lib'
import filters from 'nunjucks/src/filters.js'

/**
 * Render Nunjucks component with unique attributes
 *
 * @param {string} component - Component directory name
 * @param {MacroExample} example - Nunjucks macro example
 * @param {string | number} [index] - Unique index to append to attribute values (optional)
 */
export function renderExample(component, example, index) {
  let html = components.render(component, example)

  if (index) {
    html = html

      // Append unique ID to attribute value
      .replace(
        / (href|id|for|name)="([^"]*)"/g,
        (match, name, value) => ` ${name}="${uniqueValue(value, index)}"`
      )

      // Append unique ID to attribute value(s)
      .replace(
        / (aria-controls|aria-describedby|aria-labelledby)="([^"]*)"/g,
        (match, name, values) => ` ${name}="${uniqueValues(values, index)}"`
      )
  }

  return filters.safe(html)
}

/**
 * Make value unique
 *
 * @param {string} value - Attribute value
 * @param {string | number} index - Unique index to append to attribute value
 */
export function uniqueValue(value, index) {
  if (!value || value === '#') {
    return value
  }

  const [, prefix, suffix] =
    value.match(/(.+)-((item-)+?hint|info|error)$/) ?? []

  return prefix && suffix
    ? `${prefix}-${index}-${suffix}` // 'example-5-hint'
    : `${value}-${index}` // 'example-5'
}

/**
 * Make space-separated values unique
 *
 * @param {string} values - Attribute values, space-separated
 * @param {string | number} index - Unique index to append to attribute values
 */
export function uniqueValues(values, index) {
  return values
    .split(' ')
    .map((value) => uniqueValue(value, index))
    .join(' ')
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
