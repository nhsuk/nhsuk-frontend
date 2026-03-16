/**
 * Make component HTML attributes unique
 *
 * @param {string} html - Nunjucks macro example HTML
 * @param {string | number} [index] - Unique index to append to attribute values (optional)
 */
function uniqueHTML(html, index) {
  if (index) {
    html = html

      // Append unique ID to attribute value
      .replaceAll(
        / (aria-label|href|id|for|name)="([^"]*)"/g,
        (match, name, value) => ` ${name}="${uniqueValue(name, value, index)}"`
      )

      // Append unique ID to attribute value(s)
      .replaceAll(
        / (?:data-)?(aria-controls|aria-describedby|aria-labelledby)="([^"]*)"/g,
        (match, name, values) =>
          ` ${name}="${uniqueValues(name, values, index)}"`
      );
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

  // Check for known value suffix
  const matches = /-((?:item-)+hint|info|label|error)$/.exec(value);

  if (matches) {
    const prefix = value.slice(0, matches.index);
    const suffix = matches[1];

    // 'example-5-hint'
    return `${prefix}-${index}-${suffix}`
  }

  // 'example-5'
  return `${value}-${index}`
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

export { uniqueHTML };
//# sourceMappingURL=unique-html.mjs.map
