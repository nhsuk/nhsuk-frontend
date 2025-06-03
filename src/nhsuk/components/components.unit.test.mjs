import { compileStringAsync } from 'sass-embedded'

describe('Components', () => {
  describe('importing using index file', () => {
    it('forwards all components', async () => {
      const sass = `
        @forward "components";
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      await expect(results).resolves.not.toThrow()
    })
  })

  describe('importing using legacy paths', () => {
    it('forwards all components', async () => {
      const sass = `
        @forward "components/action-link/action-link";
        @forward "components/back-link/back-link";
        @forward "components/breadcrumb/breadcrumb";
        @forward "components/button/button";
        @forward "components/card/card";
        @forward "components/contents-list/contents-list";
        @forward "components/date-input/date-input";
        @forward "components/details/details";
        @forward "components/do-dont-list/do-dont-list";
        @forward "components/error-message/error-message";
        @forward "components/error-summary/error-summary";
        @forward "components/fieldset/fieldset";
        @forward "components/footer/footer";
        @forward "components/header/header";
        @forward "components/hero/hero";
        @forward "components/hint/hint";
        @forward "components/images/images";
        @forward "components/input/input";
        @forward "components/inset-text/inset-text";
        @forward "components/label/label";
        @forward "components/pagination/pagination";
        @forward "components/panel/panel";
        @forward "components/checkboxes/checkboxes";
        @forward "components/radios/radios";
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
        loadPaths: ['packages/nhsuk-frontend/src']
      })

      await expect(results).resolves.not.toThrow()
    })
  })
})
