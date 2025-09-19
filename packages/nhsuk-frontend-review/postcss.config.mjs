import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

/**
 * PostCSS config
 *
 * @type {Config}
 */
export default {
  plugins: [
    // Add vendor prefixes
    autoprefixer({
      env: 'stylesheets'
    }),

    cssnano({
      preset: ['default', { env: 'stylesheets' }]
    })
  ]
}

/**
 * @import { Config } from 'postcss-load-config'
 */
