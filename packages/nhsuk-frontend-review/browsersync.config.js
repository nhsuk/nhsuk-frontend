const { join } = require('node:path')

const { PORT = '3000' } = process.env

/**
 * Browsersync config
 *
 * @type {Options}
 */
module.exports = {
  // Files to watch for auto reload
  files: [
    join(__dirname, 'dist/**/*.html'),
    join(__dirname, 'dist/javascripts/*.min.js'),
    join(__dirname, 'dist/stylesheets/*.min.css'),
    join(__dirname, 'dist/assets/**')
  ],

  ghostMode: false,
  host: '0.0.0.0',

  // Redirect to start path
  middleware: [
    {
      route: '/',
      handle(req, res) {
        res.writeHead(302, { location: '/nhsuk-frontend/' })
        res.end()
      }
    }
  ],

  online: false,
  open: false,
  notify: false,
  port: Number(PORT),

  // Development server
  server: {
    baseDir: join(__dirname, 'dist'),
    directory: true
  },

  // Match local paths to deployed preview
  // https://nhsuk.github.io/nhsuk-frontend
  serveStatic: [
    {
      route: '/nhsuk-frontend',
      dir: join(__dirname, 'dist')
    }
  ],

  // Show start path in console
  startPath: '/nhsuk-frontend/'
}

/**
 * @import { Options } from 'browser-sync'
 */
