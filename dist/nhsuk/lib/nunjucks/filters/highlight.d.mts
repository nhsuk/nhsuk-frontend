/**
 * Format code with syntax highlighting
 *
 * @this {{ env: Environment }}
 * @param {string} code - Code in plain text
 * @param {string | string[]} [language] - Code programming language(s)
 * @returns {runtime.SafeString} Code with syntax highlighting
 */
export function highlight(this: {
    env: Environment;
}, code: string, language?: string | string[]): runtime.SafeString;
import type { Environment } from 'nunjucks';
import type { runtime } from 'nunjucks';
//# sourceMappingURL=highlight.d.mts.map