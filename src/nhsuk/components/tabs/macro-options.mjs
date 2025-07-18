import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Tabs'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description:
      'This is used for the main component and to compose id attribute for each item.'
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'String to prefix id for each tab item if no id is specified on each item.'
  },
  title: {
    type: 'string',
    required: false,
    description: 'Title for the tabs table of contents.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of tab items.',
    params: {
      id: {
        type: 'string',
        required: true,
        description:
          'Specific id attribute for the tab item. If omitted, then idPrefix string is required instead.'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The text label of a tab item.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the tab.'
      },
      panel: {
        type: 'object',
        required: true,
        description: 'Content for the panel',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Specific id attribute for the tab item. If omitted, then idPrefix string is required instead.'
          },
          html: {
            type: 'string',
            required: true,
            description: 'The title of the panel.'
          },
          attributes: {
            type: 'object',
            required: false,
            description: 'The body of the panel.'
          }
        }
      }
    }
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      items: [
        {
          label: 'Tab one',
          id: 'tab-one',
          panel: {
            html: outdent`
              <h2>Tab one content</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            `
          }
        },
        {
          label: 'Tab two',
          id: 'tab-two',
          panel: {
            html: outdent`
              <h2>Tab two content</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            `
          }
        },
        {
          label: 'Tab three',
          id: 'tab-three',
          panel: {
            html: outdent`
              <h2>Tab three content</h2>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            `
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with anchor in panel': {
    context: {
      items: [
        {
          label: 'Tab one',
          id: 'tab-one',
          panel: {
            html: outdent`
              <h2>Tab one content</h2>
              <p>Testing that when you click the anchor it moves to the anchor point successfully</p>
              <p><a href="#anchor">Anchor</a></p>
              <p><a id="anchor" tabindex="0">Anchor Point</a></p>
            `
          }
        },
        {
          label: 'Tab two',
          id: 'tab-two',
          panel: {
            html: outdent`
              <h2>Tab two content</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            `
          }
        },
        {
          label: 'Tab three',
          id: 'tab-three',
          panel: {
            html: outdent`
              <h2>Tab three content</h2>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            `
          }
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
