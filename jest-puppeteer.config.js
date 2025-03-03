const { HEADLESS } = process.env

/**
 * @type {JestPuppeteerConfig}
 */
module.exports = {
  browserContext: 'incognito',

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
  server: {
    command: 'npx gulp docs:serve',
    host: '0.0.0.0',
    port: 3000,

    // Allow 30 seconds to start server
    launchTimeout: 30000,

    // Skip when already running
    usedPortAction: 'ignore'
  }
}

/**
 * @import { JestPuppeteerConfig } from 'jest-environment-puppeteer'
 */
