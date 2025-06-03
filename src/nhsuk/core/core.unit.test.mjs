import { compileStringAsync, sassNull } from 'sass-embedded'

describe('Core', () => {
  /** @type {Logger} */
  let logger = {}

  beforeEach(() => {
    // Create a mock warn function that we can use to override the native @warn
    // function, that we can make assertions about post-render.
    logger.warn = jest.fn().mockReturnValue(sassNull)
  })

  describe('importing using "all" files', () => {
    it('outputs a warning when importing the core "all" file', async () => {
      const sass = `
        @forward "core/all";
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      expect(logger.warn).toHaveBeenCalledWith(
        `Importing using 'core/all' is deprecated. Update your import statement to import 'core'. To silence this warning, update $nhsuk-suppressed-warnings with key: "import-using-all"`,
        expect.anything()
      )
    })

    it('outputs a warning for each layer that has an "all" file', async () => {
      const sass = `
        @forward "core/settings/all";
        @forward "core/tools/all";
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      for (const layer of ['settings', 'tools']) {
        expect(logger.warn).toHaveBeenCalledWith(
          `Importing using 'core/${layer}/all' is deprecated. Update your import statement to import 'core/${layer}'. To silence this warning, update $nhsuk-suppressed-warnings with key: "import-using-all"`,
          expect.anything()
        )
      }
    })
  })
})

/**
 * @import { Logger } from 'sass-embedded'
 */
