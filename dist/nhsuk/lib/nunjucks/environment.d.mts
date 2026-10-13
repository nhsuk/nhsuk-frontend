/**
 * Nunjucks environment factory
 *
 * @param {string | string[]} [viewsPath] - Additional custom views path(s) (optional)
 * @param {ConfigureOptions} [options] - Nunjucks configure options (optional)
 */
export function configure(viewsPath?: string | string[], options?: nunjucks.ConfigureOptions): nunjucks.Environment;
export const env: nunjucks.Environment;
import nunjucks from 'nunjucks';
//# sourceMappingURL=environment.d.mts.map