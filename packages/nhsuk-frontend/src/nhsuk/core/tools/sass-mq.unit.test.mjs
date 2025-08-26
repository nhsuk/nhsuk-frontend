import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('@mixin nhsuk-media-query', () => {
  const sassModules = `
    @use "core/tools/sass-mq" as *;
  `

  const sassBootstrap = `
    @use "core/settings/breakpoints" as * with (
      $nhsuk-breakpoints: (
        mobile: 110px,
        tablet: 220px,
        desktop: 330px,
        large-desktop: 440px
      )
    );

    ${sassModules}
  `

  it('allows you to target min-width using a numeric value', async () => {
    const sass = `
      ${sassModules}

      .foo {
        @include nhsuk-media-query($from: 20em) {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (min-width: 20em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })

  it('allows you to target min-width using a predefined breakpoint', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        @include nhsuk-media-query($from: mobile) {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (min-width: 6.875em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })

  it('allows you to target max-width using a numeric value', async () => {
    const sass = `
      ${sassModules}

      .foo {
        @include nhsuk-media-query($until: 20em) {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (max-width: 20em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })

  it('allows you to target max-width using a predefined breakpoint', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        @include nhsuk-media-query($until: desktop) {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (max-width: 20.615em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })

  it('allows you to target combined min-width and max-width using numeric values', async () => {
    const sass = `
      ${sassModules}

      .foo {
        @include nhsuk-media-query($from: 20em, $until: 40em) {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (min-width: 20em) and (max-width: 40em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })

  it('allows you to target combined min-width and max-width using predefined breakpoints', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        @include nhsuk-media-query($from: mobile, $until: tablet) {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (min-width: 6.875em) and (max-width: 13.74em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })

  it('allows you to target using custom directives', async () => {
    const sass = `
      ${sassModules}

      .foo {
        @include nhsuk-media-query($until: 40em, $and: '(orientation: landscape)') {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (max-width: 40em) and (orientation: landscape) {
          .foo {
            color: red;
          }
        }
      `
    })
  })

  it('allows you to target particular media types', async () => {
    const sass = `
      ${sassModules}

      .foo {
        @include nhsuk-media-query($until: 40em, $media-type: 'aural') {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media aural and (max-width: 40em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })
})
