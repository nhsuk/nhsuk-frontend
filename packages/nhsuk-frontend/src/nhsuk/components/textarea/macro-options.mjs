import { components } from '@nhsuk/frontend-lib'

export const name = 'Textarea'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the textarea. Defaults to the value of `name`.'
  },
  name: {
    type: 'string',
    required: true,
    description:
      'The name of the textarea, which is submitted with the form data.'
  },
  rows: {
    type: 'string',
    required: false,
    description: 'Optional number of textarea rows (default is 5 rows).'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the textarea.'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  label: {
    type: 'object',
    required: true,
    description: 'Options for the label component.',
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
      'Additional options for the form group containing the textarea component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.'
      }
    }
  },
  autocomplete: {
    type: 'string',
    required: false,
    description:
      "autocomplete attribute to identify input purpose, for instance `'postal-code'` or `'username'`."
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the textarea.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the textarea.'
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
      label: {
        text: 'Can you provide more detail?'
      },
      name: 'example'
    },
    screenshot: true
  },
  'with hint': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      },
      id: 'with-hint',
      name: 'example'
    }
  },
  'with label as page heading': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'page-heading',
      name: 'example'
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      errorMessage: {
        text: 'You must provide an explanation'
      },
      id: 'with-error-message',
      name: 'example'
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-error-message'
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      },
      errorMessage: {
        text: 'You must provide an explanation'
      },
      id: 'with-hint-error',
      name: 'example'
    }
  },
  'with autocomplete attribute': {
    context: {
      label: {
        text: 'Full address'
      },
      id: 'with-autocomplete-attribute',
      name: 'example',
      autocomplete: 'street-address'
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
