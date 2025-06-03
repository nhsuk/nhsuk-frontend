import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('Grid system', () => {
  const sassModules = `
    @use "core/settings" as *;
    @use "core/tools" as *;
  `

  describe('@function nhsuk-grid-width', () => {
    it('outputs the specified key value from the map of widths', async () => {
      const sass = `
        ${sassModules}

        .foo {
          content: nhsuk-grid-width(one-quarter);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
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
        ${sassModules}

        $value: nhsuk-grid-width(seven-fifths);
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      await expect(results).rejects.toThrow('Unknown grid width `seven-fifths`')
    })
  })

  describe('@mixin nhsuk-grid-row', () => {
    it('outputs default defined styles for .nhsuk-grid-row class', async () => {
      const sass = `
        ${sassModules}

        @include nhsuk-grid-row;
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
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
        ${sassModules}

        @include nhsuk-grid-row("app-grid-row");
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
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

  describe('@mixin nhsuk-grid-column', () => {
    it('outputs the CSS required for a column in the grid', async () => {
      const sass = `
        ${sassModules}

        .nhsuk-grid-column-full {
          @include nhsuk-grid-column($class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-full {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 48.0625em) {
          .nhsuk-grid-column-full {
            width: 100%;
            float: left;
          }
        }
      `)
    })

    it('allows different widths to be specified using $width', async () => {
      const sass = `
        ${sassModules}

        .nhsuk-grid-column-two-thirds {
          @include nhsuk-grid-column(two-thirds, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-two-thirds {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 48.0625em) {
          .nhsuk-grid-column-two-thirds {
            width: 66.6666666667%;
            float: left;
          }
        }
      `)
    })

    it('allows predefined breakpoints to be specified using $at', async () => {
      const sass = `
        ${sassModules}

        .nhsuk-grid-column-one-quarter-at-desktop {
          @include nhsuk-grid-column(one-quarter, $at: desktop, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-one-quarter-at-desktop {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 48.0625em) {
          .nhsuk-grid-column-one-quarter-at-desktop {
            width: 25%;
            float: left;
          }
        }
      `)
    })

    it('allows custom breakpoints to be specified using $at', async () => {
      const sass = `
        ${sassModules}

        .nhsuk-grid-column-one-quarter-at-500px {
          @include nhsuk-grid-column(one-quarter, $at: 500px, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
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
        ${sassModules}

        .nhsuk-grid-column-one-half-right {
          @include nhsuk-grid-column(one-half, $float: right, $class: false);
        }
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-one-half-right {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 48.0625em) {
          .nhsuk-grid-column-one-half-right {
            width: 50%;
            float: right;
          }
        }
      `)
    })

    it('includes the class name by default (deprecated)', async () => {
      const sass = `
        ${sassModules}

        @include nhsuk-grid-column();
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      expect(results.css).toBe(outdent`
        .nhsuk-grid-column-full {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 48.0625em) {
          .nhsuk-grid-column-full {
            width: 100%;
            float: left;
          }
        }
      `)
    })

    it('allows the class name to be overridden (deprecated)', async () => {
      const sass = `
        ${sassModules}

        @include nhsuk-grid-column(three-quarters, $class: "large-column");
      `

      const results = await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      expect(results.css).toBe(outdent`
        .large-column-three-quarters {
          box-sizing: border-box;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 48.0625em) {
          .large-column-three-quarters {
            width: 75%;
            float: left;
          }
        }
      `)
    })
  })
})
