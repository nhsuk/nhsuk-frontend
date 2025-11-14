import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

import { examples as tablesExamples } from '../tables/macro-options.mjs'

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
    description: 'The `id` to add to the details element.'
  },
  open: {
    type: 'boolean',
    required: false,
    description: 'If `true`, details element will be expanded.'
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
  'default': {
    context: {
      summaryText: 'How to find your NHS number'
    },
    callBlock: outdent`
      <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
      <p>You can find your NHS number by logging in to a GP online service or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you can't find your NHS number.</p>
    `,
    screenshot: {
      states: ['click'],
      selector: '.nhsuk-details__summary'
    }
  },
  'open': {
    context: {
      summaryText: 'How to find your NHS number',
      open: true
    },
    callBlock: outdent`
      <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
      <p>You can find your NHS number by logging in to a GP online service or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you can't find your NHS number.</p>
    `
  },
  'expander': {
    context: {
      summaryText: 'Opening times',
      classes: 'nhsuk-expander'
    },
    callBlock: outdent`
      ${components.render('tables', tablesExamples['with first cell as header'])}
    `,
    screenshot: {
      states: ['click'],
      selector: '.nhsuk-details__summary'
    }
  },
  'expander open': {
    context: {
      summaryText: 'Opening times',
      classes: 'nhsuk-expander',
      open: true
    },
    callBlock: outdent`
      ${components.render('tables', tablesExamples['with first cell as header'])}
    `
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
