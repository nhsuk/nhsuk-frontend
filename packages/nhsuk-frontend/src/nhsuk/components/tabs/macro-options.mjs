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
      'This is used for the main component and to compose the `id` attribute for each item.'
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'String to prefix the `id` for each tab item if no `id` is specified on each item.'
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
          'Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead.'
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
        description: 'Content for the panel.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead.'
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
          label: 'Past day',
          id: 'past-day',
          panel: {
            html: components.render('tables', {
              context: {
                caption: 'Past day',
                head: [
                  {
                    text: 'Case manager'
                  },
                  {
                    text: 'Cases opened',
                    format: 'numeric'
                  },
                  {
                    text: 'Cases closed',
                    format: 'numeric'
                  }
                ],
                rows: [
                  [
                    {
                      text: 'David Francis'
                    },
                    {
                      text: '3',
                      format: 'numeric'
                    },
                    {
                      text: '0',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Paul Farmer'
                    },
                    {
                      text: '1',
                      format: 'numeric'
                    },
                    {
                      text: '0',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Rita Patel'
                    },
                    {
                      text: '2',
                      format: 'numeric'
                    },
                    {
                      text: '0',
                      format: 'numeric'
                    }
                  ]
                ]
              }
            })
          }
        },
        {
          label: 'Past week',
          id: 'past-week',
          panel: {
            html: components.render('tables', {
              context: {
                caption: 'Past week',
                head: [
                  {
                    text: 'Case manager'
                  },
                  {
                    text: 'Cases opened',
                    format: 'numeric'
                  },
                  {
                    text: 'Cases closed',
                    format: 'numeric'
                  }
                ],
                rows: [
                  [
                    {
                      text: 'David Francis'
                    },
                    {
                      text: '24',
                      format: 'numeric'
                    },
                    {
                      text: '18',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Paul Farmer'
                    },
                    {
                      text: '16',
                      format: 'numeric'
                    },
                    {
                      text: '20',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Rita Patel'
                    },
                    {
                      text: '24',
                      format: 'numeric'
                    },
                    {
                      text: '27',
                      format: 'numeric'
                    }
                  ]
                ]
              }
            })
          }
        },
        {
          label: 'Past month',
          id: 'past-month',
          panel: {
            html: components.render('tables', {
              context: {
                caption: 'Past month',
                head: [
                  {
                    text: 'Case manager'
                  },
                  {
                    text: 'Cases opened',
                    format: 'numeric'
                  },
                  {
                    text: 'Cases closed',
                    format: 'numeric'
                  }
                ],
                rows: [
                  [
                    {
                      text: 'David Francis'
                    },
                    {
                      text: '98',
                      format: 'numeric'
                    },
                    {
                      text: '95',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Paul Farmer'
                    },
                    {
                      text: '122',
                      format: 'numeric'
                    },
                    {
                      text: '131',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Rita Patel'
                    },
                    {
                      text: '126',
                      format: 'numeric'
                    },
                    {
                      text: '142',
                      format: 'numeric'
                    }
                  ]
                ]
              }
            })
          }
        },
        {
          label: 'Past year',
          id: 'past-year',
          panel: {
            html: components.render('tables', {
              context: {
                caption: 'Past year',
                head: [
                  {
                    text: 'Case manager'
                  },
                  {
                    text: 'Cases opened',
                    format: 'numeric'
                  },
                  {
                    text: 'Cases closed',
                    format: 'numeric'
                  }
                ],
                rows: [
                  [
                    {
                      text: 'David Francis'
                    },
                    {
                      text: '1380',
                      format: 'numeric'
                    },
                    {
                      text: '1472',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Paul Farmer'
                    },
                    {
                      text: '1129',
                      format: 'numeric'
                    },
                    {
                      text: '1083',
                      format: 'numeric'
                    }
                  ],
                  [
                    {
                      text: 'Rita Patel'
                    },
                    {
                      text: '1539',
                      format: 'numeric'
                    },
                    {
                      text: '1265',
                      format: 'numeric'
                    }
                  ]
                ]
              }
            })
          }
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with anchor in panel': {
    context: {
      items: [
        {
          label: 'Tab 1',
          id: 'tab-1',
          panel: {
            html: outdent`
              <h2>Tab 1 content</h2>
              <p>Testing that when you <a href="#anchor">click the link</a> it moves focus.</p>
              <ul>
                <li><a href="#tab-1" id="anchor">Tab panel 1</a></li>
                <li><a href="#tab-2">Tab panel 2</a></li>
                <li><a href="#tab-3">Tab panel 3</a></li>
              </ul>
            `
          }
        },
        {
          label: 'Tab 2',
          id: 'tab-2',
          panel: {
            html: outdent`
              <h2>Tab 2 content</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            `
          }
        },
        {
          label: 'Tab 3',
          id: 'tab-3',
          panel: {
            html: outdent`
              <h2>Tab 3 content</h2>
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
