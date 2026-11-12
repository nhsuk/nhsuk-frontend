/**
 * Component HTML code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} HTML rendered by the component
 */
export function getComponentHTML(this: {
    env: Environment;
}, component: string, options?: MacroRenderOptions): string;
import type { MacroRenderOptions } from '#lib';
import type { Environment } from 'nunjucks';
//# sourceMappingURL=get-component-html.d.mts.map