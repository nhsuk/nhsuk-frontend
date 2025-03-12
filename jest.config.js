const jestPuppeteerConfig = require('./jest-puppeteer.config.js')

// Detect when browser has been launched headless
const { headless = true } = jestPuppeteerConfig.launch

/**
 * @type {Config}
 */
module.exports = {
  collectCoverageFrom: ['packages/**/*.js'],

  // Reduce CPU usage during project test runs
  maxWorkers: headless
    ? '50%' // Matches Jest default (50%) via `--watch`
    : 1, // Use only 1x browser window using `HEADLESS=false`

  projects: [
    {
      displayName: 'JSDom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/tests/integration/jsdom/**/*.test.js']
    },
    {
      displayName: 'Pupppeteer',
      globalSetup: 'jest-environment-puppeteer/setup',
      globalTeardown: 'jest-environment-puppeteer/teardown',
      testEnvironment: 'jest-environment-puppeteer',
      testMatch: ['<rootDir>/tests/integration/puppeteer/**/*.test.js']
    }
  ],

  // Enable GitHub Actions reporter UI
  reporters: ['default', 'github-actions'],

  // Browser test increased timeout (5s to 15s)
  testTimeout: 15000
}

/**
 * @import { Config } from 'jest'
 */
