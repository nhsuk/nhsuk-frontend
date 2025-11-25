import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    callBlock: outdent`
      <p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>
    `,
    screenshot: true
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
