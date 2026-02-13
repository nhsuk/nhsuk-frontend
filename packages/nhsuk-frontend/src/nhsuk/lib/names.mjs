/**
 * Map NHS.UK frontend and design system directory names to macro name
 */
const renamed = new Map([
  ['breadcrumbs', 'breadcrumb'],
  ['buttons', 'button'],
  ['care-cards', 'card'],
  ['do-dont-list', 'list'],
  ['do-and-dont-lists', 'list'],
  ['expander', 'details'],
  ['hint-text', 'hint'],
  ['images', 'image'],
  ['tables', 'table'],
  ['text-input', 'input'],
  ['notification-banners', 'notification-banner']
])

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
 * Convert component name to Nunjucks macro name
 *
 * Component names are kebab-cased (button, file-upload), whilst Nunjucks macro
 * names are camel cased (button, fileUpload)
 *
 * @param {string} component - A kebab-cased component name
 * @returns {string} The name of its corresponding Nunjucks macro
 */
export function componentNameToMacroName(component) {
  return kebabCaseToCamelCase(renamed.get(component) ?? component)
}

/**
 * Convert component name to its JavaScript class name
 *
 * @param {string} component - A kebab-cased component name
 * @returns {string} The name of its corresponding JavaScript class
 */
export function componentNameToClassName(component) {
  return kebabCaseToPascalCase(renamed.get(component) ?? component)
}
