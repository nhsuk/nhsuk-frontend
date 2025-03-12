const { PORT = 3000 } = process.env

/**
 * @type {WaitOnOptions}
 */
module.exports = {
  resources: [`tcp:${PORT}`],

  // Allow 30 seconds to start server
  timeout: 30000
}

/**
 * @import { WaitOnOptions } from 'wait-on'
 */
