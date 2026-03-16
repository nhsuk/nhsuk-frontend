'use strict';

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
]);

/**
 * Convert a kebab-cased string to a PascalCased one
 *
 * @param {string} value - Input kebab-cased string
 * @returns {string} Output PascalCased string
 */
function kebabCaseToPascalCase(value) {
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
function kebabCaseToCamelCase(value) {
  return kebabCaseToPascalCase(value).replace(/^./, (str) => str.toLowerCase())
}

/**
 * Convert component name to Nunjucks macro name
 *
 * Component names are kebab-cased (button, file-upload), whilst Nunjucks macro
 * names are camel cased (button, fileUpload)
 *
 * @param {string} component - A kebab-cased component name with optional prefix
 * @param {string} [prefix] - Component name prefix (optional)
 * @returns {string} The name of its corresponding Nunjucks macro
 */
function componentNameToMacroName(component, prefix) {
  const componentName = moduleNameToComponentName(component, prefix);

  return prefix && prefix !== 'nhsuk'
    ? kebabCaseToCamelCase(`${prefix}-${componentName}`)
    : kebabCaseToCamelCase(componentName)
}

/**
 * Convert component name to its JavaScript class name
 *
 * @param {string} component - A kebab-cased component name with optional prefix
 * @param {string} [prefix] - Component name prefix (optional)
 * @returns {string} The name of its corresponding JavaScript class
 */
function componentNameToClassName(component, prefix) {
  const componentName = moduleNameToComponentName(component, prefix);
  return kebabCaseToPascalCase(componentName)
}

/**
 * Convert component name to HTML `data-module` name
 *
 * Component names are kebab-cased (button, file-upload), whilst `data-module`
 * names have an added `nhsuk` prefix (nhsuk-button, nhsuk-file-upload)
 *
 * @param {string} component - A kebab-cased component name with optional prefix
 * @param {string} [prefix] - Component name prefix (optional, defaults to `nhsuk`)
 * @returns {string} The name of its corresponding HTML data-module name
 */
function componentNameToModuleName(component, prefix = 'nhsuk') {
  const componentName = moduleNameToComponentName(component, prefix);
  return `${prefix}-${componentName}`
}

/**
 * Convert HTML `data-module` name to its component name
 *
 * @param {string} moduleName - An HTML data-module name
 * @param {string} [prefix] - Component name prefix (optional, defaults to `nhsuk`)
 * @returns {string} The name of its corresponding component
 */
function moduleNameToComponentName(moduleName, prefix = 'nhsuk') {
  let componentName = moduleName.replace(new RegExp(`^${prefix}-`), '');

  if (prefix === 'nhsuk') {
    componentName = renamed.get(componentName) ?? componentName;
  }

  return componentName
}

exports.componentNameToClassName = componentNameToClassName;
exports.componentNameToMacroName = componentNameToMacroName;
exports.componentNameToModuleName = componentNameToModuleName;
exports.kebabCaseToCamelCase = kebabCaseToCamelCase;
exports.kebabCaseToPascalCase = kebabCaseToPascalCase;
exports.moduleNameToComponentName = moduleNameToComponentName;
//# sourceMappingURL=names.js.map
