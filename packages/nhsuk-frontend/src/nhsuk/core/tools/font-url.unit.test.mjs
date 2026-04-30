import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('@function font-url', () => {
  const sassModules = outdent`
    @use "core/tools/font-url" as *;
  `

  const sassBootstrap = outdent`
    @use "core/settings/globals" as * with (
      $nhsuk-fonts-path: "/path/to/fonts/"
    );

    ${sassModules}
  `

  it('by default concatenates the font path and the filename', async () => {
    const sass = outdent`
      ${sassBootstrap}

      @font-face {
        font-family: "whatever";
        src: nhsuk-font-url("whatever.woff2");
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: expect.stringContaining(outdent`
        @font-face {
          font-family: "whatever";
          src: url("/path/to/fonts/whatever.woff2");
        }
      `)
    })
  })
})
