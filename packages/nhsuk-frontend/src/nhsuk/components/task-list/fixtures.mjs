/**
 * Nunjucks macro option examples
 *
 @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      idPrefix: 'your-health',
      items: [
        {
          title: {
            text: 'Exercise'
          },
          href: '#',
          status: {
            text: 'Completed',
            classes: 'nhsuk-task-list__status--completed'
          }
        },
        {
          title: {
            text: 'Personal health'
          },
          href: '#',
          status: {
            text: 'Completed',
            classes: 'nhsuk-task-list__status--completed'
          }
        },
        {
          title: {
            text: 'Family health history'
          },
          hint: {
            text: 'Details of your parents, brothers and sisters'
          },
          href: '#',
          status: {
            tag: {
              text: 'Incomplete',
              classes: 'nhsuk-tag--blue'
            }
          }
        },
        {
          title: {
            text: 'Smoking history'
          },
          href: '#',
          status: {
            tag: {
              text: 'Incomplete',
              classes: 'nhsuk-tag--blue'
            }
          }
        },
        {
          title: {
            text: 'Blood test'
          },
          status: {
            text: 'Cannot start yet',
            classes: 'nhsuk-task-list__status--cannot-start-yet'
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with empty items': {
    context: {
      idPrefix: 'your-health',
      items: [
        {
          title: {
            text: 'Exercise'
          },
          href: '#',
          status: {
            text: 'Completed',
            classes: 'nhsuk-task-list__status--completed'
          }
        },
        {
          title: {
            text: 'Personal health'
          },
          href: '#',
          status: {
            text: 'Completed',
            classes: 'nhsuk-task-list__status--completed'
          }
        },
        false,
        false,
        {
          title: {
            text: 'Blood test'
          },
          href: '#',
          status: {
            tag: {
              text: 'Incomplete',
              classes: 'nhsuk-tag--blue'
            }
          }
        }
      ]
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
