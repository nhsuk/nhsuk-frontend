import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Details'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  summaryText: {
    type: 'string',
    required: true,
    description:
      'If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored.'
  },
  summaryHtml: {
    type: 'string',
    required: true,
    description:
      'If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.'
  },
  id: {
    type: 'string',
    required: false,
    description: 'Id to add to the details element.'
  },
  open: {
    type: 'boolean',
    required: false,
    description: 'If true, details element will be expanded.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the details element.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the details element.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      summaryText: 'Where can I find my NHS number?'
    },
    callBlock: outdent`
      <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
      <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
        <li>your NHS medical card</li>
      </ul>
      <p>Ask your GP practice for help if you can't find your NHS number.</p>
    `
  },
  expander: {
    context: {
      summaryText: 'Opening times',
      classes: 'nhsuk-expander'
    },
    callBlock: outdent`
      ${components.render('tables', {
        context: {
          firstCellIsHeader: true,
          head: [
            {
              text: 'Day of the week'
            },
            {
              text: 'Opening hours'
            }
          ],
          rows: [
            [
              {
                text: 'Monday'
              },
              {
                text: '9am to 6pm'
              }
            ],
            [
              {
                text: 'Tuesday'
              },
              {
                text: '9am to 6pm'
              }
            ],
            [
              {
                text: 'Wednesday'
              },
              {
                text: '9am to 6pm'
              }
            ],
            [
              {
                text: 'Thursday'
              },
              {
                text: '9am to 6pm'
              }
            ],
            [
              {
                text: 'Friday'
              },
              {
                text: '9am to 6pm'
              }
            ],
            [
              {
                text: 'Saturday'
              },
              {
                text: '9am to 1pm'
              }
            ],
            [
              {
                text: 'Sunday'
              },
              {
                text: 'Closed'
              }
            ]
          ]
        }
      })}
    `
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
