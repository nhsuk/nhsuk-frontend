import { outdent } from 'outdent'

import { env } from '../environment.mjs'

import { getHTMLCode } from './get-html-code.mjs'

describe('Nunjucks global: getHTMLCode', () => {
  const options = /** @type {MacroRenderOptions} */ ({
    context: {
      text: 'Save and continue',
      classes: 'nhsuk-button--small'
    }
  })

  it('returns HTML for component', () => {
    const htmlCode = getHTMLCode.call({ env }, 'button', options)

    expect(htmlCode).toBe(outdent({ trimTrailingNewline: false })`
      <button class="nhsuk-button nhsuk-button--small" data-module="nhsuk-button" type="submit">
        Save and continue
      </button>
    `)
  })
})

/**
 * @import { MacroRenderOptions } from 'nhsuk-frontend/lib'
 */
