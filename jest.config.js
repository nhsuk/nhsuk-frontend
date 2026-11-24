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
    }
  ],

  // Enable GitHub Actions reporter UI
  reporters: ['default', 'github-actions'],

  // Increase test timeout (5s to 20s)
  testTimeout: 20000
}

/**
 * @import { Config } from 'jest'
 */
