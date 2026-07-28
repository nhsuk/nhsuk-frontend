export default {
  setupFilesAfterEnv: [import.meta.resolve('./jest.jsdom.setup.mjs')],
  testEnvironment: 'jest-environment-jsdom'
}
