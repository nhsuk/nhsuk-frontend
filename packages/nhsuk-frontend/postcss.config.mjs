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

      // Minify CSS only
      to?.endsWith('.min.css') &&
        cssnano({
          env: 'stylesheets'
        })
    ],

    // Sass syntax support
    syntax: to?.endsWith('.scss') ? scss : postcss
  }
}

/**
 * @import { ConfigFn } from 'postcss-load-config'
 */
