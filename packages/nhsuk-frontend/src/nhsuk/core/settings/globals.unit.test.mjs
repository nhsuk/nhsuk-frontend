import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('Global settings', () => {
  const sassModules = outdent`
    @use "core/settings/globals" as *;
  `

  describe('$nhsuk-include-default-font-face', () => {
    it('is true if $nhsuk-font-family is default', async () => {
      const sass = outdent`
        ${sassModules}

        :root {
          --result: #{$nhsuk-include-default-font-face}
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining('--result: true')
      })
    })

    it('is true if $nhsuk-font-family includes Frutiger W01', async () => {
      const sass = outdent`
        $app-font-family: "Frutiger W01", "Comic Sans MS", "Comic Sans", cursive;

        @use "core/settings/globals" as * with (
          $nhsuk-font-family: $app-font-family
        );

        :root {
          --result: #{$nhsuk-include-default-font-face}
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining('--result: true')
      })
    })

    it('is false if $nhsuk-font-family does not include Frutiger W01', async () => {
      const sass = outdent`
        $app-font-family: "Comic Sans MS", "Comic Sans", cursive;

        @use "core/settings/globals" as * with (
          $nhsuk-font-family: $app-font-family
        );

        :root {
          --result: #{$nhsuk-include-default-font-face}
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining('--result: false')
      })
    })
  })
})
