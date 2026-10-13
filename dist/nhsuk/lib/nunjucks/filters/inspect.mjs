import util from 'node:util';

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

export { inspect };
//# sourceMappingURL=inspect.mjs.map
