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
  coveragePathIgnorePatterns: ['.test.mjs'],

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
  collectCoverageFrom: ['packages/*/src/**/*.{js,mjs}'],
  coverageProvider: 'v8',

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
      setupFilesAfterEnv: [
        '@nhsuk/frontend-helpers/jest/environment/jest.jsdom.setup.mjs'
      ],
      testEnvironment:
        '@nhsuk/frontend-helpers/jest/environment/jest.jsdom.mjs',
      testMatch: ['<rootDir>/**/*.jsdom.test.{js,mjs}']
    },
    {
      ...config,
      displayName: 'JavaScript component tests',
      setupFilesAfterEnv: [
        '@nhsuk/frontend-helpers/jest/environment/jest.puppeteer.setup.mjs'
      ],
      testEnvironment:
        '@nhsuk/frontend-helpers/jest/environment/jest.puppeteer.mjs',
      testMatch: [
        '<rootDir>/**/*.puppeteer.test.{js,mjs}',

        // Exclude accessibility tests
        '!**/accessibility.puppeteer.test.mjs'
      ],

      // Web server and browser required
      globalSetup: 'jest-environment-puppeteer/setup',
      globalTeardown: '@nhsuk/frontend-helpers/jest/browser/close.mjs'
    },
    {
      ...config,
      displayName: 'Accessibility tests',
      setupFilesAfterEnv: [
        '@nhsuk/frontend-helpers/jest/environment/jest.puppeteer.setup.mjs'
      ],
      testEnvironment:
        '@nhsuk/frontend-helpers/jest/environment/jest.puppeteer.mjs',
      testMatch: ['<rootDir>/**/accessibility.puppeteer.test.mjs'],

      // Web server and browser required
      globalSetup: 'jest-environment-puppeteer/setup',
      globalTeardown: '@nhsuk/frontend-helpers/jest/browser/close.mjs'
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
