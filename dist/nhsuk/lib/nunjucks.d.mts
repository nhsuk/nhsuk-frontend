/**
 * Nunjucks environment factory
 *
 * @param {string | string[]} [viewsPath] - Additional custom views path(s) (optional)
 * @param {ConfigureOptions} [options] - Nunjucks configure options (optional)
 */
export function configure(viewsPath?: string | string[], options?: nunjucks.ConfigureOptions): nunjucks.Environment;
/**
 * Render macro HTML
 *
 * @param {string} macroName - The name of the macro
 * @param {string} macroPath - The path to the file containing the macro
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns HTML rendered by the macro
 */
export function renderMacro(macroName: string, macroPath: string, options?: MacroRenderOptions): string;
/**
 * Render string
 *
 * @param {string} string - Nunjucks string to render
 * @param {TemplateRenderOptions} [options] - Nunjucks render options
 * @returns HTML rendered from the Nunjucks string
 */
export function renderString(string: string, options?: TemplateRenderOptions): string;
/**
 * Render template HTML
 *
 * @param {string} templatePath - Nunjucks template path
 * @param {TemplateRenderOptions} [options] - Nunjucks template render options
 * @returns HTML rendered by template.njk
 */
export function renderTemplate(templatePath: string, options?: TemplateRenderOptions): string;
export const nhsukFrontendPath: string;
export const env: nunjucks.Environment;
/**
 * Nunjucks macro render options
 */
export type MacroRenderOptions = {
    /**
     * - Nunjucks mixed context (optional)
     */
    context?: string | {
        [param: string]: unknown;
    } | undefined;
    /**
     * - Nunjucks macro `caller()` content (optional)
     */
    callBlock?: string | undefined;
    /**
     * - Component name prefix (optional)
     */
    prefix?: string | undefined;
    /**
     * - Nunjucks environment (optional)
     */
    env?: nunjucks.Environment | undefined;
};
/**
 * Nunjucks template render options
 */
export type TemplateRenderOptions = {
    /**
     * - Nunjucks context object (optional)
     */
    context?: {
        [param: string]: unknown;
    } | undefined;
    /**
     * - Nunjucks blocks content in template (optional)
     */
    blocks?: {
        [block: string]: string;
    } | undefined;
    /**
     * - Nunjucks environment (optional)
     */
    env?: nunjucks.Environment | undefined;
};
import nunjucks from 'nunjucks';
//# sourceMappingURL=nunjucks.d.mts.map