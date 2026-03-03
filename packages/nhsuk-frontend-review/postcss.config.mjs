import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import pseudoclasses from 'postcss-pseudo-classes'

const { NODE_ENV } = process.env

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

    // Add review app auto-generated 'companion' classes for each pseudo-class
    // For example ':hover' and ':focus' classes to simulate form label states
    pseudoclasses({
      allCombinations: true,
      restrictTo: [':link', ':visited', ':hover', ':active', ':focus']
    }),

    // Minify CSS for production only
    NODE_ENV === 'production'
      ? cssnano({ preset: ['default', { env: 'stylesheets' }] })
      : false
  ]
}

/**
 * @import { Config } from 'postcss-load-config'
 */
