const name = 'Tabs';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'This is used for the main component and to compose the `id` attribute for each item.',
    released: '7.0.0'
  },
  idPrefix: {
    type: 'string',
    required: false,
    description: 'String to prefix the `id` for each tab item if no `id` is specified on each item.',
    released: '7.0.0'
  },
  title: {
    type: 'string',
    required: false,
    description: 'Title for the tabs table of contents.',
    released: '7.0.0'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of tab items.',
    released: '7.0.0',
    params: {
      id: {
        type: 'string',
        required: true,
        description: 'Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead.',
        released: '7.0.0'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The text label of a tab item.',
        released: '7.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the tab.',
        released: '7.0.0'
      },
      panel: {
        type: 'object',
        required: true,
        description: 'Content for the panel.',
        released: '7.0.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description: 'Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead.',
            released: '7.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'The title of the panel.',
            released: '7.0.0'
          },
          attributes: {
            type: 'object',
            required: false,
            description: 'The body of the panel.',
            released: '7.0.0'
          }
        }
      }
    }
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

export { name, params };
//# sourceMappingURL=macro-options.mjs.map
