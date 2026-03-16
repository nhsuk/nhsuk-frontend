'use strict';

var node_path = require('node:path');
var nunjucks = require('nunjucks');
var config = require('../config.js');
var index = require('./filters/index.js');
var index$1 = require('./globals/index.js');

const { NODE_ENV } = process.env;

// Nunjucks default environment
const env = configure();

/**
 * Nunjucks environment factory
 *
 * @param {string | string[]} [viewsPath] - Additional custom views path(s) (optional)
 * @param {ConfigureOptions} [options] - Nunjucks configure options (optional)
 */
function configure(viewsPath = [], options = {}) {
  const basePath =
    NODE_ENV === 'test'
      ? node_path.join(config.nhsukFrontendPath, 'src') // Use source files for tests
      : node_path.join(config.nhsukFrontendPath, 'dist'); // Use build output for review

  // Append default search paths
  const searchPaths = [viewsPath]
    .flat()
    .concat([
      node_path.join(basePath, 'nhsuk/components'),
      node_path.join(basePath, 'nhsuk/macros'),
      node_path.join(basePath, 'nhsuk'),
      basePath
    ]);

  // Nunjucks environment
  const env = nunjucks.configure(searchPaths, {
    lstripBlocks: true, // Remove leading spaces from a block/tag
    trimBlocks: true, // Remove trailing newlines from a block/tag
    ...options
  });

  // Add Nunjucks filters
  for (const [key, filter] of Object.entries(index)) {
    env.addFilter(key, filter);
  }

  // Add Nunjucks globals
  for (const [key, global] of Object.entries(index$1)) {
    env.addGlobal(key, global);
  }

  return env
}

/**
 * @import { ConfigureOptions } from 'nunjucks'
 */

exports.filters = index;
exports.globals = index$1;
exports.configure = configure;
exports.env = env;
//# sourceMappingURL=environment.js.map
