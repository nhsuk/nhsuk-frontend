/**
 * Convert a kebab-cased string to a PascalCased one
 *
 * @param {string} value - Input kebab-cased string
 * @returns {string} Output PascalCased string
 */
export function kebabCaseToPascalCase(value) {
  return (
    value
      .toLowerCase()
      .split('-')
      // capitalize each 'word'
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
  )
}

/**
 * Convert a kebab-cased string to a camelCased one
 *
 * @param {string} value - Input kebab-cased string
 * @returns {string} Output camelCased string
 */
export function kebabCaseToCamelCase(value) {
  return kebabCaseToPascalCase(value).replace(/^./, (str) => str.toLowerCase())
}

/**
 * Convert component name to its JavaScript class name
 *
 * @param {string} componentName - A kebab-cased component name
 * @returns {string} The name of its corresponding JavaScript class
 */
export function componentNameToClassName(componentName) {
  return kebabCaseToPascalCase(componentName)
}
