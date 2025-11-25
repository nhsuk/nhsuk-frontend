import { mkdir, writeFile } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'

import { globSync } from 'glob'

/**
 * Directory listing for path
 *
 * @param {string} directoryPath - Minimatch pattern to directory
 * @param {GlobOptionsWithFileTypesUnset} [options] - Glob options
 * @returns File paths
 */
export function getListing(directoryPath, options = {}) {
  const listing = globSync(directoryPath, {
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
export function getDirectories(directoryPath, options = {}) {
  const listing = getListing(join(directoryPath, '*/'), {
    nodir: false,
    ...options
  })

  // Use directory names only
  return listing.map((directoryPath) => basename(directoryPath)).sort()
}

/**
 * Write file task
 *
 * @param {string} inputPath - File path to asset
 * @param {Pick<FileOptions, 'destPath' | 'output'>} options - File options
 */
export async function write(inputPath, { destPath, output = {} }) {
  const filePath = join(destPath, inputPath)

  if (!output.contents) {
    throw new Error("Option 'contents' required")
  }

  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, `${output.contents.trimEnd()}\n`)
}

/**
 * @import { GlobOptionsWithFileTypesUnset } from 'glob'
 */

/**
 * File options
 *
 * @typedef {object} FileOptions
 * @property {string} srcPath - Source directory
 * @property {string} destPath - Destination directory
 * @property {FileOutputOptions} [output] - Output options
 */

/**
 * File output options
 *
 * @typedef {object} FileOutputOptions
 * @property {string} [file] - Output file path
 * @property {string} [contents] - Output file contents
 */
