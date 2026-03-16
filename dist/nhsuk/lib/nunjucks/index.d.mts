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
 * Return macro
 *
 * @param {string} macroName - The name of the macro
 * @param {string} macroPath - The path to the file containing the macro
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns Nunjucks code to render the macro
 */
export function macro(macroName: string, macroPath: string, options?: MacroRenderOptions): string;
/**
 * Render template HTML
 *
 * @param {string} templatePath - Nunjucks template path
 * @param {TemplateRenderOptions} [options] - Nunjucks template render options
 * @returns HTML rendered by the template
 */
export function renderTemplate(templatePath: string, options?: TemplateRenderOptions): string;
/**
 * Return template
 *
 * @param {string} templatePath - Nunjucks template path
 * @param {TemplateRenderOptions} [options] - Nunjucks template render options
 * @returns Nunjucks code to render the template
 */
export function template(templatePath: string, options?: TemplateRenderOptions): string;
/**
 * Render string
 *
 * @param {string} string - Nunjucks string to render
 * @param {TemplateRenderOptions} [options] - Nunjucks render options
 * @returns HTML rendered from the Nunjucks string
 */
export function renderString(string: string, options?: TemplateRenderOptions): string;
export * from "./environment.mjs";
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
    env?: Environment | undefined;
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
    env?: Environment | undefined;
};
import type { Environment } from 'nunjucks';
//# sourceMappingURL=index.d.mts.map