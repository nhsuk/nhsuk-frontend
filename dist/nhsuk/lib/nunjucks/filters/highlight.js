'use strict';

var index = require('../../highlighter/index.js');
var unindent = require('./unindent.js');

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
  const {
    value
  } = index.highlighter.highlightAuto(unindent.unindent(code), languages);
  return safe(value);
}

/**
 * @import { Environment, runtime } from 'nunjucks'
 */

exports.highlight = highlight;
//# sourceMappingURL=highlight.js.map
