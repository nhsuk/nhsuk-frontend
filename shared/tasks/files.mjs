import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, parse } from 'node:path'

import gulp from 'gulp'
import rename from 'gulp-rename'

/**
 * Copy asset
 *
 * @param {string} inputPath - File path to asset
 * @param {AssetOptions} options - Asset options
 */
export function copy(inputPath, { srcPath, destPath, output = {} }) {
  let stream = gulp.src(join(srcPath, inputPath), {
    encoding: false,
    sourcemaps: true
  })

  // Rename file (optional)
  if (output.file) {
    const { name, ext, dir } = parse(output.file)

    stream = stream.pipe(
      rename({
        dirname: dir,
        basename: name,
        extname: ext
      })
    )
  }

  return stream.pipe(
    gulp.dest(destPath, {
      // Only add source maps for styles and scripts
      sourcemaps: (file) =>
        ['.css', '.js'].includes(file.extname) ? '.' : undefined
    })
  )
}

/**
 * Write file task
 *
 * @param {string} inputPath - File path to asset
 * @param {Pick<AssetOptions, "destPath" | "output">} options - Asset options
 */
export async function write(inputPath, { destPath, output = {} }) {
  const filePath = join(destPath, inputPath)

  if (!output.contents) {
    throw new Error("Option 'contents' required")
  }

  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, `${output.contents}\n`)
}

/**
 * Asset options
 *
 * @typedef {object} AssetOptions
 * @property {string} srcPath - Source directory
 * @property {string} destPath - Destination directory
 * @property {AssetOutputOptions} [output] - Output options
 */

/**
 * Asset output options
 *
 * @typedef {object} AssetOutputOptions
 * @property {string} [file] - Output file path
 * @property {string} [contents] - Output file contents
 */
