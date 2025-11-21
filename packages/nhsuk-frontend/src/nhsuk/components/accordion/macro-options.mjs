import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Accordion'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: true,
    description:
      'Must be unique across the domain of your service if `rememberExpanded` is `true` (as the expanded state of individual instances of the component persists across page loads using [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)). Used as an `id` in the HTML for the accordion as a whole, and also as a prefix for the `id`s of the section contents and the buttons that open them, so that those `id`s can be the target of `aria-control` attributes.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Heading level, from `1` to `6`. Default is `2`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the accordion.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the accordion.'
  },
  rememberExpanded: {
    type: 'boolean',
    required: false,
    description:
      'Whether the expanded/collapsed state of the accordion should be saved when a user leaves the page and restored when they return. Default is `true`.'
  },
  hideAllSectionsText: {
    type: 'string',
    required: false,
    description:
      "The text content of the 'Hide all sections' button at the top of the accordion when all sections are expanded."
  },
  hideSectionText: {
    type: 'string',
    required: false,
    description:
      "The text content of the 'Hide' button within each section of the accordion, which is visible when the section is expanded."
  },
  hideSectionAriaLabelText: {
    type: 'string',
    required: false,
    description:
      'Text made available to assistive technologies, like screen-readers, as the final part of the toggle\'s accessible name when the section is expanded. Defaults to `"Hide this section"`.'
  },
  showAllSectionsText: {
    type: 'string',
    required: false,
    description:
      "The text content of the 'Show all sections' button at the top of the accordion when at least one section is collapsed."
  },
  showSectionText: {
    type: 'string',
    required: false,
    description:
      "The text content of the 'Show' button within each section of the accordion, which is visible when the section is collapsed."
  },
  showSectionAriaLabelText: {
    type: 'string',
    required: false,
    description:
      'Text made available to assistive technologies, like screen-readers, as the final part of the toggle\'s accessible name when the section is collapsed. Defaults to `"Show this section"`.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The sections within the accordion.',
    params: {
      heading: {
        type: 'object',
        required: true,
        description: 'The heading of each accordion section.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. The heading text of each section. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. The heading HTML content of each section. The header is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      summary: {
        type: 'object',
        required: false,
        description: 'The summary line of each accordion section.',
        params: {
          text: {
            type: 'string',
            required: false,
            description:
              'The summary line text content of each section. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: false,
            description:
              'The summary line HTML content of each section. The summary line is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      content: {
        type: 'object',
        required: true,
        description: 'The content of each accordion section.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. The text content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. The HTML content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      expanded: {
        type: 'boolean',
        required: false,
        description:
          'Sets whether the section should be expanded when the page loads for the first time. Defaults to `false`.'
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
      id: 'default-example',
      items: [
        {
          heading: {
            text: 'Section A'
          },
          content: {
            text: 'We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.'
          }
        },
        {
          heading: {
            text: 'Section B'
          },
          content: {
            html: outdent`
              <ul class="nhsuk-list nhsuk-list--bullet">
                <li>Example item 2</li>
              </ul>
            `
          }
        }
      ]
    },
    screenshot: true
  },
  'with additional descriptions': {
    context: {
      id: 'with-descriptions',
      items: [
        {
          heading: {
            text: 'Test'
          },
          summary: {
            text: 'Additional description'
          },
          content: {
            html: outdent`
              <p class="nhsuk-body">
                We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
              </p>
              <ul class="nhsuk-list nhsuk-list--bullet">
                <li>Example item 1</li>
              </ul>
            `
          }
        },
        {
          heading: {
            text: 'Test 2'
          },
          summary: {
            html: '<span class="nhsuk-u-font-weight-normal">Additional description (wrapped in span)</span>'
          },
          content: {
            html: outdent`
              <ul class="nhsuk-list nhsuk-list--bullet">
                <li>Example item 2</li>
              </ul>
            `
          }
        }
      ]
    }
  },
  'with long content and description': {
    context: {
      id: 'with-long-content-and-description',
      items: [
        {
          heading: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis tortor porttitor.'
          },
          summary: {
            text: 'Etiam diam dui, tempus ut pharetra in, aliquet non dui. Nunc pulvinar maximus tortor, ac finibus augue congue vitae. Donec sed cursus lorem.'
          },
          content: {
            html: outdent`
              <ul class="nhsuk-list nhsuk-list--bullet">
                <li>Example item 1</li>
              </ul>
            `
          }
        },
        {
          heading: {
            text: 'Praesent faucibus leo feugiat libero pharetra lacinia. Aliquam aliquet ante vitae mollis vestibulum.'
          },
          summary: {
            html: '<span class="nhsuk-u-font-weight-normal">Maecenas nec <abbr>est</abbr> sapien. Etiam varius luctus mauris non porttitor.</span>'
          },
          content: {
            html: outdent`
              <ul class="nhsuk-list nhsuk-list--bullet">
                <li>Example item 2</li>
              </ul>
            `
          }
        }
      ]
    }
  },
  'with all sections already open': {
    context: {
      id: 'all-sections-open-example',
      items: [
        {
          heading: {
            text: 'Section A'
          },
          expanded: true,
          content: {
            html: outdent`
              <ul class="nhsuk-list nhsuk-list--bullet">
                <li>Example item 1</li>
              </ul>
            `
          }
        },
        {
          heading: {
            text: 'Emergency and urgent care'
          },
          expanded: true,
          content: {
            html: outdent`
              <ul class="nhsuk-list nhsuk-list--bullet">
                <li>Example item 2</li>
              </ul>
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
