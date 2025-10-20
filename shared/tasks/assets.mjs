import { join, parse } from 'node:path'

import gulp from 'gulp'
import rename from 'gulp-rename'

/**
 * Copy asset
 *
 * @param {string} inputPath - File path to asset
 * @param {FileOptions} options - Asset options
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
 * @import { FileOptions } from '@nhsuk/frontend-lib/files.mjs'
 */
