const config = require('@nhsuk/frontend-config')

const waitOnScheme = require('./wait-on.config')

const { BASE_URL, HEADLESS, PORT = '3000' } = process.env

/**
 * @type {JestPuppeteerConfig}
 */
module.exports = {
  browserContext: 'incognito',

  /**
   * Workaround for jest-environment-puppeteer 'uncaughtException'
   * see error handling in '@nhsuk/frontend-helpers/jest/environment/jest.puppeteer.mjs'
   */
  exitOnPageError: false,

  /**
   * Puppeteer launch options
   */
  launch: {
    args: [
      /**
       * Workaround for 'No usable sandbox! Update your kernel' error
       * see more https://github.com/Googlechrome/puppeteer/issues/290
       */
      '--no-sandbox',
      '--disable-setuid-sandbox',

      /**
       * Prevent empty Chrome startup window
       * Tests use their own `browser.newPage()` instead
       */
      '--no-startup-window'
    ],

    // Allow headless mode switching using `HEADLESS=false`
    headless: HEADLESS !== 'false',

    // See launch arg '--no-startup-window'
    waitForInitialPage: false
  },

  /**
   * Development server options
   */
  server: BASE_URL
    ? undefined
    : {
        command: 'npm run serve',
        options: { cwd: config.paths.app },
        port: Number(PORT),

        // Skip when already running
        usedPortAction: 'ignore',

        // Shared wait-on options
        waitOnScheme
      }
}

/**
 * @import { JestPuppeteerConfig } from 'jest-environment-puppeteer'
 */
