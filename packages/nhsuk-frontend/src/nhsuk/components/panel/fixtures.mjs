import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      titleText: 'Booking complete',
      text: 'We have sent you a confirmation email'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  interruption: {
    context: {
      titleText: 'Jodie Brown had a COVID-19 vaccine less than 3 months ago',
      titleClasses: 'nhsuk-panel__title--l',
      html: outdent`
        <p>They had a COVID-19 vaccine on 25 September 2025.</p>
        <p>For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.</p>
        <div class="nhsuk-button-group">
          ${components.render('button', {
            context: {
              text: 'Continue anyway',
              classes: 'nhsuk-button--reverse',
              href: '#'
            }
          })}

          <a href="#">Cancel</a>
        </div>
      `,
      classes: 'nhsuk-panel--interruption'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
