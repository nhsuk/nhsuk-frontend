import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('@function image-url', () => {
  const sassModules = outdent`
    @use "core/tools/image-url" as *;
  `

  const sassBootstrap = outdent`
    @use "core/settings/globals" as * with (
      $nhsuk-images-path: '/path/to/images/'
    );

    ${sassModules}
  `

  it('by default concatenates the image path and the filename', async () => {
    const sass = outdent`
      ${sassBootstrap}

      .foo {
        background-image: nhsuk-image-url("baz.png");
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: expect.stringContaining(outdent`
        .foo {
          background-image: url("/path/to/images/baz.png");
        }
      `)
    })
  })
})
