const jestPuppeteerConfig = require('./jest-puppeteer.config.js')

// Detect when browser has been launched headless
const { headless = true } = jestPuppeteerConfig.launch

/**
 * Jest project config defaults
 *
 * @type {Config}
 */
const config = {
  cacheDirectory: '<rootDir>/.cache/jest',
  clearMocks: true,
  coveragePathIgnorePatterns: ['fixtures.mjs', 'macro-options.mjs'],

  // Enable Babel transforms until Jest supports ESM and `import()`
  // See: https://jestjs.io/docs/ecmascript-modules
  transform: {
    '^.+\\.(js|mjs)$': ['babel-jest', { rootMode: 'upward' }]
  },

  // Enable Babel transforms for ESM-only node_modules
  // See: https://jestjs.io/docs/ecmascript-modules
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${['slug'].join('|')}/)`]
}

/**
 * Jest config
 *
 * @type {Config}
 */
module.exports = {
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,mjs}',
    '!<rootDir>/packages/*/src/**/*.test.{js,mjs}'
  ],

  // Reduce CPU usage during project test runs
  maxWorkers: headless
    ? '50%' // Matches Jest default (50%) via `--watch`
    : 1, // Use only 1x browser window using `HEADLESS=false`

  projects: [
    {
      ...config,
      displayName: 'JavaScript unit tests',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/**/*.unit.test.{js,mjs}']
    },
    {
      ...config,
      displayName: 'JavaScript behaviour tests',
      preset: '@nhsuk/frontend-helpers/jest/environment/jsdom',
      testMatch: ['<rootDir>/**/*.jsdom.test.{js,mjs}']
    },
    {
      ...config,
      displayName: 'JavaScript component tests',
      preset: '@nhsuk/frontend-helpers/jest/environment/puppeteer',
      testMatch: [
        '<rootDir>/**/*.puppeteer.test.{js,mjs}',

        // Exclude accessibility tests
        '!**/accessibility.puppeteer.test.mjs'
      ]
    },
    {
      ...config,
      displayName: 'Accessibility tests',
      preset: '@nhsuk/frontend-helpers/jest/environment/puppeteer',
      testMatch: ['<rootDir>/**/accessibility.puppeteer.test.mjs']
    }
  ],

  // Enable GitHub Actions reporter UI
  reporters: [
    'default',
    'jest-puppeteer-istanbul/lib/reporter',
    'github-actions'
  ],

  // Browser test increased timeout (5s to 15s)
  testTimeout: 15000
}

/**
 * @import { Config } from 'jest'
 */
