import TestEnvironment from '@happy-dom/jest-environment'

/**
 * Virtual browser environment
 * Adds jsdom window/document globals, shared test globals
 */
class BrowserVirtualEnvironment extends TestEnvironment {
  async setup() {
    await super.setup()

    // Fix missing `structuredClone()` global
    // https://github.com/capricorn86/happy-dom/issues/556
    if (!this.global.structuredClone) {
      this.global.structuredClone = structuredClone
    }
  }
}

export default BrowserVirtualEnvironment
