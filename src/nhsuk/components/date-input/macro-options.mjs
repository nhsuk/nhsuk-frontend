import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Date input'

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
  namePrefix: {
    type: 'string',
    required: false,
    description:
      "Optional prefix. This is used to prefix each `item.name` using `'-'`."
  },
  items: {
    type: 'array',
    required: false,
    description: 'An array of input objects with name, value and classes.',
    params: {
      id: {
        type: 'string',
        required: false,
        description:
          'Item-specific id. If provided, it will be used instead of the generated id.'
      },
      name: {
        type: 'string',
        required: true,
        description: 'Item-specific name attribute.'
      },
      label: {
        type: 'string',
        required: false,
        description:
          'Item-specific label text. If provided, this will be used instead of `name` for item label text.'
      },
      inputmode: {
        type: 'string',
        required: false,
        description:
          "Optional value for [the inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). Defaults to `'numeric'`."
      },
      value: {
        type: 'string',
        required: false,
        description: 'Optional initial value of the input.'
      },
      autocomplete: {
        type: 'string',
        required: false,
        description:
          "Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance `'postal-code'` or `'username'`. See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used."
      },
      pattern: {
        type: 'string',
        required: false,
        description:
          'Attribute to [provide a regular expression pattern](https://www.w3.org/TR/html51/sec-forms.html#the-pattern-attribute), used to match allowed character combinations for the input value.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the date input item.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the date input item.'
      }
    }
  },
  fieldset: {
    type: 'object',
    required: false,
    description: 'Options for the fieldset component (for example legend).',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Options for the hint component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the date input component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the date-input container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the date-input container.'
  },
  values: {
    type: 'object',
    required: false,
    description:
      'An optional object use to specify value attributes for the date parts without setting rows.'
  },
  'values.day': {
    type: 'string',
    required: false,
    description: 'Value attribute for the day input.'
  },
  'values.month': {
    type: 'string',
    required: false,
    description: 'Value attribute for the month input.'
  },
  'values.year': {
    type: 'string',
    required: false,
    description: 'Value attribute for the year input.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
