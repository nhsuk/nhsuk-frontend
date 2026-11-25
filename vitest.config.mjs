import { defineConfig } from 'vitest/config'

/**
 * Vitest config
 *
 * {@link https://vitest.dev/config/}
 */
export default defineConfig({
  cacheDir: '.cache/vitest',

  test: {
    clearMocks: true,

    coverage: {
      include: ['packages/*/src/**/*.{js,mjs}'],
      exclude: ['**/fixtures.mjs', '**/macro-options.mjs'],
      reporter: ['html', 'text', 'lcovonly']
    },

    globals: true,

    projects: [
      {
        extends: true,
        test: {
          name: 'JavaScript unit tests',
          include: ['**/*.unit.test.{js,mjs}']
        }
      },
      {
        extends: true,
        test: {
          name: 'JavaScript behaviour tests',
          environment: 'happy-dom',
          include: ['**/*.jsdom.test.{js,mjs}'],
          setupFiles: ['@nhsuk/frontend-helpers/vitest/jsdom.setup.mjs']
        }
      }
    ]
  }
})
