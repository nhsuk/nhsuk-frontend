import { outdent } from 'outdent'
import { compileStringAsync, sassNull } from 'sass-embedded'

describe('Mixins', () => {
  const sassModules = outdent`
    @use "core/settings/colours-applied" as *;
    @use "core/tools/mixins" as *;
  `

  /** @type {Logger} */
  let logger = {}

  beforeEach(() => {
    // Create a mock warn function that we can use to override the native @warn
    // function, that we can make assertions about post-render.
    logger.warn = jest.fn().mockReturnValue(sassNull)
  })

  describe('@mixin clearfix', () => {
    it('throws a deprecation warning if clearfix is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include clearfix;
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'clearfix is deprecated. Use nhsuk-clearfix instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "clearfix"',
        expect.anything()
      )
    })
  })

  describe('@mixin reading-width', () => {
    it('throws a deprecation warning if reading-width is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include reading-width;
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'reading-width is deprecated. Use nhsuk-reading-width instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "reading-width"',
        expect.anything()
      )
    })
  })

  describe('@mixin visually-hidden', () => {
    it('throws a deprecation warning if visually-hidden is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include visually-hidden;
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'visually-hidden is deprecated. Use nhsuk-visually-hidden instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "visually-hidden"',
        expect.anything()
      )
    })
  })

  describe('@mixin visually-hidden-focusable', () => {
    it('throws a deprecation warning if visually-hidden-focusable is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include visually-hidden-focusable;
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'visually-hidden-focusable is deprecated. Use nhsuk-visually-hidden-focusable instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "visually-hidden-focusable"',
        expect.anything()
      )
    })
  })

  describe('@mixin visually-shown', () => {
    it('throws a deprecation warning if visually-shown is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include visually-shown;
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'visually-shown is deprecated. Use @media queries to apply `visually-hidden` instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "visually-shown"',
        expect.anything()
      )
    })
  })

  describe('@mixin top-and-bottom', () => {
    it('throws a deprecation warning if top-and-bottom is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include top-and-bottom;
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'top-and-bottom is deprecated. Use nhsuk-top-and-bottom instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "top-and-bottom"',
        expect.anything()
      )
    })
  })

  describe('@mixin panel', () => {
    it('throws a deprecation warning if panel is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include panel($nhsuk-card-background-colour, $nhsuk-text-colour);
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'panel is deprecated. Use nhsuk-panel instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "panel"',
        expect.anything()
      )
    })
  })

  describe('@mixin heading-label', () => {
    it('throws a deprecation warning if heading-label is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include heading-label($nhsuk-brand-colour, $nhsuk-reverse-text-colour);
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'heading-label is deprecated. Use nhsuk-heading-label instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "heading-label"',
        expect.anything()
      )
    })
  })

  describe('@mixin care-card', () => {
    it('throws a deprecation warning if care-card is used', async () => {
      const sass = outdent`
        ${sassModules}

        .foo {
          @include care-card($nhsuk-brand-colour, $nhsuk-reverse-text-colour, 4px);
        }
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'care-card is deprecated. Use nhsuk-care-card instead. To silence this warning, update $nhsuk-suppressed-warnings with key: "care-card"',
        expect.anything()
      )
    })
  })

  describe('@mixin print-colour (and aliases)', () => {
    it.each(['print-color', 'nhsuk-print-color', 'nhsuk-print-colour'])(
      'throws a deprecation warning if %s is used',
      async (mixin) => {
        const sass = outdent`
        ${sassModules}

        .foo {
          @include ${mixin};
        }
      `

        await compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
          logger
        })

        // Expect our mocked @warn function to have been called once with a single
        // argument, which should be the deprecation notice
        expect(logger.warn).toHaveBeenCalledWith(
          `${mixin} is deprecated and will be removed in a future release. To silence this warning, update $nhsuk-suppressed-warnings with key: "${mixin}"`,
          expect.anything()
        )

        expect(logger.warn).toHaveBeenCalledTimes(1)
      }
    )
  })

  describe('@mixin print-hide (and aliases)', () => {
    it.each(['print-hide', 'nhsuk-print-hide'])(
      'throws a deprecation warning if %s is used',
      async (mixin) => {
        const sass = outdent`
        ${sassModules}

        .foo {
          @include ${mixin};
        }
      `

        await compileStringAsync(sass, {
          loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
          logger
        })

        // Expect our mocked @warn function to have been called once with a single
        // argument, which should be the deprecation notice
        expect(logger.warn).toHaveBeenCalledWith(
          `${mixin} is deprecated and will be removed in a future release. To silence this warning, update $nhsuk-suppressed-warnings with key: "${mixin}"`,
          expect.anything()
        )

        expect(logger.warn).toHaveBeenCalledTimes(1)
      }
    )
  })
})

/**
 * @import { Logger } from 'sass-embedded'
 */
