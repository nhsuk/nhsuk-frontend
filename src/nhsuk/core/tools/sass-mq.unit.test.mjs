import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

const sassModules = outdent`
  @use "core/tools/sass-mq" as *;
`

const sassBootstrap = outdent`
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

describe('@function nhsuk-breakpoint-value', () => {
  it.each([
    {
      value: '20rem',
      expected: '20rem'
    },
    {
      value: '20em',
      expected: '20em'
    },
    {
      value: '20px',
      expected: '20px'
    },
    {
      value: '20',
      expected: '20px'
    }
  ])('returns value for numeric input: $value', async ({ value, expected }) => {
    const sass = outdent`
      ${sassBootstrap}

      .foo {
        width: nhsuk-breakpoint-value(${value});
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        .foo {
          width: ${expected};
        }
      `
    })
  })

  it.each([
    {
      value: 'mobile',
      expected: '110px'
    },
    {
      value: 'tablet',
      expected: '220px'
    },
    {
      value: 'desktop',
      expected: '330px'
    },
    {
      value: 'large-desktop',
      expected: '440px'
    }
  ])(
    'returns value for predefined breakpoint: $value',
    async ({ value, expected }) => {
      const sass = outdent`
        ${sassBootstrap}

        .foo {
          width: nhsuk-breakpoint-value(${value});
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
          .foo {
            width: ${expected};
          }
        `
      })
    }
  )

  it('throws an error if an invalid breakpoint is used', async () => {
    const sass = outdent`
      ${sassBootstrap}

      .foo {
        width: nhsuk-breakpoint-value('');
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).rejects.toThrow(
      'Error: "Could not find a breakpoint given ``."'
    )
  })
})

describe('@function nhsuk-from-breakpoint', () => {
  it.each([
    {
      value: '20em',
      expected: '20em'
    },
    {
      value: '20px',
      expected: '1.25em'
    },
    {
      value: '20',
      expected: '1.25em'
    },
    {
      value: '20rem',
      expected: '20rem'
    }
  ])(
    'allows you to target min-width using a numeric value: $value',
    async ({ value, expected }) => {
      const sass = outdent`
      ${sassBootstrap}

      .foo {
        @media #{nhsuk-from-breakpoint(${value})} {
          color: red;
        }
      }
    `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
        @media (min-width: ${expected}) {
          .foo {
            color: red;
          }
        }
      `
      })
    }
  )

  it('allows you to target min-width using a predefined breakpoint', async () => {
    const sass = outdent`
      ${sassBootstrap}

      .foo {
        @media #{nhsuk-from-breakpoint(mobile)} {
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
})

describe('@function nhsuk-until-breakpoint', () => {
  it.each([
    {
      value: '20em',
      expected: '20em'
    },
    {
      value: '20px',
      expected: '1.25em'
    },
    {
      value: '20',
      expected: '1.25em'
    },
    {
      value: '20rem',
      expected: '20rem'
    }
  ])(
    'allows you to target max-width using a numeric value: $value',
    async ({ value, expected }) => {
      const sass = outdent`
      ${sassBootstrap}

      .foo {
        @media #{nhsuk-until-breakpoint(${value})} {
          color: red;
        }
      }
    `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: outdent`
        @media (max-width: ${expected}) {
          .foo {
            color: red;
          }
        }
      `
      })
    }
  )

  it('allows you to target max-width using a predefined breakpoint', async () => {
    const sass = outdent`
      ${sassBootstrap}

      .foo {
        @media #{nhsuk-until-breakpoint(mobile)} {
          color: red;
        }
      }
    `

    const results = compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
    })

    await expect(results).resolves.toMatchObject({
      css: outdent`
        @media (max-width: 6.865em) {
          .foo {
            color: red;
          }
        }
      `
    })
  })
})

describe('@mixin nhsuk-media-query', () => {
  it('allows you to target min-width using a numeric value', async () => {
    const sass = outdent`
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
    const sass = outdent`
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
    const sass = outdent`
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
    const sass = outdent`
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
    const sass = outdent`
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
    const sass = outdent`
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
    const sass = outdent`
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
    const sass = outdent`
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
