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
        input: 'rgba(0, 127, 59, 1)',
        output: '#007f3b'
      },
      {
        input: 'rgba(0, 127, 59, 0.99)',
        output: 'rgba(0, 127, 59, 0.99)'
      },
      {
        input: 'rgb(0.1, 127.2, 59.3)',
        output: '#007f3b'
      },
      {
        input: 'rgba(0.1, 127.2, 59.3, 1)',
        output: '#007f3b'
      },
      {
        input: 'rgba(0.1, 127.2, 59.3, 0.99)',
        output: 'rgba(0, 127, 59, 0.99)'
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
    it('outputs hexadecimal values by default', async () => {
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

    it('outputs rgba() values (with alpha channel)', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          color: nhsuk-shade(rgba(171, 205, 239, 0.2), 17%);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            color: rgba(60, 72, 84, 0.336);
          }
        `
      })
    })
  })

  describe('@function nhsuk-tint', () => {
    it('outputs hexadecimal values by default', async () => {
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

    it('outputs rgba() values (with alpha channel)', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          color: nhsuk-tint(rgba(18, 52, 86, 0.2), 17%);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            color: rgba(172, 184, 196, 0.336);
          }
        `
      })
    })
  })
})
