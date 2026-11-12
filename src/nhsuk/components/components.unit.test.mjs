import { outdent } from 'outdent'
import { compileStringAsync, sassNull } from 'sass-embedded'

describe('Components', () => {
  /** @type {Logger} */
  let logger = {}

  beforeEach(() => {
    // Create a mock warn function that we can use to override the native @warn
    // function, that we can make assertions about post-render.
    logger.warn = jest.fn().mockReturnValue(sassNull)
  })

  describe('importing using index file', () => {
    it('forwards all components', async () => {
      const sass = outdent`
        @forward "components";
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      await expect(results).resolves.not.toThrow()
    })
  })

  describe('importing using legacy paths', () => {
    it('forwards all components', async () => {
      const sass = outdent`
        @forward "components/action-link/action-link";
        @forward "components/back-link/back-link";
        @forward "components/breadcrumb/breadcrumb";
        @forward "components/button/button";
        @forward "components/card/card";
        @forward "components/code/code";
        @forward "components/contents-list/contents-list";
        @forward "components/date-input/date-input";
        @forward "components/details/details";
        @forward "components/do-dont-list/do-dont-list";
        @forward "components/error-message/error-message";
        @forward "components/error-summary/error-summary";
        @forward "components/fieldset/fieldset";
        @forward "components/file-upload/file-upload";
        @forward "components/footer/footer";
        @forward "components/header/header";
        @forward "components/hero/hero";
        @forward "components/hint/hint";
        @forward "components/images/images";
        @forward "components/input/input";
        @forward "components/inset-text/inset-text";
        @forward "components/label/label";
        @forward "components/notification-banner/notification-banner";
        @forward "components/pagination/pagination";
        @forward "components/panel/panel";
        @forward "components/password-input/password-input";
        @forward "components/checkboxes/checkboxes";
        @forward "components/radios/radios";
        @forward "components/scroll/scroll";
        @forward "components/search-input/search-input";
        @forward "components/select/select";
        @forward "components/skip-link/skip-link";
        @forward "components/summary-list/summary-list";
        @forward "components/tables/tables";
        @forward "components/tag/tag";
        @forward "components/task-list/task-list";
        @forward "components/textarea/textarea";
        @forward "components/warning-callout/warning-callout";
        @forward "components/character-count/character-count";
        @forward "components/tabs/tabs";
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
        logger
      })

      await expect(results).resolves.not.toThrow()

      // Expect our mocked @warn function to have been called once with a single
      // argument, which should be the deprecation notice
      expect(logger.warn).toHaveBeenCalledWith(
        "Importing using 'components/warning-callout' is deprecated. Update your import statement to import 'components/card'. To silence this warning, update $nhsuk-suppressed-warnings with key: \"import-using-warning-callout\"",
        expect.anything()
      )

      expect(logger.warn).toHaveBeenCalledTimes(1)
    })
  })
})

/**
 * @import { Logger } from 'sass-embedded'
 */
