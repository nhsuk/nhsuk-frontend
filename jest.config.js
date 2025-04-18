const jestPuppeteerConfig = require('./jest-puppeteer.config.js')

// Detect when browser has been launched headless
const { headless = true } = jestPuppeteerConfig.launch

/**
 * Jest project config defaults
 *
 * @type {ProjectConfig}
 */
const config = {
  cacheDirectory: '<rootDir>/.cache/jest',

  // Enable Babel transforms until Jest supports ESM and `import()`
  // See: https://jestjs.io/docs/ecmascript-modules
  transform: {
    '^.+\\.(js|mjs)$': ['babel-jest', { rootMode: 'upward' }]
  }
}

/**
 * Jest config
 *
 * @type {Config}
 */
module.exports = {
  collectCoverageFrom: ['packages/**/*.{js,mjs}'],

  // Reduce CPU usage during project test runs
  maxWorkers: headless
    ? '50%' // Matches Jest default (50%) via `--watch`
    : 1, // Use only 1x browser window using `HEADLESS=false`

  projects: [
    {
      ...config,
      displayName: 'JSDom',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/tests/integration/jsdom/**/*.test.{js,mjs}']
    },
    {
      ...config,
      displayName: 'Pupppeteer',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'jest-environment-puppeteer',
      testMatch: ['<rootDir>/tests/integration/puppeteer/**/*.test.{js,mjs}'],

      // Web server and browser required
      globalSetup: 'jest-environment-puppeteer/setup',
      globalTeardown:
        '<rootDir>/tests/integration/puppeteer/environment/teardown.mjs'
    }
  ],

  // Enable GitHub Actions reporter UI
  reporters: ['default', 'github-actions'],

  // Browser test increased timeout (5s to 15s)
  testTimeout: 15000
}

/**
 * @import { Config, ProjectConfig } from 'jest'
 */
