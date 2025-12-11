export default {
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: import.meta.resolve('../../browser/close.mjs'),
  setupFilesAfterEnv: [import.meta.resolve('./jest.puppeteer.setup.mjs')],
  testEnvironment: import.meta.resolve('./jest.puppeteer.mjs')
}
