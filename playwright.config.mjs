import * as config from '@nhsuk/frontend-config'
import { defineConfig } from '@playwright/test'

const { BASE_URL, CI, PORT = '3000' } = process.env

/**
 * Playwright config
 *
 * {@link https://playwright.dev/docs/test-configuration/}
 */
export default defineConfig({
  fullyParallel: true,
  testMatch: '**/*.browser.test.mjs',
  outputDir: '.cache/playwright',

  projects: [
    {
      name: 'JavaScript component tests',
      testIgnore: '**/accessibility.browser.test.mjs'
    },
    {
      name: 'Accessibility tests',
      testMatch: '**/accessibility.browser.test.mjs'
    }
  ],

  reporter: 'list',

  // Development server options
  webServer: BASE_URL
    ? undefined
    : {
        command: 'npm run serve',
        cwd: config.paths.app,
        port: Number(PORT),
        reuseExistingServer: true
      },

  use: {
    browserName: 'chromium'
  },

  // Reduce CPU usage during project test runs
  // Use only 2x CPU cores for GitHub runners
  workers: CI ? 2 : '25%'
})
