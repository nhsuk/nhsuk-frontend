import { outdent } from 'outdent'

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

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
