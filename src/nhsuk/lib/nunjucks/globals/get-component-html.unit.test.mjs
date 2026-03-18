import { outdent } from 'outdent'

import { env } from '../environment.mjs'

import { getComponentHTML } from './get-component-html.mjs'

describe('Nunjucks global: getComponentHTML', () => {
  const options = /** @type {MacroRenderOptions} */ ({
    context: {
      text: 'Save and continue',
      classes: 'nhsuk-button--small'
    }
  })

  it('returns HTML for component', () => {
    const htmlCode = getComponentHTML.call({ env }, 'button', options)

    expect(htmlCode).toBe(outdent({ trimTrailingNewline: false })`
      <button class="nhsuk-button nhsuk-button--small" data-module="nhsuk-button" type="submit">
        Save and continue
      </button>
    `)
  })

  it('does not throw without options', () => {
    expect(() => getComponentHTML.call({ env }, 'button')).not.toThrow()
  })
})

/**
 * @import { MacroRenderOptions } from '#lib'
 */
