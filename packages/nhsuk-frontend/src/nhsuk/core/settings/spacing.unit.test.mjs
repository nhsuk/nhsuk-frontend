import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('Spacing settings', () => {
  const sassModules = outdent`
    @use "core/tools/spacing" as *;
  `

  const sassBootstrap = outdent`
    $app-spacing-point: 2;

    @use "core/settings/breakpoints" as * with (
      $nhsuk-breakpoints: (
        my_breakpoint: 30em
      )
    );

    @use "core/settings/spacing" as * with (
      $nhsuk-spacing-points: (
        0: 0,
        2: 15px
      ),
      $nhsuk-spacing-responsive-scale: (
        2: (
          null: 15px,
          my_breakpoint: 25px
        )
      )
    );

    ${sassModules}
  `

  describe('@function nhsuk-spacing', () => {
    it('returns CSS for a property based on the given spacing point', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          top: nhsuk-spacing($app-spacing-point)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            top: 15px;
          }
        `
      })
    })

    it('returns CSS for a property based on a negative spacing point', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          top: nhsuk-spacing(-2)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            top: -15px;
          }
        `
      })
    })

    it('throws an error when passed anything other than a number', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          top: nhsuk-spacing('margin')
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).rejects.toThrow(
        'Expected a number (integer), but got a string.'
      )
    })

    it('throws an error when passed a non-existent point', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          top: nhsuk-spacing(999)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).rejects.toThrow(
        'Unknown spacing variable `999`. Make sure you are using a point from the spacing scale in `_settings/spacing.scss`.'
      )
    })

    it('throws an error when passed a non-existent negative point', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          top: nhsuk-spacing(-999)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).rejects.toThrow(
        'Unknown spacing variable `999`. Make sure you are using a point from the spacing scale in `_settings/spacing.scss`.'
      )
    })

    it('handles negative zero', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          top: nhsuk-spacing(-0)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            top: 0;
          }
        `
      })
    })
  })

  describe('@mixin nhsuk-responsive-spacing', () => {
    it('outputs CSS for a property based on the given spacing map', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-responsive-spacing($app-spacing-point, 'margin')
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            margin: 15px;
          }
          @media (min-width: 30em) {
            .foo {
              margin: 25px;
            }
          }
        `
      })
    })

    it('outputs CSS for a property and direction based on the spacing map', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-responsive-spacing($app-spacing-point, 'padding', 'top');
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            padding-top: 15px;
          }
          @media (min-width: 30em) {
            .foo {
              padding-top: 25px;
            }
          }
        `
      })
    })

    it('throws an exception when passed a non-existent point', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-responsive-spacing(14px, 'margin')
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).rejects.toThrow(
        'Unknown spacing point `14px`. Make sure you are using a point from the responsive spacing scale in `_settings/spacing.scss`.'
      )
    })

    describe('when $important is set to true', () => {
      it('marks the rule as important for the property', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-responsive-spacing(
              $app-spacing-point,
              'margin',
              $important: true
            )
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              margin: 15px !important;
            }
            @media (min-width: 30em) {
              .foo {
                margin: 25px !important;
              }
            }
          `
        })
      })

      it('marks the rule as important for the property and direction', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-responsive-spacing(
              $app-spacing-point,
              'margin',
              'top',
              $important: true
            )
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              margin-top: 15px !important;
            }
            @media (min-width: 30em) {
              .foo {
                margin-top: 25px !important;
              }
            }
          `
        })
      })
    })

    describe('when an adjustment is provided', () => {
      it('adjusts the value for the property', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-responsive-spacing(
              $app-spacing-point,
              'margin',
              $adjustment: 2px
            )
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              margin: 17px;
            }
            @media (min-width: 30em) {
              .foo {
                margin: 27px;
              }
            }
          `
        })
      })

      it('adjusts the value for the property and direction', async () => {
        const sass = outdent`
          ${sassBootstrap}

          .foo {
            @include nhsuk-responsive-spacing(
              $app-spacing-point,
              'margin',
              'top',
              $adjustment: 2px
            )
          }
        `

        const results = compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
        })

        await expect(results).resolves.toMatchObject({
          css: outdent`
            .foo {
              margin-top: 17px;
            }
            @media (min-width: 30em) {
              .foo {
                margin-top: 27px;
              }
            }
          `
        })
      })
    })
  })

  describe('@mixin nhsuk-responsive-margin', () => {
    it('outputs simple responsive margins', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-responsive-margin($app-spacing-point)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            margin: 15px;
          }
          @media (min-width: 30em) {
            .foo {
              margin: 25px;
            }
          }
        `
      })
    })

    it('outputs extreme responsive margins', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-responsive-margin(
            $app-spacing-point,
            'top',
            $important: true,
            $adjustment: 2px
          )
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            margin-top: 17px !important;
          }
          @media (min-width: 30em) {
            .foo {
              margin-top: 27px !important;
            }
          }
        `
      })
    })
  })

  describe('@mixin nhsuk-responsive-padding', () => {
    it('outputs simple responsive padding', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-responsive-padding($app-spacing-point)
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            padding: 15px;
          }
          @media (min-width: 30em) {
            .foo {
              padding: 25px;
            }
          }
        `
      })
    })

    it('outputs extreme responsive padding', async () => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          @include nhsuk-responsive-padding(
            $app-spacing-point,
            'top',
            $important: true,
            $adjustment: 2px
          )
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            padding-top: 17px !important;
          }
          @media (min-width: 30em) {
            .foo {
              padding-top: 27px !important;
            }
          }
        `
      })
    })
  })
})
