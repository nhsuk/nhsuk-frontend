export default {
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: import.meta.resolve('../../browser/close.mjs'),
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: import.meta.resolve('./jest.puppeteer.mjs')
}
