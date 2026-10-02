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
        --nhsuk-dark-blue-colour: #003087;
        --nhsuk-blue-colour: #005eb8;
        --nhsuk-pale-blue-colour: #ccdff1;
        --nhsuk-bright-blue-colour: #0072ce;
        --nhsuk-light-blue-colour: #41b6e6;
        --nhsuk-aqua-blue-colour: #00a9ce;
        --nhsuk-black-colour: #231f20;
        --nhsuk-dark-grey-colour: #425563;
        --nhsuk-mid-grey-colour: #768692;
        --nhsuk-pale-grey-colour: #e8edee;
        --nhsuk-white-colour: white;
        --nhsuk-dark-green-colour: #006747;
        --nhsuk-green-colour: #009639;
        --nhsuk-light-green-colour: #78be20;
        --nhsuk-pale-green-colour: #ccead7;
        --nhsuk-pale-aqua-green-colour: #bfe8e6;
        --nhsuk-aqua-green-colour: #00a499;
        --nhsuk-dark-aqua-green-colour: #00423d;
        --nhsuk-purple-colour: #330072;
        --nhsuk-bright-purple-colour: #6a3ca5;
        --nhsuk-pale-purple-colour: #e1d8ed;
        --nhsuk-dark-pink-colour: #7c2855;
        --nhsuk-pink-colour: #ae2573;
        --nhsuk-pale-pink-colour: #efd3e3;
        --nhsuk-dark-red-colour: #8a1538;
        --nhsuk-red-colour: #da291c;
        --nhsuk-pale-red-colour: #f8d4d2;
        --nhsuk-dark-orange-colour: #5f3800;
        --nhsuk-orange-colour: #ed8b00;
        --nhsuk-pale-orange-colour: #fbe8cc;
        --nhsuk-dark-warm-yellow-colour: #59400a;
        --nhsuk-warm-yellow-colour: #ffb81c;
        --nhsuk-pale-warm-yellow-colour: #ffe6b0;
        --nhsuk-dark-yellow-colour: #4b4400;
        --nhsuk-yellow-colour: #fae100;
        --nhsuk-pale-yellow-colour: #fef6b3;
        --nhsuk-grey-1-colour: #4c6272;
        --nhsuk-grey-2-colour: #768692;
        --nhsuk-grey-3-colour: #aeb7bd;
        --nhsuk-grey-4-colour: #d8dde0;
        --nhsuk-grey-5-colour: #f0f4f5;
        --nhsuk-brand-colour: #005eb8;
        --nhsuk-text-colour: #212b32;
        --nhsuk-reverse-text-colour: white;
        --nhsuk-template-background-colour: #d8dde0;
        --nhsuk-body-background-colour: #f0f4f5;
        --nhsuk-card-background-colour: white;
        --nhsuk-print-text-colour: black;
        --nhsuk-secondary-text-colour: #4c6272;
        --nhsuk-reverse-secondary-text-colour: #c7dcef;
        --nhsuk-focus-colour: #fae100;
        --nhsuk-focus-text-colour: #212b32;
        --nhsuk-error-colour: #da291c;
        --nhsuk-error-text-colour: #d5281b;
        --nhsuk-success-colour: #009639;
        --nhsuk-success-text-colour: #008030;
        --nhsuk-border-colour: #d8dde0;
        --nhsuk-border-hover-colour: #aeb7bd;
        --nhsuk-secondary-border-colour: rgba(255, 255, 255, 0.2);
        --nhsuk-reverse-border-colour: #337ec6;
        --nhsuk-input-border-colour: #4c6272;
        --nhsuk-hover-colour: #aeb7bd;
        --nhsuk-reverse-hover-colour: #004b93;
        --nhsuk-target-hover-colour: #e0e4e6;
        --nhsuk-reverse-target-hover-colour: #0055a6;
        --nhsuk-input-background-colour: white;
        --nhsuk-code-colour: #da291c;
        --nhsuk-link-colour: #005eb8;
        --nhsuk-link-visited-colour: #330072;
        --nhsuk-link-hover-colour: #7c2855;
        --nhsuk-link-active-colour: #002f5c;
        --nhsuk-button-colour: #008030;
        --nhsuk-button-text-colour: white;
        --nhsuk-button-hover-colour: #006626;
        --nhsuk-button-active-colour: #004018;
        --nhsuk-button-shadow-colour: #004018;
        --nhsuk-secondary-button-colour: rgba(0, 0, 0, 0);
        --nhsuk-secondary-button-solid-background-colour: white;
        --nhsuk-secondary-button-border-colour: #005eb8;
        --nhsuk-secondary-button-text-colour: #005eb8;
        --nhsuk-secondary-button-hover-colour: #d9e7f4;
        --nhsuk-secondary-button-active-colour: #c7dcef;
        --nhsuk-secondary-button-shadow-colour: #005eb8;
        --nhsuk-reverse-button-colour: white;
        --nhsuk-reverse-button-text-colour: #212b32;
        --nhsuk-reverse-button-hover-colour: #d9d9d9;
        --nhsuk-reverse-button-active-colour: #b3b3b3;
        --nhsuk-reverse-button-shadow-colour: #b3b3b3;
        --nhsuk-warning-button-colour: #d5281b;
        --nhsuk-warning-button-hover-colour: #aa2016;
        --nhsuk-warning-button-active-colour: #6b140e;
        --nhsuk-warning-button-shadow-colour: #6b140e;
        --nhsuk-login-button-colour: #005eb8;
        --nhsuk-login-button-hover-colour: #004b93;
        --nhsuk-login-button-active-colour: #002f5c;
        --nhsuk-login-button-shadow-colour: #002f5c;
      }
    `

    it('forwards core styles', async () => {
      const sass = outdent`
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

    it('forwards core styles (with custom breakpoints)', async () => {
      const sass = outdent`
        @forward "core" with (
          $nhsuk-breakpoints: (
            mobile: 110px,
            tablet: 220px,
            desktop: 330px,
            large-desktop: 440px
          )
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
    })

    it('forwards core styles (with custom page width)', async () => {
      const sass = outdent`
        @forward "core" with (
          $nhsuk-page-width: 1100px
        );
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
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

    it('forwards core styles (with dynamic type enabled)', async () => {
      const sass = outdent`
        @forward "core" with (
          $nhsuk-include-dynamic-type: true
        );
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining(outdent`
          :root {
            --nhsuk-frontend-version: "development";
            --nhsuk-breakpoint-mobile: 18.8235294118rem;
            --nhsuk-breakpoint-tablet: 37.7058823529rem;
            --nhsuk-breakpoint-desktop: 45.2352941176rem;
            --nhsuk-breakpoint-large-desktop: 58.2352941176rem;
        `)
      })
    })
  })

  describe('importing using "all" files', () => {
    it('outputs a warning when importing the core "all" file', async () => {
      const sass = outdent`
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
      const sass = outdent`
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

  describe('importing using deprecated files', () => {
    it('outputs a warning when importing the core "settings/colours" file', async () => {
      const sass = outdent`
        @forward "core/settings/colours";
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      expect(logger.warn).toHaveBeenCalledWith(
        `Importing using 'core/settings/colours' is deprecated. Update your import statement to import 'core/settings/colours-palette', 'core/settings/colours-applied' and 'core/settings/colours-deprecated'. To silence this warning, update $nhsuk-suppressed-warnings with key: "import-using-settings-colours"`,
        expect.anything()
      )
    })
  })
})

/**
 * @import { Logger } from 'sass-embedded'
 */
