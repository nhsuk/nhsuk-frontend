import { outdent } from 'outdent'
import { compileStringAsync, sassNull } from 'sass-embedded'

describe('Breakpoints settings', () => {
  /** @type {Logger} */
  let logger = {}

  beforeEach(() => {
    // Create a mock warn function that we can use to override the native @warn
    // function, that we can make assertions about post-render.
    logger.warn = jest.fn().mockReturnValue(sassNull)
  })

  describe('$nhsuk-show-breakpoints', () => {
    it('throws a deprecation warning if set to `true`', async () => {
      const sass = outdent`
        @use "core/settings/breakpoints" as * with (
          $nhsuk-show-breakpoints: true
        );
      `

      await compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        'The `$nhsuk-show-breakpoints` variable is deprecated and is non-operational. It will be removed in the next major version.  To silence this warning, update $nhsuk-suppressed-warnings with key: "nhsuk-show-breakpoints"',
        expect.anything()
      )
    })
  })
})

/**
 * @import { Logger } from 'sass-embedded'
 */
