import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

import { examples as tablesExamples } from '../tables/fixtures.mjs'

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
      <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
      <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
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
      <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
      <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
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

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
