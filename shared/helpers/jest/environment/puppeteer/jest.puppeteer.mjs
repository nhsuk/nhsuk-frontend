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
  }
}

export default BrowserAutomationEnvironment
