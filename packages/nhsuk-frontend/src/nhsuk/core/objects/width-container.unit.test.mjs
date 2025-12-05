import { outdent } from 'outdent'
import { compileStringAsync } from 'sass-embedded'

describe('Page width container', () => {
  const sassModules = outdent`
    @use "core/objects/width-container" as *;
  `

  describe('@mixin nhsuk-width-container', () => {
    it('allows different widths to be specified using $width', async () => {
      const sass = outdent`
        ${sassModules}

        .app-width-container--wide {
          @include nhsuk-width-container(1200px);
        }
      `

      const results = compileStringAsync(sass, {
        loadPaths: ['packages/nhsuk-frontend/src/nhsuk']
      })

      await expect(results).resolves.toMatchObject({
        css: expect.stringContaining(outdent`
          .app-width-container--wide {
            max-width: 1200px;
            margin-right: 16px;
            margin-left: 16px;
          }
          @supports (margin: max(calc(0px))) {
            .app-width-container--wide {
              margin-right: max(16px, calc(16px + env(safe-area-inset-right)));
              margin-left: max(16px, calc(16px + env(safe-area-inset-left)));
            }
          }
          @media (min-width: 40.0625em) {
            .app-width-container--wide {
              margin-right: 32px;
              margin-left: 32px;
            }
            @supports (margin: max(calc(0px))) {
              .app-width-container--wide {
                margin-right: max(32px, calc(16px + env(safe-area-inset-right)));
                margin-left: max(32px, calc(16px + env(safe-area-inset-left)));
              }
            }
          }
          @media (min-width: 1264px) {
            .app-width-container--wide {
              margin-right: auto;
              margin-left: auto;
            }
            @supports (margin: max(calc(0px))) {
              .app-width-container--wide {
                margin-right: auto;
                margin-left: auto;
              }
            }
          }
        `)
      })
    })
  })
})
