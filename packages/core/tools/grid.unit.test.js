const outdent = require('outdent')
const { compileStringAsync } = require('sass-embedded')

describe('grid system', () => {
  const sassImports = `
    @import "core/settings/globals";
    @import "core/settings/spacing";

    @import "core/tools/grid";
    @import "core/tools/exports";
    @import "core/tools/sass-mq";
  `

  describe('govuk-grid-width function', () => {
    it('outputs the specified key value from the map of widths', async () => {
      const sass = `
        ${sassImports}

        .foo {
          content: govuk-grid-width(one-quarter);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(
        outdent`
          .foo {
            content: 25%;
          }
        `
      )
    })

    it('throws an error that the specified key does not exist in the map of widths', async () => {
      const sass = `
        ${sassImports}

        $value: govuk-grid-width(seven-fifths);
      `

      await expect(
        compileStringAsync(sass, {
          loadPaths: ['packages']
        })
      ).rejects.toThrow('Unknown grid width `seven-fifths`')
    })
  })

  describe('@govuk-grid-row mixin', () => {
    it('outputs default defined styles for .nhsuk-grid-row class', async () => {
      const sass = `
        ${sassImports}

        @import "core/tools/mixins";

        @include govuk-grid-row;
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-row {
          margin-right: -16px;
          margin-left: -16px;
        }
        .nhsuk-grid-row::after {
          clear: both;
          content: \"\";
          display: block;
        }
      `)
    })

    it('outputs styles for the specified class', async () => {
      const sass = `
        ${sassImports}

        @import "core/tools/mixins";

        @include govuk-grid-row("app-grid-row");
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .app-grid-row {
          margin-right: -16px;
          margin-left: -16px;
        }
        .app-grid-row::after {
          clear: both;
          content: \"\";
          display: block;
        }
      `)
    })
  })

  describe('@govuk-grid-column mixin', () => {
    it('outputs the CSS required for a column in the grid', async () => {
      const sass = `
        ${sassImports}

        .nhsuk-grid-column-full {
          @include govuk-grid-column($class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-full {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 46.25em) {
          .nhsuk-grid-column-full {
            width: 100%;
            float: left;
          }
        }
      `)
    })

    it('allows different widths to be specified using $width', async () => {
      const sass = `
        ${sassImports}

        .nhsuk-grid-column-two-thirds {
          @include govuk-grid-column(two-thirds, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-two-thirds {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 46.25em) {
          .nhsuk-grid-column-two-thirds {
            width: 66.6666666667%;
            float: left;
          }
        }
      `)
    })

    it('allows predefined breakpoints to be specified using $at', async () => {
      const sass = `
        ${sassImports}

        .nhsuk-grid-column-one-quarter-at-desktop {
          @include govuk-grid-column(one-quarter, $at: desktop, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-one-quarter-at-desktop {
          box-sizing: border-box;
          padding: 0 16px;
        }
        @media (min-width: 61.25em) {
          .nhsuk-grid-column-one-quarter-at-desktop {
            width: 25%;
            float: left;
          }
        }
      `)
    })

    it('allows custom breakpoints to be specified using $at', async () => {
      const sass = `
        ${sassImports}

        .nhsuk-grid-column-one-quarter-at-500px {
          @include govuk-grid-column(one-quarter, $at: 500px, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-one-quarter-at-500px {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 31.25em) {
          .nhsuk-grid-column-one-quarter-at-500px {
            width: 25%;
            float: left;
          }
        }
      `)
    })

    it('allows columns to float right using $float: right', async () => {
      const sass = `
        ${sassImports}

        .nhsuk-grid-column-one-half-right {
          @include govuk-grid-column(one-half, $float: right, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-one-half-right {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 46.25em) {
          .nhsuk-grid-column-one-half-right {
            width: 50%;
            float: right;
          }
        }
      `)
    })

    it('includes the class name by default (deprecated)', async () => {
      const sass = `
        ${sassImports}

        @include govuk-grid-column();
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-full {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 46.25em) {
          .nhsuk-grid-column-full {
            width: 100%;
            float: left;
          }
        }
      `)
    })

    it('allows the class name to be overridden (deprecated)', async () => {
      const sass = `
        ${sassImports}

        @include govuk-grid-column(three-quarters, $class: "large-column");
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      expect(results.css).toBe(outdent`
        .large-column-three-quarters {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 46.25em) {
          .large-column-three-quarters {
            width: 75%;
            float: left;
          }
        }
      `)
    })
  })
})

/**
 * @import { Options } from 'sass-embedded'
 */
