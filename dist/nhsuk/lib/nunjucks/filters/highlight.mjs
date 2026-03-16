import { highlighter } from '../../highlighter/index.mjs';
import { unindent } from './unindent.mjs';

/**
 * Format code with syntax highlighting
 *
 * @this {{ env: Environment }}
 * @param {string} code - Code in plain text
 * @param {string | string[]} [language] - Code programming language(s)
 * @returns {runtime.SafeString} Code with syntax highlighting
 */
function highlight(code, language = []) {
  const safe = this.env.getFilter('safe');

  const languages = language ? [language].flat() : undefined;
  const { value } = highlighter.highlightAuto(unindent(code), languages);

  return safe(value)
}

/**
 * @import { Environment, runtime } from 'nunjucks'
 */

export { highlight };
//# sourceMappingURL=highlight.mjs.map
