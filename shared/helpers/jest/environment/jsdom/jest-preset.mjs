export default {
  setupFilesAfterEnv: [import.meta.resolve('./jest.jsdom.setup.mjs')],
  testEnvironment: import.meta.resolve('./jest.jsdom.mjs')
}
