const { join } = require('node:path')

/**
 * @type {Configuration}
 */
module.exports = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer')
}

/**
 * @import { Configuration } from 'puppeteer'
 */
