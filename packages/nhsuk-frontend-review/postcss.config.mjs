import * as config from '@nhsuk/frontend-config'
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

    // Minify CSS for production only
    config.environment === 'production'
      ? cssnano({ preset: ['default', { env: 'stylesheets' }] })
      : false
  ]
}

/**
 * @import { Config } from 'postcss-load-config'
 */
