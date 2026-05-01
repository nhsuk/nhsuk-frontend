import { TestEnvironment } from 'jest-environment-jsdom'

/**
 * Virtual browser environment
 * Adds jsdom window/document globals, shared test globals
 */
class BrowserVirtualEnvironment extends TestEnvironment {
  async setup() {
    await super.setup()

    // Fix missing `structuredClone()` global
    // https://github.com/jsdom/jsdom/issues/3363
    this.global.structuredClone = structuredClone

    // Access virtual console
    const { virtualConsole } = this.dom ?? {}

    // Ensure test fails for browser exceptions
    virtualConsole?.on('jsdomError', (error) =>
      process.emit('uncaughtException', error)
    )
  }
}

export default BrowserVirtualEnvironment
