'use strict';

var slug = require('slug');

/**
 * Format strings into URL friendly "slug"
 *
 * @param {string} string - String to format
 * @returns {string} URL friendly "slug"
 */
function slugify(string) {
  return slug(string, { lower: true })
}

exports.slugify = slugify;
//# sourceMappingURL=slugify.js.map
