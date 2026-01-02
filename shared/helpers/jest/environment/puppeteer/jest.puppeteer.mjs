import { TestEnvironment } from 'jest-environment-puppeteer'

/**
 * Automation browser environment
 * Adds Puppeteer page/browser globals, shared test globals
 */
class BrowserAutomationEnvironment extends TestEnvironment {
  async setup() {
    await super.setup()

    // Reduce navigation timeouts from 30s to 5s
    this.global.page.setDefaultNavigationTimeout(5000)

    // Reduce 'wait for' timeouts from 30s to 5s
    this.global.page.setDefaultTimeout(5000)

    // Listen for browser exceptions
    this.global.page.on('pageerror', (error) => {
      this.context.console.error(error)
      if (!(error instanceof Error)) {
        return
      }

      // Ensure error appears in in reporter summary
      // as Jest suppresses errors with stack traces
      delete error.stack

      // Ensure test fails
      process.emit('uncaughtException', error)
    })
  }
}

export default BrowserAutomationEnvironment
