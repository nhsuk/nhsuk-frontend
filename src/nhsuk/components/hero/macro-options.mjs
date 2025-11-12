import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Hero'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the hero.'
  },
  heading: {
    type: 'string',
    required: true,
    description: 'Text heading of the hero.'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description:
      'Optional additional classes to add to heading. Separate each class with a space.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the heading. Defaults to `1`.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire hero component in a `call` block.'
  },
  imageURL: {
    type: 'string',
    required: false,
    description: 'The URL of the image in the hero.'
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the hero container, useful if you want to make the hero fixed width.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the hero.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the hero.'
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
      heading: "We're here for you",
      text: 'Helping you take control of your health and wellbeing.'
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with image': {
    context: {
      imageURL:
        'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with image, content': {
    context: {
      heading: "We're here for you",
      text: 'Helping you take control of your health and wellbeing.',
      imageURL:
        'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with html content': {
    context: {
      heading: 'This is a header for the product or service',
      headingClasses: 'nhsuk-heading-l nhsuk-u-margin-top-5',
      html: outdent`
        <p class="nhsuk-body-l">This is some more content which explains the product or service.</p>
        ${components.render('button', {
          context: {
            text: 'Sign up',
            classes: 'nhsuk-button--reverse',
            href: '#'
          }
        })}
      `
    },
    options: {
      width: false
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
