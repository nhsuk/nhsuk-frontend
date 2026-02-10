import filters from 'nunjucks/src/filters.js'

/**
 * Render Nunjucks component with unique attributes
 *
 * @param {MacroExampleFixture} fixture - Nunjucks macro example fixture
 * @param {string | number} [index] - Unique index to append to attribute values (optional)
 */
export function renderExample(fixture, index) {
  let { html } = fixture

  if (index) {
    html = html

      // Append unique ID to attribute value
      .replace(
        / (aria-label|href|id|for|name)="([^"]*)"/g,
        (match, name, value) => ` ${name}="${uniqueValue(name, value, index)}"`
      )

      // Append unique ID to attribute value(s)
      .replace(
        / (?:data-)?(aria-controls|aria-describedby|aria-labelledby)="([^"]*)"/g,
        (match, name, values) =>
          ` ${name}="${uniqueValues(name, values, index)}"`
      )
  }

  return filters.safe(html)
}

/**
 * Make value unique
 *
 * @param {string} name - Attribute name
 * @param {string} value - Attribute value
 * @param {string | number} index - Unique index to append to attribute value
 */
export function uniqueValue(name, value, index) {
  if (
    !value ||
    (name === 'id' && value === 'maincontent') ||
    (name === 'href' && ['#', '#maincontent'].includes(value))
  ) {
    return value
  }

  if (name === 'aria-label') {
    return `${value} ${index}`
  }

  const [, prefix, suffix] =
    /(.+)-((item-)+?hint|info|error)$/.exec(value) ?? []

  return prefix && suffix
    ? `${prefix}-${index}-${suffix}` // 'example-5-hint'
    : `${value}-${index}` // 'example-5'
}

/**
 * Make space-separated values unique
 *
 * @param {string} name - Attribute name
 * @param {string} values - Attribute values, space-separated
 * @param {string | number} index - Unique index to append to attribute values
 */
export function uniqueValues(name, values, index) {
  return values
    .split(' ')
    .map((value) => uniqueValue(name, value, index))
    .join(' ')
}

/**
 * @import { MacroExampleFixture } from '@nhsuk/frontend-lib/components.mjs'
 */
