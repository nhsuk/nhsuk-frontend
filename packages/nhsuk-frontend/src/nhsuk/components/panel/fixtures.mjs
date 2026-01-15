import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      titleText: 'Booking complete',
      text: 'We have sent you a confirmation email'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'interruption': {
    context: {
      titleText: 'Jodie Brown had a COVID-19 vaccine less than 3 months ago',
      titleSize: 'l',
      classes: 'nhsuk-panel--interruption',
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
      `
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'interruption for confirmation to cancel': {
    context: {
      titleText: 'Confirm you want to cancel your hospital appointment',
      titleSize: 'l',
      classes: 'nhsuk-panel--interruption',
      html: outdent`
        <p>You will be able to reschedule your appointment for another time, but this may delay your treatment.</p>
        <p>Cancelling your appointment cannot be undone.</p>
        <div class="nhsuk-button-group">
          ${components.render('button', {
            context: {
              text: 'Cancel appointment',
              classes: 'nhsuk-button--reverse',
              href: '#'
            }
          })}
          <a href="#">Change my weight</a>
        </div>
      `
    }
  },
  'interruption for confirmation to continue': {
    context: {
      titleText: 'Is your weight correct?',
      titleSize: 'l',
      classes: 'nhsuk-panel--interruption',
      html: outdent`
        <p>You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.</p>
        <div class="nhsuk-button-group">
          ${components.render('button', {
            context: {
              text: 'Yes, this is correct',
              classes: 'nhsuk-button--reverse',
              href: '#'
            }
          })}
          <a href="#">Change my weight</a>
        </div>
      `
    }
  },
  'title': {
    context: {
      titleText: 'Booking complete',
      text: 'We have sent you a confirmation email'
    },
    variants: [
      {
        description: 'with size M',
        context: {
          titleSize: 'm'
        }
      },
      {
        description: 'with size L',
        context: {
          titleSize: 'l'
        }
      },
      {
        description: 'with size XL',
        context: {
          titleSize: 'xl'
        }
      }
    ]
  },
  'with title classes and heading level': {
    context: {
      titleText: 'Booking complete',
      titleClasses: 'nhsuk-panel__title--l',
      text: 'We have sent you a confirmation email',
      headingLevel: 2
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
