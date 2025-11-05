const { default: stripAnsi } = require('strip-ansi')

/**
 * @param {Page} page
 */
module.exports = function (page) {
  console.log = createLogger({
    silenced: [
      // Ignore browser noise
      'BackstopTools',
      'Close Browser',
      'Disposing Browser',

      // Ignore success messages
      'COMMAND | Executing',
      'compare | OK',

      // Ignore report messages
      'openReport | Attempting to ping',
      'openReport | Remote not detected',
      'report | Copied',
      'report | Resources',
      'report | Writing'
    ]
  })

  page.on('response', (response) => {
    const status = response.status()

    // Avoid Playwright locator timeouts by throwing immediately
    // when requests fail (e.g. URL typos or port already in use)
    if (status >= 400) {
      throw new Error(`HTTP ${status} for '${response.url()}'`)
    }
  })
}

/**
 * @param {object} options
 * @param {string[]} options.silenced
 */
function createLogger({ silenced }) {
  const logger = new console.Console({
    stdout: process.stdout,
    stderr: process.stderr
  })

  /**
   * @param {string[]} messages
   * @param {string[]} silenced
   */
  const hasNoise = (messages, silenced) =>
    silenced.some((noise) =>
      messages.some((message) => message.includes(noise))
    )

  return (...args) => {
    const messages = args.map((message) =>
      typeof message === 'string' ? stripAnsi(message) : ''
    )

    // Ignored silenced
    if (!hasNoise(messages, silenced)) {
      logger.log(...args)
    }
  }
}

/**
 * @import { Page } from 'playwright-core'
 */
