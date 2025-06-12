import { join, parse } from 'path'

import gulp from 'gulp'
import rename from 'gulp-rename'

/**
 * Copy asset
 *
 * @param {string} assetPath
 * @param {AssetOptions} entry
 */
export function copy(assetPath, { srcPath, destPath, output = {} }) {
  let stream = gulp.src(join(srcPath, assetPath), {
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
      encoding: false,

      // Only add source maps for styles and scripts
      sourcemaps: (file) =>
        ['.css', '.js'].includes(file.extname) ? '.' : undefined
    })
  )
}

/**
 * Asset options
 *
 * @typedef {object} AssetOptions
 * @property {string} srcPath - Source directory
 * @property {string} destPath - Destination directory
 * @property {{ file?: string }} [output] - Output options
 */
