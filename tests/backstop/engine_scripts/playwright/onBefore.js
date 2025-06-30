const { Console } = require('node:console')

const { default: stripAnsi } = require('strip-ansi')

module.exports = function () {
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
}

/**
 * @param {object} options
 * @param {string[]} options.silenced
 */
function createLogger({ silenced }) {
  const logger = new Console({
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
