/**
 * Convert a kebab-cased string to a PascalCased one
 *
 * @param {string} value - Input kebab-cased string
 * @returns {string} Output PascalCased string
 */
export function kebabCaseToPascalCase(value: string): string;
/**
 * Convert a kebab-cased string to a camelCased one
 *
 * @param {string} value - Input kebab-cased string
 * @returns {string} Output camelCased string
 */
export function kebabCaseToCamelCase(value: string): string;
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
export function componentNameToMacroName(component: string, prefix?: string): string;
/**
 * Convert component name to its JavaScript class name
 *
 * @param {string} component - A kebab-cased component name with optional prefix
 * @param {string} [prefix] - Component name prefix (optional)
 * @returns {string} The name of its corresponding JavaScript class
 */
export function componentNameToClassName(component: string, prefix?: string): string;
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
export function componentNameToModuleName(component: string, prefix?: string): string;
/**
 * Convert HTML `data-module` name to its component name
 *
 * @param {string} moduleName - An HTML data-module name
 * @param {string} [prefix] - Component name prefix (optional, defaults to `nhsuk`)
 * @returns {string} The name of its corresponding component
 */
export function moduleNameToComponentName(moduleName: string, prefix?: string): string;
//# sourceMappingURL=names.d.mts.map