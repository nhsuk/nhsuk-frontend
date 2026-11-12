'use strict';

var util = require('node:util');

/**
 * Format JavaScript objects as strings
 *
 * @param {unknown} object - JavaScript object to format
 * @returns {string} Formatted string
 */
function inspect(object) {
  return util.inspect(object, {
    compact: false,
    depth: Infinity,
    maxArrayLength: Infinity,
    maxStringLength: Infinity
  });
}

exports.inspect = inspect;
//# sourceMappingURL=inspect.js.map
