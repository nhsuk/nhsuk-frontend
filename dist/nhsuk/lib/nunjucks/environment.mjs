import { join } from 'node:path';
import nunjucks from 'nunjucks';
import { nhsukFrontendPath } from '../config.mjs';

const {
  NODE_ENV
} = process.env;

// Nunjucks default environment
const env = configure();

/**
 * Nunjucks environment factory
 *
 * @param {string | string[]} [viewsPath] - Additional custom views path(s) (optional)
 * @param {ConfigureOptions} [options] - Nunjucks configure options (optional)
 */
function configure(viewsPath = [], options = {}) {
  const basePath = NODE_ENV === 'test' ? join(nhsukFrontendPath, 'src') // Use source files for tests
  : join(nhsukFrontendPath, 'dist'); // Use build output for review

  // Append default search paths
  const searchPaths = [viewsPath].flat().concat([join(basePath, 'nhsuk/components'), join(basePath, 'nhsuk/macros'), join(basePath, 'nhsuk'), basePath]);

  // Nunjucks environment
  return nunjucks.configure(searchPaths, {
    lstripBlocks: true,
    // Remove leading spaces from a block/tag
    trimBlocks: true,
    // Remove trailing newlines from a block/tag
    ...options
  });
}

/**
 * @import { ConfigureOptions } from 'nunjucks'
 */

export { configure, env };
//# sourceMappingURL=environment.mjs.map
