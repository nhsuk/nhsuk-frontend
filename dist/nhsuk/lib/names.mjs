/**
 * Map NHS.UK frontend and design system directory names to macro name
 */
const renamed = new Map([['breadcrumbs', 'breadcrumb'], ['buttons', 'button'], ['care-cards', 'card'], ['do-dont-list', 'list'], ['do-and-dont-lists', 'list'], ['expander', 'details'], ['hint-text', 'hint'], ['images', 'image'], ['tables', 'table'], ['text-input', 'input'], ['notification-banners', 'notification-banner']]);

/**
 * Convert a kebab-cased string to a PascalCased one
 *
 * @param {string} value - Input kebab-cased string
 * @returns {string} Output PascalCased string
 */
function kebabCaseToPascalCase(value) {
  return value.toLowerCase().split('-')
  // capitalize each 'word'
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

/**
 * Convert a kebab-cased string to a camelCased one
 *
 * @param {string} value - Input kebab-cased string
 * @returns {string} Output camelCased string
 */
function kebabCaseToCamelCase(value) {
  return kebabCaseToPascalCase(value).replace(/^./, str => str.toLowerCase());
}

/**
 * Convert macro file name to Nunjucks macro name
 *
 * File names are kebab-cased (attributes, content), whilst Nunjucks macro
 * names are camel cased with a prefix (nhsukAttributes, nhsukContent)
 *
 * @param {string} macro - Macro file name without extension
 * @param {string | null} [prefix] - Macro name prefix (optional)
 * @returns {string} The name of its corresponding Nunjucks macro
 */
function macroName(macro, prefix = 'nhsuk') {
  return prefix ? kebabCaseToCamelCase(`${prefix}-${macro}`) : kebabCaseToCamelCase(macro);
}

/**
 * Convert component name to Nunjucks macro name
 *
 * Component names are kebab-cased (button, file-upload), whilst Nunjucks macro
 * names are camel cased (button, fileUpload)
 *
 * @param {string} component - A kebab-cased component name with optional prefix
 * @param {string | null} [prefix] - Component name prefix (optional)
 * @returns {string} The name of its corresponding Nunjucks macro
 */
function componentNameToMacroName(component, prefix) {
  const componentName = moduleNameToComponentName(component, prefix);
  return prefix && prefix !== 'nhsuk' ? macroName(componentName, prefix) : macroName(componentName, null);
}

/**
 * Convert component name to its JavaScript class name
 *
 * @param {string} component - A kebab-cased component name with optional prefix
 * @param {string | null} [prefix] - Component name prefix (optional)
 * @returns {string} The name of its corresponding JavaScript class
 */
function componentNameToClassName(component, prefix) {
  const componentName = moduleNameToComponentName(component, prefix);
  return kebabCaseToPascalCase(componentName);
}

/**
 * Convert component name to HTML `data-module` name
 *
 * Component names are kebab-cased (button, file-upload), whilst `data-module`
 * names have an added `nhsuk` prefix (nhsuk-button, nhsuk-file-upload)
 *
 * @param {string} component - A kebab-cased component name with optional prefix
 * @param {string | null} [prefix] - Component name prefix (optional, defaults to `nhsuk`)
 * @returns {string} The name of its corresponding HTML data-module name
 */
function componentNameToModuleName(component, prefix = 'nhsuk') {
  const componentName = moduleNameToComponentName(component, prefix);
  return `${prefix}-${componentName}`;
}

/**
 * Convert HTML `data-module` name to its component name
 *
 * @param {string} moduleName - An HTML data-module name
 * @param {string | null} [prefix] - Component name prefix (optional, defaults to `nhsuk`)
 * @returns {string} The name of its corresponding component
 */
function moduleNameToComponentName(moduleName, prefix = 'nhsuk') {
  let componentName = moduleName.replace(new RegExp(`^${prefix}-`), '');
  if (prefix === 'nhsuk') {
    componentName = renamed.get(componentName) ?? componentName;
  }
  return componentName;
}

export { componentNameToClassName, componentNameToMacroName, componentNameToModuleName, kebabCaseToCamelCase, kebabCaseToPascalCase, macroName, moduleNameToComponentName };
//# sourceMappingURL=names.mjs.map
