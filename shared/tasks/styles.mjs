import { readFile } from 'node:fs/promises'
import { basename, dirname, join, parse, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

import { paths } from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'
import postcss from 'postcss'
// eslint-disable-next-line import/default
import postcssrc from 'postcss-load-config'
import scss from 'postcss-scss'
import { compileAsync } from 'sass-embedded'

/**
 * Compile Sass task
 *
 * @param {string} assetPath
 * @param {CompileStylesOptions} entry
 */
export function compile(assetPath, { srcPath, destPath, output = {} }) {
  const { name } = parse(assetPath)

  /**
   * Configure PostCSS
   *
   * @satisfies {ProcessOptions}
   */
  const options = {
    from: join(srcPath, assetPath),
    to: join(destPath, output.file ?? `${name}.css`),

    /**
     * Always generate source maps for either:
     *
     * 1. PostCSS on Sass compiler result
     * 2. PostCSS on Sass sources (Autoprefixer only)
     */
    map: {
      annotation: true,
      inline: false,
      prev: false
    },

    // Sass syntax support
    syntax: output.file?.endsWith('.scss') ? scss : postcss
  }

  return task.name('styles:compile', async () => {
    let css
    let map

    // Compile Sass to CSS
    if (options.to.endsWith('.css')) {
      ;({ css, sourceMap: map } = await compileAsync(options.from, {
        fatalDeprecations: [
          'color-functions',
          'global-builtin',
          'import',
          'mixed-decls'
        ],
        loadPaths: [join(paths.root, 'node_modules')],
        sourceMap: true,
        sourceMapIncludeSources: true
      }))

      // Make source file:// paths relative
      if (map?.sources) {
        map.sources = map.sources.map((path) =>
          path.startsWith('file:')
            ? relative(options.from, fileURLToPath(path))
            : path
        )
      }

      // Pass source maps to PostCSS
      options.map.prev = map
    }

    // Use Sass source when not compiling
    if (!css) {
      css = await readFile(options.from)
    }

    // Locate PostCSS config
    const config = await postcssrc(options)

    // Apply PostCSS transforms (e.g. vendor prefixes)
    const result = await postcss(config.plugins).process(css, {
      ...options,
      ...config.options
    })

    // Write to files
    await files.write(basename(options.to), {
      destPath: dirname(options.to),
      output: { contents: result.css }
    })

    if (result.map) {
      await files.write(basename(`${options.to}.map`), {
        destPath: dirname(options.to),
        output: { contents: result.map.toString() }
      })
    }
  })
}

/**
 * Compile Sass options
 *
 * @typedef {object} CompileStylesOptions
 * @property {string} srcPath - Source directory
 * @property {string} destPath - Destination directory
 * @property {{ file?: string }} [output] - Output options
 */

/**
 * @import { ProcessOptions } from 'postcss'
 */
