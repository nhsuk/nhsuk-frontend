/**
 * Make component HTML attributes unique
 *
 * @param {string} html - Nunjucks macro example HTML
 * @param {string | number} [index] - Unique index to append to attribute values (optional)
 */
export function uniqueHTML(html, index) {
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

  return html
}

/**
 * Make value unique
 *
 * @param {string} name - Attribute name
 * @param {string} value - Attribute value
 * @param {string | number} index - Unique index to append to attribute value
 */
function uniqueValue(name, value, index) {
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
    /(.+)-((item-)+?hint|info|label|error)$/.exec(value) ?? []

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
function uniqueValues(name, values, index) {
  return values
    .split(' ')
    .map((value) => uniqueValue(name, value, index))
    .join(' ')
}
