import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('Colour helpers', () => {
  const sassModules = `
    @use "core/helpers" as *;
  `

  describe('@function nhsuk-colour', () => {
    let sassBootstrap = ''

    beforeEach(() => {
      sassBootstrap = `
        @use "core/settings/colours-palette" as * with (
          $nhsuk-colours: (
            "red": #ff0000,
            "green": #00ff00,
            "blue": #0000ff
          )
        );

        ${sassModules}
      `
    })

    it('returns a colour from the colour palette', async () => {
      const sass = `
        ${sassBootstrap}

        .foo {
          color: nhsuk-colour('red');
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
        .foo {
          color: #ff0000;
        }
      `
      })
    })

    it('works with unquoted strings', async () => {
      const sass = `
        ${sassBootstrap}

        .foo {
          color: nhsuk-colour(red);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            color: #ff0000;
          }
        `
      })
    })

    it('throws an error if a non-existent colour is requested', async () => {
      const sass = `
        ${sassBootstrap}

        .foo {
          color: nhsuk-colour('hooloovoo');
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).rejects.toThrow('Unknown colour `hooloovoo`')
    })
  })

  describe('@function nhsuk-colour-compatible', () => {
    it.each([
      {
        input: 'rgb(0, 127, 59)',
        output: '#007f3b'
      },
      {
        input: 'rgb(0.1, 127.2, 59.3)',
        output: '#007f3b'
      }
    ])("outputs '$input' as value '$output'", async ({ input, output }) => {
      const sass = outdent`
        ${sassModules}

        .foo {
          color: nhsuk-colour-compatible(${input});
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            color: ${output};
          }
        `
      })
    })
  })

  describe('@function nhsuk-shade', () => {
    it('outputs hexadecimal values', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          color: nhsuk-shade(rgb(171, 205, 239), 17%);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            color: #8eaac6;
          }
        `
      })
    })
  })

  describe('@function nhsuk-tint', () => {
    it('outputs hexadecimal values', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          color: nhsuk-tint(rgb(18, 52, 86), 17%);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            color: #3a5773;
          }
        `
      })
    })
  })
})
