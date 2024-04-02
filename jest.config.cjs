module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/*.js'],
  globals: {
    window: true
  },
  verbose: true,
  testTimeout: 15000,
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
  ]
}
