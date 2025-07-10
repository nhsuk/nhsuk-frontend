import { join, parse } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { task } from '@nhsuk/frontend-tasks'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import PluginError from 'plugin-error'
import { rollup } from 'rollup'

/**
 * Compile JavaScript task
 *
 * @param {string} assetPath
 * @param {CompileScriptsOptions} entry
 */
export function compile(
  assetPath,
  {
    srcPath,
    destPath,
    input = {}, // Rollup input options
    output = {} // Rollup output options
  }
) {
  const { name } = parse(assetPath)

  return task.name('scripts:compile', async () => {
    const bundle = await rollup({
      ...input,

      /**
       * Input path
       */
      input: join(srcPath, assetPath),

      /**
       * Input plugins
       */
      plugins: [
        nodeResolve(),
        commonjs(),
        replace({
          include: '**/common/nhsuk-frontend-version.mjs',
          preventAssignment: true,

          // Add NHS.UK frontend release version
          development: config.version
        }),
        babel({
          babelHelpers: 'bundled'
        })
      ],

      // Handle warnings as errors
      onwarn(warning) {
        throw new PluginError('scripts:compile', warning.message, {
          name: warning.code ?? 'Error',
          showProperties: false
        })
      }
    })

    // Add minifier plugin (optional)
    if (output.compact) {
      output.plugins ??= []
      output.plugins.push(
        terser({
          format: { comments: false },

          mangle: {
            keep_classnames: true,
            keep_fnames: true,
            // Ensure all top-level exports skip mangling, for example
            // non-function string constants like `export { version }`
            reserved: await getNHSUKFrontendExportsNames()
          },

          // Include sources content from source maps to inspect
          // NHS.UK frontend and other dependencies' source code
          sourceMap: {
            includeSources: true
          },

          // Compatibility workarounds
          safari10: true
        })
      )
    }

    // Write to output format
    await bundle.write({
      extend: true,
      format: 'esm',
      ...output,

      // Write to directory for modules
      dir: output.preserveModules ? destPath : undefined,

      // Write to file when bundling
      file: !output.preserveModules
        ? join(destPath, output.file ?? `${name}.bundle.js`)
        : undefined,

      // Enable source maps
      sourcemap: true
    })
  })
}

// NHS.UK frontend uses browser APIs at `import` time
// because of static properties. These APIs are not available
// in Node.js.
// We mock them the time of the `import` so we can read
// the name of NHS.UK frontend's exports without errors
async function getNHSUKFrontendExportsNames() {
  try {
    global.HTMLElement = undefined
    global.HTMLAnchorElement = undefined
    return Object.keys(await import('nhsuk-frontend/src/nhsuk/index.mjs'))
  } finally {
    delete global.HTMLElement
    delete global.HTMLAnchorElement
  }
}

/**
 * Compile scripts options
 *
 * @typedef {object} CompileScriptsOptions
 * @property {string} srcPath - Source directory
 * @property {string} destPath - Destination directory
 * @property {InputOptions} [input] - Rollup input options
 * @property {OutputOptions} [output] - Rollup output options
 */

/**
 * @import { InputOptions, OutputOptions } from 'rollup'
 */
