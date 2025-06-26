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

  return (message = '') => {
    const text = stripAnsi(message)

    // Ignored silenced
    if (silenced.every((term) => !text.includes(term))) {
      logger.log(message)
    }
  }
}
