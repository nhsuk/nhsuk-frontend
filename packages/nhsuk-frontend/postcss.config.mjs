import * as config from '@nhsuk/frontend-config'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'postcss'
import scss from 'postcss-scss'

/**
 * PostCSS config
 *
 * @type {ConfigFn}
 */
export default (ctx = {}) => {
  const { to } = ctx

  return {
    plugins: [
      // Add vendor prefixes
      autoprefixer({
        env: 'stylesheets'
      }),

      // Add NHS.UK frontend release version
      {
        postcssPlugin: 'nhsuk-frontend-version',
        Declaration: {
          // Find CSS declaration for version, update value
          // https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md
          // https://postcss.org/api/#declaration
          '--nhsuk-frontend-version': (decl) => {
            decl.value = `"${config.version}"`
          }
        }
      },

      // Minify CSS only
      to?.endsWith('.min.css')
        ? cssnano({ preset: ['default', { env: 'stylesheets' }] })
        : false
    ],

    // Sass syntax support
    syntax: to?.endsWith('.scss') ? scss : postcss
  }
}

/**
 * @import { ConfigFn } from 'postcss-load-config'
 */
