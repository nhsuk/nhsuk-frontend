/**
 * Component Nunjucks macro code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} Nunjucks code for the component
 */
export function getComponentMacro(this: {
    env: Environment;
}, component: string, options?: MacroRenderOptions): string;
import type { MacroRenderOptions } from '#lib';
import type { Environment } from 'nunjucks';
//# sourceMappingURL=get-component-macro.d.mts.map