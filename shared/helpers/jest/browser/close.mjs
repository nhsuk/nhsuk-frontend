import teardown from 'jest-environment-puppeteer/teardown'

/**
 * Close browser
 *
 * @param {import('jest').Config} jestConfig - Jest config
 */
export default (jestConfig) => {
  // Close browser, stop server (also in watch mode)
  return teardown({ ...jestConfig, watch: false })
}
