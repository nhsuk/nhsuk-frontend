import { basename, join } from 'node:path'

import { glob } from 'glob'

/**
 * Directory listing for path
 *
 * @param {string} directoryPath - Minimatch pattern to directory
 * @param {GlobOptionsWithFileTypesUnset} [options] - Glob options
 * @returns File paths
 */
export async function getListing(directoryPath, options = {}) {
  const listing = await glob(directoryPath, {
    nodir: true,
    ...options
  })

  return listing.sort()
}

/**
 * Directory listing (directories only)
 *
 * @param {string} directoryPath - Minimatch pattern to directory
 * @param {GlobOptionsWithFileTypesUnset} [options] - Glob options
 * @returns Directory names
 */
export async function getDirectories(directoryPath, options = {}) {
  const listing = await getListing(join(directoryPath, '*/'), {
    nodir: false,
    ...options
  })

  // Use directory names only
  return listing.map((directoryPath) => basename(directoryPath)).sort()
}

/**
 * @import { GlobOptionsWithFileTypesUnset } from 'glob'
 */
