import { outdent } from 'outdent'
import { compileStringAsync, sassNull } from 'sass-embedded'

describe('Core', () => {
  /** @type {Logger} */
  let logger = {}

  beforeEach(() => {
    // Create a mock warn function that we can use to override the native @warn
    // function, that we can make assertions about post-render.
    logger.warn = jest.fn().mockReturnValue(sassNull)
  })

  describe('importing using index file', () => {
    const properties = outdent`
      :root {
        --nhsuk-frontend-version: "development";
        --nhsuk-breakpoint-mobile: 20rem;
        --nhsuk-breakpoint-tablet: 40.0625rem;
        --nhsuk-breakpoint-desktop: 48.0625rem;
        --nhsuk-breakpoint-large-desktop: 61.875rem;
    `

    it('forwards core styles', async () => {
      const sass = `
        @forward "core";
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining(properties)
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining(outdent`
          .nhsuk-width-container {
            max-width: 960px;
            margin-right: 16px;
            margin-left: 16px;
          }
        `)
      })
    })

    it('forwards core styles (with settings)', async () => {
      const sass = `
        @forward "core" with (
          $nhsuk-breakpoints: (
            mobile: 110px,
            tablet: 220px,
            desktop: 330px,
            large-desktop: 440px
          ),
          $nhsuk-page-width: 1100px,
        );
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining(outdent`
          :root {
            --nhsuk-frontend-version: "development";
            --nhsuk-breakpoint-mobile: 6.875rem;
            --nhsuk-breakpoint-tablet: 13.75rem;
            --nhsuk-breakpoint-desktop: 20.625rem;
            --nhsuk-breakpoint-large-desktop: 27.5rem;
        `)
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining(outdent`
          .nhsuk-width-container {
            max-width: 1100px;
            margin-right: 16px;
            margin-left: 16px;
          }
        `)
      })
    })
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
