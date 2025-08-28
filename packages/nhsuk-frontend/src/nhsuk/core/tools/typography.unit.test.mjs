import { outdent } from 'outdent'
import { compileStringAsync, sassNull } from 'sass-embedded'

describe('Typography tools', () => {
  const sassModules = outdent`
    @use "core/tools/typography" as *;
  `

  const sassBootstrap = outdent`
    @use "core/settings/breakpoints" as * with (
      $nhsuk-breakpoints: (
        desktop: 30em
      )
    );

    @use "core/settings/typography" as * with (
      $nhsuk-typography-scale: (
        12: (
          null: (
            font-size: 12px,
            line-height: 15px
          ),
          print: (
            font-size: 14pt,
            line-height: 1.5
          )
        ),
        14: (
          null: (
            font-size: 12px,
            line-height: 15px
          ),
          desktop: (
            font-size: 14px,
            line-height: 20px
          )
        ),
        16: (
          null: (
            font-size: 14px,
            line-height: 15px
          ),
          desktop: (
            font-size: 16px,
            line-height: 20px
          ),
          deprecation: (
            key: "test-key",
            message: "This point on the scale is deprecated."
          )
        )
      )
    );

    ${sassModules}
  `

  /** @type {Logger} */
  let logger = {}

  beforeEach(() => {
    // Create a mock warn function that we can use to override the native @warn
    // function, that we can make assertions about post-render.
    logger.warn = jest.fn().mockReturnValue(sassNull)
  })

  describe('@mixin nhsuk-text-break-word', () => {
    it('adds the word-wrap and overflow-wrap properties', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-text-break-word;
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
        `
      })
    })

    it('marks the properties as important if $important is set to true', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-text-break-word($important: true);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
        `
      })
    })
  })

  describe('@function nhsuk-line-height', () => {
    it('preserves line-height if already unitless', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          line-height: nhsuk-line-height($line-height: 3.141, $font-size: 20px);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            line-height: 3.141;
          }
        `
      })
    })

    it('preserves line-height if using different units', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          line-height: nhsuk-line-height($line-height: 2em, $font-size: 20px);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            line-height: 2em;
          }
        `
      })
    })

    it('converts line-height to a relative number', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          line-height: nhsuk-line-height($line-height: 30px, $font-size: 20px);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            line-height: 1.5;
          }
        `
      })
    })
  })

  describe('@mixin nhsuk-font-size', () => {
    it('outputs CSS with suitable media queries', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size($size: 14)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            font-size: 12px;
            font-size: 0.75rem;
            line-height: 1.25;
          }
          @media (min-width: 30em) {
            .foo {
              font-size: 14px;
              font-size: 0.875rem;
              line-height: 1.42857;
            }
          }
        `
      })
    })

    it('outputs CSS with suitable media queries for print', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size($size: 12)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            font-size: 12px;
            font-size: 0.75rem;
            line-height: 1.25;
          }
          @media print {
            .foo {
              font-size: 14pt;
              line-height: 1.5;
            }
          }
        `
      })
    })

    it('outputs CSS when passing size as a string', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size($size: "14")
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            font-size: 12px;
            font-size: 0.75rem;
            line-height: 1.25;
          }
          @media (min-width: 30em) {
            .foo {
              font-size: 14px;
              font-size: 0.875rem;
              line-height: 1.42857;
            }
          }
        `
      })
    })

    it('outputs CSS using points as strings', async () => {
      const sass = outdent`
        @use "core/settings/breakpoints" as * with (
          $nhsuk-breakpoints: (
            desktop: 30em
          )
        );

        @use "core/settings/typography" as * with (
          $nhsuk-typography-scale: (
            "small": (
              null: (
                font-size: 12px,
                line-height: 15px
              ),
              print: (
                font-size: 14pt,
                line-height: 1.5
              )
            )
          )
        );

        @use "core/tools/typography" as *;

        .foo {
          @include nhsuk-font-size($size: "small")
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            font-size: 12px;
            font-size: 0.75rem;
            line-height: 1.25;
          }
          @media print {
            .foo {
              font-size: 14pt;
              line-height: 1.5;
            }
          }
        `
      })
    })

    it('throws an exception when passed a size that is not in the scale', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size(3.1415926536)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).rejects.toThrow(
        'Unknown font size `3.1415926536` - expected a point from the typography scale.'
      )
    })

    it('throws a deprecation warning if a point on the scale is deprecated', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size($size: 16)
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'This point on the scale is deprecated. To silence this warning, update $nhsuk-suppressed-warnings with key: "test-key"',
        expect.anything()
      )
    })

    describe('when $important is set to true', () => {
      it('marks font size and line height as important', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font-size($size: 14, $important: true);
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              font-size: 12px !important;
              font-size: 0.75rem !important;
              line-height: 1.25 !important;
            }
            @media (min-width: 30em) {
              .foo {
                font-size: 14px !important;
                font-size: 0.875rem !important;
                line-height: 1.42857 !important;
              }
            }
          `
        })
      })

      it('marks font-size and line-height as important for print media', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font-size($size: 12, $important: true);
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              font-size: 12px !important;
              font-size: 0.75rem !important;
              line-height: 1.25 !important;
            }
            @media print {
              .foo {
                font-size: 14pt !important;
                line-height: 1.5 !important;
              }
            }
          `
        })
      })
    })

    describe('when $line-height is set', () => {
      it('overrides the line height', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font-size($size: 14, $line-height: 21px);
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              font-size: 12px;
              font-size: 0.75rem;
              line-height: 1.75;
            }
            @media (min-width: 30em) {
              .foo {
                font-size: 14px;
                font-size: 0.875rem;
                line-height: 1.5;
              }
            }
          `
        })
      })
    })

    describe('@mixin nhsuk-font', () => {
      it('outputs all required typographic CSS properties', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              font-weight: 400;
            }
            .foo {
              font-size: 12px;
              font-size: 0.75rem;
              line-height: 1.25;
            }
            @media (min-width: 30em) {
              .foo {
                font-size: 14px;
                font-size: 0.875rem;
                line-height: 1.42857;
              }
            }
          `
        })
      })

      it('sets font-size based on $size', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 12)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.stringContaining('font-size: 0.75rem')
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-size: 0.875rem')
        })
      })

      it('does not output font-size if $size: false', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: false)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-size')
        })
      })

      it('sets font-weight based on $weight', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $weight: bold)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.stringContaining('font-weight: 600')
        })
      })

      it('does not output font-weight if $weight: false', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $weight: false)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-weight')
        })
      })

      it('ignores undefined font-weights', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $weight: superdupermegabold)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-weight')
        })
      })

      it('sets line-height based on $line-height', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $line-height: 1.337)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.stringContaining('line-height: 1.337;')
        })
      })
    })
  })
})

/**
 * @import { Logger } from 'sass-embedded'
 */
