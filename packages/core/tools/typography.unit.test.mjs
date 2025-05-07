import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('Typography tools', () => {
  const sassModules = `
    @use "core/settings/all" as *;
    @use "core/tools/all" as *;
  `

  const sassBootstrap = `
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

    @use "core/tools/typography" as *;
  `

  describe('@mixin nhsuk-text-break-word', () => {
    it('adds the word-wrap and overflow-wrap properties', async () => {
      const sass = `
        ${sassBootstrap}

        .foo {
          @include nhsuk-text-break-word;
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
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
      const sass = `
        ${sassBootstrap}

        .foo {
          @include nhsuk-text-break-word($important: true);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
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
      const sass = `
        ${sassModules}

        .foo {
          line-height: nhsuk-line-height($line-height: 3.141, $font-size: 20px);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
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
      const sass = `
        ${sassModules}

        .foo {
          line-height: nhsuk-line-height($line-height: 2em, $font-size: 20px);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
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
      const sass = `
        ${sassModules}

        .foo {
          line-height: nhsuk-line-height($line-height: 30px, $font-size: 20px);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
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
      const sass = `
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size($size: 14)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
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
      const sass = `
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size($size: 12)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
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

    it('outputs CSS using points as strings', async () => {
      const sass = `
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
        loadPaths: ['packages']
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
      const sass = `
        ${sassBootstrap}

        .foo {
          @include nhsuk-font-size(3.1415926536)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages']
      })

      await expect(results).rejects.toThrow(
        'Unknown font size `3.1415926536` - expected a point from the typography scale.'
      )
    })

    describe('when $important is set to true', () => {
      it('marks font size and line height as important', async () => {
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font-size($size: 14, $important: true);
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
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
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font-size($size: 12, $important: true);
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
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
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font-size($size: 14, $line-height: 21px);
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
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
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
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
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 12)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.stringContaining('font-size: 0.75rem')
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-size: 0.875rem')
        })
      })

      it('does not output font-size if $size: false', async () => {
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: false)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-size')
        })
      })

      it('sets font-weight based on $weight', async () => {
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $weight: bold)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.stringContaining('font-weight: 600')
        })
      })

      it('does not output font-weight if $weight: false', async () => {
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $weight: false)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-weight')
        })
      })

      it('ignores undefined font-weights', async () => {
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $weight: superdupermegabold)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.not.stringContaining('font-weight')
        })
      })

      it('sets line-height based on $line-height', async () => {
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font($size: 14, $line-height: 1.337)
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
        })

        await expect(results).resolves.toMatchObject({
          css: expect.stringContaining('line-height: 1.337;')
        })
      })
    })

    // nhsuk-typography-responsive is the previous, deprecated version of nhsuk-font-size
    describe('@mixin nhsuk-typography-responsive', () => {
      it('outputs the same CSS as nhsuk-font-size', async () => {
        const sass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-typography-responsive(
              $size: 14,
              $override-line-height: 40px,
              $important: true
            )
          }
        `

        const expectedSass = `
          ${sassBootstrap}

          .foo {
            @include nhsuk-font-size(
              $size: 14,
              $line-height: 40px,
              $important: true
            )
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages']
        })

        await expect(results).resolves.toMatchObject({
          css: (
            await compileStringAsync(expectedSass, {
              loadPaths: ['packages']
            })
          ).css
        })
      })
    })
  })
})
