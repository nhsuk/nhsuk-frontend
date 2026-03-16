import { join } from 'node:path';
import nunjucks from 'nunjucks';
import { nhsukFrontendPath } from '../config.mjs';
import * as index from './filters/index.mjs';
import * as index$1 from './globals/index.mjs';

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
      ? join(nhsukFrontendPath, 'src') // Use source files for tests
      : join(nhsukFrontendPath, 'dist'); // Use build output for review

  // Append default search paths
  const searchPaths = [viewsPath]
    .flat()
    .concat([
      join(basePath, 'nhsuk/components'),
      join(basePath, 'nhsuk/macros'),
      join(basePath, 'nhsuk'),
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

export { configure, env, index as filters, index$1 as globals };
//# sourceMappingURL=environment.mjs.map
