export default {
  setupFilesAfterEnv: [import.meta.resolve('./jest.jsdom.setup.mjs')],
  testEnvironment: '@happy-dom/jest-environment'
}
